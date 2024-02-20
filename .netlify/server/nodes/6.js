

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contacts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.79ac1a4f.js","_app/immutable/chunks/scheduler.417cec50.js","_app/immutable/chunks/index.b7f6835c.js","_app/immutable/chunks/SectionTitle.1e46b597.js","_app/immutable/chunks/Contacts.3d996e77.js"];
export const stylesheets = ["_app/immutable/assets/6.4ae1e769.css","_app/immutable/assets/SectionTitle.9446a752.css","_app/immutable/assets/Contacts.fadf017a.css"];
export const fonts = [];
