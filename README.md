# ChatGPT Brand Identity OS

**English | [العربية](./README_AR.md)**

> **From a rough idea to a complete professional visual identity and a real editable Figma handoff — inside a normal ChatGPT conversation.**

[![Canonical Core](https://img.shields.io/badge/core-canonical%20%26%20immutable-14201D)](./MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md)
[![For ChatGPT](https://img.shields.io/badge/designed%20for-ChatGPT-10A37F)](https://chatgpt.com/)
[![Figma Required](https://img.shields.io/badge/final%20deliverable-editable%20Figma-A259FF)](./docs/FIGMA_REQUIRED_FINAL_OUTPUT.md)
[![Not Codex](https://img.shields.io/badge/not%20for-Codex-D53A27)](#chatgpt-not-codex)
[![Core Integrity](https://github.com/yazanmg/chatgpt-brand-identity-os/actions/workflows/verify-core.yml/badge.svg)](https://github.com/yazanmg/chatgpt-brand-identity-os/actions/workflows/verify-core.yml)

---

> [!IMPORTANT]
> ## For normal ChatGPT conversations — **NOT Codex**
>
> Upload the canonical operating specification into a regular ChatGPT conversation together with whatever you already know about your project. The system guides the conversation through discovery, research, strategy, creative exploration, production, editable Figma, QA, and professional handoff.
>
> It is **not** an `AGENTS.md`, coding-agent rule set, repository instruction file, or Codex workflow.

> [!WARNING]
> ## The final deliverable is Figma — a flat image is not completion
>
> A generated brand board, moodboard, PNG/JPG, PDF, contact sheet, or screenshot can be used for exploration and approval, but it **must not be treated as the final result**.
>
> For the production workflow used by this repository, the final result must be a **real professional editable Figma Brand Identity Master File**, or — when direct Figma writing is technically blocked — a tested local Figma Development Importer that reconstructs the editable master inside Figma Desktop.
>
> Copy the mandatory rule from **[Figma Required Final Output](./docs/FIGMA_REQUIRED_FINAL_OUTPUT.md)** and send it together with the canonical operating specification.

---

## What is this?

**ChatGPT Brand Identity OS** is a tested, discovery-first operating specification for creating a complete professional visual identity with ChatGPT.

It is not a one-shot logo prompt and it is not a prompt that should stop after generating a beautiful presentation image.

The workflow is designed to help ChatGPT behave more like a coordinated brand team: understand the project first, ask only the questions that matter, research the real context, explore genuinely distinct creative directions, systematize the selected direction, stress-test it, convert it into production assets, and continue until another designer or developer can use the result without guessing.

The canonical operating specification is:

**[`MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md`](./MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md)**

That file is intentionally preserved **byte-for-byte exactly as tested**. The surrounding documentation adds usage guidance without rewriting the canonical core.

---

## Why this exists

A typical AI branding request looks like:

> “Create a visual identity for my project.”

A common result is:

```text
Logo concept
→ Moodboard
→ Beautiful brand board
→ PNG / PDF
→ Stop
```

That can be useful for exploration, but it is not a complete professional identity handoff.

A production-ready identity may also require:

- strategic foundation
- audience and category understanding
- brand architecture
- genuinely different creative territories
- complete logo family
- clear-space and minimum-size rules
- color architecture
- typography hierarchy
- multilingual / RTL behavior
- iconography and graphic language
- product-family logic
- app/platform assets where relevant
- accessibility validation
- real-touchpoint testing
- design tokens where relevant
- editable vectors
- Figma Variables / Components / Styles
- export-ready masters
- documentation and governance
- a handoff another professional can continue without guessing

This repository makes that deeper workflow repeatable.

---

## What makes it different?

| Typical AI branding prompt | ChatGPT Brand Identity OS |
|---|---|
| Starts drawing immediately | Inspects evidence and discovers the problem first |
| Fixed questionnaire or no discovery | Adaptive one-question-at-a-time discovery |
| One-shot output | Multi-phase operating workflow |
| Logo-centric | Identity-system-centric |
| Style preference first | Strategy and evidence first |
| Random alternatives | Structurally distinct creative territories |
| Mockup polish can hide weak marks | Functional stress tests before beauty shots |
| Flat palette | Role-based color system; semantic tokens where relevant |
| English-first | Multilingual / RTL aware when required |
| “Looks good” = done | Explicit completion gates + three QA passes |
| PNG/PDF ending | Editable production assets + Figma handoff |
| Figma described, not built | Editable Figma workflow + local importer fallback |

---

# Quick Start

## 1. Download the canonical file

[`MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md`](./MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md)

## 2. Open a normal ChatGPT conversation

Do **not** start this as a Codex coding task.

## 3. Upload the canonical `.md` file

Also upload anything you already have, for example:

- project name
- one-sentence idea
- product brief
- current logo
- UI/UX screenshots
- Figma exports
- existing guidelines
- product documentation
- website copy
- design tokens
- app icons
- packaging
- multi-product architecture

You do **not** need to prepare a professional brief first.

## 4. Send the base start message

```text
Use MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md as the governing operating specification for this project.

Read all supplied project material first.

If the brief is incomplete, conduct the adaptive discovery interview one question at a time until the Brand Brief Sufficiency Gate passes.

Then continue through the complete professional brand identity workflow, including research, strategy, creative territories, production, editable master/Figma workflow, QA, and handoff as applicable to the real project.

Use STRICT MODE.
```

## 5. Append the mandatory Figma completion rule

Copy the rule from:

**[`docs/FIGMA_REQUIRED_FINAL_OUTPUT.md`](./docs/FIGMA_REQUIRED_FINAL_OUTPUT.md)**

This is the critical rule that prevents a generated image or brand board from being mistaken for the final handoff.

The required end state is:

```text
Approved visual direction
        ↓
Production reconstruction
        ↓
Editable vectors / assets / system
        ↓
Professional editable Figma master
        ↓
QA + export-ready handoff
```

If direct Figma automation fails because of MCP/API limits, quota, account plan, connection problems, or unsupported writes, the workflow must **not** stop at PNG/PDF. It must fall back to a **local Figma Development Importer Plugin** that reconstructs the editable master inside Figma Desktop.

## 6. Continue the conversation normally

If important information is missing, ChatGPT should ask focused questions instead of inventing answers or jumping directly to aesthetics.

Once the brief is sufficiently clear, the workflow progresses through research, strategy, creative territories, production, Figma, and handoff.

Detailed guide: **[How to Use](./docs/HOW_TO_USE.md)**.

---

## The operating flow

```text
Project idea / existing project
        ↓
Inspect supplied evidence
        ↓
Adaptive discovery interview
        ↓
Brand Brief Sufficiency Gate
        ↓
Three-pass research
        ↓
Legacy audit when applicable
KEEP / EVOLVE / REPLACE
        ↓
Brand strategy
        ↓
Brand architecture
        ↓
Distinct creative territories
        ↓
Human selection / correction
        ↓
Logo + visual identity system
        ↓
Real-touchpoint validation
        ↓
Accessibility / localization / production QA
        ↓
Design tokens + platform assets where relevant
        ↓
Canonical editable masters
        ↓
Professional editable Figma
        ↓
Local importer fallback if direct Figma writing is blocked
        ↓
Professional package + documentation
        ↓
Three-pass final QA
        ↓
FINAL
```

---

## Start with almost nothing

The workflow can begin with very sparse input, such as:

```text
I am building a coffee delivery service for university students.
```

Instead of immediately inventing a logo and palette, the system progressively understands the offer, audience, decision context, alternatives, differentiation, desired perception, priority touchpoints, constraints, and definition of success.

The interview is adaptive: every answer influences what should be asked next.

Read **[Discovery Workflow](./docs/DISCOVERY_WORKFLOW.md)**.

---

## Three-pass research

**Pass A — Category, audience, and context**  
Understand the world the brand enters.

**Pass B — Visual landscape and differentiation**  
Understand conventions, clichés, confusion risks, and visual whitespace.

**Pass C — Platform, production, accessibility, and implementation**  
Verify the real constraints the final identity has to survive.

This prevents trend browsing from being mistaken for real research.

---

## Creative territories before final production

When broad exploration is justified, the workflow creates multiple **structurally different** creative territories — not the same logo in three colors.

Each direction is compared on equivalent benchmark surfaces. The user selects or corrects the direction before the system is fully productionized.

---

## Editable Figma, not a flattened board

A core lesson behind this project is simple:

> **A beautiful brand board is a presentation artifact. It is not the editable production master.**

The Figma handoff should use real editable structure where applicable:

- vector masters
- organized Pages and/or Sections
- Frames
- Components and useful Variants
- Variables
- Paint/Text Styles
- reusable graphic elements
- product/app icon masters
- design tokens where relevant
- export settings
- clean Master Assets separated from presentation frames

Recovery path:

```text
Direct Figma automation
        ↓
Small atomic writes
        ↓
Verify actual nodes after writes
        ↓
Adapt to page / plan limits with Sections
        ↓
Local Figma Development Plugin fallback when needed
```

Read **[Mandatory Figma Final Deliverable](./docs/FIGMA_REQUIRED_FINAL_OUTPUT.md)** and **[Figma Workflow](./docs/FIGMA_WORKFLOW.md)**.

---

## Approved identity already looks great?

Do **not** restart branding just to obtain a Figma file.

Use the dedicated workflow:

**[Approved Identity → Editable Figma](./examples/APPROVED_IDENTITY_TO_FIGMA.md)**

Its job is to preserve the approved creative direction and convert that exact work into a structured professional production system.

---

## ChatGPT, not Codex

| Environment | Intended use |
|---|---:|
| Normal ChatGPT conversation | ✅ Primary |
| ChatGPT + uploaded project files | ✅ Recommended |
| ChatGPT + image generation | ✅ Useful during exploration |
| ChatGPT + Figma access | ✅ Useful for editable handoff |
| ChatGPT web / desktop / mobile chat | ✅ |
| Codex repository workflow | ❌ Not the intended use |
| `AGENTS.md` replacement | ❌ |
| Coding-agent system prompt | ❌ |

Brand identity work here is intentionally conversational: the user and ChatGPT progressively discover, inspect, compare, correct, approve, and refine the identity together.

Read **[ChatGPT, Not Codex](./docs/CHATGPT_NOT_CODEX.md)**.

---

## STRICT MODE

`STRICT MODE` raises the quality bar. Among other things, it requires:

- discovery when the brief is insufficient
- inspection of supplied evidence before repetitive questions
- no invented business facts
- research at the depth the project requires
- explicit reason for skipped phases
- re-verification of changing standards
- functional logo stress tests
- canonical editable sources
- verification after Figma writes
- no downgrade to images when remote automation fails
- `FINAL` only after applicable completion gates pass

Read **[STRICT MODE](./docs/STRICT_MODE.md)**.

---

## Tested through real project work

This operating specification was developed iteratively rather than written as a single theoretical prompt.

Multiple earlier workflows were tried and compared during real identity work. The exact canonical file in this repository is the version that produced the strongest overall result in that testing, so it is deliberately preserved unchanged.

One real test case involved a bilingual multi-product digital travel ecosystem with existing UI/UX, Arabic + English, RTL/LTR, app icons, tokens, and editable Figma handoff requirements.

See the sanitized **[SAFRA case study](./case-studies/SAFRA.md)**.

---

## Canonical core integrity

The tested core is intentionally immutable for this release:

```text
MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md
```

Its SHA-256 fingerprint is stored in [`CORE_SHA256.txt`](./CORE_SHA256.txt).

GitHub Actions verifies the fingerprint on pushes and pull requests. A one-byte change causes the integrity check to fail.

This protects reproducibility: documentation and companion rules can improve without silently changing the prompt that produced the tested result.

---

## Repository map

```text
.
├── MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md   # canonical tested core — do not edit
├── CORE_SHA256.txt
├── README.md                                    # English
├── README_AR.md                                 # العربية
│
├── docs/
│   ├── FIGMA_REQUIRED_FINAL_OUTPUT.md
│   ├── HOW_TO_USE.md
│   ├── HOW_IT_WORKS.md
│   ├── DISCOVERY_WORKFLOW.md
│   ├── FIGMA_WORKFLOW.md
│   ├── STRICT_MODE.md
│   ├── FAQ.md
│   └── ar/                                      # Arabic documentation
│
├── examples/
│   ├── MINIMAL_INPUT.md
│   ├── EXISTING_PRODUCT.md
│   ├── MULTILINGUAL_PROJECT.md
│   └── APPROVED_IDENTITY_TO_FIGMA.md
│
├── templates/
├── case-studies/
│   ├── SAFRA.md
│   └── SAFRA_AR.md
│
├── figma/
│   └── importer-template/
│
└── .github/
    ├── workflows/verify-core.yml
    ├── workflows/repo-qa.yml
    ├── CODEOWNERS
    ├── ISSUE_TEMPLATE/
    └── pull_request_template.md
```

---

## What this project does not promise

This is an operating specification for AI-assisted creative work — not an autonomous branding agency and not a legal certification system.

Human judgment still matters. In particular:

- generated marks still need appropriate trademark clearance before commercial launch
- font, image, icon, and third-party asset licenses must be confirmed
- changing platform rules should be re-verified
- accessibility checks must match the real product and media
- AI-generated creative work should be reviewed for originality and production quality
- Figma/API capabilities vary by account, plan, and available tools

---

## Contributing

Contributions are welcome, but the tested canonical file is intentionally protected.

Useful contributions include model-compatibility results, reproducible workflow improvements, better discovery methods, accessibility/RTL improvements, Figma reliability improvements, production case studies, documentation, and verified platform-rule updates.

Read **[CONTRIBUTING.md](./CONTRIBUTING.md)**.

---

## License

- **Canonical operating specification and documentation:** CC BY 4.0
- **Code / automation examples:** MIT

See **[LICENSE.md](./LICENSE.md)**.

---

## Independence notice

This is an independent open-source project. It is not an official OpenAI, ChatGPT, Figma, Apple, Google, or Android project and is not endorsed by those companies.

“ChatGPT” and “Figma” are used descriptively to identify the intended product environments.

---

## Project status

**Public release:** `v1.0.0`  
**Canonical core:** tested / stable / immutable for this release  
**Primary environment:** normal ChatGPT conversation  
**Required production end state:** editable Figma master or tested local importer fallback  
**Codex:** not the intended environment
