import photoAlbums from '$lib/db/photoAlbums';

export function load() {
	return {
		albums: photoAlbums.map((post) => ({
			link: post.link,
			name: post.name,
			inner: post.inner
		}))
	};
}
