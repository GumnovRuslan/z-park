import { p as photoAlbums } from "../../../chunks/photoAlbums.js";
function load() {
  return {
    albums: photoAlbums.map((post) => ({
      link: post.link,
      name: post.name,
      inner: post.inner
    }))
  };
}
export {
  load
};
