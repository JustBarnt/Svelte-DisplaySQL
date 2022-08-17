<script>
	//Component imports
	import TableView from "./views/TableView.svelte";
	import QueryRequests from "./components/QueryRequests.svelte";

	//NOTE: This is my control for the tableview.
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
	<h1>Licensing Web Tool</h1>
	
	<div id="FormContainer">
		<QueryRequests/>
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
