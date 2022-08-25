<script>
	import Table from "../components/Table.svelte";
	import { Utilities } from "../scripts/utilities/Utilities";

	// const EventDetails = { success: false, results: null, params: "" };
	const AsyncAwait = Utilities.AsyncDelay;
	// let apiContext;

	// onMount(() =>
	// {
	// 	const urlQuery = window.location.search;
	// 	EventDetails.params = urlQuery;
	// 	HandleQuery(EventDetails, BuildTable);
	// });

// 	function BuildTable()
// 	{
// 		apiContext = get(API);
// 	}
 </script>

<div id="TableContainer">
	{#await AsyncAwait(1000) then success}
		<Table/>
	{/await}
</div>

<style>
	#TableContainer{
		padding-top: calc(var(--headerHeight) + var(--contentPadding));
	}
</style>