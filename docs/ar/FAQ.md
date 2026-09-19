# الأسئلة الشائعة — العربية

[English](../FAQ.md) | [العربية](./FAQ.md)

## هل هذا المشروع لـChatGPT أم Codex؟

لمحادثات **ChatGPT العادية**. ليس Codex workflow.

## هل أحتاج Brand Brief جاهز؟

لا. يمكن أن تبدأ حتى باسم المشروع أو فكرة قصيرة، ويقوم النظام ببناء الـBrief من خلال قراءة الأدلة وAdaptive Discovery.

## لماذا لا يبدأ بالشعار فورًا؟

لأن الهوية الجيدة تحتاج فهم المشروع والجمهور والسياق والتميّز والقيود قبل اتخاذ قرارات بصرية نهائية.

## هل يعيد تصميم هوية موجودة؟

ليس بالضرورة. إذا كان لديك نظام قائم، يتم أولًا Audit من نوع `KEEP / EVOLVE / REPLACE`.

إذا كانت الهوية الحالية معتمدة بالكامل وتريد فقط Figma، استخدم [`APPROVED_IDENTITY_TO_FIGMA.md`](../../examples/APPROVED_IDENTITY_TO_FIGMA.md).

## لماذا أحيانًا يعطيني ChatGPT صورة فقط؟

لأن AI قد يعتبر Brand Board أو Concept Presentation هو نهاية المهمة. لذلك أضف شرط Figma الإلزامي:

[`FIGMA_REQUIRED_FINAL_OUTPUT.md`](./FIGMA_REQUIRED_FINAL_OUTPUT.md)

## هل إدخال صورة Brand Board داخل Figma يعتبر تسليمًا صحيحًا؟

لا. المطلوب إعادة بناء العناصر الأساسية كـeditable vectors / text / components / variables / styles حسب الحاجة.

## ماذا لو ChatGPT لا يستطيع الكتابة مباشرة داخل Figma؟

يجب ألا يتوقف عند صورة. الـFallback هو Local Figma Development Importer Plugin، يحتوي على `manifest.json`, `code.js`, و`README.md` ويعيد بناء الملف داخل Figma Desktop.

## هل Figma شرط دائم؟

في الـCanonical Core قد تعتمد أدوات التسليم على نطاق المشروع. لكن إذا كنت تريد Figma كشرط نهائي لهذا الاستخدام، أرسل Rule الخاص بـFigma مع Start Command. هذا الـRepository يوصي بذلك للحصول على Editable Master واضح.

## هل يعمل مع العربية وRTL؟

نعم، الـOperating System يحتوي قواعد للـMultilingual / RTL / bidi عندما تكون مطلوبة. يجب تصميم العربية فعليًا، وليس فقط Mirror ميكانيكي لتخطيط LTR.

## هل يضمن عدم تشابه الشعار مع أي علامة؟

لا. البحث البصري ليس Legal Trademark Clearance. يجب إجراء الفحص القانوني المناسب قبل الإطلاق التجاري.

## هل الملف الأساسي مترجم للعربية؟

الـCanonical Core نفسه محفوظ بالإنجليزية كما تم اختباره ولا يتم تعديله. واجهة الـRepository والشرح متوفران بالعربية والإنجليزية. يمكنك استخدام الـCore الإنجليزي داخل محادثة عربية؛ ChatGPT يمكنه إدارة الحوار معك بالعربية.

## هل يمكن تعديل الـCore؟

يمكن Fork المشروع وتجربة نسخ مستقبلية، لكن نسخة الـCanonical Core الحالية محمية ببصمة SHA-256 لأن الهدف الحفاظ على النسخة التي تم اختبارها كما هي.