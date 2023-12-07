import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Rgj0ubHT.mjs';

const _page0  = () => import('./chunks/generic_iSjp0VOq.mjs');
const _page1  = () => import('./chunks/index_wLzUlgbh.mjs');
const _page2  = () => import('./chunks/accessible-components_iP3fBUj8.mjs');
const _page3  = () => import('./chunks/markdown-page_5pmoiC9g.mjs');
const _page4  = () => import('./chunks/mdx-page_CY1eTKOq.mjs');
const _page5  = () => import('./chunks/about_Ur7VcFLl.mjs');
const _page6  = () => import('./chunks/_post__Hh4VBCC-.mjs');
const _page7  = () => import('./chunks/_.._-K9MDW--.mjs');
const _page8  = () => import('./chunks/menu_mVevifU8.mjs');
const _page9  = () => import('./chunks/404_DxKs8aj1.mjs');
const _page10  = () => import('./chunks/map_RSfieHD4.mjs');const pageMap = new Map([["C:/Users/smart dell/AppData/Roaming/npm/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/accessible-components.astro", _page2],["src/pages/markdown-page.md", _page3],["src/pages/mdx-page.mdx", _page4],["src/pages/about.astro", _page5],["src/pages/blog/[post].astro", _page6],["src/pages/blog/[...page].astro", _page7],["src/pages/menu.astro", _page8],["src/pages/404.astro", _page9],["src/pages/map.astro", _page10]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
