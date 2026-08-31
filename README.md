# Gala IT Care - Professional IT Solutions

**Live Link**: [galaitcare.com](https://galaitcare.com) *(Add your final URL here)*

### 📷 Screenshot
<!-- SCREENSHOT_PLACEHOLDER: Waiting for user to upload screenshot to place here -->

## 🚀 Project Description
Gala IT Care is a premium, high-performance static website for an elite IT service provider in Dubai & Ajman. The site offers a seamless, modern user experience designed to convert leads for Data Recovery, Laptop Repair, and Printer & Plotter Repair services. The UI is built with a bespoke glassmorphism design system, utilizing asymmetric layouts and high-contrast typography to project a state-of-the-art aesthetic.

## 💻 Tech Stack
* **Framework**: Next.js 15 (React 19)
* **Styling**: Tailwind CSS (Custom Premium Glassmorphism Design System)
* **Icons**: Lucide React
* **Architecture**: Fully Static Export (MPA/SSG) for high-speed local and CDN delivery
* **Lead Generation**: Direct-to-WhatsApp URL generation with pre-filled context

## ✨ Features
* **Premium Glassmorphic UI**: Custom frosted-glass components with dynamic opacity shifting on hover, ensuring text legibility over stunning background photography.
* **Fully Responsive**: Flawless experience across mobile, tablet, and ultra-wide displays.
* **Zero-Server Static Export**: Fully compiled to HTML/CSS/JS, capable of running securely directly from the file system (`file:///`) or basic shared hosting.
* **Integrated Lead Generation**: Floating WhatsApp forms that programmatically generate context-aware messages based on the page and service selected.
* **Component-Driven Architecture**: Modular, highly reusable UI components (Service Cards, Trust Bars, Headers).

## 🛠️ Local Setup / Run Instructions

To run this project locally or build the static export:

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build the fully static export
npm run build

# 4. (Optional) Run the post-build script for local file:/// execution
node scripts/fix-static-export.js
```
