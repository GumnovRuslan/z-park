<script>
    export let name = 'name';
    export let price = 'price';
    export let grams = '';
    export let img = '';
    export let description = '';
</script>

  <div class='card'>
    {#if description}
        <div class='card__description'>{description}</div>
    {/if}
    <div class='card__image'>
      <img 
        class={`card__image--${img ? 'picture' : 'default'}`} 
        src={img || '/img/favicon.webp'} 
        alt={name}
      >
    </div>
    <div class='card__inner'>
      <p class='card__name'>{name}
        {#if description}
          <span class="card__description-sign">?</span>
        {/if}
      </p>
      <div class='card__info'>
        <span class='card__price'>{`${price} p`}</span>
        <span class='card__grams'>{grams}</span>
      </div>
    </div>
  </div>

<style lang="scss">
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: clamp(15px, 3vw, 20px);
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 5px #ababab;
    background: #fff;

    &:hover .card__description {
      visibility: visible;
      height: inherit;
      width: inherit;
      padding: inherit;
    }

    &__description {
      visibility: hidden;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-radius: inherit;
      line-height: 1.3;
      font-size: clamp(16px, 2vw, 20px);
      transition: all .3s;
      overflow: hidden;
      background: #ff3131e0;
      color: #f5f5f5;
    }

    &__image {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 200px;
      margin-bottom: 10px;
      overflow: hidden;
      background: #fff;
      border-radius: 10px;

      &--picture {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &--default {
        width: 100px;
        height: 100px;
        object-fit: contain;
      }
    }

    &__inner {
      flex: auto;
      display: flex;
      flex-direction: column;
      gap: clamp(10px, 3vw, 20px);
    }

    &__name {
      flex: auto;
      font-size: clamp(16px, 5vw, 18px);
      line-height: 1.3;
    }

    &__description-sign {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background: #fffa5d;
    }

    &__info {
      display: flex;
      gap: 20px;
      justify-content: space-between;
      font-size: clamp(18px, 5vw, 22px);
      line-height: 1.3;
    }
  }
</style>
