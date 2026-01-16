#!/usr/bin/env python3
"""
Script to download all external resources from index.html and update links
"""
import re
import os
import urllib.parse
import urllib.request
import urllib.error
from pathlib import Path
from html.parser import HTMLParser
from collections import defaultdict
import ssl

# Disable SSL verification for problematic certificates
ssl._create_default_https_context = ssl._create_unverified_context

class ResourceExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.resources = set()
        self.base_url = "https://www.drinkcollider.com"
        
    def handle_starttag(self, tag, attrs):
        # Attributes that typically contain URLs
        url_attrs = ['src', 'href', 'data-src', 'poster', 'content', 'action']
        
        for attr_name, attr_value in attrs:
            if attr_name.lower() in url_attrs and attr_value:
                # Check if it's an external URL
                if attr_value.startswith('http://') or attr_value.startswith('https://'):
                    # Skip if it's already a local domain (www.drinkcollider.com)
                    if 'www.drinkcollider.com' not in attr_value and 'drinkcollider.com' not in attr_value:
                        self.resources.add(attr_value)
                elif attr_value.startswith('//'):
                    # Protocol-relative URL
                    url = 'https:' + attr_value
                    if 'www.drinkcollider.com' not in url and 'drinkcollider.com' not in url:
                        self.resources.add(url)

def extract_urls_from_html(html_content):
    """Extract all external URLs from HTML content"""
    resources = set()
    
    # Use HTML parser for attributes
    parser = ResourceExtractor()
    parser.feed(html_content)
    resources.update(parser.resources)
    
    # Also use regex to find URLs in JavaScript code and other contexts
    # Pattern to match http:// and https:// URLs
    url_pattern = r'https?://[^\s"\'<>\)]+'
    matches = re.findall(url_pattern, html_content)
    
    for url in matches:
        # Clean up URL (remove trailing punctuation that might not be part of URL)
        url = url.rstrip('.,;:!?)')
        # Skip if it's the local domain
        if 'www.drinkcollider.com' not in url and 'drinkcollider.com' not in url:
            resources.add(url)
    
    # Also find protocol-relative URLs
    protocol_relative_pattern = r'//[^\s"\'<>\)]+'
    matches = re.findall(protocol_relative_pattern, html_content)
    
    for url in matches:
        url = 'https:' + url.rstrip('.,;:!?)')
        if 'www.drinkcollider.com' not in url and 'drinkcollider.com' not in url:
            resources.add(url)
    
    return resources

def sanitize_filename(url):
    """Create a safe filename from URL"""
    # Parse URL
    parsed = urllib.parse.urlparse(url)
    path = parsed.path.strip('/')
    
    # Get domain for directory structure
    domain = parsed.netloc.replace('www.', '').replace('.', '_')
    
    # Create filename from path
    if not path or path == '/':
        filename = 'index.html'
    else:
        # Replace path separators
        filename = path.replace('/', '_')
        # Remove query params from filename (we'll add them to directory)
        if '?' in filename:
            filename = filename.split('?')[0]
    
    # Add extension if missing
    if '.' not in filename:
        # Try to determine from content-type or URL pattern
        if 'css' in url.lower():
            filename += '.css'
        elif 'js' in url.lower() or 'javascript' in url.lower():
            filename += '.js'
        elif 'jpg' in url.lower() or 'jpeg' in url.lower():
            filename += '.jpg'
        elif 'png' in url.lower():
            filename += '.png'
        elif 'svg' in url.lower():
            filename += '.svg'
        elif 'woff' in url.lower():
            filename += '.woff'
        elif 'woff2' in url.lower():
            filename += '.woff2'
        elif 'mp4' in url.lower():
            filename += '.mp4'
        elif 'webm' in url.lower():
            filename += '.webm'
        elif 'mov' in url.lower():
            filename += '.mov'
        else:
            filename += '.html'
    
    return domain, filename

