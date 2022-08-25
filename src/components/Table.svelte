<script>
		//export let data = undefined;
</script>
<!-- 
{#if data !== undefined}
	<table id="Licenses">
		<thead>	
			<tr>
				{#each Object.keys(data[0]) as Header}
					<th>{Utilities.FormatColumnHeader(Header)}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as query}
				<tr>
					{#each Object.values(query) as Values}
							<td>{Values}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
{/if} -->

<table id="Licenses">
	<thead>	
		<th>Studio Name</th>
		<th>Product ID</th>
		<th>Studio Name</th>
		<th>Created By</th>
		<th>Created</th>
		<th>Expires</th>
	</thead>
	<tbody>
		<tr>
			<td>Riot Games</td>
			<td>235</td>
			<td>Valorant</td>
			<td>Riot Games</td>
			<td>2020-06-01</td>
			<td>Never</td>
		</tr>
		<tr>
			<td>Epic Games</td>
			<td>3528</td>
			<td>Fornite</td>
			<td>Epic Games</td>
			<td>2019-07-01</td>
			<td>Never</td>
		</tr>
		<tr>
			<td>Naughty Dog Games</td>
			<td>235987</td>
			<td>The Last of Us</td>
			<td>Naughty Dog Games</td>
			<td>2016-07-01</td>
			<td>Never</td>
		</tr>
		<tr>
			<td>Gearbox</td>
			<td>29387423</td>
			<td>Tiny Tina's Wonderland</td>
			<td>Gearbox</td>
			<td>2022-04-01</td>
			<td>Never</td>
		</tr>
		<tr>
			<td>Gearbox</td>
			<td>27498475</td>
			<td>Borderlands 3</td>
			<td>Gearbox</td>
			<td>2021-04-01</td>
			<td>Never</td>
		</tr>
	</tbody>
</table>


<style>
	/* #Licenses{
		border-collapse: collapse;
		box-shadow: 0 0 2rem rgba(0,0,0,0.35);
	}

	#Licenses thead tr {
		background-color: #504e4e;
		color:#fff;
		text-align: center;
	}

	#Licenses th, #Licenses td{
		padding: 1.2rem 1.6rem;
	}

	#Licenses tbody tr{
		border-bottom: thin solid #dddddd;
		text-align: left;
	}

	#Licenses tbody tr:nth-of-type(even){
		background-color: #817b7b;
	}

	#Licenses tbody tr:last-of-type{
		border-bottom: 0.1rem solid #504e4e;
	} */
	
	#Licenses{
		background-color: #536872;
		border-collapse: collapse;
		box-shadow: 0 0 0.5rem 0.5rem #12121250;
		border-radius: 0.5rem;
		overflow:hidden;
		/* border: 0.25rem solid #24242450; */
	}

	#Licenses thead th{
		border-bottom: 0.2rem solid #424242;
		color:#fff;
		text-align: center;
	}

	#Licenses th, #Licenses td{
		padding: 1.2rem 1.6rem;
	}

	#Licenses tbody tr{
		border-bottom: 0.2em thin solid #dddddd50;
		text-align: left;
	}

	#Licenses tbody tr:nth-of-type(even){
		background-color: #708090;
	}

	#Licenses tbody tr:nth-of-type(odd){
		background-color: #536878;
	}

	#Licenses tbody tr:last-of-type{
		border-bottom-left-radius: 0.5em;
		border-bottom-right-radius: 0.5em;
		border-bottom: 0.2em thin solid #504e4e50;
	} 
</style>