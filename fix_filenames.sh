#!/bin/bash
# Fix filenames with encoded query strings

echo "🔧 Fixing filenames in cdn/shop/files/..."
cd "/Users/m/bbbe/collider_v2/cdn/shop/files"
for file in *﹖*; do
    if [ -f "$file" ]; then
        # Remove everything from ﹖ onwards
        newname=$(echo "$file" | sed 's/﹖.*//')
        if [ ! -f "$newname" ]; then
            cp "$file" "$newname"
            echo "  ✓ $newname"
        fi
    fi
done

echo ""
echo "🔧 Fixing filenames in cdn/shop/t/37/assets/..."
cd "/Users/m/bbbe/collider_v2/cdn/shop/t/37/assets"
for file in *﹖*; do
    if [ -f "$file" ]; then
        newname=$(echo "$file" | sed 's/﹖.*//')
        if [ ! -f "$newname" ]; then
            cp "$file" "$newname"
            echo "  ✓ $newname"
        fi
    fi
done

echo ""
echo "✅ Done! Files normalized."
