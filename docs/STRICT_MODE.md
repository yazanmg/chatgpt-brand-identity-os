# STRICT MODE

`STRICT MODE` is the recommended mode for serious brand identity projects.

It tells the AI to prioritize process integrity and verifiable production quality over speed or premature visual output.

The canonical definition lives in `MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md`. This document is a user-facing explanation.

## Activate it

Include this line in the start command:

```text
Use STRICT MODE.
```

## What changes?

STRICT MODE makes several behaviors non-optional when they apply.

### Discovery cannot be skipped when the brief is insufficient

If supplied evidence cannot pass the Brand Brief Sufficiency Gate, the AI must conduct adaptive discovery.

It should not compensate for missing business information with plausible-sounding assumptions.

### One main discovery question at a time

Unless the user explicitly requests a batch questionnaire, discovery stays conversational.

### Existing evidence must be read first

The AI should not ask users to repeat information that is clearly available in supplied project material.

### No leading aesthetic questions

Discovery should use broad → probe → specific funneling rather than steering users toward fashionable colors/styles.

### No invented business facts

The AI must not manufacture:

- mission
- values
- audience beliefs
- differentiators
- reasons to believe
- market facts
- legal/trademark status
- production constraints

Unknowns remain explicit until resolved.

### Research is required at the depth the project needs

The three research passes should be completed before committing to the final creative direction when they are applicable.

### Skipped phases need a reason

A phase may be irrelevant, but it should not disappear silently.

### Design decisions need rationale

The final identity should be traceable to strategy, evidence, research, system logic, user context, or production requirements — not simply “this looks nicer.”

### Current standards must be re-verified

Platform/tool/accessibility requirements that may change over time should be checked against current official documentation when executed.

### Logo directions must survive functional tests

Applicable tests include:

- monochrome
- grayscale
- small size
- product-family comparison
- background stress
- real touchpoint behavior

### Accessibility evidence matters

When text/UI color pairs are part of scope, contrast should be measured rather than assumed.

### Canonical editable sources are required

A flattened output is not sufficient for final production assets.

### Platform icon production cannot be hand-waved

If app icons are part of scope, the current platform-appropriate production structure should be created and verified.

### Figma automation must be verified

When Figma writes are performed, the AI should inspect the result after writing.

A tool reporting success is not enough.

### Remote Figma failure is not permission to abandon editable handoff

When Figma is a required master, the documented recovery workflow should be used.

### `FINAL` is gated

The AI must not mark the identity final until all applicable final-review passes and completion gates succeed.

## When should I use STRICT MODE?

Recommended for:

- startup/company identity that will launch publicly
- rebrands
- product families
- multilingual brands
- apps/web products
- high-trust categories
- work that will be implemented by a development team
- work going to print/fabrication
- identity systems expected to live for years

For quick ideation, you can choose a lighter exploratory conversation. But once a direction is intended for real use, STRICT MODE is the safer default.

## Does STRICT MODE mean the AI asks endless questions?

No.

The operating system explicitly says discovery should stop when the brief is sufficient. More questions are not inherently better.

STRICT MODE is about refusing unjustified shortcuts, not maximizing bureaucracy.

## Does STRICT MODE remove creativity?

No.

It separates creative freedom from production sloppiness.

The AI can still explore bold, unusual, expressive territories. The difference is that selected work must also survive real context, accessibility, reproduction, and handoff.
