# FAQ

## Is this for ChatGPT or Codex?

**Normal ChatGPT conversations.**

This repository is not intended as a Codex prompt, `AGENTS.md`, coding-agent rule set, or repository automation instruction set.

The workflow is designed around a conversation in which the user and ChatGPT inspect evidence, discover missing information, compare creative directions, approve major decisions, and build the identity together.

## Do I need a complete brand brief before I start?

No.

You can start with a project name or a one-sentence idea. The operating specification includes an adaptive discovery workflow for building the missing brief.

If you already have a complete brief, upload it and discovery should become much shorter.

## Will it ask me every question in the file?

No.

The discovery question bank is not a rigid questionnaire. The AI should ask only what is materially unresolved and stop when the Brand Brief Sufficiency Gate passes.

## Can I use it for an existing brand?

Yes.

The canonical system supports identity refreshes, rebrands, product extensions, multi-product systems, identity extraction from existing UI/product work, and identity-to-design-system conversion.

## Can I use it for something that is not an app or website?

Yes.

The specification is intended to adapt to physical products, restaurants, retail, hospitality, events, nonprofits, personal brands, packaging, signage, apparel, environmental systems, and other identity contexts.

Digital-only deliverables should not be forced onto projects that do not need them.

## Does it always create three concepts?

No.

Multiple structurally different creative territories are the normal default when broad exploration is justified. Fewer may be appropriate when a direction is already approved or the task is intentionally narrow.

## I already love the identity ChatGPT made. Can I use this only to turn it into a professional system?

Yes.

Tell ChatGPT the current creative direction is approved and must not be redesigned. Ask it to use the operating specification for productionization: vectors, system rules, Figma, tokens where relevant, exports, guidelines, QA, and handoff.

## Does it guarantee that the logo is legally safe?

No.

Design research is not trademark clearance. Commercial launch may require professional trademark searches/clearance in the relevant classes and markets.

## Does it guarantee originality?

No AI workflow can guarantee legal originality automatically.

The specification does include category-cliché, competitor-confusion, silhouette, one-color, remove-the-logo, and other tests intended to reduce generic output and obvious visual collisions.

Human review and appropriate legal clearance still matter.

## Does it guarantee a Figma file?

It defines the desired editable Figma workflow when Figma is appropriate and requested.

Actual direct creation depends on the ChatGPT tools/integrations available in the current environment and the connected Figma account/plan.

When remote automation fails, the canonical specification includes a staged fallback that can culminate in a local Figma Development Plugin importer rather than accepting a flattened board as the final master.

## Why not just ask ChatGPT to “make a brand identity”?

You can, but a short one-shot prompt leaves many decisions implicit.

This operating specification exists to make the process explicit and reproducible: discovery, research, strategy, architecture, creative divergence, real-touchpoint testing, production, editable masters, and QA.

## Is the canonical `.md` supposed to be edited for every project?

No.

Treat the canonical file as the workflow specification. Give project-specific information in the conversation or in separate project files.

For this public release the canonical file is protected by an integrity hash because it is the exact version that was tested successfully.

## Why is the canonical file so long?

It has to handle many possible project types and failure modes.

A user does not manually execute every section. The AI should determine which modules apply to the actual project and mark irrelevant modules as not applicable.

The interaction itself should still feel focused.

## Can I shorten the file?

You can fork and experiment, but you would no longer be testing the exact canonical release.

If you develop a shorter version that performs reliably, share the methodology/results as an issue or contribution rather than silently replacing the tested core.

## Can I use another AI model?

The canonical specification is written as a portable Markdown operating prompt, so other file-aware conversational models may be able to use it.

However, this repository's primary tested/intended environment is **normal ChatGPT conversation**. Other model compatibility should be reported as tested evidence rather than assumed.

## Does this repository belong to OpenAI?

No.

It is an independent open-source project. “ChatGPT” is used descriptively to identify the intended product environment.

## What should I share if I test it?

Useful test reports include:

- project type
- how much input you started with
- which ChatGPT configuration/model you used, if known
- whether discovery behaved correctly
- whether creative territories were meaningfully different
- whether the result reached production assets/editable handoff
- where the workflow became confusing or failed
- screenshots that you have permission to publish

Never publish client/private material without authorization.
