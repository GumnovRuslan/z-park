

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contacts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.8fe67984.js","_app/immutable/chunks/scheduler.bf985bf8.js","_app/immutable/chunks/index.b3efbba8.js","_app/immutable/chunks/SectionTitle.5fea5634.js","_app/immutable/chunks/Contacts.9095f727.js"];
export const stylesheets = ["_app/immutable/assets/5.4ae1e769.css","_app/immutable/assets/SectionTitle.9446a752.css","_app/immutable/assets/Contacts.f37c0bd1.css"];
export const fonts = [];
