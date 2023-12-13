

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/photo/_foto_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.3527d3ef.js","_app/immutable/chunks/scheduler.bf985bf8.js","_app/immutable/chunks/index.b3efbba8.js"];
export const stylesheets = [];
export const fonts = [];
