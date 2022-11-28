// Allow only specific HTML tags - defined in Google FAQ page
// https://developers.google.com/search/docs/data-types/faqpage#Answer
// original function in Stackoverflow
// https://stackoverflow.com/a/31259386/8795871

const allowedSchemaTags = '<h1><h2><h3><h4><h5><h6><br><ol><ul><li><a><p><div><b><strong><i><em>';

export default (input, allowedTags = allowedSchemaTags) => {
	var allowed = (((allowedTags || '') + '')
		.toLowerCase()
		.match(/<[a-z][a-z0-9]*>/g) || [])
		.join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)

	var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
		commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

	let strippedTags = input
		.replace(commentsAndPhpTags, '')
		.replace(tags, function($0, $1) {
			return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
		})
		.trim();
	return strippedTags.length ? strippedTags : false;
}
