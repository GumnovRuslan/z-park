<script>
    import SectionTitle from '$lib/components/SectionTitle.svelte'
    import { onMount } from "svelte";
    import menuList from '$lib/db/menuList'
    import CafeList from '$lib/components/ui/CafeList.svelte';

    let anchors
    let cards
    let menuTitles
    let menu
    let menuNavigation

    onMount(() => {
        menuNavigation = document.querySelector('.cafe-nav')
        anchors = menuNavigation.querySelectorAll('a[href*="#"]')
        menu = document.querySelector('.cafe-menu__list')
        cards = document.querySelectorAll('.card')
        menuTitles = document.querySelectorAll('.cafe-menu__title')
        window.addEventListener('resize', titleMargin)
        titleMargin()
        setAnchor()
    })

    function titleMargin() {
        const menuSize = menu ? menu.getBoundingClientRect().left : 0
        let cardSize = cards[0] ? cards[0].getBoundingClientRect().left : 0
        menuTitles.forEach(title => title.style.padding = `0 ${cardSize - menuSize}px`)
    }

    function setAnchor() {
        anchors.forEach(anchor => anchor.addEventListener('click', (e) => {
            e.preventDefault()
            let targetElement = document.getElementById(anchor.getAttribute('href').substr(1))
            let headerHeight = document.querySelector('header').offsetHeight;
            let scrollTo = targetElement.offsetTop - headerHeight
            window.scrollTo({
                top: scrollTo,
                behavior: 'smooth'
            });
        }))
    }
</script>


<svelte:head>
  <title>
    Кафе в Z-park
  </title>
</svelte:head>

<SectionTitle value='Кафе в Z-park'/>

<div class="cafe-nav">
  {#each menuList as menu}
    <a class="cafe-nav__link" href='#{menu.id}'>{menu.title}</a>
  {/each}
</div>

<div class='cafe-menu'>
  {#each menuList as category}
    <CafeList title={category.title} {...category}/>
  {/each}
</div>


<style lang="scss">
    .cafe-nav {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        column-gap: 10px;
        row-gap: 5px;
        padding: 10px;

      &__link {
        padding: 5px 15px;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
        color: #000;
        border: 2px solid #000;
        border-radius: 50px;
        transition: all 0.3s;
        line-height: 1.3;

        &:hover {
          color: red;
          border-color: red;
        }
      }
    }

  .cafe-menu {
    display: flex;
    flex-direction: column;
    gap: clamp(30px, 5vw, 50px);
    padding: 0 clamp(10px, 3vw, 40px) 30px;
  }
</style>
