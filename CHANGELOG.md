# Changelog

All notable public changes to this repository will be documented here.

The public repository version and the internal specification version are intentionally separate:

- **Repository release:** `v1.0.0`
- **Canonical operating specification:** internal `Version 3.0`

The canonical specification is preserved exactly as tested in this release.

## Unreleased — usability and handoff improvements

### Figma-first completion rule

- Added a dedicated mandatory final-output rule requiring a real professional editable Figma Brand Identity Master File.
- Clarified that brand boards, PNG/JPG images, PDFs, screenshots, contact sheets, and flattened presentations are exploration/presentation artifacts rather than acceptable final production deliverables.
- Added a documented local Figma Development Importer fallback for MCP/API/quota/plan/connection failures.
- Added a dedicated approved-identity-to-Figma workflow so a strong approved identity can be productionized without redesigning it.
- Added `START_HERE.md` and `START_HERE_AR.md` with a single copy/paste ChatGPT start message combining the canonical workflow, STRICT MODE, and the mandatory Figma completion rule.

### Bilingual documentation

- Added English/Arabic switching from the repository entry pages.
- Added Arabic versions/indexes for the main usage documentation.
- Added Arabic examples for minimal input, existing products, multilingual/RTL work, and approved-identity-to-Figma productionization.
- Added Arabic helper templates for Brand Brief, AI Brand Rules, Decisions Log, and Asset Manifest.
- Added an Arabic contribution guide and Arabic documentation index.
- Kept the canonical operating specification itself unchanged so the exact tested core remains reproducible.

### Visual documentation

- Added a visual project hero illustrating the path from conversation to editable Figma.
- Added original workflow icons for conversation, discovery, brand system, and editable Figma handoff.
- Added a visual comparison explaining the difference between a flattened presentation artifact and an editable Figma production master.

### QA

- Canonical-core integrity verification continues to run on repository changes.
- Repository QA validates internal documentation links and the Figma importer scaffold.

## v1.0.0 — Initial public release

### Canonical core

- Published the exact tested `MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md`.
- Added SHA-256 integrity fingerprint.
- Added automated GitHub Actions verification to detect any silent change to the canonical core.

### Workflow capabilities documented

- sparse-input project intake
- evidence-first inspection
- adaptive one-question-at-a-time discovery
- evidence-state tracking
- Brand Brief Sufficiency Gate
- three-pass research protocol
- existing-system KEEP / EVOLVE / REPLACE audit
- brand strategy
- brand architecture
- structurally distinct creative territories
- equal benchmark comparison
- logo production/stress testing
- color and typography systems
- multilingual / Arabic / RTL awareness when relevant
- product-family identity
- app/platform assets when relevant
- accessibility and real-touchpoint validation
- design-token architecture when relevant
- vector-first production assets
- editable Figma workflow
- atomic Figma automation verification
- Master Canvas + Sections fallback
- local Figma Development Plugin fallback
- governance and AI brand rules
- three-pass final QA
- completion gates

### Public documentation

- comprehensive README
- usage guide
- workflow explanation
- discovery guide
- Figma production guide
- STRICT MODE guide
- FAQ
- contribution policy
- examples/templates
- sanitized real-project case study

### Intended environment

- Primary: normal ChatGPT conversations
- Not intended as a Codex/`AGENTS.md` workflow
