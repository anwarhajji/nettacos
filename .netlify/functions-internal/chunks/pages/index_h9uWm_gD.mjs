import { g as createAstro, h as createComponent, r as renderTemplate, l as renderComponent, m as maybeRenderHead } from '../astro_UdXN7yYb.mjs';
import 'clsx';
import { b as $$DefaultLayout } from './404_hbWqZ22_.mjs';
import { a as $$Hero, b as $$Feature, c as $$ContentMedia, $ as $$Icon } from './about_HVdcgQvW.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<section class="my-64"> <div class="container"> <h2 class="mb-16 text-6xl">“The French Taste”</h2> <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"> ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:silverware-fork-knife", "title": "freshly cooked" }, { "default": ($$result3) => renderTemplate`
All our ingredients are delivered daily and freshly cooked on the premises.
` })} ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:food-halal", "title": "halal meat" }, { "default": ($$result3) => renderTemplate`
We use fresh halal meat and local suppliers whenever possible.
` })} ${renderComponent($$result2, "Feature", $$Feature, { "icon": "mdi:chef-hat", "title": "French Chef" }, { "default": ($$result3) => renderTemplate`
Our French Chef has created his yummy home-made cheese sauce which goes in every single French Taco!
` })} </div> </div> </section> <section id="section1"> <h2 class="mb-16 text-6xl text-center">“ABOUT”</h2> ${renderComponent($$result2, "ContentMedia", $$ContentMedia, { "imgSrc": "/t2.jpg", "reverseImg": true }, { "default": ($$result3) => renderTemplate` <h2 class="text-B1">THE ORIGINAL 
      FRENCH TACOS</h2> <p class="text-2xl"></p><h6>The Story</h6>
According to local urban legend, The first French Tacos started in the mid-2000s in Vaux-en-Velin and quickly became popular in the area. 
      
      In France, the French Tacos is growing rapidly and is now one of the
      
      favourite fast food.
<div class="flex flex-col gap-3 min-[500px]:flex-row"> <a class="button has-icon" href="/menu" target="_blank"> ${renderComponent($$result3, "Icon", $$Icon, { "pack": "ion", "name": "star-outline" })}
MENU
</a> <a class="button has-icon color-secondary" href="tel:+447854758021"> ${renderComponent($$result3, "Icon", $$Icon, { "pack": "ion", "name": "bookmark-outline" })}
Call
</a> </div>  ` })} ${renderComponent($$result2, "ContentMedia", $$ContentMedia, { "imgSrc": "/T1.jpg" }, { "default": ($$result3) => renderTemplate` <h2 class="text-B1">What the hell is
      a French Taco ?</h2> <p class="text-2xl">
It's a tortilla wrap filled with a choice of meat, fries and melting cheese sauce. All carefully wrapped up and toasted.

The end result is the best comfort food you'll ever taste, a warm and tasty mix of crispiness and melting flavours..
</p><div class="flex flex-col gap-3 min-[500px]:flex-row"> <a class="button has-icon" href="/menu" target="_blank"> ${renderComponent($$result3, "Icon", $$Icon, { "pack": "ion", "name": "star-outline" })}
MENU
</a> <a class="button has-icon color-secondary" href="tel:+447854758021"> ${renderComponent($$result3, "Icon", $$Icon, { "pack": "ion", "name": "bookmark-outline" })}
Call
</a> </div> ` })} <!-- <section class="mt-64 mb-32">
    <div class="container">
      <h2 class="mb-16 text-6xl">Counters</h2>
      <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
        <Counter count="130" title="Stars" sub="On GitHub" />
        <Counter count="17" title="Accessible" sub="Components" />
        <Counter count="500" title="Commits" sub="Merged" />
        <Counter count="18+" title="Months" sub="Since launch" />
      </div>
    </div>
  </section>  --> </section> ` })}`;
}, "E:/Nouveau dossier/s/nettacos/src/pages/index.astro", void 0);

const $$file = "E:/Nouveau dossier/s/nettacos/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
