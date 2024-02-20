

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/privacy-policy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.7b3b7bf9.js","_app/immutable/chunks/scheduler.417cec50.js","_app/immutable/chunks/index.b7f6835c.js"];
export const stylesheets = [];
export const fonts = [];
