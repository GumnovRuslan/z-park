<script>
    import { openPopup } from '$lib/utils/popup.js'
    import { holidayIcon } from '$lib/icons'
    
    export let size = 30;
</script>

<button class='btn-holiday' style:width={`${size}px`} style:height={`${size}px`} on:click={openPopup} aria-label="Заказать праздник">
  <span class="btn-holiday__img">
    {@html holidayIcon}
  </span>
</button>

<style lang="scss">
  .btn-holiday {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #ffa600;
    animation: rotate 1.8s ease-out infinite normal running 0s none;

    &__img {
      width: 28px;
      height: 28px;
    }
  }

    @keyframes rotate {
        0% {
            transform: rotate(0deg) scale(1);
        }
        25% {
            transform: rotate(10deg) scale(1.1);
        }
        50% {
            transform: rotate(0deg) scale(1);
        }
        75% {
            transform: rotate(-10deg) scale(1.1);
        }
        100% {
            transform: rotate(0deg) scale(1);
        }
    }
</style>
