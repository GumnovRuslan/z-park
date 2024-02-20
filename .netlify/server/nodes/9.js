import * as server from '../entries/pages/photo/_album_/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/photo/_album_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/photo/[album]/+page.server.js";
export const imports = ["_app/immutable/nodes/9.b83f5fc0.js","_app/immutable/chunks/scheduler.417cec50.js","_app/immutable/chunks/index.b7f6835c.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/SectionTitle.1e46b597.js"];
export const stylesheets = ["_app/immutable/assets/9.1cd0b436.css","_app/immutable/assets/SectionTitle.9446a752.css"];
export const fonts = [];
