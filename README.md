# ChatGPT Brand Identity OS

> **From a rough idea to a complete professional visual identity and editable Figma handoff — inside a normal ChatGPT conversation.**

[![Canonical Core](https://img.shields.io/badge/core-canonical%20%26%20immutable-14201D)](./MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md)
[![For ChatGPT](https://img.shields.io/badge/designed%20for-ChatGPT-10A37F)](https://chatgpt.com/)
[![Not Codex](https://img.shields.io/badge/not%20for-Codex-D53A27)](#chatgpt-not-codex)
[![Core Integrity](https://github.com/yazanmg/chatgpt-brand-identity-os/actions/workflows/verify-core.yml/badge.svg)](https://github.com/yazanmg/chatgpt-brand-identity-os/actions/workflows/verify-core.yml)

---

> [!IMPORTANT]
> ## This project is for normal ChatGPT conversations — **NOT Codex**
>
> Upload the canonical `.md` file into a regular ChatGPT conversation together with whatever you already know about your project. The system guides the conversation through discovery, research, strategy, creative exploration, production, editable Figma, QA, and professional handoff.
>
> It is **not** an `AGENTS.md`, coding-agent rule set, repository instruction file, or Codex workflow.

## What is this?

**ChatGPT Brand Identity OS** is a tested, discovery-first operating specification for creating a complete professional visual identity with ChatGPT.

It is not a one-shot logo prompt.

It is designed to help ChatGPT behave more like a coordinated brand team: understand the project first, ask only the questions that matter, research the real context, explore distinct creative directions, systematize the selected direction, stress-test it, and continue until the work is actually usable by designers, developers, marketers, and production teams.

The canonical operating specification is:

**[`MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md`](./MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md)**

That file is intentionally preserved exactly as tested. The surrounding documentation explains how to use it; it does not rewrite the canonical core.

---

## Why this exists

A typical AI branding request looks like this:

> “Create a visual identity for my project.”

That often ends with a logo concept, moodboard, a beautiful brand board, or a flattened PNG/PDF.

Those can be useful exploration artifacts — but they are not a complete brand identity system.

A production-ready identity may also need:

- a strategic foundation
- audience and category understanding
- brand architecture
- multiple genuinely different creative territories
- a full logo family
- clear-space and minimum-size rules
- color architecture
- typography hierarchy
- multilingual / RTL behavior
- iconography
- graphic language
- product-family logic
- app icons and platform assets when relevant
- accessibility validation
- real touchpoint testing
- design tokens when relevant
- editable vectors
- Figma Variables / Components / Styles when relevant
- export-ready masters
- documentation and governance
- a handoff another professional can continue without guessing

This repository exists to make that deeper workflow repeatable.

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
| Flat palette | Role-based color system; semantic tokens when relevant |
| English-first | Multilingual / RTL aware when required |
| “Looks good” = done | Explicit completion gates + three QA passes |
| PNG/PDF ending | Editable vector masters and professional handoff |
| Figma described, not built | Editable Figma workflow with failure recovery |

---

## Quick Start

### 1. Download the canonical file

Download:

[`MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md`](./MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md)

### 2. Open a normal ChatGPT conversation

Do **not** start this as a Codex coding task.

### 3. Upload the `.md` file

Also upload anything you already have. For example:

- a project name
- a one-sentence idea
- product brief
- existing logo
- UI/UX screenshots
- Figma exports
- current brand guidelines
- product documentation
- website copy
- design tokens
- app icons
- packaging
- a multi-product map

You do **not** need to prepare a professional brief first.

### 4. Send this message

```text
Use MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md as the governing operating specification for this project.

Read all supplied project material first.

If the brief is incomplete, conduct the adaptive discovery interview one question at a time until the Brand Brief Sufficiency Gate passes.

Then continue through the complete professional brand identity workflow, including research, strategy, creative territories, production, editable master/Figma workflow, QA, and handoff as applicable to the real project.

Use STRICT MODE.
```

### 5. Continue the conversation normally

If important information is missing, ChatGPT should ask focused questions instead of inventing answers or jumping directly to aesthetics.

Once the brief is sufficiently clear, the workflow progresses into research, strategy, creative territories, production, and handoff.

See **[How to Use](./docs/HOW_TO_USE.md)** for the detailed workflow.

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
Design tokens + platform assets when relevant
        ↓
Canonical editable masters
        ↓
Editable Figma workflow when appropriate
        ↓
Professional package + documentation
        ↓
Three-pass final QA
        ↓
FINAL
```

---

## Start with almost nothing

The workflow is intentionally able to begin with very sparse input.

For example:

```text
I am building a coffee delivery service for university students.
```

Instead of immediately inventing a color palette and logo, the system should progressively understand the offer, audience, decision context, alternatives, differentiation, desired perception, priority touchpoints, constraints, and definition of success.

The interview is adaptive: it asks only the highest-value unresolved question, then chooses the next question based on the answer.

See **[Discovery Workflow](./docs/DISCOVERY_WORKFLOW.md)**.

---

## Three-pass research

The system separates research into three different jobs:

**Pass A — Category, audience, and context**  
Understand the world the brand enters.

**Pass B — Visual landscape and differentiation**  
Understand conventions, clichés, confusion risks, and whitespace.

**Pass C — Platform, production, accessibility, and implementation**  
Verify the real constraints the final identity has to survive.

This prevents “trend browsing” from being mistaken for research.

---

## Creative territories before final production

When broad exploration is justified, the workflow creates multiple **structurally different** creative territories — not the same logo in three colors.

Each direction should be compared on the same benchmark surfaces so presentation polish cannot unfairly favor one option.

The selected direction is then developed into the production system.

---

## Editable Figma, not a flattened board

A core lesson behind this project is simple:

> A beautiful brand board is not the same thing as a professional editable identity master.

When Figma is appropriate, the workflow aims for real editable structure:

- vector masters
- organized Pages / Sections
- Components
- Variables
- Styles
- production assets
- export settings
- source-of-truth relationships

If remote Figma automation is unreliable or quota-limited, the operating specification defines a recovery path instead of downgrading the handoff to screenshots:

```text
Direct Figma automation
        ↓
Small atomic writes
        ↓
Verify after writes
        ↓
Adapt to plan/page limits with Sections
        ↓
Local Figma Development Plugin fallback when needed
```

Read **[Figma Workflow](./docs/FIGMA_WORKFLOW.md)**.

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

Why? Brand identity work here is intentionally conversational. The user and ChatGPT progressively discover, inspect, compare, correct, approve, and refine the identity together.

---

## STRICT MODE

`STRICT MODE` raises the quality bar.

Among other things, it requires that:

- discovery happens when the brief is insufficient
- supplied evidence is inspected before asking repetitive questions
- missing business facts are not invented
- research is completed at the depth the project requires
- skipped phases require an explicit reason
- important standards are re-verified against current official requirements
- logo directions pass functional stress tests before selection
- final assets have canonical editable sources
- Figma writes are verified when automation is used
- remote automation failure does not justify abandoning editable handoff
- `FINAL` is forbidden until the applicable review gates pass

See **[STRICT MODE](./docs/STRICT_MODE.md)**.

---

## Tested through real project work

This operating specification was developed iteratively rather than written as a single theoretical prompt.

Multiple earlier workflows were tried and compared during real brand-identity work. The canonical file in this repository is the version that produced the strongest overall result in that testing, so it is deliberately preserved unchanged.

One of the real test cases involved a bilingual, multi-product digital travel ecosystem with existing UI/UX, multiple product roles, RTL/LTR requirements, app icons, design tokens, and editable Figma handoff requirements.

The process helped move the work from existing product evidence through audit, strategy, creative directions, systemization, production assets, and an editable Figma master.

See the sanitized **[SAFRA case study](./case-studies/SAFRA.md)**.

---

## Canonical core integrity

The canonical file is intentionally immutable for this release:

```text
MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md
```

Its SHA-256 fingerprint is stored in:

[`CORE_SHA256.txt`](./CORE_SHA256.txt)

GitHub Actions verifies the fingerprint on pushes and pull requests. If even one byte changes, the integrity check fails.

Why? Reproducibility. If the tested core keeps changing silently, results cannot be compared meaningfully.

Improvements should first be proposed as documentation, experiments, issues, or future version work — never silently patched into the canonical release.

---

## Repository map

```text
.
├── MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md   # canonical tested core — do not edit
├── CORE_SHA256.txt                              # integrity fingerprint
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE.md
├── NOTICE.md
│
├── docs/
│   ├── HOW_TO_USE.md
│   ├── HOW_IT_WORKS.md
│   ├── DISCOVERY_WORKFLOW.md
│   ├── FIGMA_WORKFLOW.md
│   ├── STRICT_MODE.md
│   └── FAQ.md
│
├── templates/
│   ├── BRAND_BRIEF_TEMPLATE.md
│   ├── AI_BRAND_RULES_TEMPLATE.md
│   ├── DECISIONS_TEMPLATE.md
│   └── ASSET_MANIFEST_TEMPLATE.md
│
├── examples/
│   ├── MINIMAL_INPUT.md
│   ├── EXISTING_PRODUCT.md
│   └── MULTILINGUAL_PROJECT.md
│
├── case-studies/
│   └── SAFRA.md
│
└── .github/
    ├── workflows/verify-core.yml
    ├── CODEOWNERS
    ├── ISSUE_TEMPLATE/
    └── pull_request_template.md
```

---

## What this project does **not** promise

This is an operating specification for AI-assisted creative work — not an autonomous branding agency and not a legal certification system.

Human judgment still matters.

In particular:

- generated marks still need appropriate trademark clearance before commercial launch
- font, image, icon, and third-party asset licenses must be confirmed
- current platform rules should be re-verified when used
- accessibility checks should match the real product and media
- AI-generated creative work should be reviewed for originality and production quality
- Figma/API capabilities vary by account, plan, and available tools

---

## Contributing

Contributions are welcome, but the tested canonical file is intentionally protected.

Useful contributions include:

- documented model-compatibility results
- reproducible workflow improvements
- better discovery methods
- accessibility / RTL / multilingual improvements
- Figma reliability improvements
- production case studies
- better documentation
- platform-rule updates

Read **[CONTRIBUTING.md](./CONTRIBUTING.md)** before opening a PR.

---

## License

- **Canonical operating specification and documentation:** CC BY 4.0
- **Code / automation examples:** MIT

See **[LICENSE.md](./LICENSE.md)**.

---

## Independence notice

This is an independent open-source project. It is not an official OpenAI, ChatGPT, Figma, Apple, Google, or Android project and is not endorsed by those companies.

“ChatGPT” is used descriptively to identify the intended conversational product environment.

---

## Project status

**Public release:** `v1.0.0`  
**Canonical core:** tested / stable  
**Primary environment:** normal ChatGPT conversation  
**Codex:** not the intended environment

If you use the system for a real project, share what worked, what failed, and what the final handoff looked like. Reproducible case studies are especially valuable.