#!/usr/bin/env bash
set -e

mkdir -p public/videos

FONT="/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"

render_reel() {
  local img="$1"
  local out="$2"
  local label="$3"
  local title="$4"

  echo "Rendering Reel: $out..."
  ffmpeg -y -loop 1 -i "$img" -t 5 \
    -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,\
zoompan=z='min(zoom+0.0018,1.25)':d=125:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=25,\
drawbox=y=ih-700:color=black@0.65:width=iw:height=700:t=fill,\
drawtext=fontfile='$FONT':text='$label':fontcolor=#d7bb72:fontsize=32:x=80:y=h-500:letter_spacing=4,\
drawtext=fontfile='$FONT':text='$title':fontcolor=white:fontsize=58:x=80:y=h-430:line_spacing=12,\
drawtext=fontfile='$FONT':text='ALLURE HAIR COUTURE | HERMANUS':fontcolor=#a8a29e:fontsize=24:x=80:y=h-220:letter_spacing=3" \
    -c:v libx264 -pix_fmt yuv420p -preset fast -movflags +faststart "$out" 2>/dev/null || \
  ffmpeg -y -loop 1 -i "$img" -t 5 \
    -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,zoompan=z='min(zoom+0.0018,1.25)':d=125:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1080x1920:fps=25" \
    -c:v libx264 -pix_fmt yuv420p -preset fast -movflags +faststart "$out"
}

render_landscape() {
  local img="$1"
  local out="$2"
  local label="$3"
  local title="$4"

  echo "Rendering Landscape: $out..."
  ffmpeg -y -loop 1 -i "$img" -t 5 \
    -vf "scale=1200:630:force_original_aspect_ratio=increase,crop=1200:630,\
zoompan=z='min(zoom+0.0015,1.2)':d=125:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1200x630:fps=25,\
drawbox=y=ih-300:color=black@0.65:width=iw:height=300:t=fill,\
drawtext=fontfile='$FONT':text='$label':fontcolor=#d7bb72:fontsize=22:x=60:y=h-220:letter_spacing=3,\
drawtext=fontfile='$FONT':text='$title':fontcolor=white:fontsize=40:x=60:y=h-175,\
drawtext=fontfile='$FONT':text='ALLURE HAIR COUTURE | HERMANUS':fontcolor=#a8a29e:fontsize=18:x=60:y=h-80:letter_spacing=2" \
    -c:v libx264 -pix_fmt yuv420p -preset fast -movflags +faststart "$out" 2>/dev/null || \
  ffmpeg -y -loop 1 -i "$img" -t 5 \
    -vf "scale=1200:630:force_original_aspect_ratio=increase,crop=1200:630,zoompan=z='min(zoom+0.0015,1.2)':d=125:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1200x630:fps=25" \
    -c:v libx264 -pix_fmt yuv420p -preset fast -movflags +faststart "$out"
}

# November Reels
render_reel "public/media/bridal3.jpg" "public/videos/reel-nov-bridal.mp4" "BRIDAL & EVENTS" "MADE FOR THE MOMENT"
render_reel "public/media/colouring.jpg" "public/videos/reel-nov-colour.mp4" "COLOUR ARTISTRY" "SUMMER LUMINESCENCE"
render_reel "public/media/extensions.jpg" "public/videos/reel-nov-extensions.mp4" "LUXURY EXTENSIONS" "SEAMLESS LENGTH & VOLUME"
render_reel "public/media/hero.jpg" "public/videos/reel-nov-glamour.mp4" "NOVEMBER GLAMOUR" "ALLURE HAIR COUTURE"

# December Reels
render_reel "public/media/bridal5.jpg" "public/videos/reel-dec-festive.mp4" "DECEMBER OPULENCE" "FESTIVE SOIRÉE STYLING"
render_reel "public/media/colouring.jpg" "public/videos/reel-dec-balayage.mp4" "SUN-KISSED BLONDE" "COASTAL SUMMER BALAYAGE"
render_reel "public/media/product1.jpg" "public/videos/reel-dec-voucher.mp4" "THE GIFT OF LUXURY" "HOLIDAY GIFTING & VOUCHERS"
render_reel "public/media/bridal6.jpg" "public/videos/reel-dec-nye.mp4" "NEW YEARS EVE" "HAUTE COIFFURE CELEBRATION"

# November Landscape
render_landscape "public/media/bridal4.jpg" "public/videos/fb-nov-bridal.mp4" "BRIDAL & EVENTS" "MADE FOR THE MOMENT"
render_landscape "public/media/colouring.jpg" "public/videos/fb-nov-colour.mp4" "COLOUR ARTISTRY" "SUMMER LUMINESCENCE"
render_landscape "public/media/staff.jpg" "public/videos/fb-nov-team.mp4" "TEAM SPOTLIGHT" "THE ARTISTS OF ALLURE"
render_landscape "public/media/product1.jpg" "public/videos/fb-nov-gift.mp4" "GIFT VOUCHER" "THE GIFT OF LUXURY"

# December Landscape
render_landscape "public/media/bridal1.jpg" "public/videos/fb-dec-soiree.mp4" "FESTIVE GLAMOUR" "SUMMER SOIRÉE COIFFURE"
render_landscape "public/media/colouring.jpg" "public/videos/fb-dec-coastal.mp4" "SUMMER DEFENCE" "SUN & SALTWATER HAIR CARE"
render_landscape "public/media/staff.jpg" "public/videos/fb-dec-team.mp4" "HOLIDAY WISHES" "WARMEST SEASONS GREETINGS"
render_landscape "public/media/hero.jpg" "public/videos/fb-dec-nye.mp4" "DECEMBER FINALE" "STEP INTO 2027 IN STYLE"

echo "All MP4 videos successfully generated!"
ls -lh public/videos/
