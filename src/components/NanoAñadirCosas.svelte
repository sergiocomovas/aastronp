<script>
  import { addCartItem, isCartOpen } from '../cartStore.js';

  // we'll hardcode the item info for simplicity!
  const hardcodedItemInfo = {
    id: 'astronaut-figurine',
    imageSrc: '/img/astronaut-figurine.png'
  }

  function addToCart() {
    isCartOpen.set(true);
    addCartItem(hardcodedItemInfo);
  }
</script>

<form on:submit|preventDefault={addToCart}>
  <slot></slot>
</form>

<style>
  form{
    border: none !important;
    box-shadow: none !important; 
  }

</style>