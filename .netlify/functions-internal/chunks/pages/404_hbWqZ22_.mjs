import { g as createAstro, h as createComponent, r as renderTemplate, i as addAttribute, m as maybeRenderHead, j as renderSlot, k as createTransitionScope, l as renderComponent, n as renderHead } from '../astro_UdXN7yYb.mjs';
import 'clsx';
/* empty css                                  */
/* empty css                          */

const $$Astro$i = createAstro();
const $$SiteMeta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$SiteMeta;
  const { title, description, url, image, author } = Astro2.props;
  let subtitle = "Accessible Astro Starter";
  return renderTemplate`<!-- general meta --><meta name="title"${addAttribute(`${title} - ${subtitle}`, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(author, "content")}><!-- open graph --><meta property="og:title"${addAttribute(`${title} - ${subtitle}`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(url, "content")}><meta property="og:image"${addAttribute(Astro2.site ? `${Astro2.site}${image}` : image, "content")}><!-- twitter card --><!-- page title --><title>${title} - ${subtitle}</title>`;
}, "E:/Nouveau dossier/s/nettacos/src/components/SiteMeta.astro", void 0);

const $$Astro$h = createAstro();
const $$ResponsiveToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ResponsiveToggle;
  return renderTemplate`${maybeRenderHead()}<button class="responsive-toggle" aria-expanded="false" aria-label="Open menu navigation" data-astro-cid-3qc6hvr2> <svg width="26" height="21" aria-hidden="true" fill="var(--action-color)" xmlns="http://www.w3.org/2000/svg" data-astro-cid-3qc6hvr2><path d="M2 1.667h24m-24 8h24m-24 8h24" stroke="var(--action-color)" stroke-width="2.667" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3qc6hvr2></path></svg> </button>  `;
}, "E:/Nouveau dossier/s/nettacos/src/components/ResponsiveToggle.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$g = createAstro();
const $$Accordion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Accordion;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div class="accordion"> <ul class="accordion__wrapper"> ', ` </ul> </div> <script type="module">
  // variables
  const accordionItems = [...document.querySelectorAll('.accordion__item')]

  // functions
  const getPanelHeight = (accordionItem) => {
    const accordionInner = accordionItem.querySelector('.panel__inner')
    return accordionInner.getBoundingClientRect().height
  }

  const openAccordionItem = (accordionItem) => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionPanel.style.height = \`\${getPanelHeight(accordionItem)}px\`
    accordionItem.classList.add('is-active')
    accordionItemHeader.setAttribute('aria-expanded', true)
    accordionToggleIndicator.innerHTML = \`<svg class="header__toggle-indicator" aria-hidden="true" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\`
  }

  const closeAccordionItem = (accordionItem) => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionItem.classList.remove('is-active')
    accordionPanel.style.height = 0
    accordionItemHeader.focus()
    accordionItemHeader.setAttribute('aria-expanded', false)
    accordionToggleIndicator.innerHTML = \`<svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\`
  }

  const isAccordionOpen = (accordionItem) => {
    return accordionItem.classList.contains('is-active')
  }

  function toggleAccordionItem() {
    const accordionItem = event.target.closest('.accordion__item')
    if (!accordionItem || event.target.closest('.accordion__panel')) return

    isAccordionOpen(accordionItem) ? closeAccordionItem(accordionItem) : openAccordionItem(accordionItem)
  }

  function recalculateHeight() {
    const toggledAccordionItems = accordionItems.filter((element) => element.classList.contains('is-active'))

    toggledAccordionItems.forEach((toggledAccordionItem) => {
      const accordionPanel = toggledAccordionItem.querySelector('.accordion__panel')
      accordionPanel.style.height = \`\${getPanelHeight(toggledAccordionItem)}px\`
    })
  }

  // execution
  accordionItems.forEach((item, index) => {
    const accordionItemHeader = item.querySelector('.accordion__header')
    const accordionItemPanel = item.querySelector('.accordion__panel')

    accordionItemHeader.setAttribute('id', \`accordion-item\${index + 1}\`)
    accordionItemPanel.setAttribute('id', \`item\${index + 1}\`)

    accordionItemHeader.setAttribute('aria-controls', \`item\${index + 1}\`)
    accordionItemPanel.setAttribute('aria-labelledby', \`accordion-item\${index + 1}\`)
  })

  document.addEventListener('keydown', (event) => {
    const accordionItem = event.target.closest('.accordion__item')

    if (event.key !== 'Escape') return
    if (!accordionItem) return

    if (isAccordionOpen(accordionItem)) {
      closeAccordionItem(accordionItem)
    }
  })

  document.addEventListener('keydown', (event) => {
    if (!event.target.closest('.accordion__header')) return

    const accordionWrapper = event.target.closest('.accordion__wrapper')
    const accordionItem = event.target.closest('.accordion__item')
    const accordionItems = [...accordionWrapper.querySelectorAll('.accordion__item')]
    const index = accordionItems.findIndex((element) => element === accordionItem)

    const { key } = event

    let targetItem

    if (key === 'ArrowDown') {
      targetItem = accordionItems[index + 1]
    }

    if (key === 'ArrowUp') {
      targetItem = accordionItems[index - 1]
    }

    if (targetItem) {
      event.preventDefault()
      targetItem.querySelector('.accordion__header').focus()
    }
  })

  window.toggleAccordionItem = toggleAccordionItem
  window.onresize = recalculateHeight
<\/script> `], ["", '<div class="accordion"> <ul class="accordion__wrapper"> ', ` </ul> </div> <script type="module">
  // variables
  const accordionItems = [...document.querySelectorAll('.accordion__item')]

  // functions
  const getPanelHeight = (accordionItem) => {
    const accordionInner = accordionItem.querySelector('.panel__inner')
    return accordionInner.getBoundingClientRect().height
  }

  const openAccordionItem = (accordionItem) => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionPanel.style.height = \\\`\\\${getPanelHeight(accordionItem)}px\\\`
    accordionItem.classList.add('is-active')
    accordionItemHeader.setAttribute('aria-expanded', true)
    accordionToggleIndicator.innerHTML = \\\`<svg class="header__toggle-indicator" aria-hidden="true" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\\\`
  }

  const closeAccordionItem = (accordionItem) => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionItem.classList.remove('is-active')
    accordionPanel.style.height = 0
    accordionItemHeader.focus()
    accordionItemHeader.setAttribute('aria-expanded', false)
    accordionToggleIndicator.innerHTML = \\\`<svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\\\`
  }

  const isAccordionOpen = (accordionItem) => {
    return accordionItem.classList.contains('is-active')
  }

  function toggleAccordionItem() {
    const accordionItem = event.target.closest('.accordion__item')
    if (!accordionItem || event.target.closest('.accordion__panel')) return

    isAccordionOpen(accordionItem) ? closeAccordionItem(accordionItem) : openAccordionItem(accordionItem)
  }

  function recalculateHeight() {
    const toggledAccordionItems = accordionItems.filter((element) => element.classList.contains('is-active'))

    toggledAccordionItems.forEach((toggledAccordionItem) => {
      const accordionPanel = toggledAccordionItem.querySelector('.accordion__panel')
      accordionPanel.style.height = \\\`\\\${getPanelHeight(toggledAccordionItem)}px\\\`
    })
  }

  // execution
  accordionItems.forEach((item, index) => {
    const accordionItemHeader = item.querySelector('.accordion__header')
    const accordionItemPanel = item.querySelector('.accordion__panel')

    accordionItemHeader.setAttribute('id', \\\`accordion-item\\\${index + 1}\\\`)
    accordionItemPanel.setAttribute('id', \\\`item\\\${index + 1}\\\`)

    accordionItemHeader.setAttribute('aria-controls', \\\`item\\\${index + 1}\\\`)
    accordionItemPanel.setAttribute('aria-labelledby', \\\`accordion-item\\\${index + 1}\\\`)
  })

  document.addEventListener('keydown', (event) => {
    const accordionItem = event.target.closest('.accordion__item')

    if (event.key !== 'Escape') return
    if (!accordionItem) return

    if (isAccordionOpen(accordionItem)) {
      closeAccordionItem(accordionItem)
    }
  })

  document.addEventListener('keydown', (event) => {
    if (!event.target.closest('.accordion__header')) return

    const accordionWrapper = event.target.closest('.accordion__wrapper')
    const accordionItem = event.target.closest('.accordion__item')
    const accordionItems = [...accordionWrapper.querySelectorAll('.accordion__item')]
    const index = accordionItems.findIndex((element) => element === accordionItem)

    const { key } = event

    let targetItem

    if (key === 'ArrowDown') {
      targetItem = accordionItems[index + 1]
    }

    if (key === 'ArrowUp') {
      targetItem = accordionItems[index - 1]
    }

    if (targetItem) {
      event.preventDefault()
      targetItem.querySelector('.accordion__header').focus()
    }
  })

  window.toggleAccordionItem = toggleAccordionItem
  window.onresize = recalculateHeight
<\/script> `])), maybeRenderHead(), renderSlot($$result, $$slots["default"]));
}, "E:/Nouveau dossier/s/nettacos/node_modules/accessible-astro-components/Accordion.astro", void 0);

