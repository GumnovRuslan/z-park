import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/fonts.css","css/global.css","css/reset.css","fonts/Rubik-Bold.ttf","fonts/Rubik-Bold.woff2","fonts/Rubik-Medium.ttf","fonts/Rubik-Medium.woff2","fonts/Rubik-Regular.ttf","fonts/Rubik-Regular.woff2","img/cafe/coffee.webp","img/cafe/donuts.webp","img/cafe/pizza-1.webp","img/cafe/pizza-2.webp","img/cafe/pizza-3.webp","img/cafe/pizza-4.webp","img/cafe/set-1.webp","img/cafe/set-2.webp","img/cafe/set-3.webp","img/favicon.webp","img/logo-removebg-cut.webp","img/map.webp","img/photo1.webp","img/spider-man.webp","img/super-hero.webp","img/woman.webp","svg/arrow-90deg-down.svg","svg/arrow-down-short.svg","svg/call.svg","svg/caret-left-fill.svg","svg/caret-left.svg","svg/caret-right-fill.svg","svg/caret-right.svg","svg/clock.svg","svg/envelope-fill.svg","svg/geo-alt-fill.svg","svg/gift-fill.svg","svg/instagram.svg","svg/letter-fill.svg","svg/send-fill.svg","svg/star-fill.svg","svg/telephone-fill.svg","svg/vk.svg","svg/youtube.svg"]),
	mimeTypes: {".css":"text/css",".ttf":"font/ttf",".woff2":"font/woff2",".webp":"image/webp",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.4df58e54.js","app":"_app/immutable/entry/app.827f5a53.js","imports":["_app/immutable/entry/start.4df58e54.js","_app/immutable/chunks/scheduler.417cec50.js","_app/immutable/entry/app.827f5a53.js","_app/immutable/chunks/scheduler.417cec50.js","_app/immutable/chunks/index.b7f6835c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js')),
			__memo(() => import('../server/nodes/11.js')),
			__memo(() => import('../server/nodes/12.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/cafe",
				pattern: /^\/cafe\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contacts",
				pattern: /^\/contacts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/holidays",
				pattern: /^\/holidays\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/photo",
				pattern: /^\/photo\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/photo/[album]",
				pattern: /^\/photo\/([^/]+?)\/?$/,
				params: [{"name":"album","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/prices",
				pattern: /^\/prices\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/privacy-policy",
				pattern: /^\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/rules",
				pattern: /^\/rules\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
