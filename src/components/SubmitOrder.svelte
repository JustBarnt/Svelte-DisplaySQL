<script>
	const requestBody = { Id: '', Title: '', Quantity: 0, Message: '', City: '' };
</script>

<div class="input-containers">
	<h3>REST API - POST REQUEST</h3>
	<!-- <form on:submit|preventDefault={() => NewPost(API_ENDPOINT, requestBody, 'orders')} method="POST" class="post-form"> -->
	<form  method="POST" class="post-form">
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
</div>

<style>
	.input-containers{
		width: 25%;
	}
</style>