const $$Astro$f = createAstro();
const $$AccordionItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { header } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="accordion__item"> <h3> <button id="accordion-header-1" class="accordion__header" aria-expanded="false" aria-controls="accordion-panel-1" onclick="toggleAccordionItem()"> ${header} <svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path> </svg> </button> </h3> <div id="accordion-panel-1" role="region" class="accordion__panel" aria-labelledby="accordion-header-1"> <div class="panel__inner"> ${renderSlot($$result, $$slots["default"])} </div> </div> </li> `;
}, "E:/Nouveau dossier/s/nettacos/node_modules/accessible-astro-components/AccordionItem.astro", void 0);

const $$Astro$e = createAstro();
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  return renderTemplate`${maybeRenderHead()}<nav class="breadcrumbs" aria-label="Breadcrumbs"> <ol> ${renderSlot($$result, $$slots["default"])} </ol> </nav> `;
}, "E:/Nouveau dossier/s/nettacos/node_modules/accessible-astro-components/Breadcrumbs.astro", void 0);

const $$Astro$d = createAstro();
const $$BreadcrumbsItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$BreadcrumbsItem;
  const { href = "#", label = "Breadcrumb", currentPage = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="breadcrumbs__item"> ${currentPage ? renderTemplate`<span>${label}</span>` : renderTemplate`<a${addAttribute(href, "href")}>${label}</a>`} </li> `;
}, "E:/Nouveau dossier/s/nettacos/node_modules/accessible-astro-components/BreadcrumbsItem.astro", void 0);

