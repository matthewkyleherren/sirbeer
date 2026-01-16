#!/bin/bash

# List of pages to fix (excluding downloaded_resources subdirectories)
PAGES=(
  "/Users/m/bbbe/collider_v2/pages/referral/index.html"
  "/Users/m/bbbe/collider_v2/pages/contact/index.html"
  "/Users/m/bbbe/collider_v2/pages/beer/index.html"
  "/Users/m/bbbe/collider_v2/pages/privacy-policy/index.html"
  "/Users/m/bbbe/collider_v2/pages/adaptogens/index.html"
  "/Users/m/bbbe/collider_v2/pages/terms-conditions/index.html"
  "/Users/m/bbbe/collider_v2/pages/mission/index.html"
  "/Users/m/bbbe/collider_v2/pages/careers/index.html"
  "/Users/m/bbbe/collider_v2/pages/faqs/index.html"
  "/Users/m/bbbe/collider_v2/pages/returns/index.html"
)

for PAGE in "${PAGES[@]}"; do
  echo "Fixing: $PAGE"
  
  # Create backup
  cp "$PAGE" "$PAGE.fix-backup"
  
  # Fix SVG xmlns
  sed -i '' 's|http:downloaded_resources/w3_org/2000_svg.svg|http://www.w3.org/2000/svg|g' "$PAGE"
  
  # Fix script loading - replace preload with actual script tags
  sed -i '' 's|<link rel="preload" href="downloaded_resources/cdn_jsdelivr_net/npm_select2@4.1.0-rc.0_dist_js_select2.min.js" as="script">|<script src="../../downloaded_resources/cdn_jsdelivr_net/npm_select2@4.1.0-rc.0_dist_js_select2.min.js"></script>|g' "$PAGE"
  
  sed -i '' 's|<link rel="preload" href="downloaded_resources/cdn_jsdelivr_net/npm_bootstrap@5.3.2_dist_js_bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous" as="script">|<script src="../../downloaded_resources/cdn_jsdelivr_net/npm_bootstrap@5.3.2_dist_js_bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>|g' "$PAGE"
  
  sed -i '' 's|<link rel="preload" href="downloaded_resources/cdn_jsdelivr_net/npm_slick-carousel@1.8.1_slick_slick.js" as="script">|<script src="../../downloaded_resources/code_jquery_com/jquery-3.7.1.js"></script>\n<script src="../../downloaded_resources/cdn_jsdelivr_net/npm_slick-carousel@1.8.1_slick_slick.js"></script>|g' "$PAGE"
  
  sed -i '' 's|<link rel="preload" href="downloaded_resources/cdnjs_cloudflare_com/ajax_libs_gsap_1.19.1_TweenMax.min.js" as="script">|<script src="../../downloaded_resources/cdnjs_cloudflare_com/ajax_libs_gsap_3.12.2_gsap.min.js"></script>\n<script src="../../downloaded_resources/cdnjs_cloudflare_com/ajax_libs_gsap_3.12.2_ScrollTrigger.min.js"></script>|g' "$PAGE"
  
  sed -i '' 's|<link rel="preload" href="downloaded_resources/cdn_jsdelivr_net/gh_mcstudios_glightbox_dist_js_glightbox.min.js" as="script">|<script src="../../downloaded_resources/cdn_jsdelivr_net/gh_mcstudios_glightbox_dist_js_glightbox.min.js"></script>|g' "$PAGE"
  
  sed -i '' 's|<link rel="preload" href="https://kit.fontawesome.com/5ea815c1d0.js" as="script">||g' "$PAGE"
  
  sed -i '' 's|<link rel="preload" href="cdn/shop/t/37/assets/splide.min.js?v=3374053192410377001763458658" as="script">|<script src="../../cdn/shop/t/37/assets/splide.min.js?v=3374053192410377001763458658"></script>\n<script src="../../cdn/shop/t/37/assets/aos.js"></script>\n<script src="../../js/shp-custom.js"></script>\n<script src="../../js/scripts.js"></script>|g' "$PAGE"
  
  echo "Fixed: $PAGE"
done

echo "All pages fixed!"
