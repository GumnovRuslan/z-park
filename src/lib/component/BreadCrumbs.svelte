<script>
  export let breadcrumbs = [];
</script>

<nav>
  <ol class="bread-crumb">
    {#each breadcrumbs as { label, url }, index}
      <li class="bread-crumb__item">
        {#if url}
          <a href={url}>{label}</a>
        {:else}
          <li>{label}</li>
        {/if}
        {#if index !== breadcrumbs.length - 1}<span class="separator">/</span>{/if}
      </li>
    {/each}
  </ol>
</nav>

<style>
  .bread-crumb {
    display: flex;
    padding: 0 10px;
    margin: 0;
    list-style: none;
    background: rgba(128, 128, 128, 0.155)
  }

  .bread-crumb__item {
    display: flex;
    align-items: center;
    font-weight: 700;
    color: rgb(78, 1, 211);
  }

  .separator {
    margin: 0 0.5rem;
  }
</style>
