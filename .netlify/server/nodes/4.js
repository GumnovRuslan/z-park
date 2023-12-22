

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cafe/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.8d18fd6d.js","_app/immutable/chunks/scheduler.bf985bf8.js","_app/immutable/chunks/index.b3efbba8.js","_app/immutable/chunks/SectionTitle.5fea5634.js"];
export const stylesheets = ["_app/immutable/assets/4.85e1b259.css","_app/immutable/assets/SectionTitle.9446a752.css"];
export const fonts = [];
