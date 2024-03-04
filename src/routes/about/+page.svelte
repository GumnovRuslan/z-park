<script>
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import AboutInfo from "$lib/components/block/AboutInfo.svelte";
    import aboutInfo from '$lib/db/about.js'
</script>

<svelte:head>
    <meta name="description">
    <title>О нас</title>
</svelte:head>

<SectionTitle value='О парке'/>

<div class='about'>
    {#each aboutInfo as data, i}
        <div class='about__info-block'>
            <AboutInfo {...data} position={i % 2 == 0 ? 'left' : 'right'}/>
        </div>
    {/each}
</div>

<style>
    .about {
        padding: 0 10px;
    }

    .about__info-block {
        position: relative;
        padding: 20px 0;
    }

    .about__info-block:not(:last-child)::after  {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        border-radius: 50%;
        background: #ffa600;
    }
</style>
