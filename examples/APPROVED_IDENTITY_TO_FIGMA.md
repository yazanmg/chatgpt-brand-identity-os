# Example — Approved Identity → Professional Editable Figma

Use this mode when ChatGPT already created a visual identity you like and you **do not want a redesign**.

The goal is to convert the approved creative work into a professional production system.

## Situation

You already have something strong, such as:

- an approved brand board
- an approved logo direction
- an approved color/typography direction
- a visual identity presentation
- application mockups

But the result is still mostly a flattened image or presentation.

You now need:

- real vectors
- Components
- Variables / Styles
- production logo variants
- product assets
- organized Figma Sections/Pages
- export settings
- tokens where relevant
- professional handoff

## Upload

Upload:

1. `MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md`
2. the approved identity board/presentation
3. any source assets that already exist
4. UI/UX or product files if the identity must be applied to them

## Tell ChatGPT explicitly

```text
The visual identity you already created is APPROVED.

Do NOT redesign it.
Do NOT create new concepts.
Do NOT change the approved logo, color direction, typography direction, graphic language, or product-family concept unless a technical reconstruction is necessary to make an asset production-ready.

Use MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md for the production and handoff phases only.

Turn the existing approved identity into a complete, professional, fully editable Figma Brand Identity Master System.

Do not stop at another image, brand board, PNG, JPG, or PDF.

Reconstruct the underlying system as editable vectors, Components, Variables/Styles, organized Sections/Pages, production assets, export settings, and project-relevant design tokens.

If direct Figma automation fails because of quota, plan limitations, API/tool behavior, or connection issues, follow the documented Figma recovery workflow and create a project-specific local Figma Development Plugin importer rather than downgrading the handoff to flattened screenshots.

Preserve the approved creative direction. Productionize it; do not redesign it.
```

## What should happen

The AI should treat the approved design as the creative source of truth and focus on production questions:

- Which artwork must be rebuilt as deliberate vector geometry?
- Which logo variants are missing?
- What needs clear-space/minimum-size documentation?
- Which colors should become primitive/semantic Variables?
- Which typography should become reusable Styles?
- Which assets should become Components?
- Which platform/app-icon masters are needed?
- Which UI screenshots are references versus editable brand assets?
- What exports are required?
- What needs accessibility/localization QA?

## Presentation vs production

A professional file can preserve the beautiful approved presentation — but production masters should exist separately.

```text
Approved Direction / Presentation
                 ≠
Canonical Master Assets
```

A designer or developer should never need to crop a logo out of the brand board.

## Figma fallback

If remote automation cannot complete the file:

```text
Direct write
   ↓
Atomic smaller writes
   ↓
Verify actual nodes
   ↓
Adapt Pages → Sections when necessary
   ↓
Project-specific local Development Plugin importer
```

The fallback should reconstruct editable vectors/Components/Variables rather than simply importing the flattened board.

## Key lesson

When the identity is already approved, the operating system does not need to restart creativity.

The job changes from **brand exploration** to **production design + system architecture + handoff**.
