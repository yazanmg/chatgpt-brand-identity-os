# Adaptive Discovery Workflow

The discovery system is one of the central differences between ChatGPT Brand Identity OS and a typical logo prompt.

The goal is to let a user begin with incomplete information without forcing the AI to guess the missing strategy.

## The rule

By default, discovery should be conversational:

**one main question at a time**.

The AI should inspect existing evidence first, ask the broadest useful question, listen, update what is known, and then choose the next highest-value unresolved question.

## Why not use a fixed questionnaire?

A fixed questionnaire creates two problems:

1. it asks users questions their files may already answer;
2. it gives equal weight to high-impact and low-impact unknowns.

The operating system instead uses a semi-structured approach: stable information goals, adaptive sequencing.

## Evidence states

Important facts are tracked as:

### `CONFIRMED`
Explicitly supplied or approved by the user.

### `EVIDENCED`
Clearly supported by supplied project material.

### `RESEARCH-SUPPORTED`
Supported by relevant external research.

### `OPEN`
Unresolved and unsafe to assume.

An `OPEN` item must not silently become a fact.

## Question-selection loop

After a meaningful answer:

```text
Update evidence map
      ↓
Identify highest-impact unresolved field
      ↓
Ask one neutral question
      ↓
Probe only if needed
      ↓
Update evidence map again
      ↓
Re-check brief sufficiency
```

More questions are not automatically better.

## Funnel questioning

When a topic needs depth, use:

```text
Broad question
    ↓
Open follow-up
    ↓
Specific clarification
```

Example:

> Tell me about the people this brand most needs to win over.

Then, only if needed:

> What matters most to them when choosing between alternatives?

Then:

> Which of those concerns matters most at the actual moment of decision?

The user should be allowed to describe the situation in their own language before narrow options are introduced.

## Neutral-question rule

Avoid embedding the answer in the question.

Weak:

> Do you want the brand to feel modern and trustworthy?

Better:

> How should people describe the brand after they experience it?

Weak:

> Would blue communicate trust?

Better:

> Are there existing colors with real recognition or meaning for the brand? What are they and why?

## Discovery coverage

Depending on the project, discovery may need to understand:

- what is being branded
- why identity work is happening now
- offer/problem/value
- primary audience and decision context
- alternatives and status quo
- credible differentiation
- desired and undesired perception
- personality and voice
- existing brand equity
- references and anti-references
- brand architecture
- priority touchpoints
- languages, scripts, markets
- production/implementation constraints
- legal/licensing constraints
- likely future growth
- required deliverables
- decision/approval process
- success criteria

This is a **coverage map**, not a list to dump on the user.

## Conditional discovery

Specialized branches activate only when relevant.

### Existing brand or UI

Investigate recognition/equity, what must remain, what may evolve, and what is failing.

### Multiple products or services

Resolve brand architecture before designing unrelated sub-brand logos.

### Multiple languages/scripts

Investigate primary language, script coverage, bilingual lockups, localization, bidi/RTL, regional meaning, and font support.

### Digital product

Investigate platforms, implementation stack, existing design system, themes, accessibility, responsive behavior, and app-icon requirements.

### Physical production

Investigate substrate, reproduction method, size, color process, fabrication, signage, packaging, embroidery/engraving, or other real production constraints.

### High-trust or regulated context

Investigate trust signals, disclosure/compliance needs, claims, accessibility, and risk.

## Visual references

A reference image is not automatically a design instruction.

The AI should identify what the user actually responds to, such as:

- restraint
- energy
- typography
- spacing
- geometry
- photography
- editorial character
- information density
- motion
- premium perception

The objective is to extract transferable principles, not copy another identity.

## No premature aesthetics

Unless the project is already strategically defined, discovery should not begin with:

- favorite color
- favorite font
- preferred logo type
- trendy style labels

Those questions can prematurely constrain the solution before the business/audience problem is understood.

## Brand Brief Sufficiency Gate

Discovery ends when the project can proceed without strategic guessing.

At minimum, the process should understand the applicable answers to questions such as:

- What are we branding?
- Why is this work happening now?
- Who must the brand matter to?
- What matters to that audience?
- What functional value is promised?
- What emotional outcome is desired?
- What credible difference should the identity express?
- What should the brand be associated with — and never associated with?
- Where must the identity work?
- What existing equity/constraints matter?
- What does success mean?

When sufficient, the AI synthesizes an operational brief and gives the user a chance to correct factual or strategic interpretation before creative exploration begins.

## If the user does not know

“I don’t know” is a valid answer.

The AI should:

- keep the item `OPEN`, or
- research it when it is an external fact, or
- present a clearly labeled assumption for approval.

It should not pressure the user into manufacturing an answer just to complete a form.

## Good discovery feels shorter than the specification

The canonical operating system is long because it has to handle many project types.

A real conversation should ask only what the current project needs.

Rich evidence should shorten discovery.
Sparse or conflicting evidence should deepen it.
