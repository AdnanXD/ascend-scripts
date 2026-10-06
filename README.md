# Ascend Scripts

Phone-first web app for Ascend Properties sales scripts: copy or send to WhatsApp with fill-ins, plus a Call Mode with step-by-step call flows and objection answers.

- Plain HTML/CSS/JS, no build step. Deploy the repo root as a static site.
- Data is stored on the device (localStorage). Use ⋯ → Export backup regularly.
- When you change any file, bump `CACHE` in `sw.js` so installed copies update.
