# Start Here — ChatGPT Brand Identity OS

**English | [العربية](./START_HERE_AR.md)**

This is the fastest way to use the project correctly.

> **Environment:** normal ChatGPT conversation — not Codex.  
> **Final production deliverable:** professional editable Figma master, not a flat image.

## 1. Download / upload the canonical file

Upload this file into a normal ChatGPT conversation:

[`MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md`](./MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md)

Then upload whatever you already have about your project: a name, idea, brief, current logo, UI/UX, screenshots, product documentation, existing identity, or other relevant material.

You do not need to prepare a professional brief first.

## 2. Copy this entire message into ChatGPT

```text
Use MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md as the governing operating specification for this project.

Read all supplied project material first.

If the brief is incomplete, conduct the adaptive discovery interview one question at a time until the Brand Brief Sufficiency Gate passes.

Then continue through the complete professional brand identity workflow, including research, strategy, creative territories, production, QA, and handoff as applicable to the real project.

Use STRICT MODE.

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

## 3. Continue normally

Answer discovery questions when ChatGPT genuinely needs information that is not already in your files. Review the synthesized brief and creative territories, approve/correct the direction, and let the workflow continue into production.

## If the identity is already approved

Do not restart the design. Use:

**[Approved Identity → Editable Figma](./examples/APPROVED_IDENTITY_TO_FIGMA.md)**

## More documentation

- [How to Use](./docs/HOW_TO_USE.md)
- [Mandatory Figma Final Deliverable](./docs/FIGMA_REQUIRED_FINAL_OUTPUT.md)
- [Figma Workflow](./docs/FIGMA_WORKFLOW.md)
- [STRICT MODE](./docs/STRICT_MODE.md)