const $$Astro$c = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Card;
  const { url = "#", img = "https://fakeimg.pl/640x360", title = "Default title", footer = "Your name" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card"> <div class="card__image"> <img${addAttribute(img, "src")} alt=""> </div> <div class="card__content"> <h3> <a${addAttribute(url, "href")}>${title}</a> </h3> <p> ${renderSlot($$result, $$slots["default"], renderTemplate`Default description.`)} </p> <small> ${footer} </small> </div> </div> `;
}, "E:/Nouveau dossier/s/nettacos/node_modules/accessible-astro-components/Card.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$b = createAstro();
const $$DarkMode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$DarkMode;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<button class="darkmode-toggle" aria-pressed="false" aria-label="Enable dark mode"', `> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"></path></svg> </button> <script>
// variables
let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('.darkmode-toggle')

// functions
const enableDarkMode = (store = true) => {
  document.body.classList.add('darkmode')
  darkModeToggle.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V3zM5.707 4.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zm14 0a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-9 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H3zm17 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1zM6.707 18.707a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414l1-1zm12-1.414a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zM13 20a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1z" fill="currentColor"/></svg>\`
  darkModeToggle.setAttribute('aria-pressed', 'true')
  darkModeToggle.setAttribute('aria-label', 'Disable dark mode')
  if (store) localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = (store = true) => {
  document.body.classList.remove('darkmode')
  darkModeToggle.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"/></svg>\`
  darkModeToggle.setAttribute('aria-pressed', 'false')
  darkModeToggle.setAttribute('aria-label', 'Enable dark mode')
  if (store) localStorage.setItem('darkMode', 'disabled')
}

const checkPreference = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode(false) // don't set localStorage from preferences to respect future changes in client prefs
  } else {
    disableDarkMode(false)
  }
}

// execution
if (darkMode === 'enabled') enableDarkMode()
if (darkMode === 'disabled') disableDarkMode()
if (!darkMode) checkPreference()

darkModeToggle.addEventListener('click', () => {
  darkMode = document.body.classList.contains('darkmode')

  !darkMode ? enableDarkMode() : disableDarkMode()
})

