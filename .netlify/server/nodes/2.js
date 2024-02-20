import * as server from '../entries/pages/photo/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/photo/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.535ad0ab.js","_app/immutable/chunks/scheduler.417cec50.js","_app/immutable/chunks/index.b7f6835c.js"];
export const stylesheets = [];
export const fonts = [];
