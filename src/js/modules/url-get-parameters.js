// From: https://stackoverflow.com/a/21903119/1324321
// Usage:
// import getUrlParameters from 'Utils/polyfills/url-get-parameters';
//
// if the URL is www.example.com/?query=yes
// getUrlParameters('query')
// will return "yes";
export default sParam => {
	let sPageURL = window.location.search.substring(1),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
		}
	}
};