<script>
	import { queries } from '../stores/stores';
	import { HandleGetOrder } from '../controllers/events/ResponseController';
	let orderId = 0;
</script>

<div class="input-containers">
	<h3>REST API - GET ORDER</h3>
	<form on:submit|preventDefault={() => HandleGetOrder(orderId)} method="GET" class="get-form">
		<span>
			Order #<br>
			<input type="number" min="0" max="999999999" bind:value={orderId} required>
		</span>
		<br>
		<button type='submit'>Retrieve Order: {orderId}</button>
	</form>
</div>
<!-- 
{#if $order !== undefined}
	<table id="Order">
		<tr>
			{#each Object.keys($order) as [key]} <!-- FIXME: So that it uses keys/values instead of entries twice
					<th>{key}</th>
			{/each}
		</tr>
		<tr>
			{#each Object.values($order) as [value]}
					<td>{value}</td>
			{/each}
		</tr>
	</table>
{:else}
	<h3>No orders to display...</h3>
{/if} -->
