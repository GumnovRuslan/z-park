<script>
    import Header from "$lib/sections/Header.svelte";
    import Footer from "$lib/sections/Footer.svelte";
    import BtnUp from "../lib/component/BtnUp.svelte";
    import BreadCrumbs from "../lib/component/BreadCrumbs.svelte";

  let breadcrumbs = [
    { label: 'Главная', url: '/' },
    { label: 'Текущая страница', url: null }
  ];
</script>

<div class='wrapper'>
    <Header />
    <main class='main'>
        <!-- <BreadCrumbs {breadcrumbs} /> -->
        <slot />
        <BtnUp />
    </main>
    <Footer />
</div>


<style>
    :global(button) {
        cursor: pointer;
    }
    :global(html,body) {
        padding: 0;
        margin: 0;
        height: 100%;
    }
    :global(*) {
        box-sizing: border-box;
    }
    :global(p) {
        margin: 0;
        padding: 0;
    }
    .wrapper {
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }
    .main {
        flex: 1 1 auto;
    }
</style>