// Listen for view transitions
document.addEventListener('astro:after-swap', () => {
  // Setup
  darkMode = localStorage.getItem('darkMode')

  // Execution
  if (darkMode === 'enabled') enableDarkMode()
  if (darkMode === 'disabled') disableDarkMode()
  if (!darkMode) checkPreference()
})
<\/script>`], ["", '<button class="darkmode-toggle" aria-pressed="false" aria-label="Enable dark mode"', `> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"></path></svg> </button> <script>
// variables
let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('.darkmode-toggle')

// functions
const enableDarkMode = (store = true) => {
  document.body.classList.add('darkmode')
  darkModeToggle.innerHTML = \\\`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V3zM5.707 4.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zm14 0a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-9 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H3zm17 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1zM6.707 18.707a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414l1-1zm12-1.414a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zM13 20a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1z" fill="currentColor"/></svg>\\\`
  darkModeToggle.setAttribute('aria-pressed', 'true')
  darkModeToggle.setAttribute('aria-label', 'Disable dark mode')
  if (store) localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = (store = true) => {
  document.body.classList.remove('darkmode')
  darkModeToggle.innerHTML = \\\`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"/></svg>\\\`
  darkModeToggle.setAttribute('aria-pressed', 'false')
  darkModeToggle.setAttribute('aria-label', 'Enable dark mode')
  if (store) localStorage.setItem('darkMode', 'disabled')
}

const checkPreference = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode(false) // don't set localStorage from preferences to respect future changes in client prefs
  } else {
    disableDarkMode(false)
  }
}

// execution
if (darkMode === 'enabled') enableDarkMode()
if (darkMode === 'disabled') disableDarkMode()
if (!darkMode) checkPreference()

darkModeToggle.addEventListener('click', () => {
  darkMode = document.body.classList.contains('darkmode')

  !darkMode ? enableDarkMode() : disableDarkMode()
})

// Listen for view transitions
document.addEventListener('astro:after-swap', () => {
  // Setup
  darkMode = localStorage.getItem('darkMode')

  // Execution
  if (darkMode === 'enabled') enableDarkMode()
  if (darkMode === 'disabled') disableDarkMode()
  if (!darkMode) checkPreference()
})
<\/script>`])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "ngeadvuk"), "data-astro-transition-persist"));
}, "E:/Nouveau dossier/s/nettacos/node_modules/accessible-astro-components/DarkMode.astro", "self");

const $$Astro$a = createAstro();
const $$Media = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Media;
  const { class: classNames, src = "https://fakeimg.pl/640x360", alt = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(classNames, "class")}${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy" decoding="async">`;
}, "E:/Nouveau dossier/s/nettacos/node_modules/accessible-astro-components/Media.astro", void 0);

const $$Astro$9 = createAstro();
const $$Modal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Modal;
  const { triggerId, title, closeText = "Close" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<dialog class="modal"${addAttribute(triggerId, "aria-labelledby")}> <div class="modal__inner"> <div class="modal__content"> <h3 tabindex="-1"> ${title} </h3> ${renderSlot($$result, $$slots["default"], renderTemplate`Modal description.`)} </div> <div class="modal__close"> <button>${closeText}</button> </div> </div> </dialog>  `;
}, "E:/Nouveau dossier/s/nettacos/node_modules/accessible-astro-components/Modal.astro", void 0);

const $$Astro$8 = createAstro();
const $$Notification = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Notification;
  const { type = "default", role = "none", ariaLive = "off" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`notification type-${type}`, "class")}${addAttribute(role, "role")}${addAttribute(ariaLive, "aria-live")}> ${renderSlot($$result, $$slots["default"], renderTemplate` <p><strong>Message:</strong> This is a notification!</p> `)} </div> `;
}, "E:/Nouveau dossier/s/nettacos/node_modules/accessible-astro-components/Notification.astro", void 0);

