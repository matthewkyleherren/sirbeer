#!/usr/bin/env python3
"""
Fix all asset paths in HTML and CSS files for local serving
"""
import re
import os
from pathlib import Path

def fix_html_paths(html_path):
    """Update all paths in HTML file"""
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix CSS includes
    content = re.sub(r'href="[^"]*cdn/shop/t/37/assets/style\?[^"]*"', 'href="css/style.css"', content)
    content = re.sub(r'href="[^"]*cdn/shop/t/37/assets/cw-cart-drawer-styles\?[^"]*"', 'href="css/cw-cart-drawer-styles.css"', content)
    content = re.sub(r'href="[^"]*cdn/shop/t/37/assets/theme_custom[^"]*"', 'href="css/theme_custom.css"', content)
    content = re.sub(r'href="[^"]*cdn/shop/t/37/assets/bundle-builder\?[^"]*"', 'href="css/bundle-builder.css"', content)
    content = re.sub(r'href="[^"]*cdn/shop/t/37/assets/content-stage\?[^"]*"', 'href="css/content-stage.css"', content)
    content = re.sub(r'href="[^"]*cdn/shop/t/37/assets/style-add\?[^"]*"', 'href="css/style-add.css"', content)
    
    # Fix JavaScript includes
    content = re.sub(r'src="[^"]*cdn/shop/t/37/assets/scripts\?[^"]*"', 'src="js/scripts.js"', content)
    content = re.sub(r'src="[^"]*cdn/shop/t/37/assets/shp-custom\?[^"]*"', 'src="js/shp-custom.js"', content)
    content = re.sub(r'src="[^"]*cdn/shop/t/37/assets/scripts-add\?[^"]*"', 'src="js/scripts-add.js"', content)
    content = re.sub(r'src="[^"]*cdn/shop/t/37/assets/aos\?[^"]*"', 'src="js/lib/aos.js"', content)
    content = re.sub(r'src="[^"]*cdn/shop/t/37/assets/splide[^"]*"', 'src="js/lib/splide.min.js"', content)
    
    # Fix library paths
    content = re.sub(r'src="[^"]*jquery[^"]*\.js"', 'src="js/lib/jquery.min.js"', content)
    content = re.sub(r'src="[^"]*bootstrap[^"]*\.js"', 'src="js/lib/bootstrap.bundle.min.js"', content)
    content = re.sub(r'src="[^"]*gsap\.min\.js"', 'src="js/lib/gsap.min.js"', content)
    content = re.sub(r'src="[^"]*ScrollTrigger\.min\.js"', 'src="js/lib/ScrollTrigger.min.js"', content)
    content = re.sub(r'src="[^"]*slick\.js"', 'src="js/lib/slick.js"', content)
    
    # Fix image paths - cdn/shop/files
    content = re.sub(r'(src|href)="[^"]*//www\.drinkcollider\.com/cdn/shop/files/([^"?]+)(\?[^"]*)?', r'\1="assets/images/cdn_files/\2', content)
    content = re.sub(r'(src|href)="[^"]*cdn/shop/files/([^"?]+)(\?[^"]*)?', r'\1="assets/images/cdn_files/\2', content)
    
    # Fix background images in style tags
    content = re.sub(r'url\(["\']?[^"\']*cdn/shop/files/([^"\'?)]+)(\?[^"\')]*)?["\']?\)', r'url(assets/images/cdn_files/\1)', content)
    
    # Fix video paths
    content = re.sub(r'src="[^"]*cdn/shop/videos/([^"]+)"', r'src="assets/videos/\1"', content)
    
    # Fix icon/svg paths
    content = re.sub(r'src="[^"]*cdn/shop/t/37/assets/payments\?[^"]*"', 'src="assets/images/icons/payments.svg"', content)
    
    # Remove Shopify-specific scripts that won't work offline
    # Comment out Shop Pay, analytics, etc.
    content = re.sub(r'(<script[^>]*shop\.app[^>]*>.*?</script>)', r'<!-- \1 -->', content, flags=re.DOTALL)
    content = re.sub(r'(<script[^>]*shopify.*?analytics.*?</script>)', r'<!-- \1 -->', content, flags=re.DOTALL)
    content = re.sub(r'(<script[^>]*klaviyo[^>]*>.*?</script>)', r'<!-- \1 -->', content, flags=re.DOTALL)
    
    # Write back
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Fixed paths in {html_path}")

def fix_css_paths(css_dir):
    """Update all paths in CSS files"""
    css_files = list(Path(css_dir).glob('*.css'))
    
    for css_file in css_files:
        with open(css_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Fix font paths
        content = re.sub(r'url\(["\']?[^"\']*cdn/shop/t/[^/]+/assets/([^"\'?)]+\.woff2?)["\']?\)', r'url(../assets/fonts/\1)', content)
        
        # Fix image paths in CSS
        content = re.sub(r'url\(["\']?[^"\']*cdn/shop/files/([^"\'?)]+)(\?[^"\')]*)?["\']?\)', r'url(../assets/images/cdn_files/\1)', content)
        content = re.sub(r'url\(["\']?[^"\']*cdn/shop/t/37/assets/([^"\'?)]+)(\?[^"\')]*)?["\']?\)', r'url(../assets/images/backgrounds/\1)', content)
        
        # Fix any remaining absolute URLs
        content = re.sub(r'url\(["\']?https?://www\.drinkcollider\.com/cdn/([^"\']+)["\']?\)', r'url(../assets/\1)', content)
        
        with open(css_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed paths in {css_file.name}")

if __name__ == '__main__':
    base_dir = Path(__file__).parent
    
    # Fix HTML
    html_file = base_dir / 'index.html'
    if html_file.exists():
        fix_html_paths(html_file)
    
    # Fix CSS
    css_dir = base_dir / 'css'
    if css_dir.exists():
        fix_css_paths(css_dir)
    
    print("\n✓ All paths fixed!")
    print("Next steps:")
    print("1. Review the changes")
    print("2. Add mock Shopify JavaScript")
    print("3. Test locally: python3 -m http.server 8000")
