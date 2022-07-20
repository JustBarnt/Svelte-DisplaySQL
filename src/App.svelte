<script>
	import GetOrders from './lib/components/GetOrders.svelte';
	import TableView from './lib/views/TableView.svelte';

	let tableProps = { show: false, type: '', message: 'Awaiting query results...' };

	function HandleRequest(event)
	{
		//const { show, type, message } = event.detail;
		tableProps = Object.assign(tableProps, event.detail);
		console.log(tableProps);
	}
</script>

<main>
	<h1>MSSQL REST API</h1>

	<div id="FormContainer">
		<GetOrders on:request={HandleRequest}/>
	</div>
	<div id="TableContainer">
		<TableView bind:show={tableProps.show} bind:type={tableProps.type} bind:message={tableProps.message}/>
	</div>
</main>

<style>
	#FormContainer{
		display:flex;
		align-items:flex-start;
		justify-content: center;
	}
</style>
