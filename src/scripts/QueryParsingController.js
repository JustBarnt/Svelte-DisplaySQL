import { NewRequestAll, NewPost, NewRequest, API_ROUTE } from './RequestController';
import { queries } from '../stores/stores';
/**
	* A custom event handler for query retrieval
	* 
	* @async
	* @param {CustomEvent} event - A custom event
	* @callback DisplayData - Pass success, type, and message to display appropriate table
	*/
async function HandleQuery(event, callback)
{
	let { success, results, type, message, params } = event.detail;

	switch (type.toLowerCase()) //TODO: Single, and Submit cases will be added as well.
	{
		case 'all':
			results = await NewRequestAll(API_ROUTE);
			success = true;
			break;

		case 'single':
			results = await NewRequest(API_ROUTE, params.id);
			success = true;
			break;

		case 'submit':
			results = await NewPost(API_ROUTE, params);
			success = true;
			break;
		
		default:
			results = undefined;
			message = `Type: ${type} is not a valid parameter for query search.`;
			success = false;
			break;
	}

	queries.set(results);

	if(!success)
		throw new Error(message);

	callback(success, type, message);
}

export { HandleQuery };