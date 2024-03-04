<script>
    import { onMount } from "svelte";
    import Card from '$lib/components/block/AttractionCard.svelte'
    import data from '$lib/db/attractions.js'

    let cardsContainer
    let btnMore

    onMount(() => {
        cardsContainer = document.querySelector('.attractions__cards')
        btnMore = document.querySelector('.btn__more')
    })

    function openFullSection() {
        let cards = cardsContainer.querySelectorAll('.attractions__card')

        let show = +btnMore.dataset.show
        let btnText = btnMore.querySelector('.btn__more-text')
        let btnImg = btnMore.querySelector('.btn__more-img')

        if(!show) {
            btnMore.dataset.show = 1
            btnText.textContent = 'Скрыть'
            btnImg.style.transform = 'rotate(180deg)'
            cardsContainer.style.height = `${cardsContainer.scrollHeight}px`
        } else {
            btnMore.dataset.show = 0
            btnText.textContent = 'Показать все'
            btnImg.style.transform = ''
            cardsContainer.style.height = `${(260 + 30) * 2 - 30}px`
        }
    }
</script>

<div class="attractions">
    <div class='attractions__cards'>
        {#each data as dataCard }
            <div class='attractions__card'>
                <Card {...dataCard}/>
            </div>
        {/each}
    </div>

    {#if data.length > 6}
        <button class='btn__more' type="button" data-show="0" on:click={openFullSection} aria-labelledby="textBtnMore">
            <span id="textBtnMore" class='btn__more-text'>Показать все</span>
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="btn__more-img arrow-down-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
            </svg>
        </button>
    {/if}

</div>

<style>
    .btn__more {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 0 auto;
        width: 300px;
        padding: 6px;
        border : none;
        transition: 0.3s;
        background: #ffa600;
        color: #fff;
    }
    .btn__more:hover {
        color: #000;
    }
    .btn__more-text {
        text-shadow: 0 0 1px #000;
        font-weight: 500;
        font-size: 16px;
    }
    .btn__more-img {
        height: 25px;
    }
    .attractions__cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 340px));
        grid-template-rows: repeat(260px);
        justify-content: center;
        gap: 30px;
        overflow: hidden;
        max-width: calc((340px + 30px) * 3 - 30px);
        margin: 0 auto;
        height: calc((279px + 30px) * 2 - 30px);
        transition: all 0.5s;
        margin-bottom: 30px;
    }
</style>
