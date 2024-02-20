import { c as create_ssr_component, f as escape, e as each, v as validate_component } from "../../../chunks/ssr.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const Price_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".prise-list.svelte-1o3ps7o{position:relative;max-width:1200px;margin:0 auto;margin-top:15px;outline:2px solid #000;box-shadow:0 5px 10px #8c8c8c;background:#fff;border-radius:10px}.prise-list.svelte-1o3ps7o:not(:last-child){margin-bottom:30px}.prise-list__title.svelte-1o3ps7o{position:absolute;top:0;text-transform:uppercase;text-align:center;margin:0;font-size:clamp(14px, 3vw, 20px);line-height:1.3;letter-spacing:2px;border-radius:10px;border:2px solid #000}.prise-list__title.svelte-1o3ps7o::after{content:'';position:absolute;z-index:-1;top:calc(50% - 2px);left:0;width:100%;height:3px;background:#fff}.prise-list__inner.svelte-1o3ps7o{display:flex;justify-content:space-between;gap:20px;line-height:1.3}.prise-list__inner.svelte-1o3ps7o:not(:last-child){margin-bottom:20px}.prise-list__service-title.svelte-1o3ps7o,.prise-list__service-prise.svelte-1o3ps7o{font-size:clamp(12px, 2.5vw, 18px);text-transform:uppercase}.prise-list__service-prise.svelte-1o3ps7o{text-wrap:nowrap}.prise-list__service-description.svelte-1o3ps7o{color:#505050;font-size:clamp(12px, 2vw, 16px)}@media screen and (min-width: 650px){.prise-list.svelte-1o3ps7o{padding:30px 80px}.prise-list__title.svelte-1o3ps7o{padding:0 30px;left:50px;transform:translateY(-50%);background:#fff}.prise-list__inner.svelte-1o3ps7o:not(:last-child){margin-bottom:20px}}@media screen and (max-width: 650px){.prise-list.svelte-1o3ps7o{padding-top:25px;padding-right:clamp(10px, 3vw, 30px);padding-bottom:15px;padding-left:clamp(10px, 3vw, 30px)}.prise-list__title.svelte-1o3ps7o{width:95%;padding:0 5px;left:50%;transform:translateY(-50%) translateX(-50%);background:#fff}.prise-list__inner.svelte-1o3ps7o:not(:last-child){margin-bottom:clamp(10px, 2vw, 15px)}}",
  map: null
};
const Price = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { price = {
    title: "title",
    line: [
      {
        name: "name",
        price: "price",
        description: "description"
      }
    ]
  } } = $$props;
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  $$result.css.add(css$1);
  return `<div class="prise-list svelte-1o3ps7o"><h2 class="prise-list__title svelte-1o3ps7o">${escape(price.title)}</h2> ${each(price.line, (service) => {
    return `<div class="prise-list__inner svelte-1o3ps7o"><div class="prise-list__service"><p class="prise-list__service-title svelte-1o3ps7o">${escape(service.name ?? "title")}</p> <p class="prise-list__service-description svelte-1o3ps7o">${escape(service.description ?? "")}</p></div> <span class="prise-list__service-prise svelte-1o3ps7o">${escape(service.price ?? "")}</span> </div>`;
  })} </div>`;
});
let priceList = [
  {
    title: "Посещение парка до 18 лет",
    line: [
      {
        name: "Понедельник-четверг (1 чac - весь день)",
        price: "11 byn - 16 byn"
      },
      {
        name: "Пятница (1 чac - весь день)",
        price: "13 byn - 19 byn"
      },
      {
        name: "Субота-воскресение, каникулы, праздничные дни (1 чac - весь день)",
        price: "16 byn - 19 byn"
      }
    ]
  },
  {
    title: "Бронирование комнат",
    line: [
      {
        name: "на 2 часа",
        price: "Бесплатно",
        description: "При заказе на баре от 60 byn (всё, кроме пиццы)"
      }
    ]
  },
  {
    title: "продлени комнаты",
    line: [
      {
        name: "Будний день",
        price: "40 byn"
      },
      {
        name: "Выходные, Праздники, каникулы",
        price: "50 byn"
      }
    ]
  },
  {
    title: "Бронирование столов",
    line: [
      {
        name: "стол до 10 человек",
        price: "Беспланто",
        description: "При заказе на баре от 50 BYN (всё, кроме пиццы)"
      },
      {
        name: "стол до 14 человек",
        price: "Беспланто",
        description: "При заказе на баре от 60 BYN (всё, кроме пиццы)"
      },
      {
        name: "будни",
        price: "-",
        description: "Столики бронироуются в любое время"
      },
      {
        name: "Суббота",
        price: "-",
        description: "(10:00 - 15:00) (15:30 - 20:30)"
      },
      {
        name: "Воскресение",
        price: "-",
        description: "(10:00 - 14:30) (15:00 - 19:30)"
      }
    ]
  },
  {
    title: "Анимации",
    line: [
      {
        name: "Вынос торта(1 герой)",
        price: "20 BYN"
      },
      {
        name: "Флешмоб",
        price: "35 BYN",
        description: "Это особенный танец, который провобится с героем, во время этого танца дети могут веселиться и развлекаться всмете с героем, а в конце имениннику вынесут торт и он задует свечки"
      },
      {
        name: "Флешмоб + вынос торта(1 герой)",
        price: "45 BYN"
      },
      {
        name: "Программа",
        price: "65 BYN",
        description: "Программа это то, чем можно поздравить именнинника и оставить массу положительных эмоций об этом дне"
      },
      {
        name: "Блестящая дискотека",
        price: "80 BYN"
      },
      {
        name: "Дополнительный герой",
        price: "20 BYN"
      }
    ]
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-154dy4t{background:#eaeaea;padding:clamp(20px, 4vw, 50px) clamp(10px, 3vw, 50px)\n    }",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-132a5k1_START -->${$$result.title = `<title>Цены в Z-park</title>`, ""}<!-- HEAD_svelte-132a5k1_END -->`, ""} ${validate_component(SectionTitle, "SectionTitle").$$render($$result, { value: "Цены в Z-park" }, {}, {})} <div class="content svelte-154dy4t">${each(priceList, (priseMenu) => {
    return `${validate_component(Price, "Price").$$render($$result, { price: priseMenu }, {}, {})}`;
  })} </div>`;
});
export {
  Page as default
};
