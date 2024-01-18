<script>
    export let size = 30;
</script>

<button class='btn-holiday' style:width={`${size}px`} style:height={`${size}px`} on:click={() => window.bookHoliday.showModal()}>
    <svg role="presentation" class="btn-holiday__img" fill='inherit'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.3 20.1">
        <path d="M4.6 7.6l-.5-.9 2-1.2L4.6 3l-2 1.3-.6-.9 2.9-1.7 2.6 4.1"></path>
        <path d="M9.9 20.1c-.9 0-1.9-.3-2.9-.9-1.7-1-3.4-2.7-4.7-4.8-3-4.7-3.1-9.2-.3-11l.5.9C.2 5.7.4 9.7 3 13.9c1.2 2 2.8 3.6 4.3 4.5 1.1.6 2.7 1.1 4.1.3l1.9-1.2L12 15l-2 1.2c-1.2.7-2.8.3-3.5-.8l-3.2-5.2c-.7-1.2-.4-2.7.8-3.5l.5.9c-.7.4-.9 1.3-.5 2l3.2 5.2c.4.7 1.5.9 2.2.5l2.8-1.7 2.6 4.1-2.8 1.7c-.7.5-1.4.7-2.2.7zM13.7 11.3l-.9-.3c.4-1.1.2-2.2-.4-3.1-.6-1-1.7-1.6-2.8-1.7l.1-1c1.5.1 2.8.9 3.6 2.1.7 1.2.9 2.7.4 4z"></path>
        <path d="M16.5 11.9l-1-.3c.5-1.8.2-3.7-.8-5.3-1-1.6-2.7-2.6-4.7-2.9l.1-1c2.2.3 4.2 1.5 5.4 3.3 1.2 1.9 1.6 4.1 1 6.2z"></path>
        <path d="M18.9 12.5l-1-.3c.7-2.5.2-5.1-1.1-7.2-1.4-2.2-3.7-3.6-6.3-4l.1-1c2.9.4 5.4 2 7 4.4 1.6 2.4 2.1 5.3 1.3 8.1z"></path>
    </svg>
</button>

<style>
    .btn-holiday {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: #ffa600;
        animation: rotate 1.8s ease-out infinite normal running 0s none;
    }
    .btn-holiday__img {
        width: 28px;
        height: 28px;
        fill: #000;
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
