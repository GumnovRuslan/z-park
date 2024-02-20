import { c as create_ssr_component, f as escape } from "./ssr.js";
const CustomBtn_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn.svelte-cfexj1{position:relative;min-width:130px;text-decoration:none;text-transform:uppercase;font-size:16px;font-weight:700;letter-spacing:0.5px;border-radius:2px;color:#000000;background:#ffa600;padding:10px 20px;outline:none;transition:background .6s, box-shadow .3s, color .3s;animation:svelte-cfexj1-pulse 4.5s ease-out infinite normal running 0s none}.btn.svelte-cfexj1::after{content:'';z-index:-1;position:absolute;left:0;top:0;width:100%;height:100%;border-radius:inherit;transition:all 0.3s}.btn.svelte-cfexj1:hover{animation:svelte-cfexj1-fastPulse 0.5s ease-out infinite normal running .2s none;box-shadow:inset 0 0 15px red;background:rgb(255, 61, 61);color:#f5f5f5}.btn.svelte-cfexj1:hover:after{animation:svelte-cfexj1-fastPulse 0.5s ease-out infinite normal running .45s none}@keyframes svelte-cfexj1-pulse{0%{outline:2px solid #ffa600;transform:scale(102%)}10%{outline:1px solid #ffa60000}15%{outline:1px solid #ffa60000;outline-offset:20px;transform:scale(100%)}100%{outline:1px solid #ffa60000;outline-offset:20px}}@keyframes svelte-cfexj1-fastPulse{0%{outline:2px solid red}50%{transform:scale(102%)}100%{outline:1px solid rgba(255, 0, 0, 0);outline-offset:15px}}",
  map: null
};
const CustomBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css);
  return `<button class="btn svelte-cfexj1" type="button">${escape(text)}</button>`;
});
export {
  CustomBtn as C
};
