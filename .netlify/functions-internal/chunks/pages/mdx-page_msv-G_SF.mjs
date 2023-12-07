import '@astrojs/internal-helpers/path';
import { g as createAstro, h as createComponent, a as AstroError, v as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, i as addAttribute, s as spreadAttributes, _ as __astro_tag_component__, F as Fragment, w as createVNode } from '../astro_UdXN7yYb.mjs';
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_1R5mCwPa.mjs';
import 'clsx';
import { $ as $$Icon } from './about_HVdcgQvW.mjs';
import { i as $$Notification } from './404_hbWqZ22_.mjs';

const $$Astro$1 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "E:/Nouveau dossier/s/nettacos/node_modules/astro/components/Image.astro", void 0);

const $$Astro = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "E:/Nouveau dossier/s/nettacos/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///E:/Nouveau%20dossier/s/nettacos/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('./markdown-page_oPYG9x0l.mjs').then(n => n.M)).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "layout": "../layouts/MarkdownLayout.astro",
  "title": "MDX Page"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "mdx-page",
    "text": "MDX Page"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    pre: "pre",
    code: "code",
    span: "span",
    a: "a"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "mdx-page",
      children: "MDX Page"
    }), "\n", createVNode($$Notification, {
      type: "info",
      children: [createVNode($$Icon, {
        pack: "ion",
        name: "information-circle-outline"
      }), createVNode("p", {
        children: createVNode(_components.p, {
          children: [createVNode("strong", {
            children: "Info:"
          }), " This page utilizes Astro\u2019s MDX feature which let\u2019s you use components in a markdown file and\nsupports out-of-the-box syntax highlighting with Shiki."]
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam repellat deleniti obcaecati facilis non, praesentium aperiam laudantium excepturi assumenda doloremque animi quis aliquam eligendi quia nemo asperiores et eaque, sunt voluptatibus, saepe exercitationem id. Quis sequi maxime fugiat nam reprehenderit nesciunt quaerat obcaecati, ipsa dignissimos voluptatum voluptatem, optio quidem quos repudiandae dolorem voluptatibus fuga officia odio nemo recusandae voluptas."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "console."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "log"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "'Hello Accessible World!'"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ")"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam repellat deleniti obcaecati facilis non, praesentium aperiam laudantium excepturi assumenda doloremque animi quis aliquam eligendi quia nemo asperiores et eaque, sunt voluptatibus, saepe exercitationem id. Quis sequi maxime fugiat nam reprehenderit nesciunt quaerat obcaecati, ipsa dignissimos voluptatum voluptatem, optio quidem quos repudiandae dolorem voluptatibus fuga officia odio nemo recusandae voluptas."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://github.com/markteekman/accessible-astro-starter",
        children: "Get this theme on GitHub"
      })
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/mdx-page";
const file = "E:/Nouveau dossier/s/nettacos/src/pages/mdx-page.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "E:/Nouveau dossier/s/nettacos/src/pages/mdx-page.mdx";

const mdxPage = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  __usesAstroImage,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { imageConfig as i, mdxPage as m };
