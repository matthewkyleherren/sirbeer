#!/usr/bin/env python3
"""
Nuclear option - remove ALL remaining analytics, pixels, monorail, trekkie
"""

import re

def nuclear_cleanup(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Remove entire tracking app blocks
    content = re.sub(
        r'<!-- BEGIN app block: MedusaJS://apps/(stape-conversion-tracking|klaviyo-email-marketing-sms|intelligems-a-b-testing)/.*?<!-- END app block -->',
        '',
        content,
        flags=re.DOTALL
    )
    
    # Remove Monorail abandonment tracking
    content = re.sub(
        r'<link href="Monorail endpoint"[^>]*>',
        '',
        content
    )
    
    content = re.sub(
        r'<script>\(function\(\)\{if \("sendBeacon" in navigator.*?}\(\)\);</script>',
        '<!-- Removed: Monorail abandonment tracking -->',
        content,
        flags=re.DOTALL
    )
    
    # Remove web pixels manager (massive block)
    content = re.sub(
        r'<script id="web-pixels-manager-setup">.*?</script>',
        '<!-- Removed: Web Pixels Manager -->',
        content,
        flags=re.DOTALL
    )
    
    # Remove MedusaStoreAnalytics blocks
    content = re.sub(
        r'<script>\s*window\.MedusaStoreAnalytics\.meta.*?</script>',
        '',
        content,
        flags=re.DOTALL
    )
    
    # Remove trekkie analytics (class="analytics")
    content = re.sub(
        r'<script class="analytics">.*?</script>',
        '<!-- Removed: Trekkie analytics -->',
        content,
        flags=re.DOTALL
    )
    
    # Clean up empty lines
    content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
    
    # Backup
    with open(filepath + '.backup-nuclear', 'w', encoding='utf-8') as f:
        f.write(original)
    
    # Write
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    lines_removed = len(original.splitlines()) - len(content.splitlines())
    size_reduced = len(original) - len(content)
    
    print(f"✅ Nuclear cleanup complete!")
    print(f"   Lines removed: {lines_removed}")
    print(f"   Size reduced: {size_reduced:,} bytes ({size_reduced/1024:.1f} KB)")
    print(f"   Backup: {filepath}.backup-nuclear")

if __name__ == '__main__':
    import sys
    filepath = sys.argv[1] if len(sys.argv) > 1 else 'index.html'
    nuclear_cleanup(filepath)
