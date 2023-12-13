

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.016fb360.js","_app/immutable/chunks/scheduler.bf985bf8.js","_app/immutable/chunks/index.b3efbba8.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Contacts.9095f727.js"];
export const stylesheets = ["_app/immutable/assets/2.d9389f93.css","_app/immutable/assets/Contacts.f37c0bd1.css"];
export const fonts = [];
