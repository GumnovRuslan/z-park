<script>
    import Header from "$lib/component/Header.svelte";
    import Footer from "$lib/component/Footer.svelte";
    import BtnUp from "../lib/component/BtnUp.svelte";
    import BreadCrumbs from "../lib/component/BreadCrumbs.svelte";

  let breadcrumbs = [
    { label: 'Главная', url: '/' },
    { label: 'Текущая страница', url: null }
  ];
</script>

<Header />
<BreadCrumbs {breadcrumbs} />
<div class='content'>
    <slot />
</div>
<BtnUp />
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
