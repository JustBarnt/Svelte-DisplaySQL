<script>
	//Module imports
	import { HandleQuery } from './scripts/QueryParsingController';

	//Component imports
	import QueryRequests from './components/actions/QueryRequests.svelte';
	import TableView from './components/views/TableView.svelte';

	let tableProps = {};

	/**
	* Manages the properties of the table displaying the query results
	*
	* @param {Boolean} show - A boolean value used to show or hide the table/descriptor text
	* @param {String} type - A string value containing the query method; all, single, submit
	* @param {String} message - A string value containing a message used for either: Failure, or slow loading.
	*/
	function DisplayData(show, type, message)
	{
		tableProps = {
			show: show,
			type: type,
			message: message,
		};
	}
</script>

<main>
	<h1>MSSQL REST API</h1>
	
	<div id="FormContainer">
		<!--TODO: Use slots name='Submit/All/Single' for component controll-->
		<!--TODO: Create overall component to handle slots for query compontents-->
		<QueryRequests on:query={(event) => HandleQuery(event, DisplayData)}/>
	</div>
	<div id="TableContainer">
		<TableView bind:show={tableProps.show} bind:message={tableProps.message}/>
	</div>
</main>

<style>
	#FormContainer{
		display:flex;
		align-items:flex-start;
		justify-content: center;
	}
</style>
