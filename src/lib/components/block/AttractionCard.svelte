<script>
    export let title = 'Title';
    export let text = 'text';
    export let image = '';
</script>


<button class='card' type="button" on:click={(e) =>e.currentTarget.querySelector('dialog').show()}>
    <dialog class="card__popup" aria-label="Описание аттракциона">
        <div class='card__popup-header'>
            <h3 class='card__popup-title'>{title}</h3>
            <button class='card__popup-header-btn' on:click={(e) => {
                e.stopPropagation()
                e.currentTarget.closest('dialog').close()
                }}>
                <span class='card__popup-header-btn-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </span>
            </button>

        </div>
        <div class='card__popup-content'>
            <img src='/img/{image}.webp' alt='Картика {title}' class='card__popup-image'>
            <p class="card__popup-text">{text}</p>
        </div>
    </dialog>
    <h3 class='card__title'>{title}</h3>
    <span class='card__img-container'>
        <img src='/img/{image}.webp' alt='Картинка {title}' class='card__img'>
    </span>
</button>

<style>
    .card {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: max-content;
        padding: 10px;
        border: 2.3px dashed #ffa600;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
    }

    .card__popup {
        max-width: 600px;
        z-index: 2;
        cursor:auto;
    }

    .card__popup-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 20px;
    }

    .card__popup-header-btn {
        background: transparent;
    }

    .card__popup-header-btn-icon {
        display: inline-block;
        width: 24px;
        height: 24px;
    }

    .card__popup-title {
        flex: content;
        font-size: 26px;
    }

    .card__popup-content {

    }

    .card__popup-image {
        margin-bottom: 25px;
    }

    .card__popup-text {
        font-size: 18px;

    }

    .card:hover .card__img {
        transform: scale(110%);
    }

    .card__title {
        text-align: center;
        margin-bottom: 15px;
        text-transform: uppercase;
        font-size: 22px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 1.5px;
    }

    .card__description {
        width: calc(100% - 130px);
        line-height: 1.3;
        font-size: 16px;
        color: #414141;
    }

    .card__img-container {
        width: 100%;
        overflow: hidden;
        border-radius: 5px;
    }

    .card__img {
        display: block;
        object-fit: cover;
        /* object-position: 30%; */
        width: 100%;
        height: 100%;
        transition: all 0.4s;
    }

</style>
