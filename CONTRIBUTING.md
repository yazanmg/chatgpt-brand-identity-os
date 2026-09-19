# Contributing

Thank you for helping improve ChatGPT Brand Identity OS.

## The most important rule

**Do not directly edit `MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md` in the `v1.0.0` release line.**

The canonical file is the exact version that was tested and selected after multiple iterations. Its SHA-256 is intentionally verified by CI so results remain reproducible.

If you believe the canonical workflow should change, open an issue describing the problem, evidence, proposed method, and how you tested it. A future version can evaluate the change explicitly.

## Contributions we want

Useful contributions include:

- reproducible ChatGPT compatibility reports
- real-project case studies you are authorized to publish
- clearer documentation
- discovery-method improvements supported by evidence/testing
- accessibility improvements
- multilingual / Arabic / RTL / bidi improvements
- Figma automation reliability techniques
- production/handoff improvements
- print, packaging, signage, fabrication, or other specialist modules
- current platform-rule corrections
- tests that expose generic or fragile AI branding behavior

## What makes a good workflow proposal?

Prefer proposals that are:

- reproducible
- tied to a real failure or measurable need
- grounded in official requirements when a requirement exists
- supported by actual project testing when possible
- transferable across projects
- explicit about tradeoffs

Avoid proposals whose only argument is:

> “I think this looks better.”

The system can support subjective creative judgment, but universal workflow rules should have a stronger basis than individual taste.

## Bug reports

A good bug report includes:

- ChatGPT environment/configuration if known
- project type
- starting material
- workflow phase where the problem occurred
- what the canonical specification should have caused
- what happened instead
- whether STRICT MODE was used
- screenshots/logs that you are allowed to publish

Never post client secrets or private project data.

## Model compatibility reports

If you test the canonical file with another conversational model, clearly distinguish:

- tested behavior
- expected behavior
- unsupported tools/features
- workarounds

Do not mark a model “supported” based only on reading the file.

## Pull requests

Documentation/code PRs should:

1. preserve the canonical core hash;
2. keep normal ChatGPT conversation as the primary intended environment;
3. avoid claiming unofficial affiliation with OpenAI or other vendors;
4. distinguish current platform facts from general workflow principles;
5. avoid publishing private case-study content;
6. keep Figma/editable handoff separate from flattened screenshots.

## Canonical core changes

Direct PR changes to the canonical core are intentionally blocked by the integrity check.

For a proposed future core revision:

1. open a workflow-improvement issue;
2. describe the exact failure being solved;
3. provide evidence or testing;
4. propose the smallest justified change;
5. test it against representative project modes;
6. compare results with the existing canonical release;
7. only then consider a future versioned core.

## Licensing contributions

By contributing, you agree that:

- documentation/prompt contributions may be distributed under CC BY 4.0;
- code/automation contributions may be distributed under the MIT License;
- you have the right to contribute the material you submit.

See [`LICENSE.md`](./LICENSE.md).
