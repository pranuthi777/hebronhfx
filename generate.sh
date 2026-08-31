#!/bin/bash
# Generates optimized responsive JPEG variants into images/site/
set -e
SRC="$(dirname "$0")/images/original"
OUT="$(dirname "$0")/images/site"
mkdir -p "$OUT"

gen(){
  local name="$1"
  local max="$2"
  local q="$3"
  local suffix="$4"
  local base="${name%.*}"
  local out="$OUT/${base}${suffix}.jpg"
  if [ -f "$out" ]; then return; fi
  local dim
  dim=$(sips -g pixelWidth -g pixelHeight "$SRC/$name" 2>/dev/null | awk '/pixel/{print $2}')
  local w h
  w=$(echo "$dim" | sed -n 1p)
  h=$(echo "$dim" | sed -n 2p)
  local maxside=$w
  if [ "$h" -gt "$w" ]; then maxside=$h; fi
  if [ "$maxside" -le "$max" ]; then
    cp "$SRC/$name" "$out" 2>/dev/null
  else
    sips -s format jpeg -s formatOptions "$q" -Z "$max" "$SRC/$name" -o "$out" >/dev/null 2>&1
  fi
}
export -f gen
export SRC OUT

for f in "$SRC"/*; do
  name=$(basename "$f")
  echo "$name|xl|2000|66
$name|lg|1280|74
$name|sm|680|70" 
done > /tmp/genjobs.txt

cat /tmp/genjobs.txt | xargs -P 8 -I{} bash -c 'IFS="|" read -r name size max q <<< "{}"; gen "$name" "$max" "$q" "-$size"'

# Logo as PNG (keep transparency) at two sizes
if [ -f "$SRC/logo.png" ]; then
  sips -s format png -Z 512 "$SRC/logo.png" -o "$OUT/logo-512.png" >/dev/null 2>&1
  sips -s format png -Z 256 "$SRC/logo.png" -o "$OUT/logo-256.png" >/dev/null 2>&1
fi

echo "done"
ls -1 "$OUT" | wc -l
du -sh "$OUT"