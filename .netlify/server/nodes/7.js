

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/holidays/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.5d18ca92.js","_app/immutable/chunks/scheduler.417cec50.js","_app/immutable/chunks/index.b7f6835c.js","_app/immutable/chunks/SectionTitle.1e46b597.js","_app/immutable/chunks/CustomBtn.5c9308e7.js","_app/immutable/chunks/popup.b33790c6.js"];
export const stylesheets = ["_app/immutable/assets/7.9cef0ef7.css","_app/immutable/assets/SectionTitle.9446a752.css","_app/immutable/assets/CustomBtn.22d0ceb1.css"];
export const fonts = [];
