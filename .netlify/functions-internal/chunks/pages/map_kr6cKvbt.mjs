import { g as createAstro, h as createComponent, r as renderTemplate, l as renderComponent, m as maybeRenderHead, i as addAttribute } from '../astro_UdXN7yYb.mjs';
import { b as $$DefaultLayout } from './404_hbWqZ22_.mjs';

const $$Astro = createAstro();
const $$Map = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Map;
  const { src = "/map.jpg" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "map" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="my-12"> <div class="container text-center text-B1"> <h1>LOCATION & CONTACT
</h1> </div> </section> <section class="my-12"> <div class="space-content container text-center"> <h3 class="text-2xl">Find us at Vauxhall Food & Beer Garden 
        .</h3> <p class="text-2xl text-center">
6 A South Lambeth PIace London SW8 1SP - next to Vauxhall Station.</p> <a class="button" href="tel:+447854758021"> Call us at  :+44 7854 758021 </a> <div class="flex items-center justify-center "> <a href="https://www.google.com/maps/dir//Vauxhall+Food+%26+Beer+Garden,+6a+S+Lambeth+Pl,+London+SW8+1SP,+Royaume-Uni/@51.4855983,-0.205979,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x487605bec625538b:0xd90466c7efc67037!2m2!1d-0.1235788!2d51.4856272?entry=ttu" target="_blank"> <img${addAttribute(src, "src")} alt="map" class=" h-auto rounded-lg max-w-full max-h-full"> </a> </div> <a class="button" href="https://www.google.com/maps/dir//Vauxhall+Food+%26+Beer+Garden,+6a+S+Lambeth+Pl,+London+SW8+1SP,+Royaume-Uni/@51.4855983,-0.205979,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x487605bec625538b:0xd90466c7efc67037!2m2!1d-0.1235788!2d51.4856272?entry=ttu" target="_blank">MAP 🚀</a> </div> </section> ` })}`;
}, "E:/Nouveau dossier/s/nettacos/src/pages/map.astro", void 0);

const $$file = "E:/Nouveau dossier/s/nettacos/src/pages/map.astro";
const $$url = "/map";

export { $$Map as default, $$file as file, $$url as url };
