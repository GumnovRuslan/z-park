<script>
  import MenuCard from '$lib/components/ui/MenuCard.svelte';

  export let id = '';
  export let title = '';
  export let dish = [];
</script>


<div class='list' id={id}>
  <h2 class='list__title'>{title}</h2>
  <nav class='list__cards'>
    {#each dish as item}
      <MenuCard {...item}/>
    {/each}
  </nav>
</div>


<style lang="scss">
  @import 'static/css/mixins.scss';

  .list {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: clamp(10px, 3vw, 20px);

    @include media-up('xl') {
      max-width: 1090px;
    }

    @include media-between('md', 'xl') {
      max-width: 720px;
    }

    @include media-down('md') {
      max-width: 350px;
    }

    &__title {
      text-transform: uppercase;
      font-size: clamp(24px, 3.5vw, 30px);
      line-height: 1.3;
    }

    &__cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 350px));
      grid-template-rows: auto;
      justify-items: center;
      justify-content: center;
      row-gap: 30px;
      column-gap: 20px;
    }
  }
</style>