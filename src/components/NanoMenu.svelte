<script>
  import { isCartOpen, cartItems } from '../cartStore.js';
  /* https://docs.astro.build/en/core-concepts/astro-components/ */


  let clasee = "abrido sidenav";
  export const suscribirseNano = isCartOpen.subscribe(
    valor => {
      if (valor === true){
        console.log(`A ${valor}`); 
      }else{
        console.log(`B ${valor}`);
      }
    }
  );
  
</script>


  {#if $isCartOpen} 
    <div class={clasee}>
      <a href="##" class="closebtn" on:click="{() => isCartOpen.set(!$isCartOpen)}">&times;</a>
      {#if Object.values($cartItems).length} 
          <ul class="list">
          {#each Object.values($cartItems) as cartItem}
          <li class="listItem">
            <img class="listItemImg" src={cartItem.imageSrc} alt={cartItem.name} />
            <h3>{cartItem.name}</h3>
            <p>Cantidad: {cartItem.quantity}</p>
          </li>
          {/each}
        </ul>
      {:else}
      <p>¡No hay datos!</p>
      {/if}
    </div>
  {/if}


<style>

  .abrido{
    width: 350px !important;
  }

/* The side navigation menu */
  .sidenav {
    height: 100%; /* 100% Full-height */
    width: 0px; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    right: 0;
    background-color: var(--color-bg); /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    padding: 30px 8px 8px 60px;
    box-shadow: 2px 2px 10px;
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  }

  /* The navigation menu links */
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: var(--color-secondary);
    display: block;
    transition: 0.3s;
  }

  /* When you mouse over the navigation links, change their color */
  .sidenav a:hover {
    color: var(--color-secondary-accent);
  }

  /* Position and style the close button (top right corner) */
  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }

  .list {
    list-style: none;
    padding: 0;
  }

  .listItem {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .listItem * {
    margin-block: 0.3rem;
  }

  .listItemImg {
    width: 4rem;
  }


</style>