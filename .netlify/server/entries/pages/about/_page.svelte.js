import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-j9hgy6{padding:20px}.description.svelte-j9hgy6{display:flex;gap:20px;justify-content:center;align-items:center}.img.svelte-j9hgy6{width:350px;height:250px;background:grey}.info.svelte-j9hgy6{width:50vw;display:flex;flex-direction:column;gap:10px}.text.svelte-j9hgy6{line-height:1.5}@media screen and (max-width: 800px){.description.svelte-j9hgy6{flex-direction:column}.img.svelte-j9hgy6{width:calc(100vw - 40px)}.info.svelte-j9hgy6{width:auto}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, { value: "О парке" }, {}, {})} <div class="content svelte-j9hgy6" data-svelte-h="svelte-wfmk8z"><div class="description svelte-j9hgy6"><div class="img-container svelte-j9hgy6"><div class="img svelte-j9hgy6"></div></div> <div class="info svelte-j9hgy6"><p class="text svelte-j9hgy6">Z-PARK - это огромное пространство, на котором дети отправляются в активное путешествие, прыгают до звезд на батутах, пробираются сквозь джунгли в лабиринтах и еще многое, что позволяет ребенку выплеснуть свою энергию, а родителям с удовольствием разделить радость ребят.</p> <p class="text svelte-j9hgy6">Наша команда - это семья, которая понимает, что дети меняют нашу жизнь навсегда. Для нас очень важна среда, в которую погружаются юные мечтатели, - дух приключений и неограниченной свободы развлечений наполняют наш парк.</p> <p class="text svelte-j9hgy6">Создание именно такой среды и соответствующей атмосферы является для нас ключевой задачей.</p></div></div> </div>`;
});
export {
  Page as default
};
