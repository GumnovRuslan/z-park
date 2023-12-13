import { c as create_ssr_component, d as each, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { C as Contacts } from "../../chunks/Contacts.js";
const slider_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".slider.svelte-8bixf4{position:relative;width:100%;height:clamp(400px, 40vw, 50vw);background-color:#222}.slide.svelte-8bixf4{position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden}.slide-img.svelte-8bixf4{width:100%;height:100%;object-fit:cover}.next.svelte-8bixf4,.prev.svelte-8bixf4{position:absolute;display:block;z-index:2;top:50%;transform:translateY(-50%);width:50px;height:50px;padding:0;border:none;border-radius:50%;font-size:40px;cursor:pointer;background:rgba(128, 128, 128, 0.415);color:#fff}.next.svelte-8bixf4{right:20px;background-image:url(img/svg/caret-right-fill.svg);background-repeat:no-repeat;background-size:cover}.prev.svelte-8bixf4{left:20px;background-image:url(img/svg/caret-left-fill.svg);background-repeat:no-repeat;background-size:cover}.nav.svelte-8bixf4{position:absolute;bottom:20px;left:0;right:0;height:50px;z-index:3;display:flex;gap:20px;justify-content:center;align-items:center}.bubble.svelte-8bixf4{padding:0;border:0;height:10px;width:10px;border-radius:100px;transition:all 0.4s ease-out;cursor:pointer}.current.svelte-8bixf4{transform:scale(200%)}.onedown.svelte-8bixf4,.oneup.svelte-8bixf4{transform:scale(150%)}.twodown.svelte-8bixf4,.twoup.svelte-8bixf4{transform:scale(120%)}",
  map: null
};
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration = 2e3 } = $$props;
  let { slides } = $$props;
  let currentSlide = 0;
  const nextSlide = () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    timer();
  };
  let interval;
  const timer = () => {
    clearInterval(interval);
    interval = setInterval(nextSlide, duration);
  };
  timer();
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.slides === void 0 && $$bindings.slides && slides !== void 0)
    $$bindings.slides(slides);
  $$result.css.add(css$2);
  return `<div class="slider svelte-8bixf4">${each(slides, (slider, i) => {
    return `${currentSlide === i ? `<div class="slide svelte-8bixf4"><img class="slide-img svelte-8bixf4"${add_attribute("src", slider, 0)} alt="action"> </div>` : ``}`;
  })} <button class="next svelte-8bixf4"></button> <button class="prev svelte-8bixf4"></button> <div class="nav svelte-8bixf4">${each(slides, (slider, i) => {
    return `<button class="${[
      "bubble svelte-8bixf4",
      (i === currentSlide ? "current" : "") + " " + (i === currentSlide - 1 ? "onedown" : "") + " " + (i === currentSlide - 2 ? "twodown" : "") + " " + (i === currentSlide + 1 ? "oneup" : "") + " " + (i === currentSlide + 2 ? "twoup" : "")
    ].join(" ").trim()}"></button>`;
  })}</div> </div>`;
});
const Attractions_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-y70oyi{display:grid;grid-template-columns:repeat(3, minmax(300px, 350px));grid-template-rows:repeat(4, 1fr);justify-items:center;justify-content:center;gap:20px}.card.svelte-y70oyi{display:flex;gap:20px;padding:15px;border-radius:5px;box-shadow:2px 2px 5px #a7a7a7;background:#e2e1ff}.content.svelte-y70oyi{line-height:1.3}.img.svelte-y70oyi{width:50px;height:50px}.title.svelte-y70oyi{font-weight:700;font-size:20px;text-transform:uppercase}.text.svelte-y70oyi{font-size:18px;font-weight:500;color:rgb(101, 101, 101);transition:all 0.5s}@media screen and (max-width: 980px){.container.svelte-y70oyi{display:grid;grid-template-columns:repeat(3, minmax(200px, 250px));grid-template-rows:repeat(4, 1fr);justify-items:center;justify-content:center;gap:10px}.title.svelte-y70oyi{font-size:16px}.text.svelte-y70oyi{font-size:14px}.img.svelte-y70oyi{width:30px;height:30px}}@media screen and (max-width: 650px){.container.svelte-y70oyi{display:flex;flex-wrap:wrap}.card.svelte-y70oyi{flex:auto}.title.svelte-y70oyi{font-size:16px}.text.svelte-y70oyi{font-size:14px}.img.svelte-y70oyi{width:30px;height:30px}}",
  map: null
};
const Attractions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="container svelte-y70oyi" data-svelte-h="svelte-1w3k93h"><div class="card svelte-y70oyi"><img src="img/svg/clock.svg" alt="" class="img svelte-y70oyi"> <div class="content svelte-y70oyi"><p class="title svelte-y70oyi">Поролоновая яма</p> <p class="text svelte-y70oyi">Запрыгивай прямо со скалодрома или батута!</p></div></div> <div class="card svelte-y70oyi"><img src="img/svg/clock.svg" alt="" class="img svelte-y70oyi"> <div class="content svelte-y70oyi"><p class="title svelte-y70oyi">Батуты</p> <p class="text svelte-y70oyi">Детские и взрослые батуты</p></div></div> <div class="card svelte-y70oyi"><img src="img/svg/clock.svg" alt="" class="img svelte-y70oyi"> <div class="content svelte-y70oyi"><p class="title svelte-y70oyi">День рождения</p> <p class="text svelte-y70oyi">Подарите своим детям незабываемые впечатления!</p></div></div> <div class="card svelte-y70oyi"><img src="img/svg/clock.svg" alt="" class="img svelte-y70oyi"> <div class="content svelte-y70oyi"><p class="title svelte-y70oyi">Зона для малышей</p> <p class="text svelte-y70oyi">Запрыгивай прямо со скалодрома или батута!</p></div></div> <div class="card svelte-y70oyi"><img src="img/svg/clock.svg" alt="" class="img svelte-y70oyi"> <div class="content svelte-y70oyi"><p class="title svelte-y70oyi">Тарзанка</p> <p class="text svelte-y70oyi">Запрыгивай прямо со скалодрома или батута!</p></div></div> <div class="card svelte-y70oyi"><img src="img/svg/clock.svg" alt="" class="img svelte-y70oyi"> <div class="content svelte-y70oyi"><p class="title svelte-y70oyi">Лабиринт</p> <p class="text svelte-y70oyi">Детские и взрослые батуты</p></div></div> <div class="card svelte-y70oyi"><img src="img/svg/clock.svg" alt="" class="img svelte-y70oyi"> <div class="content svelte-y70oyi"><p class="title svelte-y70oyi">Песочница</p> <p class="text svelte-y70oyi">Подарите своим детям незабываемые впечатления!</p></div></div> <div class="card svelte-y70oyi"><img src="img/svg/clock.svg" alt="" class="img svelte-y70oyi"> <div class="content svelte-y70oyi"><p class="title svelte-y70oyi">Бассейн с шариками</p> <p class="text svelte-y70oyi">Запрыгивай прямо со скалодрома или батута!</p></div></div> <div class="card svelte-y70oyi"><img src="img/svg/clock.svg" alt="" class="img svelte-y70oyi"> <div class="content svelte-y70oyi"><p class="title svelte-y70oyi">Кульбитные подушки</p> <p class="text svelte-y70oyi">Запрыгивай прямо со скалодрома или батута!</p></div></div> <div class="card svelte-y70oyi"><img src="img/svg/clock.svg" alt="" class="img svelte-y70oyi"> <div class="content svelte-y70oyi"><p class="title svelte-y70oyi">Башня</p> <p class="text svelte-y70oyi">Запрыгивай прямо со скалодрома или батута!</p></div></div> <div class="card svelte-y70oyi"><img src="img/svg/clock.svg" alt="" class="img svelte-y70oyi"> <div class="content svelte-y70oyi"><p class="title svelte-y70oyi">Ледяная горка</p> <p class="text svelte-y70oyi">Запрыгивай прямо со скалодрома или батута!</p></div></div> <div class="card svelte-y70oyi"><img src="img/svg/clock.svg" alt="" class="img svelte-y70oyi"> <div class="content svelte-y70oyi"><p class="title svelte-y70oyi">Аэрохокей</p> <p class="text svelte-y70oyi">Запрыгивай прямо со скалодрома или батута!</p></div></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".section.svelte-1nsg3or.svelte-1nsg3or{padding:20px}.title.svelte-1nsg3or.svelte-1nsg3or{text-transform:uppercase;font-size:36px;font-weight:700;text-align:center;padding:20px;line-height:1.3}.content.svelte-1nsg3or.svelte-1nsg3or{max-width:900px;margin:0 auto;flex-wrap:wrap;display:flex;justify-content:center;gap:20px}.card.svelte-1nsg3or.svelte-1nsg3or{position:relative;display:flex;flex-direction:column;width:300px;height:230px;padding:15px;border-radius:20px;box-shadow:2px 2px 5px grey;overflow:hidden}.card.svelte-1nsg3or:hover .card__img.svelte-1nsg3or{transform:scale(110%)}.card__title.svelte-1nsg3or.svelte-1nsg3or{flex:auto;text-transform:uppercase;font-size:18px;font-weight:700}.card__price.svelte-1nsg3or.svelte-1nsg3or{flex:auto;justify-self:center;font-weight:700;font-size:20px;color:orangered}.card__img.svelte-1nsg3or.svelte-1nsg3or{position:absolute;z-index:-1;right:-25%;bottom:-30%;width:250px;height:250px;display:flex;align-items:center;justify-content:center;font-weight:700;text-transform:uppercase;font-size:18px;border-radius:50%;background:grey;transition:all 0.5s}@media screen and (min-width: 600px){.wrapper.svelte-1nsg3or.svelte-1nsg3or{max-width:2000px;margin:0 auto;padding:50px 20px}}@media screen and (max-width: 600px){.wrapper.svelte-1nsg3or.svelte-1nsg3or{padding:20px 10px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-5d5fcl_START -->${$$result.title = `<title>Парк развлечений в Витебске</title>`, ""}<!-- HEAD_svelte-5d5fcl_END -->`, ""} ${validate_component(Slider, "Slider").$$render(
    $$result,
    {
      duration: 5e3,
      slides: [
        "https://www.pizzatempo.by/i/photo/pizza_za_2_rub.jpg",
        "https://pizzahouse67.ru/wp-content/uploads/2020/05/%D1%86%D0%B5%D0%B7%D0%B0%D1%80%D1%8C_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.png",
        "https://pivkomarket.kz/wp-content/uploads/2020/06/akcija-31-picca.jpg",
        "https://www.pizzatempo.by/i/photo/pizza_za_2_rub.jpg",
        "https://pizzahouse67.ru/wp-content/uploads/2020/05/%D1%86%D0%B5%D0%B7%D0%B0%D1%80%D1%8C_%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.png",
        "https://pivkomarket.kz/wp-content/uploads/2020/06/akcija-31-picca.jpg"
      ]
    },
    {},
    {}
  )} <section class="section svelte-1nsg3or" data-svelte-h="svelte-1b0no9"><p class="title svelte-1nsg3or">Z-park в Витебске</p> <div class="content svelte-1nsg3or"><div class="card svelte-1nsg3or"><p class="card__title svelte-1nsg3or">День рождения</p> <div class="p card__price svelte-1nsg3or">от 130 BYN</div> <div class="card__img svelte-1nsg3or">Картинка</div></div> <div class="card svelte-1nsg3or"><p class="card__title svelte-1nsg3or">Свободные прыжки</p> <div class="p card__price svelte-1nsg3or">от 9 BYN</div> <div class="card__img svelte-1nsg3or"></div></div> <div class="card svelte-1nsg3or"><p class="card__title svelte-1nsg3or">Фитнес на батутах</p> <div class="p card__price svelte-1nsg3or">от 75 BYN</div> <div class="card__img svelte-1nsg3or"></div></div> <div class="card svelte-1nsg3or"><p class="card__title svelte-1nsg3or">Акробатика для детей</p> <div class="p card__price svelte-1nsg3or">от 75 BYN</div> <div class="card__img svelte-1nsg3or"></div></div></div></section> <section class="section svelte-1nsg3or"><h2 class="title svelte-1nsg3or" data-svelte-h="svelte-p6zvgk">Развлечения</h2> ${validate_component(Attractions, "Attractions").$$render($$result, {}, {}, {})}</section> <section class="wrapper svelte-1nsg3or"><p class="title svelte-1nsg3or" data-svelte-h="svelte-1dp0g9x">Контакты</p> ${validate_component(Contacts, "Contacts").$$render($$result, {}, {}, {})} </section>`;
});
export {
  Page as default
};
