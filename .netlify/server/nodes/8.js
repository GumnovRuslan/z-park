

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/photo/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.3c8b5741.js","_app/immutable/chunks/scheduler.417cec50.js","_app/immutable/chunks/index.b7f6835c.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/SectionTitle.1e46b597.js"];
export const stylesheets = ["_app/immutable/assets/8.336f7e50.css","_app/immutable/assets/SectionTitle.9446a752.css"];
export const fonts = [];
