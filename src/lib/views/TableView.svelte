<script>
	import { queries } from '../stores/stores';

	export let show;
	export let type;
	export let message;

</script>
<!--TODO: ADD FUNCTIONALITY FOR TABLE CHANGING BASED ON METHOD-->

{#if show}
	<h3>{message}</h3>
	<table id="Orders">
		<thead>
			<tr>
				{#each Object.keys($queries[0]) as Header}
					<th>{Header}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each $queries as query}
				<tr>
					{#each Object.values(query) as Values}
						<td>{Values}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
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