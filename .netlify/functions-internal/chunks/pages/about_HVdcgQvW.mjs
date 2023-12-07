import { g as createAstro, h as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, i as addAttribute, u as unescapeHTML, l as renderComponent, F as Fragment, j as renderSlot } from '../astro_UdXN7yYb.mjs';
import 'clsx';
import { e as $$Media, b as $$DefaultLayout } from './404_hbWqZ22_.mjs';
import { optimize } from 'svgo';
/* empty css                          */

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = import.meta.globEager(
        "/src/icons/**/*.{js,ts,cjs,mjc,cts,mts}"
      );
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = import.meta.globEager("/src/icons/**/*.svg", { as: "raw" });
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$7 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "E:/Nouveau dossier/s/nettacos/node_modules/astro-icon/lib/Icon.astro", void 0);

const AstroIcon = Symbol("AstroIcon");
function trackSprite(result, name) {
  if (typeof result[AstroIcon] !== "undefined") {
    result[AstroIcon]["sprites"].add(name);
  } else {
    result[AstroIcon] = {
      sprites: /* @__PURE__ */ new Set([name])
    };
  }
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(result) {
  if (typeof result[AstroIcon] !== "undefined") {
    return Array.from(result[AstroIcon]["sprites"]);
  }
  const pathname = result._metadata.pathname;
  if (!warned.has(pathname)) {
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(pathname);
  }
  return [];
}

const $$Astro$6 = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites($$result);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`display: none; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet> ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)} </svg>`;
}, "E:/Nouveau dossier/s/nettacos/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$5 = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "E:/Nouveau dossier/s/nettacos/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$4 = createAstro();
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite($$result, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}> ${title ? renderTemplate`<title>${title}</title>` : ""} <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use> </svg>`;
}, "E:/Nouveau dossier/s/nettacos/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$3 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  const { src = "/h2.png" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero my-24" data-astro-cid-bbe6dxrz> <div class="container" data-astro-cid-bbe6dxrz> <div class="grid grid-cols-1 items-center gap-24 lg:grid-cols-2" data-astro-cid-bbe6dxrz> <div class="flex flex-col items-center gap-8 md:items-start" data-astro-cid-bbe6dxrz> <h1 class="text-center text-6xl md:text-left lg:text-8xl" data-astro-cid-bbe6dxrz> ${renderSlot($$result, $$slots["default"], renderTemplate`MEET THE<span class="text-gradient " data-astro-cid-bbe6dxrz> FRENCH TACOS</span> `)} </h1> <div class="flex flex-col gap-3 min-[500px]:flex-row" data-astro-cid-bbe6dxrz> <a class="button has-icon" href="/menu" target="_blank" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Icon", $$Icon, { "pack": "ion", "name": "star-outline", "data-astro-cid-bbe6dxrz": true })}
MENU
</a> <a class="button has-icon color-secondary" href="tel:+447854758021" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Icon", $$Icon, { "pack": "ion", "name": "bookmark-outline", "data-astro-cid-bbe6dxrz": true })}
Call
</a> </div> </div> <img class="h-auto max-w-xl rounded-lg"${addAttribute(src, "src")} alt="" decoding="async" data-astro-cid-bbe6dxrz> </div> </div> </section> `;
}, "E:/Nouveau dossier/s/nettacos/src/components/Hero.astro", void 0);

const $$Astro$2 = createAstro();
const $$Feature = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Feature;
  const { icon = "mdi:rocket", title = "Title" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="feature flex flex-col gap-4" data-astro-cid-ezsi7upz> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "data-astro-cid-ezsi7upz": true })} <div class="content" data-astro-cid-ezsi7upz> <h3 data-astro-cid-ezsi7upz>${title}</h3> <p data-astro-cid-ezsi7upz> ${renderSlot($$result, $$slots["default"], renderTemplate`Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis.`)} </p> </div> </div> `;
}, "E:/Nouveau dossier/s/nettacos/src/components/Feature.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContentMedia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContentMedia;
  const { imgSrc, reverseImg = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="my-64"> <div class="container"> <div class="grid grid-cols-1 gap-24 md:grid-cols-2"> ${!reverseImg ? renderTemplate`${renderComponent($$result, "Media", $$Media, { "class": "rounded-lg", "src": imgSrc })}` : ""} <div class="space-content flex flex-col justify-center"> ${renderSlot($$result, $$slots["default"])} </div> ${reverseImg ? renderTemplate`${renderComponent($$result, "Media", $$Media, { "class": "rounded-lg", "src": imgSrc })}` : ""} </div> </div> </section>`;
}, "E:/Nouveau dossier/s/nettacos/src/components/ContentMedia.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<section class="my-64"> <div class="container"> <h2 class="mb-16 text-6xl">“The French Taste”</h2> <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"> ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:silverware-fork-knife", "title": "freshly cooked" }, { "default": ($$result3) => renderTemplate`
All our ingredients are delivered daily and freshly cooked on the premises.
` })} ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:food-halal", "title": "halal meat" }, { "default": ($$result3) => renderTemplate`
We use fresh halal meat and local suppliers whenever possible.
` })} ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:chef-hat", "title": "French Chef" })}</div> </div> </section> ${renderComponent($$result2, "ContentMedia", $$ContentMedia, { "imgSrc": "/t2.jpg" }, { "default": ($$result3) => renderTemplate` <h2>THE ORIGINAL 
      FRENCH TACOS</h2> <p class="text-2xl"></p><h6>The Story</h6>
According to local urban legend, The first French Tacos started in the mid-2000s in Vaux-en-Velin and quickly became popular in the area. 
      
      In France, the French Tacos is growing rapidly and is now one of the
      
      favourite fast food.
 ` })} ${renderComponent($$result2, "ContentMedia", $$ContentMedia, { "imgSrc": "/T1.jpg", "reverseImg": true }, { "default": ($$result3) => renderTemplate` <h2>What the hell is
      a French Taco ?</h2> <p class="text-2xl">
It's a tortilla wrap filled with a choice of meat, fries and melting cheese sauce. All carefully wrapped up and toasted.

The end result is the best comfort food you'll ever taste, a warm and tasty mix of crispiness and melting flavours..
</p> ` })}  ` })}`;
}, "E:/Nouveau dossier/s/nettacos/src/pages/about.astro", void 0);

const $$file = "E:/Nouveau dossier/s/nettacos/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Icon as $, $$Hero as a, $$Feature as b, $$ContentMedia as c, about as d };
