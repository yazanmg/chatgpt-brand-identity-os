# Local Figma Development Importer Template

This directory is a **generic resilience template** for the fallback described in the canonical operating specification.

Use it when a project requires an editable Figma master but direct/remote Figma automation is unavailable, quota-limited, unreliable, or blocked by the current account/tool behavior.

It is not a universal finished importer by itself. The project-specific AI workflow should populate the `PAYLOAD` in `code.js` with the approved identity assets and rules.

## What the template can build

The included scaffold supports project-specific generation of:

- a named Figma Page
- named Sections
- SVG presentation/guideline frames imported as editable vector trees
- logo Components
- product/icon Components
- Paint Styles
- export settings
- safe reruns using an ownership prefix

A project can extend it with Variables, Text Styles, component variants, token aliases, platform exports, or other approved production needs.

## Project-specific workflow

1. Finish/approve the brand direction first.
2. Produce canonical SVG/vector masters and tokens.
3. Ask ChatGPT to create a project-specific copy of this importer.
4. Replace the example `PAYLOAD` with the real approved identity data.
5. Keep the importer idempotent: it should only delete/rebuild nodes it owns.
6. Open **Figma Desktop**.
7. Import the project-specific `manifest.json` using Figma's current Development Plugin workflow.
8. Run the importer in the target design file.
9. Inspect the actual vectors, Components, Styles/Variables, Sections, text, and export settings.
10. Fix any rendering/RTL/font issues before calling the handoff complete.

Always verify the current Figma plugin-development workflow and API behavior against Figma's official documentation at execution time.

## Important

Do not use this template to turn a flattened brand board into a fake editable file.

The payload should contain/reconstruct the **underlying system**:

- real logo vectors
- independent graphic elements
- product assets
- tokens/colors
- editable guideline frames

Raster UI screenshots may still appear as intentional application references, but they are not canonical brand masters.

## Files

```text
importer-template/
├── manifest.json
├── code.js
└── README.md
```

## License

The code in this directory is licensed under the MIT License. See the repository `LICENSE.md`.
