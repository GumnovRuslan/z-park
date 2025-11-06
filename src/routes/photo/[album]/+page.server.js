import { error } from '@sveltejs/kit';
import photoAlbums from '$lib/db/photoAlbums';

export function load({ params }) {
	const album = photoAlbums.find((post) => post.link === params.album);

	if (!album) throw error(404);

	return album;
}
