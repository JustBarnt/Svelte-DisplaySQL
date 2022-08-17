<script>
	import { createEventDispatcher } from "svelte";

	const query = { amount: 10, name: "createdby", value: "joshr", startDate: "", endDate: "" };
	const queryDispatch = createEventDispatcher();

	let defaultQueryType = "All";

	/**
	* Starts a specifed query request
	* @param {String} type - A string specifing the type of query requested
	*/
	function QueryRequest(type, params = null)
	{
		queryDispatch("query",
		{
			success: false, 
			results: null,
			type: type,
			message: "Starting up query retrieval.",
			params: params,
		});
	}
</script>

<!--TODO: Create an HTML conditional menu that swaps between a form(submission query), input(retrieve single query), and button(get all query) -->



{#if defaultQueryType.toLowerCase() === "all"}
	<button on:click={() => QueryRequest(defaultQueryType)}>Retrieve all orders</button>
{:else if defaultQueryType.toLowerCase() === "submit"}
	<form  method="POST" class="post-form" on:submit={() => QueryRequest(defaultQueryType, query)}>
		<span>
			Number of Results<br>
			<input type="number" id="amount" name="amount" bind:value={query.amount}>
		</span>
		<br>
		<span>
			Tag to filter by<br>
			<input type="text" id="name" name="name" bind:value={query.name}>
		</span>
		<br>
		<span>
			Value of the tag<br>
			<input type="text" id="value" name="value" bind:value={query.value}>
		</span>
		<br>
		<span>
			Created between<br>
			<input type="date" id="startDate" name="start date" bind:value={query.startDate}>
			<input type="date" id="endDate" name="end date" bind:value={query.endDate}>
		</span>
		<br>
		<button type='submit'>Search for Licenses</button>
	</form>
{:else}
	<p>Single query searching isn't inplemented</p>
{/if}