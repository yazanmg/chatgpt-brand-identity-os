# Figma Workflow

The operating specification treats Figma handoff as **production work**, not as a screenshot-export step.

This document summarizes the intended behavior. The canonical rules remain in `MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md`.

## The goal

When Figma is the appropriate editable master, the final file should be useful to another qualified designer or developer without requiring them to reverse-engineer a flattened presentation.

Depending on scope, that may include:

- editable logo/vector masters
- professionally named Pages and/or Sections
- reusable Components
- Variables
- Paint/Text/Effect Styles
- product-family masters
- app-icon masters
- token references
- export settings
- clear separation between presentation frames and production assets

## What does **not** count as an editable Figma handoff?

- importing one brand-board PNG into a Figma frame
- placing PDF pages into Figma and calling them editable
- using screenshots as logo masters
- wrapping raster artwork in an SVG container
- describing what the Figma structure should be without actually creating it when the required tooling is available

Screenshots are acceptable when they are intentionally shown as application references. They are not substitutes for canonical brand geometry.

## Preferred execution sequence

### 1. Inspect capability

Before writing, determine what the current environment actually supports:

- authenticated account
- edit permission
- target file/file type
- available Figma tools
- current plan constraints
- page/mode/library constraints
- current automation limits if exposed

Do not rely on remembered plan limits. Verify current official behavior at execution time.

### 2. Build structure first

Create or organize the target Pages/Sections before attempting a massive import.

### 3. Use small atomic writes

A reliable sequence looks like:

```text
Create/rename structure
        ↓
Verify
        ↓
Insert one representative vector
        ↓
Verify
        ↓
Create Variables/Styles
        ↓
Verify
        ↓
Insert remaining assets in batches
        ↓
Verify
```

One giant automation operation is harder to debug and easier to falsely report as successful.

### 4. Verify after important writes

Use metadata inspection and visual screenshots when the available integration supports them.

Do not trust a “success” notification alone.

Check that expected nodes, Components, Variables, vectors, text, and exports actually exist.

## Recommended information architecture

When enough Pages are available, a professional file may separate areas such as:

- Cover / Quick Start
- Brand Foundations
- Logo System
- Logo Construction
- Color
- Typography
- Product Family
- App Icons
- Iconography
- Graphic Language
- Imagery
- Applications
- Motion
- Accessibility
- RTL/LTR / Multilingual
- Design Tokens
- Do / Don’t
- Master Assets
- Export Assets
- Handoff

The exact structure should follow the project.

## Page-limit fallback: Master Canvas + Sections

A low page limit is not a reason to abandon professional organization.

If the active Figma plan limits Pages, organize the same system into one or a few master canvases using clearly named Sections.

Example:

```text
Page — Master Brand Identity

Section 01 — Strategy & Foundations
Section 02 — Logo System
Section 03 — Visual Language
Section 04 — Product Family
Section 05 — Applications
Section 06 — Accessibility & Localization
Section 07 — Tokens & Components
Section 08 — Master Assets & Exports
```

Information architecture matters more than raw page count.

## Variables

When applicable, create reusable variable collections for items such as:

- primitive brand colors
- semantic colors
- spacing/dimensions
- radius
- motion values

Use modes/aliases when supported and useful.

If the active plan restricts modes, document the fallback rather than abandoning semantic structure entirely.

## Styles

Where useful, create:

- Paint Styles
- Text Styles
- Effect Styles
- Grid Styles

Do not create redundant Styles merely to inflate the file.

## Components

Good Component candidates include:

- master logo lockups
- product lockups
- app-icon masters
- reusable graphic elements
- frequently reused brand modules

Not everything in the file needs to become a Component.

## Exports

Configure exports on canonical masters, not on random presentation copies.

Examples:

- SVG for vector marks
- appropriate PNG exports for app-icon masters
- platform-specific exports where required
- PDF for selected guideline/presentation frames when useful

## Failure recovery

The operating specification deliberately treats automation failure as a recoverable engineering problem.

### If a remote Figma write fails

Determine whether the problem is:

- permission
- plan constraint
- page/mode limitation
- quota/rate limit
- unsupported API behavior
- malformed asset data
- timeout/oversized write

Do not repeatedly retry the same large failing operation.

Reduce the operation and verify the smallest successful write.

## Local Figma Development Plugin fallback

If remote/MCP automation becomes unavailable, quota-limited, unreliable, or blocked by a plan/API limitation, the operating system can fall back to a **local Figma Development Plugin**.

This is not supposed to be a downgrade.

The plugin can reconstruct the designed system directly inside Figma Desktop from canonical vectors/tokens.

A project-specific importer should typically:

- create named Sections
- import SVG as editable vector node trees
- create Logo Components
- create Product/Icon Components
- create Variables and useful Styles
- configure export settings
- keep presentation and production masters distinct
- be safe to rerun
- replace only content it owns
- preserve unrelated user content

A minimal plugin package normally includes:

```text
figma-importer/
├── manifest.json
├── code.js
└── README.md
```

The exact plugin API and Figma development requirements must be checked against current Figma documentation when executed.

## Safe reruns / idempotency

An importer should use stable names or a clear ownership prefix so it can rebuild its own generated content without deleting unrelated design work.

For example:

```text
Generated::Brand Foundations
Generated::Logo Masters
Generated::Tokens
```

On rerun, it can safely replace only `Generated::*` content.

## Presentation vs production

Keep these separate:

### Presentation frames

They may be expressive, editorial, cinematic, and optimized for explaining the system.

### Production masters

They should be clean, editable, named, reusable, tokenized where applicable, and export-ready.

A developer should never have to crop a logo out of a presentation frame.

## Final verification

Before declaring the Figma portion complete, inspect the actual file and verify as applicable:

- logo masters are real vectors
- text that should be editable is editable
- outlined logo versions exist where font independence is required
- Variables/Styles exist
- Components exist where useful
- product assets are separate
- Sections/Pages are named professionally
- Arabic/RTL text is visually correct when relevant
- assets are not clipped
- export settings exist
- screenshots are clearly application references, not fake editable masters

## Why this matters

A professional brand identity should survive the failure of one remote API session.

The identity is stronger when its canonical vectors and tokens can reproduce the editable master independently of a specific automation connection.
