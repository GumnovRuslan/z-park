

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.3f490617.js","_app/immutable/chunks/scheduler.417cec50.js","_app/immutable/chunks/index.b7f6835c.js","_app/immutable/chunks/Contacts.3d996e77.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/CustomBtn.5c9308e7.js","_app/immutable/chunks/popup.b33790c6.js"];
export const stylesheets = ["_app/immutable/assets/3.c1253383.css","_app/immutable/assets/Contacts.fadf017a.css","_app/immutable/assets/CustomBtn.22d0ceb1.css"];
export const fonts = [];
