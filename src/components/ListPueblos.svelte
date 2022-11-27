<script>
  async function cargarPueblos() {
    let response = await fetch("pueblos.json");
    let pueblos = await response.json();
    return pueblos;
  }
  const promise = cargarPueblos();
</script>

<div>
{#await promise}
	<p>Loading...</p>
{:then pueblos}
	{#each pueblos as pueblo}
	<p>🏙️{pueblo.PUEBLO}) {pueblo.HABITANTES} habitantes</p>
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
</div>
