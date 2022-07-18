<script>
	import { NewPost, NewRequest, NewRequestAll } from './lib/Requests/RequestController.js';

	const API_ENDPOINT = 'http://localhost:2112/api';

	const requestBody = {
		Id: '',
		Title: '',
		Quantity: 0,
		Message: '',
		City: '',
	};

	let orderNum = 0;
	
</script>

<main>
	<h1>MSSQL REST API</h1>

	<div class="input-containers" id="Post-Container">
		<h3>REST API - POST REQUEST</h3>

		<form on:submit|preventDefault={() => NewPost(API_ENDPOINT, requestBody, 'orders')} method="POST" class="post-form">
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

	<div class="input-containers" id="Get-Container">
		<h3>REST API - GET ORDER</h3>

		<form on:submit|preventDefault={() => NewRequest(API_ENDPOINT, 'orders', { orderNum })} method="GET" class="get-form">
			<span>
				Order #<br>
				<input type="number" min="0" max="999999999" id="id" name="id" bind:value={orderNum} required>
			</span>
			<br>
			<button type='submit'>Retieve Order: {orderNum}</button>
		</form>
	</div>

	<div class="input-containers" id="Get-Container">
		<h3>REST API - GET ALL ORDERS</h3>

		<button on:click|preventDefault={() => NewRequestAll(API_ENDPOINT, 'orders')}>Retrieve all orders</button>
	</div>
</main>

<style>
	.input-containers{
		float: left;
		padding: 0 50px;
	}
</style>
