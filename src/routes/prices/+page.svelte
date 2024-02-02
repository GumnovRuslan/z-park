<script>
    import SectionTitle from '$lib/components/SectionTitle.svelte'
    import Price from '$lib/components/Price.svelte';
    import priceList from '$lib/db/priceList'
</script>


<svelte:head>
    <title>Цены в Z-park</title>
</svelte:head>

<SectionTitle value='Цены в Z-park'/>

<div class='content'>
    {#each priceList as priseMenu}
        <Price price={priseMenu}/>
    {/each}
</div>


<style>
    .content {
        background: #eaeaea;
        padding: clamp(20px, 4vw, 50px) clamp(10px, 3vw, 50px)
    }
</style>
