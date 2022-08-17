let API_ENDPOINT = "https://localhost:7150/";
let PATH = "Licenses/search";

export const API_ROUTE = API_ENDPOINT += PATH;

/**
* Creates a new post request to MSSQL Server
* @param {String} endpoint - API Endpoint for the request
* @param {Object} query - A query object containing the search parameters
* @return {Promise<any>} Returns a promise containing the JSON response
*/

export const NewRequest = async(endpoint, query) =>
{
	const headers = new Headers();
	const searchParams = new URLSearchParams(query);
	headers.append("Content-Type", "application/json");

	const options = {
		method: "GET",
		headers: headers,
		body: searchParams,
	};

	const request = new Request(`${endpoint}/${searchParams}`, options);

	const response = await fetch(request).then((response) => 
	{
		if(response.ok)
			return response.json();
		
		throw new Error(`Response not received. Status: ${response.status}`);
	})
	.then((json) => { return json[0]; })
	.catch(err => console.log(err));

	return response;
};