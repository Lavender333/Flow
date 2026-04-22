# FocusFlow

FocusFlow is a focus and emotional-regulation companion app that combines:
- Solfeggio frequency playback
- Rhythmic tapping guidance
- Haptic support patterns
- AI-assisted session intention suggestions

## Tech Stack

- React + TypeScript
- Vite
- Express (development/serving layer)
- Tailwind CSS
- Gemini API (`@google/genai`)

## Prerequisites

- Node.js 18+
- npm
- A Gemini API key

## Local Development

1. Install dependencies:
   `npm install`
2. Create a local environment file (for example `.env.local`) and set:
   - `GEMINI_API_KEY`
   - `VITE_SUPABASE_URL` (optional if Supabase-backed features are used)
   - `VITE_SUPABASE_ANON_KEY` (optional if Supabase-backed features are used)
3. Start the app:
   `npm run dev`
4. Open:
   `http://localhost:3000`

## Validation

- Type check:
  `npm run lint`
- Production build:
  `npm run build`
