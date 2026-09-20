# مثال — هوية معتمدة → Professional Editable Figma

[English](../APPROVED_IDENTITY_TO_FIGMA.md) | العربية

استخدم هذا الوضع عندما يكون ChatGPT قد أنشأ هوية بصرية أعجبتك وأنت **لا تريد إعادة التصميم**. الهدف هو تحويل الشغل الإبداعي المعتمد إلى Production System احترافي.

## الحالة

لديك Brand Board أو Logo/Color/Typography direction معتمد، لكن النتيجة ما زالت Flat image أو Presentation، وأنت تحتاج Vectors، Components، Variables/Styles، Logo variants إنتاجية، Product assets، Figma Sections/Pages منظمة، Export settings، Tokens عند الحاجة وProfessional handoff.

## قل لـChatGPT بوضوح

```text
The visual identity you already created is APPROVED.

Do NOT redesign it.
Do NOT create new concepts.
Do NOT change the approved logo, color direction, typography direction, graphic language, or product-family concept unless a technical reconstruction is necessary to make an asset production-ready.

Use MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md for the production and handoff phases only.

Turn the existing approved identity into a complete, professional, fully editable Figma Brand Identity Master System.

Do not stop at another image, brand board, PNG, JPG, or PDF.

Reconstruct the underlying system as editable vectors, Components, Variables/Styles, organized Sections/Pages, production assets, export settings, and project-relevant design tokens.

If direct Figma automation fails because of quota, plan limitations, API/tool behavior, or connection issues, follow the documented Figma recovery workflow and create a project-specific local Figma Development Plugin importer rather than downgrading the handoff to flattened screenshots.

Preserve the approved creative direction. Productionize it; do not redesign it.
```

وأرسل كذلك **شرط Figma الإلزامي** الموجود في `docs/ar/FIGMA_REQUIRED_FINAL_OUTPUT.md`.

## Presentation مقابل Production

```text
Approved Direction / Presentation
                 ≠
Canonical Master Assets
```

لا يجب أن يضطر مصمم أو مطور إلى قص Logo من Brand Board.

## Figma fallback

```text
Direct write
   ↓
Atomic smaller writes
   ↓
Verify actual nodes
   ↓
Adapt Pages → Sections when necessary
   ↓
Project-specific local Development Plugin importer
```

## الدرس الأساسي

عندما تكون الهوية معتمدة، تتحول المهمة من **Brand Exploration** إلى **Production Design + System Architecture + Handoff**.