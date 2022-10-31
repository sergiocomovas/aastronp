<script>
  async function cargarPueblos() {
    let response = await fetch("http://127.0.0.1:3000/pueblos.json");
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
	<p>🏙️{pueblo.PUEBLO}, POBLACIÓN: {pueblo.POBLACIÓN} habitantes.</p>
	{/each}
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
</div>