const $$Astro$7 = createAstro();
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    firstPage = "#",
    previousPage = "#",
    nextPage = "#",
    lastPage = "#",
    currentPage = "1",
    totalPages = "12"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="pagination" aria-label="Pagination"> <ul class="pagination__list"> <li> ${firstPage ? renderTemplate`<a${addAttribute(firstPage, "href")} aria-label="Go to the first page"> <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.6667 9L18 15.6667L24.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.6667 9L8 15.6667L14.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a>` : renderTemplate`<span class="disabled"> <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.6667 9L18 15.6667L24.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.6667 9L8 15.6667L14.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </span>`} </li> <li> ${previousPage ? renderTemplate`<a${addAttribute(previousPage, "href")}${addAttribute(`Go back to ${previousPage}`, "aria-label")}> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7-5 5 5 5"></path> </svg> </a>` : renderTemplate`<span class="disabled"> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7-5 5 5 5"></path> </svg> </span>`} </li> <li> <span>Page ${currentPage} of ${totalPages}</span> </li> <li> ${nextPage ? renderTemplate`<a${addAttribute(nextPage, "href")}${addAttribute(`Go to ${nextPage}`, "aria-label")}> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7 5 5-5 5"></path> </svg> </a>` : renderTemplate`<span class="disabled"> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7 5 5-5 5"></path> </svg> </span>`} </li> <li> ${lastPage ? renderTemplate`<a${addAttribute(lastPage, "href")} aria-label="Go to the last page"> <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.33333 9L14 15.6667L7.33333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.3333 9L24 15.6667L17.3333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a>` : renderTemplate`<span class="disabled"> <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.33333 9L14 15.6667L7.33333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.3333 9L24 15.6667L17.3333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </span>`} </li> </ul> </nav> `;
}, "E:/Nouveau dossier/s/nettacos/node_modules/accessible-astro-components/Pagination.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro();
const $$SkipLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SkipLinks;
  return renderTemplate(_a || (_a = __template(["", `<div class="skip-links"> <a href="#main-content">Skip to main content</a> </div> <script type="module">
  // variables
  const skipLink = document.querySelector('.skip-links a')

  // execution
  skipLink.addEventListener('keydown', (event) => {
    if (!event.target.closest('a')) return
    const key = event.key

    if (key !== 'Enter') return
    event.preventDefault()
    const target = event.target.getAttribute('href')

    if (document.querySelector(target)) {
      const targetElement = document.querySelector(target)
      targetElement.setAttribute('tabindex', '-1')
      targetElement.focus()
    } else if (!document.querySelector(target) && document.querySelector('h1')) {
      const h1 = document.querySelector('h1')
      h1.setAttribute('tabindex', '-1')
      h1.focus()
    } else {
      console.warn('SkipLinks are not set, either missing an h1 or main content id on the page.')
    }
  })
