# Case Study — SAFRA / سفرة

[English](./SAFRA.md) | [العربية](./SAFRA_AR.md)

> دراسة حالة من مشروع فعلي بعد إزالة التفاصيل الخاصة. هذه الصفحة تشرح الـWorkflow والدروس بدون نشر ملفات المشروع الداخلية أو الشاشات غير المخصصة للنشر.

## لماذا هذه التجربة مهمة؟

تم اختبار الـOperating Specification الأساسي تدريجيًا خلال عمل حقيقي على هوية بصرية لمنظومة سفر رقمية متعددة المنتجات وثنائية اللغة.

المشروع كان اختبارًا قويًا لأنه جمع تحديات لا يعالجها Prompt شعار بسيط عادة:

- UI/UX قائم
- Master Brand واحدة لعدة منتجات
- Consumer + Operational contexts
- العربية + الإنجليزية
- RTL + LTR
- Mobile + Web
- App Icons
- Accessibility
- Design Tokens / Developer implementation
- Professional Guidelines
- Editable Figma handoff

## المشكلة الأساسية

كان هناك Product work فعلي موجود أصلًا. الهدف لم يكن وضع Logo جديد غير مرتبط فوق المنتج، بل استخراج وفهم الـBrand DNA الموجود ثم بناء System قابل للتوسع.

الأسئلة كانت من نوع:

- ما الذي يستحق `KEEP`؟
- ما الذي يحتاج `EVOLVE`؟
- ما الذي يجب `REPLACE`؟
- كيف تبقى المنتجات مختلفة وظيفيًا لكن من عائلة واحدة؟
- كيف تتوازن العربية والإنجليزية؟
- هل الهوية تصمد في App Icon وأحجام صغيرة وواجهات فعلية؟
- هل يمكن تسليمها كأصول قابلة للتعديل بدل صورة واحدة؟

## ما الذي كشفته المحاولات السابقة؟

تمت تجربة أكثر من Workflow/Prompt.

المشكلة المتكررة كانت **Premature Convergence**: يستطيع AI بسهولة إنتاج Brand Board جميلة ثم يتصرف وكأن مشروع الهوية انتهى.

لكن المطلوب الحقيقي كان:

```text
Existing product evidence
        ↓
Audit
        ↓
Strategy / Architecture
        ↓
Creative Directions
        ↓
Selected System
        ↓
Production Vectors / Product Family
        ↓
Tokens / Platform Assets
        ↓
Guidelines
        ↓
Editable Figma Master
        ↓
QA / Handoff
```

الفرق بين **Concept Image** و**Professional Identity System** أصبح من أهم أسباب بناء ChatGPT Brand Identity OS.

## Audit للنظام الموجود

استخدم المشروع منطق:

- `KEEP`
- `EVOLVE`
- `REPLACE`

بدل التخلص من كل شيء موجود بلا سبب.

تمت مراجعة العناصر الموجودة وفق أسئلة مثل:

- هل لها معنى استراتيجي؟
- هل هي مميزة بما يكفي؟
- هل تتوسع على عدة منتجات؟
- هل هي Accessible؟
- هل تعمل بالعربية وRTL؟
- هل يمكن إنتاجها فعليًا؟

## Master Brand واحدة — عدة منتجات

بدل إنشاء شعارات منفصلة وغير مترابطة لكل تطبيق، تم التعامل مع Brand Architecture كمشكلة System أولًا.

تم بناء Shared Master DNA مع Product modifiers مضبوطة، حتى تبقى المنتجات واضحة دون تفكيك العلامة الأم.

## Creative Territories

تم تنظيم الاستكشاف إلى اتجاهات إبداعية مختلفة فعلًا، لا عشرات الشعارات العشوائية.

تمت مقارنة الاتجاهات على نفس الـSurfaces، ثم تم اختيار الاتجاه الرئيسي قبل الانتقال للإنتاج الكامل.

هذا Human Approval Gate منع أول فكرة مصقولة من التحول تلقائيًا إلى Final Brand.

## من Concept إلى Production

بعد اعتماد الاتجاه، تم توسيعه إلى نظام يشمل العناصر المناسبة مثل:

- Master symbol + lockups
- Arabic / Latin / bilingual behavior
- Monochrome / reversed assets
- Product family
- Color roles
- Typography
- Graphic language
- App/Product icons
- Accessibility
- RTL/LTR guidance
- Implementation tokens
- Guidelines
- Vector masters + exports

الفكرة المهمة:

> أي Presentation generated artwork يبقى Exploration حتى يعاد بناؤه كـProduction Geometry وقواعد System واضحة.

## مشكلة Figma

واجهت عملية الإنتاج قيودًا عملية في Remote Figma Automation مرتبطة بالأدوات/الخطة/الحصة.

التوقف عند PNG/PDF كان سيُفشل هدف التسليم، لذلك تطور المسار إلى:

```text
Remote Figma Automation
        ↓
Smaller Atomic Writes
        ↓
Verify Actual Nodes
        ↓
Adapt to Plan Limits
        ↓
Local Figma Development Plugin Importer
```

تم استخدام Importer محلي لإعادة بناء الهوية داخل Figma كمحتوى قابل للتعديل بدل Flattened Presentation.

النتيجة تضمنت Editable vectors، Sections منظمة، Components، Variables/Styles عند الحاجة، وExport Settings.

## أهم الدروس

### 1. Brand Board هي Checkpoint وليست Handoff

قد تكون الصورة ممتازة لشرح الاتجاه لكنها لا تكفي كـProduction Master.

### 2. UI الموجود دليل مهم

المنتج الفعلي قد يحتوي Brand DNA أقوى من البحث العام عن الترندات.

### 3. Brand Architecture تأتي قبل Product Logos

يجب تحديد علاقة العائلة قبل أن تنفصل المنتجات بصريًا.

### 4. العربية وRTL ليستا خطوة لاحقة

Typography وDirection وHierarchy وBidi يجب تصميمها بنيويًا.

### 5. القيود الإنتاجية تحسن التصميم

Small size / monochrome / app icon / accessibility tests تكشف مشاكل لا تظهر في Beauty Mockups.

### 6. Design Tokens تربط الهوية بالتنفيذ

القرارات المهمة تصبح أسهل للصيانة عندما تمثل بقواعد Semantic بدل نسخ قيم Hex يدويًا.

### 7. Automation يجب التحقق منه

Success message لا يعني أن Figma صحيح. يجب فحص الـNodes والأصول فعليًا.

### 8. Remote Automation لا يجب أن يكون Single Point of Failure

يجب أن تسمح الـCanonical Vectors والـTokens بإعادة إنتاج الملف القابل للتعديل بطريقة أخرى.

### 9. كلمة FINAL تحتاج تعريفًا

المشروع لا ينتهي فقط لأن AI أنتج صورة جميلة.

## لماذا الـCanonical Core مجمّد؟

تمت تجربة عدة نسخ. النسخة الموجودة حاليًا أعطت أفضل نتيجة ضمن الاختبارات، ولذلك تم حفظها Byte-for-byte مع SHA-256 verification.

يمكن تحسين التوثيق والأمثلة حولها، لكن لا يتم تعديل النسخة المجربة بصمت.

## ملاحظة الخصوصية

هذه الدراسة لا تنشر Source files داخلية، Business data، أو شاشات غير مخصصة للنشر.