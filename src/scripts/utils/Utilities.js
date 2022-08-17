export class Utilities
{
	/**
	* Creates a Beautified string.
	* @param {String} string - an unformatted string to be prettified
	* @return {String} Returns a formated string
	*/
	static BeautifyHeader(string)
	{
		let parsedStr = string.replace(/([a-z])([A-Z])/g, "$1 $2");
		let prettyStr = parsedStr.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
		return prettyStr;
	}
	
}