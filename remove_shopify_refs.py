#!/usr/bin/env python3
"""
Remove all Shopify references from HTML, CSS, and JS files
"""
import re
import os
from pathlib import Path

def clean_file(file_path):
    """Remove or replace Shopify references in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        original_content = content
        
        # Replace Shopify object references
        content = re.sub(r'window\.Shopify\s*=\s*window\.Shopify\s*\|\|\s*\{\};?', 'window.MedusaStore = window.MedusaStore || {};', content)
        content = re.sub(r'Shopify\.shop\s*=', 'MedusaStore.shop =', content)
        content = re.sub(r'Shopify\.locale\s*=', 'MedusaStore.locale =', content)
        content = re.sub(r'Shopify\.currency\s*=', 'MedusaStore.currency =', content)
        content = re.sub(r'Shopify\.country\s*=', 'MedusaStore.country =', content)
        content = re.sub(r'Shopify\.theme\s*=', 'MedusaStore.theme =', content)
        content = re.sub(r'Shopify\.cdnHost\s*=', 'MedusaStore.cdnHost =', content)
        content = re.sub(r'Shopify\.routes\s*=', 'MedusaStore.routes =', content)
        content = re.sub(r'window\.Shopify', 'window.MedusaStore', content)
        content = re.sub(r'Shopify\.', 'MedusaStore.', content)
        
        # Replace text references
        content = re.sub(r'shopify\.myshopify\.com', 'store.local', content)
        content = re.sub(r'drinkcollider\.myshopify\.com', 'drinkcollider.local', content)
        content = re.sub(r'myshopify\.com', 'store.local', content)
        
        # Replace in comments and strings
        content = re.sub(r'[Ss]hopify', 'MedusaJS', content)
        
        # Replace meta tags
        content = re.sub(r'shopify-digital-wallet', 'store-digital-wallet', content)
        content = re.sub(r'shopify-checkout-api-token', 'store-checkout-api-token', content)
        content = re.sub(r'shopify-features', 'store-features', content)
        
        # Replace URLs containing shopify
        content = re.sub(r'shopifycloud', 'cdn-store', content)
        content = re.sub(r'shopifycdn', 'cdn-store', content)
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def rename_shopify_directories(base_path):
    """Rename directories containing 'shopify' in their name"""
    renamed = []
    for root, dirs, files in os.walk(base_path, topdown=False):
        for dirname in dirs:
            if 'shopify' in dirname.lower():
                old_path = os.path.join(root, dirname)
                new_dirname = dirname.replace('shopify', 'cdn-store').replace('Shopify', 'CDN-Store')
                new_path = os.path.join(root, new_dirname)
                try:
                    os.rename(old_path, new_path)
                    renamed.append((old_path, new_path))
                except Exception as e:
                    print(f"Error renaming {old_path}: {e}")
    return renamed

def process_codebase(base_dir):
    """Process all HTML, CSS, and JS files"""
    base_path = Path(base_dir)
    
    # File extensions to process
    extensions = ['.html', '.css', '.js', '.json']
    
    files_changed = 0
    files_processed = 0
    
    print("Removing Shopify references from files...")
    
    for ext in extensions:
        for file_path in base_path.rglob(f'*{ext}'):
            # Skip backup files and certain directories
            if any(skip in str(file_path) for skip in ['.git', 'node_modules', '_backup']):
                continue
            
            files_processed += 1
            if clean_file(file_path):
                files_changed += 1
                print(f"  ✓ {file_path.relative_to(base_path)}")
    
    print(f"\nProcessed {files_processed} files, modified {files_changed}")
    
    # Rename directories
    print("\nRenaming directories containing 'shopify'...")
    renamed = rename_shopify_directories(base_dir)
    for old, new in renamed:
        print(f"  ✓ {Path(old).name} → {Path(new).name}")
    
    print(f"\nRenamed {len(renamed)} directories")

if __name__ == '__main__':
    base_dir = Path(__file__).parent
    print(f"Processing codebase at: {base_dir}")
    print("=" * 60)
    process_codebase(base_dir)
    print("=" * 60)
    print("\n✓ All Shopify references have been removed!")
    print("Shopify → MedusaJS/MedusaStore")
