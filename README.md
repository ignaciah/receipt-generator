# receipt-generator
A receipt generator 
receipt-generator/
│
├── worker/
│   ├── src/
│   │   └── index.js
│   ├── wrangler.toml
│
├── frontend/
│   ├── index.html
│   └── styles.css   (optional)
│
└── README.md
# Receipt Generator (Cloudflare)

A Cloudflare Worker + Cloudflare Pages project that generates a new receipt every time a user clicks a button.

## Structure
- `/worker` — Cloudflare Worker API
- `/frontend` — Cloudflare Pages static site

## Deploy
- `wrangler deploy` for Worker
- Connect `/frontend` folder to Cloudflare Pages

