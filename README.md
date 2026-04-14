# Curating Calm — Slow Living on Instagram

An interactive digital humanities essay analyzing the visual aesthetics of slow living accounts on Instagram and YouTube.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

Since you already have Vercel linked to your GitHub repo:

1. Push this code to your repo:
   ```bash
   git add .
   git commit -m "Add slow living essay site"
   git push
   ```

2. Vercel will auto-detect Next.js and deploy. No extra config needed.

## Project Structure

```
app/
  layout.tsx        # Root layout with fonts & metadata
  page.tsx          # Main page (assembles all sections)
  globals.css       # Tailwind + custom styles + Google Fonts

components/
  data.ts           # All account data (edit this to update content)
  HeroSection.tsx   # Title, intro, scroll cue
  AccountRoster.tsx # Grid of all 10 accounts with color swatches
  ColorMoodBoard.tsx # Palette visualization by category
  ObjectsOfSlowness.tsx # Frequency chart + thematic analysis
  ManufacturedMood.tsx  # Lighting typologies + color semiotics
  Footer.tsx
```

## Customizing Content

All account data lives in `components/data.ts`. Edit the `accounts` array to:
- Add/remove accounts
- Update follower counts
- Change hero objects or palette colors

## Adding Your Own Analysis Text

The analysis text in `ObjectsOfSlowness.tsx` and `ManufacturedMood.tsx` is placeholder academic writing — replace with your own findings.