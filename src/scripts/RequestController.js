let API_ENDPOINT = 'http://localhost:2112/api';
let PATH = '/orders';

export const API_ROUTE = API_ENDPOINT += PATH;

/**
* Creates a new post request to MSSQL Server
* @param {String} endpoint - API Endpoint for the request
* @param {JSON} body - JSON Object to send to be added to the MSSQL Server 
* @return {Promise<any>} Returns a promise containing the JSON response
*/

export const NewPost = async(endpoint, body) =>
{
	const headers  = new Headers();
	headers.append('Content-Type', 'application/json');

	const options = {
		method:'POST',
		body: JSON.stringify(body),
		headers:headers,
	};

	const request = new Request(endpoint, options);

	const response = await fetch(request).then((response) => 
	{
		if(response.ok)
			return response.json();
			
		throw new Error(`Response not received. Status: ${response.status}`);
	})
	.then((json) => 
	{ 
		console.log(`POST Request successful.`); 
		return json; 
	})
	.catch(error => console.log(error));

	return response;
};

/**
* Creates a new get request to MSSQL Server
* @param {String} endpoint - API Endpoint for the request
* @return {Promise<any>} Returns a promise containing the JSON response
*/
export const NewRequestAll = async(endpoint) =>
{
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');
	
	const options = {
		method:'GET',
		headers: headers,
	};

	const request = new Request(endpoint, options);

	const response = await fetch(request).then((response) => 
	{
		if(response.ok)
			return response.json();

		throw new Error(`Response not received. Status: ${response.status}`);
	})
	.then((json) => { return json; })
	.catch(error => console.log(error));

	return response;
};

/**
* Creates a new post request to MSSQL Server
* @param {String} endpoint - API Endpoint for the request
* @param {String} id - Id of the request MSSQL entry to retrieve
* @return {Promise<any>} Returns a promise containing the JSON response
*/

export const NewRequest = async(endpoint, id) =>
{
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');

	const options = {
		method: 'GET',
		headers: headers,
	};

	const request = new Request(`${endpoint}/${id}`, options);

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