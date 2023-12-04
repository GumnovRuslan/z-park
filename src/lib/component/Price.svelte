<script>
    export let title = 'title';
    export let line = [['text', 'price']];

    function showHelp(e) {
        const target = e.target
        const help = target.nextElementSibling
        if(help.style.display == 'block') help.style.display = 'none'
        else help.style.display = 'block'
    }
</script>

<div class='content'>
    <p class='title'>{title}</p>
    {#each line as text }
        <div class='line'>
            <p class='line__text'>{text[0]}
                {#if text[2]}
                    <div class='helper'>
                        <button class='helper__btn' type="button">?</button>
                        <p class='helper__help'>{text[2]} </p>
                    </div>
                {/if}
            </p>
            <span class="line__price">{text[1]}</span>
        </div>
    {/each}
</div>

<style>
    .title {
        text-align: center;
        font-weight: 700;
        font-size: 20px;
        text-transform: uppercase;
        background: #d8d8d8;
    }
    .line {
        display: flex;
        gap: 20px;
        justify-content: space-between;
        align-items: center;
        padding: 5px 20px;
        line-height: 1.3;
        transition: all 0.2s;
        font-size: 18px;
    }
    .line:hover {
        background: #c3c3ff;
    }
    .line:not(:last-child) {
        border-bottom: 1px solid #000;
    }
    .line__text {
        font-weight: 500;
    }
    .line__price {
        font-weight: 700;
    }
    .helper {
        display: inline;
        position: relative;
    }
    .helper__btn {
        border: 1px solid #000;
        border-radius: 50%;
        padding: 0;
        width: 20px;
        height: 20px;
        font-weight: 700;
    }

    .helper__help {
        z-index: 2;
        left: 100%;
        top: 100%;
        background: #ebebeb;
        border: 1px solid #000;
        line-height: 1.3;
        padding: 10px;
        font-size: 14px;
        font-weight: 400;
        opacity: 0;
        transition: all 0.3s;
        visibility: hidden;
    }
    .helper:hover .helper__help {
        opacity: 1;
        visibility: visible;
    }

    @media screen and (min-width: 501px) {
        .helper__help {
            position: absolute;
            width: 200px;
        }
    }
    @media screen and (max-width: 500px) {
        .helper__help {
            display: none;
            width: auto;
        }
        .helper:hover .helper__help {
            display: block;
            margin-top: 10px;
        }
        .line__price {
            align-self: flex-start;
        }
    }
</style>
