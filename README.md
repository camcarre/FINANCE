# Portfolio Tracker

Static client-side portfolio tracker designed for GitHub Pages and iOS Shortcuts.

## Files

- `index.html` – Main page, fetches live prices and exposes JSON.
- `config.js` – Portfolio configuration (positions, APIs, settings).

## How it works

1. Browser loads `index.html` and `config.js` from GitHub Pages.
2. JavaScript fetches ETF prices via Yahoo Finance (through a CORS proxy) and crypto prices via CoinGecko.
3. The script computes invested amount, current value, gains and allocation by type.
4. The resulting JSON model is rendered inside `<pre id="json-output">`.

## JSON structure

The JSON exposed in the page matches this shape (values are examples):

```json
{
  "updated": "2025-12-03 14:30",
  "summary": {
    "invested": 2382.74,
    "value": 2942.69,
    "gain": 559.95,
    "gainPct": 23.5
  },
  "assets": [
    {
      "name": "Amundi MSCI World (PEA)",
      "type": "ETF",
      "invested": 587.86,
      "value": 605.14,
      "gain": 17.28,
      "gainPct": 2.94,
      "pct": 20.56
    }
  ],
  "byType": {
    "ETF": { "value": 1778.35, "pct": 60.42 },
    "CRYPTO": { "value": 881.93, "pct": 29.97 },
    "FIXED": { "value": 182.5, "pct": 6.2 }
  }
}
```

## iOS Shortcut

Basic flow for consuming the JSON:

1. **Obtenir le contenu de l'URL** → `https://<username>.github.io/portfolio-tracker/`
2. **Obtenir le dictionnaire de l'entrée** (le Raccourci parsé le JSON depuis le `<pre>`).
3. Utiliser les clés `summary.value`, `summary.gain`, etc. dans vos actions (ex: **Dire le texte**).

The JSON is always available in the element with `id="json-output"` and attribute `data-shortcut-json="true"`.

## Deploy on GitHub Pages

1. Create repo `portfolio-tracker`.
2. Commit & push `index.html`, `config.js`, and `README.md`.
3. In GitHub → **Settings** → **Pages** → Source: `main` branch (root).
4. Access your tracker at: `https://<username>.github.io/portfolio-tracker/`.
