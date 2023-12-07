import { g as createAstro, h as createComponent, r as renderTemplate, l as renderComponent, m as maybeRenderHead, i as addAttribute } from '../astro_UdXN7yYb.mjs';
import { b as $$DefaultLayout } from './404_hbWqZ22_.mjs';

const $$Astro = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Menu;
  const { src = "/veggie.jpg" } = Astro2.props;
  const title = "MENU";
  const name = "VEGGIE";
  const description = "STUFFED WITH A VEGGIE BURGER, TOMATOES,PICKLES, CRISPY ONIONS, MAYO, FRIES & OUR LEGENDARY MELTING CHEESE SAUCE";
  const price = "\xA38.90";
  const { src2 = "/spicy.jpg" } = Astro2.props;
  const name2 = "the Spicy";
  const description2 = "STUFFED WITH CRISPY CHICKEN, CORDON BLEU, TURKEY BACON, CRISPY ONIONS,HARISSA, FRIES & OUR LEGENDARY MELTING CHEESE SAUCE";
  const price2 = "\xA38.90";
  const { src3 = "/falafil.jpg" } = Astro2.props;
  const name3 = "Falafel";
  const description3 = "STUFFED WITH PICKLES, TOMATOES, CRISPY ONIONS, FALAFELS - MAYO, FRIES & OUR LEGENDARY MELTING CHEESE SAUCE";
  const price3 = "\xA38.90";
  const { src4 = "/special.jpg" } = Astro2.props;
  const name4 = "The special";
  const description4 = "STUFFED WITH MARINATED CHICKEN, CORDON BLEU, CRISPY ONIONS, ALGERIAN SAUCE, FRIES & OUR LEGENDARY MELTING CHEESE SAUCE";
  const price4 = "\xA39.90";
  const { src5 = "/healthy.jpg" } = Astro2.props;
  const name5 = "the healthy";
  const description5 = "STUFFED WITH CHICKEN, AVOCADO, TOMATOES, SALAD AND OUR LEGENDARY MELTING CHEESE SAUCE";
  const price5 = "\xA39.90";
  const { src6 = "/classic.jpg" } = Astro2.props;
  const name6 = "CLASSIC";
  const description6 = "STUFFED WITH (MARINATED CHICKEN, CRISPY CHICKEN), GARLIC MAYO*, FRIES & OUR LEGENDARY MELTING CHEESE SAUCE";
  const price6 = "\xA38.90";
  const { src7 = "/french.jpg" } = Astro2.props;
  const name7 = "FRENCHY";
  const description7 = "STUFFED (MINCED BEEF, CORDON BLEU), FRIES, BBQ SAUCE* & OUR LEGENDARY MELTING CHEESE SAUCE";
  const price7 = "\xA38.90";
  const { side = "/sid1.png" } = Astro2.props;
  const { side2 = "/side2.jpg" } = Astro2.props;
  const { side3 = "/side3.jpg" } = Astro2.props;
  const { frite = "/FRITE.jpg" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-16"> <div class="container mx-auto"> <h2 class="text-3xl font-bold mb-8 text-center	text-B1">${title}</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8"> <!-- vegie--> <div class="p-4 bg-black rounded-md shadow-md text-center border-2 border-B1"> <h3 class="text-P1 font-custom mb-2">${name}</h3> <img${addAttribute(src, "src")} alt="" class="w-full h-62 object-cover mb-4 rounded-md"> <p class="text-B1  ">${description}</p> <p class="text-P1 mt-2 font-bold">${price}</p> </div> <!-- spicy--> <div class="p-4 bg-black rounded-md shadow-md text-center border-2 border-B1"> <h3 class="text-P1 font-custom mb-2">${name2}</h3> <img${addAttribute(src2, "src")} alt="" class="w-full h-62 object-cover mb-4 rounded-md"> <p class="text-B1  ">${description2}</p> <p class="text-P1 mt-2 font-bold">${price2}</p> </div> <!-- Falafel--> <div class="p-4 bg-black rounded-md shadow-md text-center border-2 border-B1"> <h3 class="text-P1 font-custom mb-2">${name3}</h3> <img${addAttribute(src3, "src")} alt="" class="w-full h-62 object-cover mb-4 rounded-md"> <p class="text-B1  ">${description3}</p> <p class="text-P1 mt-2 font-bold">${price3}</p> </div> <!-- The speciall--> <div class="p-4 bg-black rounded-md shadow-md text-center border-2 border-B1"> <h3 class="text-P1 font-custom mb-2">${name4}</h3> <img${addAttribute(src4, "src")} alt="" class="w-full h-62 object-cover mb-4 rounded-md"> <p class="text-B1  ">${description4}</p> <p class="text-P1 mt-2 font-bold">${price4}</p> </div> <!-- The the healthy--> <div class="p-4 bg-black rounded-md shadow-md text-center border-2 border-B1"> <h3 class="text-P1 font-custom mb-2">${name5}</h3> <img${addAttribute(src5, "src")} alt="" class="w-full h-62 object-cover mb-4 rounded-md"> <p class="text-B1  ">${description5}</p> <p class="text-P1 mt-2 font-bold">${price5}</p> </div> <!-- The the healthy--> <div class="p-4 bg-black rounded-md shadow-md text-center border-2 border-B1"> <h3 class="text-P1 font-custom mb-2">${name6}</h3> <img${addAttribute(src6, "src")} alt="" class="w-full h-62 object-cover mb-4 rounded-md"> <p class="text-B1  ">${description6}</p> <p class="text-P1 mt-2 font-bold">${price6}</p> </div> <!-- The the healthy--> <div class="p-4 bg-black rounded-md shadow-md text-center border-2 border-B1"> <h3 class="text-P1 font-custom mb-2">${name7}</h3> <img${addAttribute(src7, "src")} alt="" class="w-full h-62 object-cover mb-4 rounded-md"> <p class="text-B1  ">${description7}</p> <p class="text-P1 mt-2 font-bold">${price7}</p> </div> </div> <div class="whitespace-normal container mx-auto"> <h2 class="text-3xl gap-8 font-bold mb-8 text-center text-P1">SIDES</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8"> <div> <img${addAttribute(frite, "src")} alt="" class="border-2 border-P1 w-full h-62 object-cover mb-4 rounded-md"> </div> <div> <img${addAttribute(side, "src")} alt="" class="border-2 border-P1  w-full h-62 object-cover mb-4 rounded-md"> </div> <div> <img${addAttribute(side2, "src")} alt="" class="w-full h-62 object-cover mb-4 rounded-md border-2 border-P1"> </div> <div> <img${addAttribute(side3, "src")} alt="" class="w-full h-62 object-cover mb-4 rounded-md border-2 border-P1"> </div> </div> <h2 class="text-3xl gap-8 font-bold mb-8 text-center text-P1">extras</h2> <div class="p-4 bg-black rounded-md shadow-md text-center border-2 border-B1"> <h5 class="text-B1  mb-2">CRISPY ONIONS £0.50</h5> <h5 class="text-B1  mb-2">CHEESY SAUCE £1.00 </h5> <h5 class="text-B1  mb-2">TURKEY BACON £1.00</h5> <h5 class="text-B1  mb-2">PICKLES £0.50</h5> </div> </div> </div> <h2 class="text-3xl gap-8 font-bold mb-8 text-center text-P1">Build Your own taco</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8"> <div class="p-4 bg-black rounded-md shadow-md text-center border-2 border-B1"> <h3 class="text-P1  mb-2">1-SIZE</h3> <h5 class="text-B1  mb-2">SMALL £7.50</h5> <span class="text-B1  mb-2">1 MEAT OF YOUR CHOICE </span> <h5 class="text-B1  mb-2">MEDIUM £8.90</h5> <span class="text-B1  mb-2">2 MEATS OF YOUR CHOICE</span> <h5 class="text-B1  mb-2">LARGE £12.90</h5> <span class="text-B1  mb-2">DOUBLE TORTILLA + 3 MEATS OF YOUR CHOICE</span> </div> <div class="p-4 bg-black rounded-md shadow-md text-center border-2 border-B1"> <h3 class="text-P1  mb-2">2-FIll
</h3> <h5 class="text-B1  mb-2">MARINATED CHICKEN </h5> <h5 class="text-B1  mb-2">CRISPY CHICKEN </h5> <h5 class="text-B1  mb-2">CORDON BLEU* </h5> <span class="text-B1  mb-2">BREADED CHICKEN STUFFED WITH CHEESE AND TURKEY HAM
</span> </div> <div class="p-4 bg-black rounded-md shadow-md text-center border-2 border-B1"> <h3 class="text-P1  mb-2">MAYO </h3> <h5 class="text-B1  mb-2">GARLIC MAYO </h5> <h5 class="text-B1  mb-2">KETCHUP </h5> <h5 class="text-B1  mb-2">BBQ </h5> <h5 class="text-B1  mb-2">PIRI PIRI </h5> <h5 class="text-B1  mb-2">HARISSA </h5> <h5 class="text-B1  mb-2">ALGERIAN SAUCE £0.50 </h5> </div> </div> </section> ` })} <div class="flex flex-wrap justify-center"></div>`;
}, "E:/Nouveau dossier/s/nettacos/src/pages/menu.astro", void 0);

const $$file = "E:/Nouveau dossier/s/nettacos/src/pages/menu.astro";
const $$url = "/menu";

export { $$Menu as default, $$file as file, $$url as url };
