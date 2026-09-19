# Figma Workflow — العربية

[English](../FIGMA_WORKFLOW.md) | [العربية](./FIGMA_WORKFLOW.md)

الهدف هنا ليس شرح كيف *يمكن* بناء الملف في Figma، بل الوصول إلى **Editable Figma Master فعلي** عندما يكون Figma هو التسليم المطلوب.

## الحالة المطلوبة

التسليم الاحترافي داخل Figma يجب أن يتضمن ما ينطبق على المشروع، مثل:

- Pages / Sections منظمة
- Editable vector logos
- Logo variants
- Components
- Variants عند فائدتها
- Figma Variables
- Paint Styles
- Text Styles
- Graphic elements قابلة للتعديل
- Product/App icons
- Design-token references
- Export settings
- Presentation frames منفصلة عن Master Assets

## ما لا يُعتبر Figma احترافيًا

هذه الحالات لا تكفي:

- إدخال PNG واحدة إلى Frame
- إدخال Brand Board كصورة واحدة
- PDF مسطح
- SVG واحدة تحتوي العرض كله ككتلة غير منظمة
- Screenshots يتم وصفها بأنها editable
- شرح بنية Figma دون إنشاء الملف فعليًا

## Direct Figma Automation

إذا كانت أدوات Figma متاحة:

1. تحقق من الملف والحساب والصلاحيات.
2. ابنِ الهيكل أولًا.
3. اكتب على دفعات صغيرة Atomic Writes.
4. تحقق بعد كل دفعة.
5. افحص Frames/Sections/Components/Variables فعليًا.
6. افحص لقطات ممثلة بصريًا.
7. أصلح الأخطاء قبل المتابعة.

لا تعتمد على Success notification فقط.

## Page / Plan Limits

إذا كانت الخطة تحد عدد الصفحات، لا تتوقف.

استخدم مثلًا:

```text
Page 1 — Brand System
  Section A — Strategy
  Section B — Logo
  Section C — Colors & Typography

Page 2 — Product System
  Section A — Product Family
  Section B — UI Applications
  Section C — Accessibility / RTL

Page 3 — Production
  Section A — Variables
  Section B — Components
  Section C — Tokens / Exports
```

أو Master Canvas واحد مع Sections واضحة.

## عند فشل MCP/API

لا تعيد نفس العملية الكبيرة مرارًا.

افحص هل السبب:

- Permission
- Quota
- Rate limit
- Plan restriction
- Unsupported operation
- Timeout
- Invalid asset data

ثم قلّل حجم الدفعات وحاول بطريقة أكثر موثوقية.

## Local Figma Development Plugin Fallback

إذا تعذر Remote Automation، يكون البديل الاحترافي Plugin محلي يعمل داخل Figma Desktop.

الحد الأدنى:

```text
manifest.json
code.js
README.md
```

ويجب أن يستطيع حسب نطاق المشروع:

- إنشاء Sections / Frames
- استيراد SVG كـeditable vector nodes
- إنشاء Components
- إنشاء Variables / Styles
- وضع Master Assets
- ضبط Export Settings
- إعادة التشغيل بأمان
- حذف/تحديث ما أنشأه هو فقط
- عدم المساس بأعمال المستخدم الأخرى

يوجد Scaffold عام هنا:

[`../../figma/importer-template/`](../../figma/importer-template/)

## الهوية المعتمدة

إذا كانت الهوية الحالية معتمدة، فهدف Figma Workflow هو **Productionization وليس Redesign**.

يتم الحفاظ على الاتجاه الإبداعي نفسه وتحويله من Presentation إلى Production System.

## الشرط الإلزامي الجاهز

إذا كان Figma يجب أن يكون النتيجة النهائية دون استثناء، استخدم:

[`FIGMA_REQUIRED_FINAL_OUTPUT.md`](./FIGMA_REQUIRED_FINAL_OUTPUT.md)
