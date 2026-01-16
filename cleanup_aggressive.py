#!/usr/bin/env python3
"""
Aggressive cleanup of embedded tracking, analytics, and web pixels
"""

import re
import sys

def aggressive_cleanup(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    changes = []
    
    # 1. Remove web pixels manager and all analytics
    pixels_patterns = [
        (r'/\* MedusaJS web-pixels-manager[^*]*\*/(.*?)(?=<script|</head)', 'Web Pixels Manager'),
        (r'window\.MedusaStoreAnalytics\s*=.*?;', 'Shopify Analytics'),
        (r'<script[^>]*MedusaJS-features[^>]*>.*?</script>', 'Shopify Features (contains analytics beta)'),
    ]
    
    for pattern, name in pixels_patterns:
        before = content
        content = re.sub(pattern, '', content, flags=re.DOTALL)
        if content != before:
            changes.append(f"Removed {name}")
    
    # 2. Remove inline analytics initialization scripts
    inline_patterns = [
        # Clarity (any remaining)
        (r'\)\(window,\s*document,\s*"clarity"[^)]*\);?', 'Clarity inline init'),
        
        # GTM/Stape
        (r'<script[^>]*gtm[^>]*>.*?</script>', 'Google Tag Manager'),
        (r'<script[^>]*stape[^>]*>.*?</script>', 'Stape (GTM proxy)'),
        
        # Microsoft Clarity
        (r'<script[^>]*clarity[^>]*>.*?</script>', 'Microsoft Clarity'),
        
        # Klar Pixel
        (r'<script[^>]*klar[^>]*>.*?</script>', 'Klar Pixel'),
        
        # Monorail
        (r'https?://monorail-edge\.[^"\']*', '#', 'Monorail endpoint'),
    ]
    
    for pattern, name, *extra in inline_patterns:
        before = content
        content = re.sub(pattern, extra[0] if extra else '', content, flags=re.DOTALL | re.IGNORECASE)
        if content != before:
            changes.append(f"Removed {name}")
    
    # 3. Remove performance monitoring
    content = re.sub(
        r'window\.performance\s*&&\s*window\.performance\.mark.*?;',
        '',
        content
    )
    changes.append("Removed performance marks")
    
    # 4. Remove data-src attributes (lazy loaded tracking scripts)
    content = re.sub(r'\s+data-src=', ' disabled-data-src=', content)
    changes.append("Disabled lazy-loaded scripts")
    
    # 5. Remove async tracking scripts
    content = re.sub(
        r'<script[^>]*async[^>]*data-src[^>]*>.*?</script>',
        '',
        content,
        flags=re.DOTALL
    )
    
    # 6. Clean up MedusaJS namespace pollution
    namespace_cleanup = [
        (r'window\.MedusaStorePay\s*=.*?;', 'MedusaStorePay'),
        (r'MedusaJS\.loadFeatures\s*=.*?;', 'loadFeatures'),
        (r'MedusaJS\.autoloadFeatures\s*=.*?;', 'autoloadFeatures'),
    ]
    
    for pattern, name in namespace_cleanup:
        before = content
        content = re.sub(pattern, f'// Removed {name}', content)
        if content != before:
            changes.append(f"Cleaned {name}")
    
    # 7. Remove eval() calls (potential security issues)
    content = re.sub(
        r'<script>eval\(decodeURIComponent\(atob\([^\)]+\)\)\)</script>',
        '<!-- Removed obfuscated eval script -->',
        content
    )
    changes.append("Removed obfuscated eval() scripts")
    
    # 8. Clean up empty lines again
    content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
    
    # Save backup
    if original != content:
        with open(filepath + '.backup-aggressive', 'w', encoding='utf-8') as f:
            f.write(original)
        print(f"✅ Created backup: {filepath}.backup-aggressive")
    
    # Write cleaned content
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    # Report
    lines_removed = len(original.splitlines()) - len(content.splitlines())
    size_before = len(original)
    size_after = len(content)
    size_reduced = size_before - size_after
    
    print(f"\n✅ Aggressively cleaned {filepath}")
    print(f"\n📊 Stats:")
    print(f"  Lines removed: {lines_removed}")
    print(f"  Size reduced: {size_reduced:,} bytes ({size_reduced/1024:.1f} KB)")
    print(f"  Total size: {size_before:,} → {size_after:,} bytes")
    print(f"\n🗑️  Changes made:")
    for change in changes:
        print(f"  ✓ {change}")

if __name__ == '__main__':
    filepath = sys.argv[1] if len(sys.argv) > 1 else 'index.html'
    aggressive_cleanup(filepath)
