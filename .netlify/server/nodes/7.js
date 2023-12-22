

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/photo/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.9ce10646.js","_app/immutable/chunks/scheduler.bf985bf8.js","_app/immutable/chunks/index.b3efbba8.js","_app/immutable/chunks/SectionTitle.5fea5634.js"];
export const stylesheets = ["_app/immutable/assets/7.ca6d4bee.css","_app/immutable/assets/SectionTitle.9446a752.css"];
export const fonts = [];
