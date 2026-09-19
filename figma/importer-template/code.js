// ChatGPT Brand Identity OS — Local Figma Development Importer Template
// MIT-licensed code scaffold. Replace the example PAYLOAD with project-specific approved assets.

(async () => {
  const OWNER_PREFIX = 'BrandIdentityOS::';

  // Replace this example payload with the approved identity system for the project.
  // Keep SVG artwork as intentional production vectors — not raster screenshots wrapped in SVG.
  const PAYLOAD = {
    pageName: 'Brand Identity — Generated',
    sections: [
      {
        name: '01 — Brand Foundations',
        frames: [
          {
            name: 'README — Replace PAYLOAD',
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700">
              <rect width="1200" height="700" fill="#F7F7F5"/>
              <text x="72" y="110" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="700" fill="#111111">Brand Identity OS Importer Template</text>
              <text x="72" y="170" font-family="Inter, Arial, sans-serif" font-size="18" fill="#444444">Replace the example PAYLOAD in code.js with project-specific approved vectors, sections, components, colors, and exports.</text>
              <text x="72" y="220" font-family="Inter, Arial, sans-serif" font-size="18" fill="#444444">The importer is intentionally idempotent and only rebuilds nodes prefixed with BrandIdentityOS::.</text>
            </svg>`
          }
        ]
      }
    ],
    logos: [],
    icons: [],
    colors: []
  };

  function hexToRgb(hex) {
    const value = hex.replace('#', '').trim();
    if (!/^[0-9a-fA-F]{6}$/.test(value)) {
      throw new Error(`Invalid 6-digit hex color: ${hex}`);
    }
    const n = parseInt(value, 16);
    return {
      r: ((n >> 16) & 255) / 255,
      g: ((n >> 8) & 255) / 255,
      b: (n & 255) / 255
    };
  }

  async function getOrCreatePage(name) {
    let page = null;
    for (const candidate of figma.root.children) {
      if (candidate.name === name) {
        page = candidate;
        break;
      }
    }
    if (!page) page = figma.createPage();
    page.name = name;
    await figma.setCurrentPageAsync(page);
    return page;
  }

  function removeOwnedNodes(page) {
    for (const node of [...page.children]) {
      if ((node.name || '').startsWith(OWNER_PREFIX)) node.remove();
    }
  }

  function createSection(parentPage, name, x, y, width, height) {
    const section = figma.createSection();
    section.name = OWNER_PREFIX + name;
    parentPage.appendChild(section);
    section.x = x;
    section.y = y;
    section.resizeWithoutConstraints(width, height);
    return section;
  }

  function importSvg(parent, name, svg, x, y) {
    const node = figma.createNodeFromSvg(svg);
    node.name = name;
    parent.appendChild(node);
    node.x = x;
    node.y = y;
    return node;
  }

  function componentFromSvg(parent, namespace, item, x, y, exportSettings) {
    const vectorTree = figma.createNodeFromSvg(item.svg);
    const component = figma.createComponentFromNode(vectorTree);
    component.name = `${namespace}/${item.name}`;
    parent.appendChild(component);
    component.x = x;
    component.y = y;
    if (exportSettings) component.exportSettings = exportSettings;
    return component;
  }

  async function ensurePaintStyles(colors) {
    const existingStyles = await figma.getLocalPaintStylesAsync();
    const byName = new Map(existingStyles.map(style => [style.name, style]));

    for (const color of colors) {
      const fullName = `Brand Identity/${color.name}`;
      let style = byName.get(fullName);
      if (!style) {
        style = figma.createPaintStyle();
        style.name = fullName;
      }
      style.paints = [{ type: 'SOLID', color: hexToRgb(color.hex) }];
    }
  }

  const page = await getOrCreatePage(PAYLOAD.pageName);
  removeOwnedNodes(page);

  let sectionY = 0;
  const createdTopLevel = [];

  for (const sectionData of PAYLOAD.sections) {
    const columns = 3;
    const cellWidth = 1320;
    const cellHeight = 820;
    const frameCount = Math.max(sectionData.frames.length, 1);
    const rows = Math.ceil(frameCount / columns);
    const sectionWidth = columns * cellWidth + 160;
    const sectionHeight = rows * cellHeight + 180;

    const section = createSection(page, sectionData.name, 0, sectionY, sectionWidth, sectionHeight);
    createdTopLevel.push(section);

    sectionData.frames.forEach((frameData, index) => {
      const col = index % columns;
      const row = Math.floor(index / columns);
      importSvg(
        section,
        frameData.name,
        frameData.svg,
        80 + col * cellWidth,
        80 + row * cellHeight
      );
    });

    sectionY += sectionHeight + 160;
  }

  const assetSection = createSection(page, 'Master Assets', 0, sectionY, 4200, 1800);
  createdTopLevel.push(assetSection);

  let x = 100;
  let y = 120;

  for (const logo of PAYLOAD.logos) {
    componentFromSvg(
      assetSection,
      'Brand/Logo',
      logo,
      x,
      y,
      [{ format: 'SVG' }]
    );
    x += 700;
    if (x > 3400) {
      x = 100;
      y += 420;
    }
  }

  x = 100;
  y = 980;

  for (const icon of PAYLOAD.icons) {
    componentFromSvg(
      assetSection,
      'Brand/Icon',
      icon,
      x,
      y,
      [
        { format: 'SVG' },
        { format: 'PNG', constraint: { type: 'WIDTH', value: 1024 } }
      ]
    );
    x += 520;
  }

  await ensurePaintStyles(PAYLOAD.colors);

  if (createdTopLevel.length) {
    figma.viewport.scrollAndZoomIntoView(createdTopLevel);
  }

  figma.notify(
    'Brand Identity OS importer finished. Inspect vectors, Components, Styles/Variables, text, RTL, and export settings before approval.',
    { timeout: 7000 }
  );
  figma.closePlugin();
})().catch(error => {
  console.error(error);
  figma.notify(`Brand Identity OS importer failed: ${String(error)}`, {
    error: true,
    timeout: 10000
  });
  figma.closePlugin();
});
