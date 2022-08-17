<script>
	import { licenses } from "../stores/stores";

	export let show = false;
	export let message = "No queries have been ran.";
	//export let type = 'none'; // May not be needed - <-TODO DELETE THIS

</script>

{#if show}
	<h3>{message}</h3>
	{#if $licenses !== undefined}
		<table id="Orders">
			<thead>	
				<tr>
					{#each Object.keys($licenses[0]) as Header}
						<th>{Header}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each $licenses as query}
					<tr>
						{#each Object.values(query) as Values}
							<td>{Values}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	{:else}
	<p>Svelte has not been able to obtain records from the store 'queries'.</p>
	{/if}
{/if}

<style>
	#Orders{
		border-collapse: collapse;
		margin: 25px 0px;
		box-shadow: 0 0 20px rgba(0,0,0,0.15);
	}

	#Orders thead tr {
		background-color: #504e4e;
		color:#fff;
		text-align: left;
	}

	#Orders th, #Orders td{
		padding: 12px 15px;
	}

	#Orders tbody tr{
		border-bottom: thin solid #dddddd;
		text-align: left;
	}

	#Orders tbody tr:nth-of-type(even){
		background-color: #817b7b;
	}

	#Orders tbody tr:last-of-type{
		border-bottom: 2px solid #504e4e;
	}
</style>