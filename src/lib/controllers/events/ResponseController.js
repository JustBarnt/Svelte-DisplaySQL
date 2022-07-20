import { NewRequest, NewRequestAll, NewPost, API_ROUTE } from '../requests/RequestController';

/**
* @description Handles the request for calling the query to get a single order.
*
* @param {Number} orderId Id of the order to be returned.
*/
async function HandleGetOrder(orderId)
{
	const order = await NewRequest(API_ROUTE, orderId);
	//SendOrderResponse(order);
}

export { HandleGetOrder };