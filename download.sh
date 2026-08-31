#!/bin/bash
# Downloads church media from zionhfx.com CDN into images/original/
set -e
cd "$(dirname "$0")/images/original"

base="https://cdn.gamma.app/zexzy1tyeawsd9g"

dl(){
  local id="$1"
  local name="$2"
  if [ ! -f "$name" ]; then
    curl -sL -o "$name" "$base/$id" || echo "FAIL: $name"
  fi
}

# Logo
dl "9dc17ad6a1c245dfbe033c3128a3d193/original/Zion-Telugu-Church-Logo.png" "logo.png"
dl "c971d8de9b14493ca66175265206593e/original/WhatsApp-Image-2026-07-28-at-4.06.51-PM.jpeg" "hero-wide.jpeg"

# Gallery (15)
dl "9e9f493eacc24d4499b2913759426b0b/original/mHa-62b1VuxOKWmQVyxH.png" "gallery-01.png"
dl "58b9c0f181f74cf1b81c50b374df2104/original/WhatsApp-Image-2026-04-27-at-10.15.20-PM-2.jpeg" "gallery-02.jpeg"
dl "a77f63b18f464addb51b0d8f01ce7a4a/original/WhatsApp-Image-2026-07-28-at-3.58.48-PM-1.jpeg" "gallery-03.jpeg"
dl "204fe1bae3dd41608af327522d487c34/original/WhatsApp-Image-2026-04-27-at-10.15.21-PM.jpeg" "gallery-04.jpeg"
dl "2c406fbee1504bd98d4a08c593dfd5eb/original/WhatsApp-Image-2026-04-27-at-10.15.13-PM.jpeg" "gallery-05.jpeg"
dl "4d77d538eff2418d952fc71645a85551/original/WhatsApp-Image-2026-04-27-at-10.15.16-PM.jpeg" "gallery-06.jpeg"
dl "4d9262f63990469b8cc7cd16c8685e5e/original/WhatsApp-Image-2026-04-27-at-10.15.21-PM-2.jpeg" "gallery-07.jpeg"
dl "201152b2abf045efa82093755f5a2cc4/original/20240817_183434.jpg" "gallery-08.jpg"
dl "f49c138816c14c0dbfa7305a09d0106d/original/WhatsApp-Image-2026-04-27-at-10.15.20-PM-3.jpeg" "gallery-09.jpeg"
dl "e2992e1f48ba4157b235cb200efcaf81/original/WhatsApp-Image-2026-07-28-at-3.58.48-PM.jpeg" "gallery-10.jpeg"
dl "f9cbb0d36f4d4d86879af55457a790c0/original/WhatsApp-Image-2026-04-27-at-10.15.20-PM.jpeg" "gallery-11.jpeg"
dl "8ef1113f5807475f993993dcbee983a6/original/1000070582.jpg" "gallery-12.jpg"
dl "a3626405f100402d99939012a4643015/original/WhatsApp-Image-2026-04-27-at-10.15.17-PM.jpeg" "gallery-13.jpeg"
dl "cfa87e5521e94666b719405ada979258/original/WhatsApp-Image-2026-04-27-at-10.15.21-PM-1.jpeg" "gallery-14.jpeg"
dl "f2e5d94965ca4f4f8c52ea498b94c8ea/original/WhatsApp-Image-2026-04-27-at-10.15.22-PM-3.jpeg" "gallery-15.jpeg"

# Events: 1st Anniversary (10)
dl "257fc93ac6fd48d886c4053333794a62/original/WhatsApp-Image-2026-07-28-at-1.22.03-PM-1.jpeg" "anniv-01.jpeg"
dl "850a0a55884f42b2a342ca02645b85bb/original/WhatsApp-Image-2026-07-28-at-1.22.03-PM-2.jpeg" "anniv-02.jpeg"
dl "6065bdfd91a64da0b1d428e60751ad5e/original/WhatsApp-Image-2026-07-28-at-1.22.02-PM-2.jpeg" "anniv-03.jpeg"
dl "7acf56addfb54f0aa6b2c9ffae568deb/original/WhatsApp-Image-2026-07-28-at-1.22.02-PM-5.jpeg" "anniv-04.jpeg"
dl "61a91b83ae0d40aeb40b08fc6b1da446/original/WhatsApp-Image-2026-07-28-at-1.22.02-PM-4.jpeg" "anniv-05.jpeg"
dl "e136184cebc0420ea598aca56a6bd832/original/WhatsApp-Image-2026-07-28-at-1.22.02-PM-3.jpeg" "anniv-06.jpeg"
dl "25c1b34f5fe14e9c901abca50b00597e/original/WhatsApp-Image-2026-07-28-at-1.37.22-PM.jpeg" "anniv-07.jpeg"
dl "f402125e6dbe43f596d6ac2d435f15fc/original/WhatsApp-Image-2026-07-28-at-1.36.12-PM.jpeg" "anniv-08.jpeg"
dl "41c2d260acaa47bd8eca7c49c6b5c5c5/original/WhatsApp-Image-2026-07-28-at-1.37.22-PM-1.jpeg" "anniv-09.jpeg"
dl "e453b73d0d1a49d0b205e1152a2e3184/original/WhatsApp-Image-2026-07-28-at-1.37.21-PM.jpeg" "anniv-10.jpeg"

# Events: Special Meetings (10)
dl "4ad8f9ddd2794fb2b737e82e1ab7a090/original/WhatsApp-Image-2026-07-28-at-1.22.00-PM.jpeg" "special-01.jpeg"
dl "03008274a5d74fb8a078a24b9ca0bc3e/original/WhatsApp-Image-2026-07-28-at-1.44.01-PM.jpeg" "special-02.jpeg"
dl "966f7723362e4e808041372b32caa61d/original/WhatsApp-Image-2026-06-21-at-8.10.41-PM.jpeg" "special-03.jpeg"
dl "c0a4a2211abd42cd8e35531a5f75ff58/original/WhatsApp-Image-2026-07-28-at-1.22.01-PM.jpeg" "special-04.jpeg"
dl "bb9d42e4ca7d4c0aadd85ecbede3567e/original/WhatsApp-Image-2026-07-28-at-1.22.01-PM-1.jpeg" "special-05.jpeg"
dl "314971cfeac743d3acee94f5a025e403/original/WhatsApp-Image-2026-07-28-at-1.22.01-PM-3.jpeg" "special-06.jpeg"
dl "b7a9ef60375049e59025927af72a1c76/original/WhatsApp-Image-2026-07-28-at-1.22.01-PM-2.jpeg" "special-07.jpeg"
dl "ffc1c35264d54a61bba2cbf4825e07c6/original/WhatsApp-Image-2026-07-28-at-1.22.00-PM-1.jpeg" "special-08.jpeg"
dl "ca41a90a036a45acbd24f4c52c69cee6/original/WhatsApp-Image-2026-07-28-at-1.22.02-PM-1.jpeg" "special-09.jpeg"
dl "d48ef6335d8b4462ba0ee8a5ad93e174/original/WhatsApp-Image-2026-07-28-at-1.22.03-PM-3.jpeg" "special-10.jpeg"

echo "done"