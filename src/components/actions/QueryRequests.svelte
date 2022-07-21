<script>
	import { createEventDispatcher } from 'svelte';

	const requestBody = { Id: '', Title: '', Quantity: 0, Message: '', City: '' }; //Set as values for form component props
	const queryDispatch = createEventDispatcher();

	let defaultQueryType = 'All';

	/**
	* Starts a specifed query request
	* @param {String} type - A string specifing the type of query requested
	*/
	function QueryRequest(type, params = null)
	{
		queryDispatch('query',
		{
			success: false, 
			results: null,
			type: type,
			message: 'Starting up query retrieval.',
			params: params,
		});
	}
</script>

<!--TODO: Create an HTML conditional menu that swaps between a form(submission query), input(retrieve single query), and button(get all query) -->



{#if defaultQueryType.toLowerCase() === 'all'}
	<button on:click={() => QueryRequest(defaultQueryType)}>Retrieve all orders</button>
{:else if defaultQueryType.toLowerCase() === 'submit'}
	<form  method="POST" class="post-form" on:submit={() => QueryRequest(defaultQueryType, requestBody)}>
		<span>
			Order #<br>
			<input type="text" id="id" name="id" bind:value={requestBody.Id} required>
		</span>
		<br>
		<span>
			Product<br>
			<input type="text" id="title" name="title" bind:value={requestBody.Title} required>
		</span>
		<br>
		<span>
			Quantity<br>
			<input type="number" id="quantity" name="quantity" bind:value={requestBody.Quantity} required>
		</span>
		<br>
		<span>
			Message<br>
			<input type="text" id="message" name="message" bind:value={requestBody.Message} required>
		</span>
		<br>
		<span>
			City<br>
			<input type="text" id="city" name="city" bind:value={requestBody.City} required>
		</span>
		<br>
		<button type='submit'>Submit Order</button>
	</form>
{:else}
	<p>Single query searching isn't inplemented</p>
{/if}