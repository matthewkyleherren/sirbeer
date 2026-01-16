#!/usr/bin/env python3
"""
Fix critical errors in the HTML file:
1. JavaScript syntax errors
2. Localize external URLs
3. Comment out non-essential third-party scripts
"""

import re
import sys

def fix_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Fix 1: Add MedusaStore definition before it's used (line 154-155)
    content = re.sub(
        r'(<script>var MedusaJS = MedusaJS \|\| {};\n)',
        r'\1MedusaJS.Store = MedusaJS.Store || {};\nvar MedusaStore = MedusaJS.Store;\n',
        content
    )
    
    # Fix 2: Fix the PaymentButton assignment syntax (line 216)
    content = re.sub(
        r'(var MedusaJS=MedusaJS\|\|{};)(MedusaStore\.PaymentButton=MedusaStore\.PaymentButton)',
        r'\1\nif (typeof MedusaStore === "undefined") { var MedusaStore = {}; }\n\2',
        content
    )
    
    # Fix 3: Localize //www.drinkcollider.com URLs
    content = content.replace(
        '//www.drinkcollider.com/cdn/shop/',
        'cdn/shop/'
    )
    
    # Fix 4: Disable external scripts that are causing errors
    # Comment out external tracking/analytics scripts
    external_scripts = [
        'https://www.clarity.ms',
        'https://static.hotjar.com',
        'https://superfiliate-cdn.com',
        'monorail-edge.medusajssvc.com',
    ]
    
    for script_url in external_scripts:
        # Comment out script tags containing these URLs
        content = re.sub(
            rf'(<script[^>]*{re.escape(script_url)}[^>]*>.*?</script>)',
            r'<!-- DISABLED: \1 -->',
            content,
            flags=re.DOTALL | re.IGNORECASE
        )
        # Comment out inline scripts creating elements with these URLs
        content = re.sub(
            rf"(t\.src\s*=\s*['\"]https?://{re.escape(script_url.replace('https://', ''))}[^'\"]*['\"])",
            r'// DISABLED: \1',
            content
        )
    
    # Fix 5: Replace external CDN URLs that haven't been downloaded
    cdn_replacements = [
        ('https://www.drinkcollider.com/cdn/MedusaJScloud/', 'cdn/MedusaJScloud/'),
        ('//www.drinkcollider.com/cdn/MedusaJScloud/', 'cdn/MedusaJScloud/'),
        ('https://githubfix.store.local/', '#'),
        ('https://shop.app', '#'),
    ]
    
    for old_url, new_url in cdn_replacements:
        content = content.replace(old_url, new_url)
    
    # Fix 6: Disable Shop App features that require external services
    content = re.sub(
        r'(window\.MedusaStore\.SignInWithShop\?\.initShopCartSync)',
        r'// DISABLED: \1',
        content
    )
    
    # Fix 7: Comment out failing fetch calls
    content = re.sub(
        r"(fetch\(['\"]/(sf_private_access_tokens|checkouts/internal/preloads\.js)[^)]*\))",
        r'// DISABLED: \1',
        content
    )
    
    # Save backup
    if original != content:
        with open(filepath + '.backup-errors', 'w', encoding='utf-8') as f:
            f.write(original)
        print(f"Created backup: {filepath}.backup-errors")
    
    # Write fixed content
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Fixed {filepath}")
    print("\nChanges made:")
    print("1. Added MedusaStore definition before first use")
    print("2. Fixed MedusaStore.PaymentButton initialization")
    print("3. Localized cdn URLs")
    print("4. Disabled external tracking scripts")
    print("5. Commented out failing API calls")

if __name__ == '__main__':
    filepath = sys.argv[1] if len(sys.argv) > 1 else 'index.html'
    fix_html(filepath)
