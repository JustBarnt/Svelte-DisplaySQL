import { API } from "../stores/stores";
import { API_ROUTE, SearchRequest } from "./ApiController";

/**
	* An event handler to handle the custom event from the svelte component
	* 
	* @async
	* @param {Object} Details - Object containing parameters to indicate successful requests.
	* @callback Callback - Starts loading the data into the table.
	*/
async function HandleQuery(Details, Callback)
{
	let { success, results, params } = Details;
	/*
	TODO: (Brent) update HTTP request to return object including status.
	*/
	results = await SearchRequest(API_ROUTE, params);
	success = typeof results !== "object" ? false : true;
	
	if(!success)
		throw new Error("Failed to retrieve response.");

	let apiStoreSchema = { success: success, response: results };
	API.set(apiStoreSchema);
	Callback();
}

export { HandleQuery };
