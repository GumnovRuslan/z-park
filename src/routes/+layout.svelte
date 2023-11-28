<script>
    import Header from "$lib/component/Header.svelte";
    import Footer from "$lib/component/Footer.svelte";
</script>

<Header />
<div class='content'>
    <slot />
</div>
<Footer />

<style>
    :global(button) {
        cursor: pointer;
    }
    :global(html,body) {
        padding: 0;
        margin: 0;
    }
    :global(*) {
        box-sizing: border-box;
    }
    :global(p) {
        margin: 0;
    }
    .content {
        min-height: 100vh;
    }
</style>
