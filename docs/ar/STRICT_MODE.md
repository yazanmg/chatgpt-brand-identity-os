# STRICT MODE — العربية

[English](../STRICT_MODE.md) | [العربية](./STRICT_MODE.md)

`STRICT MODE` هو وضع تشغيل يرفع مستوى الالتزام ويمنع الاختصارات التي تؤدي إلى نتائج شكلية أو ناقصة.

## عند تفعيله

يجب على ChatGPT، حسب ما ينطبق على المشروع:

- إجراء Discovery إذا كانت المعلومات غير كافية.
- قراءة الملفات الموجودة قبل إعادة سؤال المستخدم عن معلومات موجودة فيها.
- طرح سؤال رئيسي واحد كل مرة ما لم يطلب المستخدم Questionnaire كاملًا.
- استخدام Funnel: `broad → probe → specific`.
- عدم اختراع Mission أو Audience أو Differentiation أو Market Facts أو Production Constraints.
- تنفيذ البحث المطلوب قبل اعتماد الاتجاه النهائي.
- توثيق سبب تجاوز أي مرحلة.
- ربط القرارات البصرية بسبب استراتيجي أو System rationale.
- اختبار Logo في monochrome / grayscale / tiny sizes عند الحاجة.
- التحقق من Contrast للأزواج النهائية عند وجود نص أو UI.
- الحفاظ على Canonical editable source لكل أصل نهائي.
- إعادة التحقق من Platform rules الحالية بدل الاعتماد على ذاكرة قديمة.
- التحقق من Figma writes فعليًا إذا تم استخدام Automation.
- عدم التوقف عند صورة إذا كان Figma هو التسليم المطلوب.
- عدم استخدام فشل Remote Figma كعذر لإنهاء المشروع دون Editable Master.
- منع إعلان `FINAL` قبل اجتياز الـQA المطلوب.

## طريقة التفعيل

أضف في نهاية أمر البداية:

```text
Use STRICT MODE.
```

## مع شرط Figma الإلزامي

للحصول على Workflow صارم ينتهي بملف Figma قابل للتعديل، استخدم `STRICT MODE` مع:

[`FIGMA_REQUIRED_FINAL_OUTPUT.md`](./FIGMA_REQUIRED_FINAL_OUTPUT.md)

الاثنان يخدمان غرضين مختلفين:

- `STRICT MODE` يضبط جودة العملية كلها.
- `FIGMA REQUIRED` يحدد شرط التسليم النهائي.