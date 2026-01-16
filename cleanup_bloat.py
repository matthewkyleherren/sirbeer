#!/usr/bin/env python3
"""
Remove unnecessary third-party scripts, analytics, payments, and other bloat
from the HTML file to clean it up for local offline use.
"""

import re
import sys

def cleanup_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    changes = []
    
    # 1. Remove analytics scripts
    analytics_patterns = [
        # Google Analytics / Clarity / Hotjar
        (r'<script[^>]*clarity\.ms[^>]*>.*?</script>', 'Clarity Analytics'),
        (r'<script[^>]*hotjar[^>]*>.*?</script>', 'Hotjar'),
        (r'<script[^>]*google-site-verification[^>]*>', 'Google Site Verification'),
        (r'<meta name="google-site-verification"[^>]*>', 'Google Site Verification meta'),
        (r'<meta name="facebook-domain-verification"[^>]*>', 'Facebook Domain Verification'),
        
        # Inline analytics initialization
        (r'\(function\(c,l,a,r,i,t,y\)\{[^}]*clarity[^}]*\}\)\(window[^)]*\);?', 'Clarity inline script'),
        (r'\(function\(h,o,t,j,a,r\)\{[^}]*hotjar[^}]*\}\)\(window[^)]*\);?', 'Hotjar inline script'),
    ]
    
    for pattern, name in analytics_patterns:
        before = content
        content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
        if content != before:
            changes.append(f"Removed {name}")
    
    # 2. Remove payment/checkout related code
    payment_patterns = [
        (r'<script[^>]*MedusaJS-digital-wallet[^>]*>.*?</script>', 'Digital Wallet'),
        (r'<meta[^>]*MedusaJS-digital-wallet[^>]*>', 'Digital Wallet meta'),
        (r'<meta[^>]*MedusaJS-checkout-api-token[^>]*>', 'Checkout API token'),
        (r'<script[^>]*apple-pay-shop-capabilities[^>]*>.*?</script>', 'Apple Pay'),
        (r'<script[^>]*MedusaStorePay[^>]*>.*?</script>', 'Shop Pay'),
        (r'<script[^>]*paypal[^>]*>.*?</script>', 'PayPal'),
        (r'<meta[^>]*in-context-paypal-metadata[^>]*>', 'PayPal metadata'),
        
        # Payment button initialization
        (r'<script[^>]*MedusaJS\.dynamic_checkout[^>]*>.*?</script>', 'Dynamic Checkout'),
        (r'<script[^>]*PaymentButton[^>]*>.*?</script>', 'Payment Buttons'),
        (r'<script[^>]*portableWallets[^>]*>.*?</script>', 'Portable Wallets'),
        (r'<link[^>]*accelerated-checkout[^>]*>', 'Accelerated Checkout styles'),
        (r'<style[^>]*MedusaJS-accelerated-checkout[^>]*>.*?</style>', 'Accelerated Checkout inline styles'),
    ]
    
    for pattern, name in payment_patterns:
        before = content
        content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
        if content != before:
            changes.append(f"Removed {name}")
    
    # 3. Remove Shop App / Shop integration
    shop_patterns = [
        (r'<link[^>]*shop\.app[^>]*>', 'Shop App link'),
        (r'<script[^>]*shop\.app[^>]*>.*?</script>', 'Shop App script'),
        (r'<script[^>]*shop-js-analytics[^>]*>.*?</script>', 'Shop JS Analytics'),
        (r'<script[^>]*shop-js[^>]*modules/v2[^>]*>.*?</script>', 'Shop JS Modules'),
        (r'<script[^>]*SignInWithShop[^>]*>.*?</script>', 'Sign In With Shop'),
        (r'window\.MedusaStore\.featureAssets\[.shop-js.\][^;]*;', 'Shop JS feature assets'),
    ]
    
    for pattern, name in shop_patterns:
        before = content
        content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
        if content != before:
            changes.append(f"Removed {name}")
    
    # 4. Remove external marketing/tracking services
    marketing_patterns = [
        # Superfiliate
        (r'<script[^>]*superfiliate[^>]*>.*?</script>', 'Superfiliate'),
        (r'\(function\(\)[^{]*\{[^}]*superfiliate[^}]*\}\)\(\);?', 'Superfiliate inline'),
        
        # Klaviyo
        (r'<script[^>]*klaviyo[^>]*>.*?</script>', 'Klaviyo'),
        
        # Judge.me reviews (optional - comment if you want to keep reviews)
        (r'<!-- BEGIN app block: [^>]*judge-me[^>]*-->.*?<!-- END app block -->', 'Judge.me Reviews'),
        (r'<script[^>]*jdgm[^>]*>.*?</script>', 'Judge.me scripts'),
        (r'<style[^>]*jdgm[^>]*>.*?</style>', 'Judge.me styles'),
        (r'<link[^>]*judge\.me[^>]*>', 'Judge.me links'),
        (r'<link[^>]*dns-prefetch[^>]*judge\.me[^>]*>', 'Judge.me DNS prefetch'),
        (r'window\.jdgmSettings\s*=\s*\{[^}]*\};?', 'Judge.me settings'),
        
        # Raleon Loyalty
        (r'<!-- BEGIN app block: [^>]*raleon[^>]*-->.*?<!-- END app block -->', 'Raleon Loyalty'),
        (r'<script[^>]*raleon[^>]*>.*?</script>', 'Raleon scripts'),
        
        # Consentmo GDPR
        (r'<!-- BEGIN app block: [^>]*consentmo[^>]*-->.*?<!-- END app block -->', 'Consentmo GDPR'),
        
        # Accentuate
        (r'<!-- BEGIN app block: [^>]*accentuate[^>]*-->.*?<!-- END app block -->', 'Accentuate'),
        
        # Intelligems
        (r'<script[^>]*intelligems[^>]*>.*?</script>', 'Intelligems'),
    ]
    
    for pattern, name in marketing_patterns:
        before = content
        content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
        if content != before:
            changes.append(f"Removed {name}")
    
    # 5. Remove Shopify monitoring/analytics
    shopify_tracking = [
        (r'<script[^>]*monorail[^>]*>.*?</script>', 'Shopify Monorail'),
        (r'window\.MedusaStorePaypalV4VisibilityTracking[^;]*;', 'PayPal tracking'),
        (r'<script[^>]*__st[^>]*>.*?</script>', 'Shopify tracking'),
        (r'<script[^>]*shop-js-analytics[^>]*>.*?</script>', 'Shop JS Analytics'),
    ]
    
    for pattern, name in shopify_tracking:
        before = content
        content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
        if content != before:
            changes.append(f"Removed {name}")
    
    # 6. Remove captcha (hCaptcha)
    captcha_patterns = [
        (r'<script[^>]*captcha-bootstrap[^>]*>.*?</script>', 'Captcha Bootstrap'),
        (r'<script[^>]*hcaptcha[^>]*>.*?</script>', 'hCaptcha'),
        (r'<script[^>]*recaptcha[^>]*>.*?</script>', 'reCaptcha'),
    ]
    
    for pattern, name in captcha_patterns:
        before = content
        content = re.sub(pattern, '', content, flags=re.DOTALL | re.IGNORECASE)
        if content != before:
            changes.append(f"Removed {name}")
    
    # 7. Remove fetch calls to analytics endpoints
    content = re.sub(
        r"fetch\(['\"]/(sf_private_access_tokens|checkouts/internal)[^)]*\)[^;]*;?",
        '',
        content
    )
    
    # 8. Clean up empty script tags and multiple blank lines
    content = re.sub(r'<script[^>]*>\s*</script>', '', content)
    content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
    
    # 9. Remove commented-out disabled scripts (from previous fixes)
    content = re.sub(r'<!-- DISABLED:.*?-->', '', content, flags=re.DOTALL)
    changes.append("Cleaned up disabled comments")
    
    # Save backup
    if original != content:
        with open(filepath + '.backup-bloat', 'w', encoding='utf-8') as f:
            f.write(original)
        print(f"✅ Created backup: {filepath}.backup-bloat")
    
    # Write cleaned content
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    # Report
    lines_removed = len(original.splitlines()) - len(content.splitlines())
    size_before = len(original)
    size_after = len(content)
    size_reduced = size_before - size_after
    
    print(f"\n✅ Cleaned up {filepath}")
    print(f"\n📊 Stats:")
    print(f"  Lines removed: {lines_removed}")
    print(f"  Size reduced: {size_reduced:,} bytes ({size_reduced/1024:.1f} KB)")
    print(f"  Size: {size_before:,} → {size_after:,} bytes")
    print(f"\n🗑️  Removed {len(set(changes))} types of bloat:")
    for change in sorted(set(changes)):
        print(f"  ✓ {change}")
    
    return changes

if __name__ == '__main__':
    filepath = sys.argv[1] if len(sys.argv) > 1 else 'index.html'
    cleanup_html(filepath)
