#!/usr/bin/env python3
"""
Comprehensive fix for all asset paths in HTML
"""
import re
from pathlib import Path

def fix_html_comprehensively(html_path):
    """Fix all resource paths in HTML"""
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print("Fixing paths...")
    
    # Fix downloaded_resources references that don't exist
    # These should point to the actual CDN directories we copied
    content = re.sub(r'downloaded_resources/cdn_jsdelivr_net/', 'cdn.jsdelivr.net/', content)
    content = re.sub(r'downloaded_resources/unpkg_com/', 'unpkg.com/', content)
    content = re.sub(r'downloaded_resources/cdnjs_cloudflare_com/', 'cdnjs.cloudflare.com/', content)
    
    # Fix //www.drinkcollider.com/cdn/shop/t/37/assets/ paths to point to local assets
    content = re.sub(r'//www\.drinkcollider\.com/cdn/shop/t/37/assets/style\.css[^"]*"', 'css/style.css"', content)
    content = re.sub(r'//www\.drinkcollider\.com/cdn/shop/t/37/assets/cw-cart-drawer-styles\.css[^"]*"', 'css/cw-cart-drawer-styles.css"', content)
    content = re.sub(r'//www\.drinkcollider\.com/cdn/shop/t/37/assets/style-add\.css[^"]*"', 'css/style-add.css"', content)
    content = re.sub(r'//www\.drinkcollider\.com/cdn/shop/t/37/assets/aos\.js[^"]*"', 'js/lib/aos.js"', content)
    content = re.sub(r'//www\.drinkcollider\.com/cdn/shop/t/37/assets/scripts\.js[^"]*"', 'js/scripts.js"', content)
    content = re.sub(r'//www\.drinkcollider\.com/cdn/shop/t/37/assets/scripts-add\.js[^"]*"', 'js/scripts-add.js"', content)
    content = re.sub(r'//www\.drinkcollider\.com/cdn/shop/t/37/assets/shp-custom\.js[^"]*"', 'js/shp-custom.js"', content)
    
    # Fix image paths from cdn/shop/files
    content = re.sub(r'//www\.drinkcollider\.com/cdn/shop/files/', 'cdn/shop/files/', content)
    content = re.sub(r'src="cdn/shop/files/', 'src="assets/images/cdn_files/', content)
    content = re.sub(r'href="cdn/shop/files/', 'href="assets/images/cdn_files/', content)
    
    # Fix video paths
    content = re.sub(r'cdn/shop/videos/', 'assets/videos/', content)
    
    # Fix Bootstrap path - it was looking in the wrong place
    content = re.sub(
        r'src="js/lib/bootstrap\.bundle\.min\.js"[^>]*>',
        'src="cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js">',
        content
    )
    
    # Comment out scripts that will never work without Shopify backend
    patterns_to_comment = [
        r'<script[^>]*intelligems[^>]*>.*?</script>',
        r'<script[^>]*judgeme[^>]*extensions[^>]*>.*?</script>',
        r'<script[^>]*consentmo[^>]*>.*?</script>',
        r'<script[^>]*stape[^>]*>.*?</script>',
        r'<script[^>]*shopifycloud[^>]*storefront-forms[^>]*>.*?</script>',
        r'<script[^>]*load_feature[^>]*>.*?</script>',
        r'<script[^>]*shopify_pay[^>]*>.*?</script>',
        r'<script[^>]*component-2\.0\.63[^>]*>.*?</script>',
    ]
    
    for pattern in patterns_to_comment:
        content = re.sub(pattern, lambda m: f'<!-- {m.group(0)} -->', content, flags=re.DOTALL)
    
    # Write back
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Fixed all paths in {html_path}")

if __name__ == '__main__':
    base_dir = Path(__file__).parent
    html_file = base_dir / 'index.html'
    
    if html_file.exists():
        fix_html_comprehensively(html_file)
        print("\n✓ All paths fixed!")
        print("Now test at: http://localhost:9000")
    else:
        print(f"Error: {html_file} not found")
