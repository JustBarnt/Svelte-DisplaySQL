<script>
	import { queries } from '../stores/stores';
	import { onDestroy } from 'svelte';
	import { NewRequestAll, API_ROUTE } from '../controllers/requests/RequestController';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const unsubscribe = queries.subscribe(value => console.log(value));

	function DisplayTable()
	{
		dispatch('request',
		{
			show: true,
			type: 'All', //All, Single, Submit
			message: 'SQL query successful. \nQUERY: "SELECT * FROM ORDERS"',
		});
	}

	async function HandleClick(event)
	{
		const response = await NewRequestAll(API_ROUTE);
		queries.set(response);
	}

	onDestroy(unsubscribe);
</script>

<div class="input-containers">
	<h3>REST API - GET ALL ORDERS</h3>
	<button on:click={HandleClick} on:click={DisplayTable}>Retrieve all orders</button>	
</div>