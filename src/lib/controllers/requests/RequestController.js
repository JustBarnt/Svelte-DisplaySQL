let API_ENDPOINT = 'http://localhost:2112/api';
let PATH = '/orders';

export const API_ROUTE = API_ENDPOINT += PATH;

/**
* @description Make a POST request.
* @function NewRequest
* 
* @param {String} BASE_URL Base url for the API Endpoint
* @param {Object} BODY Object for the request body.
* @param {String} PATH segment of the point the request is going to be made at
* 
*/

export const NewPost = async(BASE_URL, BODY, PATH) => //TODO: RE-WRITE TO MATCH NewRequest (Using new Request / new Headers)
{
	const request = await fetch(`${BASE_URL}/${PATH}`, 
	{
		method: 'POST',
		body: JSON.stringify(BODY),
		headers:{ 'Content-Type': 'application/json' },
	});

	if(!request.ok)
		throw new Error(`HTTP Error: Status: ${request.status}`);
	else
		alert('Order submitted successfully. Thank you!');
};

/**
* @description Make a GET request for all data
* @function NewRequestAll
* 
* @param {String} BASE_URL Base url for the API Endpoint
* 
* @return {Promise} Requested results as JSON
*/
export const NewRequestAll = async(BASE_URL) =>
{
	const reqHeaders = new Headers();
	reqHeaders.append('Content-Type', 'application/json');
	
	const reqOptions = {
		method:'GET',
		headers: reqHeaders,
	};

	const request = new Request(`${BASE_URL}`, reqOptions);

	const response = await fetch(request).then((response) => 
	{
		if(response.ok)
			return response.json();

		throw new Error(`Response not recieved. Status: ${response.status}`);
	})
	.then((json) => { return json; })
	.catch(error => console.log(error));

	return response;
};

/**
* @description Make a GET request for just a single item using its ID
* @function NewRequest
* 
* @param {String} BASE_URL Base url for the API Endpoint
* @param OrderID Id of the order to search up
* @returns {Promise}
*/

export const NewRequest = async(BASE_URL, OrderID) =>
{
	const reqHeaders = new Headers();
	reqHeaders.append('Content-Type', 'application/json');

	const reqOptions = {
		method: 'GET',
		headers: reqHeaders,
	};

	const request = new Request(`${BASE_URL}/${OrderID}`, reqOptions);

	const response = await fetch(request).then((response) => 
	{
		if(response.ok)
			return response.json();
		
		throw new Error(`Response not recieved. Status: ${response.status}`);
	})
	.then((json) => { return json[0]; })
	.catch(err => console.log(err));

	return response;
};