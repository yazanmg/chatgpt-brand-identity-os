# قالب Asset Manifest

[English](../ASSET_MANIFEST_TEMPLATE.md) | العربية

يجب أن تجعل حزمة الهوية الاحترافية واضحًا أي Asset هو Canonical، وأي Version هو الحالي، ومن أين جاءت الـExports.

| Asset ID | Asset / file | Category | Status | Canonical source | Version | Export formats | Owner | Notes |
|---|---|---|---|---|---|---|---|---|
| `logo-master` |  | Logo | approved |  | v1.0 | SVG / PDF / PNG |  |  |
| `logo-mono-dark` |  | Logo | approved |  | v1.0 | SVG / PNG |  |  |
| `logo-mono-light` |  | Logo | approved |  | v1.0 | SVG / PNG |  |  |
| `app-icon-master` |  | App icon | approved |  | v1.0 | platform-specific |  |  |
| `tokens-core` | `brand.tokens.json` | Tokens | approved |  | v1.0 | JSON |  |  |
| `figma-master` |  | Editable master | approved |  | v1.0 | Figma |  |  |
| `guidelines` |  | Documentation | approved |  | v1.0 | PDF |  |  |

## Recommended status values
`exploration` · `selected` · `approved` · `production` · `verified` · `deprecated`

## القواعد
- كل Production export يجب أن يمكن تتبعه إلى Canonical Editable Source.
- لا تستخدم أسماء مثل `final-final-new-2.svg` كـVersion Control.
- اجعل Deprecated assets قابلة للتمييز عن Current Approved Masters.
- سجل Platform-specific masters منفصلة عندما تختلف Production structure.
- سجل Licensing/Ownership للخطوط والصور والرسومات والأيقونات وThird-party assets عند الحاجة.