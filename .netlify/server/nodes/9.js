

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/prices/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.2ccb9a1a.js","_app/immutable/chunks/scheduler.bf985bf8.js","_app/immutable/chunks/index.b3efbba8.js","_app/immutable/chunks/SectionTitle.5fea5634.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/9.305d0e4c.css","_app/immutable/assets/SectionTitle.9446a752.css"];
export const fonts = [];
