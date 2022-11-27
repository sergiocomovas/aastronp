<script>
import Foo from './Componente2.svelte';
import Bar from './Componente1.svelte';

let expresion = Bar;
function cambiarClick(){
  if (expresion === Foo ){
    console.log("invent");
    expresion = Bar;
  }else{
    expresion = Foo;
  }
}
</script>

<aside style="background-color:var(--color-bg-secondary)">
  <button on:click={cambiarClick}>Cambiar</button>
</aside>


<aside>
<svelte:component this={expresion}/>
</aside>