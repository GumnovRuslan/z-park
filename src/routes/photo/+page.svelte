<script>
    import Album from '$lib/components/Album.svelte';
    import photoAlbums from '$lib/db/photoAlbums'
    import SectionTitle from '$lib/components/SectionTitle.svelte'
</script>

<svelte:head>
    <title>Альбомы Z-park</title>
</svelte:head>

<SectionTitle value='Альбомы из Z-park'/>

<div class='content'>
    {#each photoAlbums as album}
        <Album {album}/>
    {/each}
</div>

<style>
    .content {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(150px, 300px));
        gap: 30px;
        padding: 50px 10px;
    }
</style>
