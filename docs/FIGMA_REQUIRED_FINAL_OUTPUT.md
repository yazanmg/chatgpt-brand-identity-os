# Mandatory Figma Final Deliverable Rule

[English](./FIGMA_REQUIRED_FINAL_OUTPUT.md) | [العربية](./ar/FIGMA_REQUIRED_FINAL_OUTPUT.md)

This rule is intended to be sent **together with** `MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md` when the user wants the final result to be a real editable Figma project rather than a flattened image or presentation.

## Copy-paste rule

```text
NON-NEGOTIABLE FINAL DELIVERABLE — FIGMA REQUIRED

The final result of this project MUST be a real, professional, fully editable Figma Brand Identity Master File.

A generated image, moodboard, brand board, PNG/JPG, PDF, contact sheet, flattened presentation, or a description of what a Figma file should contain is NOT the final deliverable and does NOT satisfy the task.

Images may be used only for exploration, previews, mockups, presentation, or approval. DO NOT STOP after generating them.

Continue until the approved visual identity has been productionized inside Figma with real editable structure, including the applicable items below:
- editable vector logo masters
- organized Pages and/or Sections
- Frames
- Components and useful Variants
- Figma Variables
- Paint Styles
- Text Styles
- reusable graphic elements
- product/app icon masters when relevant
- color system
- typography system
- logo variants and construction rules
- RTL/LTR and multilingual examples when relevant
- design tokens when relevant
- export settings
- clean Master Assets separated from presentation frames

DO NOT simply import the final brand-board image into Figma and call it editable.
DO NOT use a single flattened SVG/PDF as a fake editable deliverable.
Reconstruct the underlying production system.

If the visual identity has already been approved, DO NOT redesign it just to satisfy this requirement. Preserve the approved creative direction and convert that exact work into a professional editable Figma production system.

If direct Figma creation is available, create the Figma file yourself and verify the actual nodes, vectors, Components, Variables, Styles, Sections, text, and export settings after writing.

If direct Figma creation is unavailable or fails because of MCP/API/tool limits, quota, plan restrictions, connection problems, or unsupported write operations, DO NOT downgrade the final result to an image or PDF.

Instead, create a local Figma Development Importer Plugin containing at minimum:
- manifest.json
- code.js
- README.md

The plugin must reconstruct the identity inside Figma Desktop using editable vectors, Sections/Frames, Components, Variables/Styles, and export settings. It must be safe to rerun and must not destroy unrelated user work.

DEFINITION OF DONE:
The task is NOT complete until a professional editable Figma master actually exists, OR a tested local Figma Development Importer capable of creating that editable master is delivered when direct Figma writing is technically blocked.

Do not stop at the image stage.
Do not declare the brand identity final before the editable Figma deliverable is ready.
```

## Why this rule exists

AI brand work can produce an excellent visual direction and still stop too early at a single image. A brand board is useful for approval, but it is not the same as an editable production system.

This rule deliberately separates two states:

```text
Visual direction / presentation
            ↓
        approval
            ↓
Production reconstruction
            ↓
Editable Figma master
            ↓
Professional handoff
```

The Figma requirement is therefore a **completion condition**, not a request to redesign approved work.

## Recommended use

Upload the canonical master specification, then send the normal start message and append the rule above.

For an identity that has already been approved, use the dedicated example:

[`examples/APPROVED_IDENTITY_TO_FIGMA.md`](../examples/APPROVED_IDENTITY_TO_FIGMA.md)
