

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b8dfddd7.js","_app/immutable/chunks/scheduler.417cec50.js","_app/immutable/chunks/index.b7f6835c.js","_app/immutable/chunks/popup.b33790c6.js"];
export const stylesheets = ["_app/immutable/assets/0.da944376.css"];
export const fonts = [];
