#!/bin/bash
cd "/Users/m/bbbe/collider_v2/cdn/shop/files"

echo "🔧 Adding proper file extensions..."

# For each file without extension that has a corresponding file with extension
for file in *; do
    # Skip if it already has an extension or has ﹖ in name
    if [[ "$file" == *﹖* ]] || [[ "$file" == *.* ]]; then
        continue
    fi
    
    # Find the matching file with query string that has an extension
    matching=$(ls "${file}﹖"* 2>/dev/null | head -1)
    
    if [ -n "$matching" ]; then
        # Extract extension from the matching file
        ext=$(echo "$matching" | grep -o '\.[a-z]*' | head -1)
        if [ -n "$ext" ]; then
            newname="${file}${ext}"
            if [ ! -f "$newname" ]; then
                cp "$file" "$newname"
                echo "  ✓ $newname"
            fi
        fi
    fi
done

echo "✅ Done!"
