import { g as createAstro, h as createComponent, r as renderTemplate, l as renderComponent, m as maybeRenderHead, j as renderSlot, o as createComponent$1, p as renderTemplate$1, q as renderComponent$1, t as unescapeHTML } from '../astro_UdXN7yYb.mjs';
import 'kleur/colors';
import 'clsx';
import { b as $$DefaultLayout } from './404_hbWqZ22_.mjs';

const $$Astro = createAstro();
const $$MarkdownLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="space-content my-12"> ${renderSlot($$result2, $$slots["default"])} </div> </div> ` })}`;
}, "E:/Nouveau dossier/s/nettacos/src/layouts/MarkdownLayout.astro", void 0);

const MarkdownLayout = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MarkdownLayout
}, Symbol.toStringTag, { value: 'Module' }));

const html = "<h1 id=\"markdown-page\">Markdown Page</h1>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam repellat deleniti obcaecati facilis non, praesentium aperiam laudantium excepturi assumenda doloremque animi quis aliquam eligendi quia nemo asperiores et eaque, sunt voluptatibus, saepe exercitationem id. Quis sequi maxime fugiat nam reprehenderit nesciunt quaerat obcaecati, ipsa dignissimos voluptatum voluptatem, optio quidem quos repudiandae dolorem voluptatibus fuga officia odio nemo recusandae voluptas.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">console.</span><span style=\"color:#B392F0\">log</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">'Hello Accessible World!'</span><span style=\"color:#E1E4E8\">)</span></span></code></pre>\n<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam repellat deleniti obcaecati facilis non, praesentium aperiam laudantium excepturi assumenda doloremque animi quis aliquam eligendi quia nemo asperiores et eaque, sunt voluptatibus, saepe exercitationem id. Quis sequi maxime fugiat nam reprehenderit nesciunt quaerat obcaecati, ipsa dignissimos voluptatum voluptatem, optio quidem quos repudiandae dolorem voluptatibus fuga officia odio nemo recusandae voluptas.</p>\n<p><a href=\"https://github.com/markteekman/accessible-astro-starter\">Get this theme on GitHub</a></p>";

				const frontmatter = {"layout":"../layouts/MarkdownLayout.astro","title":"Markdown Page"};
				const file = "E:/Nouveau dossier/s/nettacos/src/pages/markdown-page.md";
				const url = "/markdown-page";
				function rawContent() {
					return "\n# Markdown Page\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam repellat deleniti obcaecati facilis non, praesentium aperiam laudantium excepturi assumenda doloremque animi quis aliquam eligendi quia nemo asperiores et eaque, sunt voluptatibus, saepe exercitationem id. Quis sequi maxime fugiat nam reprehenderit nesciunt quaerat obcaecati, ipsa dignissimos voluptatum voluptatem, optio quidem quos repudiandae dolorem voluptatibus fuga officia odio nemo recusandae voluptas.\n\n```js\nconsole.log('Hello Accessible World!')\n```\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam repellat deleniti obcaecati facilis non, praesentium aperiam laudantium excepturi assumenda doloremque animi quis aliquam eligendi quia nemo asperiores et eaque, sunt voluptatibus, saepe exercitationem id. Quis sequi maxime fugiat nam reprehenderit nesciunt quaerat obcaecati, ipsa dignissimos voluptatum voluptatem, optio quidem quos repudiandae dolorem voluptatibus fuga officia odio nemo recusandae voluptas.\n\n[Get this theme on GitHub](https://github.com/markteekman/accessible-astro-starter)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"markdown-page","text":"Markdown Page"}];
				}

				const Content = createComponent$1((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate$1`${renderComponent$1(result, 'Layout', $$MarkdownLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate$1`${unescapeHTML(html)}`
							})}`;
				});

const markdownPage = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { MarkdownLayout as M, markdownPage as m };
