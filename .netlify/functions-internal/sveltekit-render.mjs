import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["img/coffee.webp","img/donuts.jpg","img/favicon.jpg","img/logo-removebg-cut.png","img/logo-removebg.png","img/logo.jpg","img/map.png","img/spider-man.png","img/svg/caret-left-fill.svg","img/svg/caret-right-fill.svg","img/svg/clock.svg","img/svg/envelope-fill.svg","img/svg/geo-alt-fill.svg","img/svg/instagram.svg","img/svg/send-fill.svg","img/svg/star-fill.svg","img/svg/telephone-fill.svg","img/svg/vk.svg","img/svg/youtube.svg","img/woman.png","photo1.jpg"]),
	mimeTypes: {".webp":"image/webp",".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.393849eb.js","app":"_app/immutable/entry/app.dc19ff1b.js","imports":["_app/immutable/entry/start.393849eb.js","_app/immutable/chunks/scheduler.bf985bf8.js","_app/immutable/entry/app.dc19ff1b.js","_app/immutable/chunks/scheduler.bf985bf8.js","_app/immutable/chunks/index.b3efbba8.js"],"stylesheets":[],"fonts":[]},
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
			__memo(() => import('../server/nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/cafe",
				pattern: /^\/cafe\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contacts",
				pattern: /^\/contacts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/holidays",
				pattern: /^\/holidays\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/photo",
				pattern: /^\/photo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/photo/[foto]",
				pattern: /^\/photo\/([^/]+?)\/?$/,
				params: [{"name":"foto","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/prices",
				pattern: /^\/prices\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
