

/**
* @description Make a POST request.
* @author Brent Williams
* @function NewRequest
* 
* @param {String} BASE_URL Base url for the API Endpoint
* @param {Object} BODY Object for the request body.
* @param {String} PATH segment of the point the request is going to be made at
* 
*/

export const NewPost = async(BASE_URL, BODY, PATH) =>
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
* @author Brent Williams
* @function NewRequestAll
* 
* @param {String} BASE_URL Base url for the API Endpoint
* @param {String} PATH segment of the point the request is going to be made at
* 
* //@return {Promise<JSON>} Requested results as JSON
*/
export const NewRequestAll = async(BASE_URL, PATH) =>
{
	const request = await fetch(`${BASE_URL}/${PATH}`,
	{
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	if(!request.ok)
		throw new Error(`HTTP Error: Status: ${request.status}`);
	else
		console.log(request.json()); 
};

/**
* @description Make a GET request for just a single item using its ID
* @author Brent Williams
* @function NewRequest
* 
* @param {String} BASE_URL Base url for the API Endpoint
* @param {String} PATH segment of the point the request is going to be made at
* 
*/

export const NewRequest = async(BASE_URL, PATH, OrderID) =>
{
	const request = await fetch(`${BASE_URL}/${PATH}/:${OrderID}`, {
		method: 'GET',
		headers: { 'Content-Type':'application/json' },
	});

	if(!request.ok)
		throw new Error(`HTTP Error! Status: ${request.status}`);
	else
		console.log(request.json());
};