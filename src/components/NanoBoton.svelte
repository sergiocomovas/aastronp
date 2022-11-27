<script>
  import { isCartOpen } from '../cartStore.js';
  function oCe(){
    isCartOpen.set(!$isCartOpen);
  }
</script>

<!--use "$" to read the store value-->
<button on:click={oCe}>Nanostore</button>