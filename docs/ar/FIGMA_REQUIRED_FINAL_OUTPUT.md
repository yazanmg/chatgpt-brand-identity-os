# شرط التسليم النهائي الإلزامي — Figma

[English](../FIGMA_REQUIRED_FINAL_OUTPUT.md) | [العربية](./FIGMA_REQUIRED_FINAL_OUTPUT.md)

هذا الشرط يُرسل **مع** ملف `MASTER_BRAND_IDENTITY_OPERATING_SYSTEM.md` عندما تريد أن تكون النتيجة النهائية مشروع Figma احترافيًا قابلًا للتعديل، وليس مجرد صورة أو Brand Board.

## النص الجاهز للنسخ

```text
NON-NEGOTIABLE FINAL DELIVERABLE — FIGMA REQUIRED

The final result of this project MUST be a real, professional, fully editable Figma Brand Identity Master File.

A generated image, moodboard, brand board, PNG/JPG, PDF, contact sheet, flattened presentation, or a description of what a Figma file should contain is NOT the final deliverable and does NOT satisfy the task.

Images may be used only for exploration, previews, mockups, presentation, or approval. DO NOT STOP after generating them.

Continue until the approved visual identity has been productionized inside Figma with real editable structure, including the applicable items below:
- editable vector logo masters
- organized Pages and/or Sections
- Frames
- Components and useful Variants
- Figma Variables
- Paint Styles
- Text Styles
- reusable graphic elements
- product/app icon masters when relevant
- color system
- typography system
- logo variants and construction rules
- RTL/LTR and multilingual examples when relevant
- design tokens when relevant
- export settings
- clean Master Assets separated from presentation frames

DO NOT simply import the final brand-board image into Figma and call it editable.
DO NOT use a single flattened SVG/PDF as a fake editable deliverable.
Reconstruct the underlying production system.

If the visual identity has already been approved, DO NOT redesign it just to satisfy this requirement. Preserve the approved creative direction and convert that exact work into a professional editable Figma production system.

If direct Figma creation is available, create the Figma file yourself and verify the actual nodes, vectors, Components, Variables, Styles, Sections, text, and export settings after writing.

If direct Figma creation is unavailable or fails because of MCP/API/tool limits, quota, plan restrictions, connection problems, or unsupported write operations, DO NOT downgrade the final result to an image or PDF.

Instead, create a local Figma Development Importer Plugin containing at minimum:
- manifest.json
- code.js
- README.md

The plugin must reconstruct the identity inside Figma Desktop using editable vectors, Sections/Frames, Components, Variables/Styles, and export settings. It must be safe to rerun and must not destroy unrelated user work.

DEFINITION OF DONE:
The task is NOT complete until a professional editable Figma master actually exists, OR a tested local Figma Development Importer capable of creating that editable master is delivered when direct Figma writing is technically blocked.

Do not stop at the image stage.
Do not declare the brand identity final before the editable Figma deliverable is ready.
```

## لماذا هذا الشرط مهم؟

قد ينشئ ChatGPT اتجاهًا بصريًا ممتازًا ثم يتوقف عند صورة واحدة. هذه الصورة قد تكون ممتازة لاعتماد الاتجاه، لكنها ليست ملف هوية إنتاجي قابلًا للتعديل.

الفرق هو:

```text
اتجاه بصري / Brand Board
        ↓
      اعتماد
        ↓
تحويل الهوية إلى نظام إنتاجي
        ↓
ملف Figma قابل للتعديل
        ↓
تسليم احترافي
```

بالتالي شرط Figma هو **شرط إنهاء للمشروع**، وليس طلبًا لإعادة تصميم الهوية التي تم اعتمادها.

## طريقة الاستخدام

ارفع ملف الـOperating System الأساسي في محادثة ChatGPT العادية، ثم أرسل أمر البداية وألحق به الشرط أعلاه.

إذا كانت الهوية الحالية معتمدة أصلًا ولا تريد تغييرها، استخدم المثال المخصص:

[`APPROVED_IDENTITY_TO_FIGMA.md`](../../examples/APPROVED_IDENTITY_TO_FIGMA.md)
