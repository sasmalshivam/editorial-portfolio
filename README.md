# 🖤 Sibam Sasmal — Editorial & Cinematic Portfolio

An editorial, cinematic developer portfolio website mirroring the refined aesthetic of high-contrast editorial design. Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Lenis**, and a very subtle **React Three Fiber** background.

---

## 🌐 Live Production Links

* 🚀 **Live Website:** [https://shivamsasmalportfolio.vercel.app](https://shivamsasmalportfolio.vercel.app)
* 🐙 **GitHub Repository:** [https://github.com/sasmalshivam/editorial-portfolio](https://github.com/sasmalshivam/editorial-portfolio)

---

## 🎨 Design & Aesthetic Features

* **High-Contrast Editorial Typography:**
  * Giant Serif Display: `Playfair Display` with **Sibam** (upright) and ***Sasmal*** (italic) exactly matching the reference design.
  * Micro Labels: `JetBrains Mono` with wide tracking and glowing neon indicator dots.
  * Body: `Inter` for crisp readability.
* **Cinematic Halftone Portrait (`<EditorialPortrait />`):**
  * Grayscale with boosted contrast and dithered halftone dot matrix.
  * Dual subtle neon rim lights (neon green on left, cyan on right).
  * Seamless bottom vignette gradient fading into pure `#000000` black.
  * Interactive circular spotlight following the cursor that reveals the crisp full-color portrait.
  * 3D mouse parallax tilt (~6°).
  * Scroll-linked dynamics: smooth scaling and transitions into About section.
* **Exact Hero Layout (Mirroring Reference):**
  * Top-Left: `● DEVELOPER. ENGINEER. BUILDER.` with pulsing neon dot.
  * Top-Right: `BASED IN INDIA · SHAPING INTELLIGENT SYSTEMS`
  * Left-Middle: `01 / PRESENCE` in neon gradient + vertical list (`ENGINEERING`, `COMPUTER VISION`, `SCALABLE SYSTEMS`).
  * CTAs: Rounded outlined pill `Explore my work ↓` and underlined link `Start a conversation ↗`.
  * Bottom Edge: `SCROLL TO DISCOVER ↓` and `BUILDING & TRAINING SINCE 2023`.
* **Floating Dark Glass Pill Navbar:**
  * `#0b0b0b` glass with subtle 1px border.
  * Elegant serif brand mark and `"Let's talk ↗"` button with neon border.
* **Subtle 3D Background:**
  * Faint low-opacity particle constellation and slow-moving wireframe mesh in green/cyan that never competes with the portrait.

---

## 🖼️ How to Change Your Photo

To update or replace your portrait photo:

1. Replace the file at:
   📁 **`public/images/me.png`** (or `public/images/me.jpg`)
   *(For optimal results, use a smiling head-and-shoulders portrait; the component automatically applies the grayscale contrast, halftone dot texture, neon rim lighting, and hover spotlight reveal).*

2. Commit and push:
   ```bash
   git add public/images/
   git commit -m "chore: update editorial portrait photo"
   git push origin main
   ```

---

## 🛠️ How to Customize Your Content

All data is centralized in a single file:
📁 **`src/data/content.ts`**

You can easily modify:
* Name, tagline tags, and location line
* Subtitle and about bio
* Projects (title, description, tags, URLs, highlights)
* Internships, education, and hackathon achievements
* Social media links

---

## 🌐 Custom Domain Setup (`shivamsasmalportfolio.com`)

If you own `shivamsasmalportfolio.com`, connect it to this deployment in 2 steps:

1. Open your project on [vercel.com/dashboard](https://vercel.com/dashboard) → **Settings** → **Domains**.
2. Type **`shivamsasmalportfolio.com`** and click **Add**.
3. Add the following DNS record at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):
   * **Type:** `A`
   * **Name:** `@`
   * **Value:** `76.76.21.21`
   * *(Optional for `www`)*: **Type:** `CNAME`, **Name:** `www`, **Value:** `cname.vercel-dns.com`

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your site.
