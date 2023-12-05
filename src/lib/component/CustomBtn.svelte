<script>
    export let text
    export let handleClick

    function handleClickInternal() {
        if (handleClick) {
            handleClick();
        }
    }
</script>

<button class="btn" type="button" on:click={handleClickInternal}>{text}</button>

<style>
    .btn {
        position: relative;
        min-width: 130px;
        text-decoration: none;
        text-transform: uppercase;
        text-shadow: 1px 1px 2px #6a6a6a;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.5px;
        border: none;
        border-radius: 50px;
        color: #f5f5f5;
        background: #ffa600;
        padding: 10px 20px;
        outline: none;
        transition: background .6s, box-shadow .3s;
        animation: pulse 4s ease-out infinite normal running 0s none;
    }
    .btn::after {
        content: '';
        z-index: -1;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all 0.3s;
        box-shadow: 2px 2px 4px #757575;
    }

    .btn:hover {
        animation: fastPulse 0.5s ease-out infinite normal running .2s none;
        box-shadow: inset 0 0 15px red;
        background: rgb(255, 61, 61);

    }
    .btn:hover:after{
        animation: fastPulse 0.5s ease-out infinite normal running .45s none;
    }

    @keyframes pulse {
        0% {
            outline: 2px solid #ffa600;
            transform: scale(102%);
        }
        10% {
            outline: 1px solid #ffa60000;
        }
        15% {
            outline: 1px solid #ffa60000;
            outline-offset: 15px;
            transform: scale(100%);
        }
        100% {
            outline: 1px solid #ffa60000;
            outline-offset: 15px;
        }
    }

    @keyframes fastPulse {
        0% {
            outline: 2px solid red;
        }
        50% {
            transform: scale(102%);
        }
        100% {
            outline: 1px solid rgba(255, 0, 0, 0);
            outline-offset: 15px;
        }
    }
</style>