<\/script> `])), maybeRenderHead());
}, "E:/Nouveau dossier/s/nettacos/node_modules/accessible-astro-components/SkipLinks.astro", void 0);

const $$Astro$5 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div id="main-tion" class="is-desktop py-8" data-astro-cid-pux6a34n> <div class="container" data-astro-cid-pux6a34n> <a href="/" class="flex items-center  text-center gap-2 !no-underline" data-astro-cid-pux6a34n> <div data-astro-cid-pux6a34n> <h1 class=" text-4xl md:text-left lg:text-4xl neon-text " data-astro-cid-pux6a34n> <span data-astro-cid-pux6a34n>FRENCH</span> <span data-astro-cid-pux6a34n>TACOS</span> </h1> <div class="center-container" data-astro-cid-pux6a34n> <span class="character" style="--delay: 5.1s;" data-astro-cid-pux6a34n> - </span> <span class="character" style="--delay: 5.1s;" data-astro-cid-pux6a34n>L</span> <span class="character" style="--delay: 3.2s;" data-astro-cid-pux6a34n>0</span> <span class="character" style="--delay: 2.3s;" data-astro-cid-pux6a34n>N</span> <span class="character" style="--delay: 6.4s;" data-astro-cid-pux6a34n>D</span> <span class="character" style="--delay: 4.5s;" data-astro-cid-pux6a34n>O</span> <span class="character" style="--delay: 8.5s;" data-astro-cid-pux6a34n>N</span> <span class="character" style="--delay: 5.1s;" data-astro-cid-pux6a34n> - </span> </div> </div> </a> <div class="wrapper" data-astro-cid-pux6a34n> <nav class="desktop-menu" aria-label="Main tion desktop" data-astro-cid-pux6a34n> <ul class="menu" data-astro-cid-pux6a34n> ${renderSlot($$result, $$slots["default"])} </ul> </nav> ${renderComponent($$result, "DarkMode", $$DarkMode, { "data-astro-cid-pux6a34n": true })} ${renderComponent($$result, "ResponsiveToggle", $$ResponsiveToggle, { "data-astro-cid-pux6a34n": true })} </div> <nav class="mobile-menu" aria-label="Main tion mobile" data-astro-cid-pux6a34n> <ul class="menu" data-astro-cid-pux6a34n> ${renderSlot($$result, $$slots["default"])} </ul> </nav> </div> </div>    `;
}, "E:/Nouveau dossier/s/nettacos/src/components/Navigation.astro", void 0);

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header id="sticky-header" class="bg-gradient-to-br from-black via-pink-800 to-black bg-opacity-20 dark:bg-gradient-to-br dark:from-pink-700 dark:via-gray-800 dark:to-black  dark:bg-opacity-10"> ${renderComponent($$result, "SkipLinks", $$SkipLinks, {})} ${renderComponent($$result, "Navigation", $$Navigation, {}, { "default": ($$result2) => renderTemplate` <li class="menu-item"> <a href="/">Home</a> </li> <li class="menu-item"> <a href="/menu">MENU</a> </li> <li class="menu-item"> <a href="../#section1">ABOUT</a> </li> <li class="menu-item"> <a href="/map/">FIND US</a> </li> <li class="menu-item"> <a href="https://deliveroo.co.uk/brands/french-tacos/?utm_medium=backlink&utm_source=%20french-tacos&utm_campaign=webreferral" title="external link" rel="external noopener noreferrer">ORDER ONLINE</a> </li> ` })} </header> `;
}, "E:/Nouveau dossier/s/nettacos/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CallToAction;
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-balv45lp> <div class="call-to-action mt-24 mb-32 flex flex-col items-center gap-12 rounded-xl p-12 md:p-24" data-astro-cid-balv45lp> <h2 class="text-center text-3xl md:text-5xl" data-astro-cid-balv45lp>A new taste straight from France! </h2> <a href="https://deliveroo.co.uk/brands/french-tacos/?utm_medium=backlink&utm_source=%20french-tacos&utm_campaign=webreferral" class="text-center text-lg" data-astro-cid-balv45lp>ORDER ONLINE</a> </div> </div> `;
}, "E:/Nouveau dossier/s/nettacos/src/components/CallToAction.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer> ${renderComponent($$result, "CallToAction", $$CallToAction, {})} <section class="py-8"> <div class="container"> <p>
&copy; ${currentYear} - French Tacos LONDON
        . Made with ❤️ by <a href="#">French Tacos
</a>.
</p> </div> </section> </footer>`;
}, "E:/Nouveau dossier/s/nettacos/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$DefaultLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DefaultLayout;
  const {
    title = "Astro",
    description = "A starter project with accessibility features using Astro static site builder. Contains accessible landmarks, skip links, a dark mode color scheme, better focus outline and keyboard menu navigation.",
    url,
    image = "/social-preview-image.png",
    author = "Mark Teekman"
  } = Astro2.props;
  return renderTemplate`<html lang="en" dir="ltr"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><!-- favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderComponent($$result, "SiteMeta", $$SiteMeta, { "title": title, "description": description.substring(0, 100), "url": Astro2.site ? `${Astro2.site}/${title.toLowerCase().replaceAll(" ", "-")}` : `https://accessible-astro.dev/${title.toLowerCase().replaceAll(" ", "-")}`, "image": image, "author": author })}${renderHead()}</head> <body class="bg-gradient-to-br from-black via-pink-800 to-black dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-800 dark:to-black"> ${renderComponent($$result, "Header", $$Header, {})} <main id="main-content"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "E:/Nouveau dossier/s/nettacos/src/layouts/DefaultLayout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="my-12"> <div class="container"> <h1>404</h1> </div> </section> <section class="my-12"> <div class="space-content container"> <p class="text-2xl">This page does not exist. Don't worry though, we got you.</p> <a class="button" href="/">Let's get you home Astronout 🚀</a> </div> </section> ` })}`;
}, "E:/Nouveau dossier/s/nettacos/src/pages/404.astro", void 0);

const $$file = "E:/Nouveau dossier/s/nettacos/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Card as $, _404 as _, $$Pagination as a, $$DefaultLayout as b, $$Breadcrumbs as c, $$BreadcrumbsItem as d, $$Media as e, $$Accordion as f, $$AccordionItem as g, $$Modal as h, $$Notification as i };