def download_resource(url, base_dir):
    """Download a resource and return the local path"""
    try:
        # Create directory structure
        domain, filename = sanitize_filename(url)
        domain_dir = os.path.join(base_dir, domain)
        os.makedirs(domain_dir, exist_ok=True)
        
        # Handle query parameters in filename
        parsed = urllib.parse.urlparse(url)
        if parsed.query:
            # Create subdirectory for query params
            query_hash = str(hash(parsed.query))[:8]
            file_dir = os.path.join(domain_dir, query_hash)
            os.makedirs(file_dir, exist_ok=True)
            local_path = os.path.join(file_dir, filename)
        else:
            local_path = os.path.join(domain_dir, filename)
        
        # Check if file already exists
        if os.path.exists(local_path):
            print(f"  Already exists: {local_path}")
            return local_path
        
        # Download the resource
        print(f"  Downloading: {url}")
        print(f"    -> {local_path}")
        
        req = urllib.request.Request(url)
        req.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
        
        try:
            with urllib.request.urlopen(req, timeout=30) as response:
                content = response.read()
                
                # Write to file
                with open(local_path, 'wb') as f:
                    f.write(content)
                
                print(f"    ✓ Downloaded {len(content)} bytes")
                return local_path
        except urllib.error.HTTPError as e:
            print(f"    ✗ HTTP Error {e.code}: {e.reason}")
            return None
        except urllib.error.URLError as e:
            print(f"    ✗ URL Error: {e.reason}")
            return None
        except Exception as e:
            print(f"    ✗ Error: {str(e)}")
            return None
            
    except Exception as e:
        print(f"  ✗ Failed to download {url}: {str(e)}")
        return None

def update_html_links(html_content, url_mapping, html_file_path):
    """Update HTML content with local paths"""
    updated_content = html_content
    
    # Get the directory of the HTML file
    html_dir = os.path.dirname(os.path.abspath(html_file_path))
    
    # Sort by length (longest first) to avoid partial replacements
    for old_url, local_path in sorted(url_mapping.items(), key=lambda x: len(x[0]), reverse=True):
        if local_path:
            # Convert absolute path to relative path from HTML file location
            rel_path = os.path.relpath(local_path, html_dir)
            # Normalize path separators for web
            rel_path = rel_path.replace('\\', '/')
            
            # Replace all occurrences (including escaped versions in JS)
            updated_content = updated_content.replace(old_url, rel_path)
            
            # Replace escaped versions in JavaScript strings
            escaped_url = old_url.replace('/', '\\/')
            updated_content = updated_content.replace(escaped_url, rel_path.replace('/', '\\/'))
            
            # Also replace protocol-relative versions
            if old_url.startswith('https://'):
                protocol_relative = old_url.replace('https://', '//')
                updated_content = updated_content.replace(protocol_relative, rel_path)
            elif old_url.startswith('http://'):
                protocol_relative = old_url.replace('http://', '//')
                updated_content = updated_content.replace(protocol_relative, rel_path)
    
    return updated_content

def main():
    import sys
    
    # Get HTML file path from command line argument or use default
    if len(sys.argv) > 1:
        html_file = sys.argv[1]
        if not os.path.isabs(html_file):
            # Make it relative to script directory
            base_dir = os.path.dirname(os.path.abspath(__file__))
            html_file = os.path.join(base_dir, html_file)
    else:
        base_dir = os.path.dirname(os.path.abspath(__file__))
        html_file = os.path.join(base_dir, 'index.html')
    
    base_dir = os.path.dirname(os.path.abspath(html_file))
    # Use project root for downloads (same level as main index.html)
    # Go up from current file until we find the main index.html
    project_root = base_dir
    while project_root:
        if os.path.exists(os.path.join(project_root, 'index.html')):
            break
        parent = os.path.dirname(project_root)
        if parent == project_root:  # Reached filesystem root
            project_root = base_dir  # Fallback to current directory
            break
        project_root = parent
    
    downloads_dir = os.path.join(project_root, 'downloaded_resources')
    
    print(f"Reading {html_file}...")
    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    print("Extracting external URLs...")
    external_urls = extract_urls_from_html(html_content)
    print(f"Found {len(external_urls)} external URLs")
    
    # Create downloads directory
    os.makedirs(downloads_dir, exist_ok=True)
    
    # Download all resources
    url_mapping = {}
    print("\nDownloading resources...")
    for i, url in enumerate(sorted(external_urls), 1):
        print(f"\n[{i}/{len(external_urls)}] {url}")
        local_path = download_resource(url, downloads_dir)
        if local_path:
            url_mapping[url] = local_path
    
    print(f"\n\nDownloaded {len([p for p in url_mapping.values() if p])} resources")
    print(f"Failed to download {len(external_urls) - len([p for p in url_mapping.values() if p])} resources")
    
    # Update HTML file
    print(f"\nUpdating {os.path.basename(html_file)} with local paths...")
    updated_html = update_html_links(html_content, url_mapping, html_file)
    
    # Backup original
    backup_file = html_file + '.backup'
    if not os.path.exists(backup_file):
        print(f"Creating backup: {backup_file}")
        with open(backup_file, 'w', encoding='utf-8') as f:
            f.write(html_content)
    
    # Write updated HTML
    print(f"Writing updated HTML to {html_file}...")
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(updated_html)
    
    print("\n✓ Done!")

if __name__ == '__main__':
    main()

