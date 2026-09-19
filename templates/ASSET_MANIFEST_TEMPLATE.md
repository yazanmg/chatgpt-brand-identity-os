# Asset Manifest Template

A professional identity package should make it obvious which asset is canonical, which version is current, and where exports came from.

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

- `exploration`
- `selected`
- `approved`
- `production`
- `verified`
- `deprecated`

## Rules

- Every production export should be traceable to a canonical editable source.
- Do not use filenames such as `final-final-new-2.svg` as version control.
- Keep old/deprecated assets distinguishable from current approved masters.
- Record platform-specific masters separately when their production structure differs.
- Record licensing/ownership notes for fonts, images, illustrations, icons, or third-party assets where relevant.
