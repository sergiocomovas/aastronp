<script>
  async function cargarAves() {
    let response = await fetch("https://tbot.comovas.es/aves/9/11");
    let aves = await response.json();
    return aves;
  }
  const promise = cargarAves();
</script>

<div>
{#await promise}
	<p>Loading...</p>
{:then aves}
	{#each aves as ave}
	<p>🐦{ave.aves_id})
    {#if ave.aves_nespanol == `–` }
      <i style="color:grey">{ave.aves_ncientifico}</i>
    {:else}{ave.aves_nespanol}
    {/if}</p>
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
</div>
