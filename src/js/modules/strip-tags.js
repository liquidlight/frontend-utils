// Allow only specific HTML tags - defined in Google FAQ page
// https://developers.google.com/search/docs/data-types/faqpage#Answer
// original function in Stackoverflow
// https://stackoverflow.com/a/31259386/8795871

const allowedSchemaTags = '<h1><h2><h3><h4><h5><h6><br><ol><ul><li><a><p><div><b><strong><i><em><summary>';

export default function stripTags(input, allowedTags = allowedSchemaTags) {
	var allowed = ((`${allowedTags || ''}`)
			.toLowerCase()
			.match(/<[a-z][a-z0-9]*>/g) || [])
			.join(''), // Making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)

		tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
		commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

	const strippedTags = input
		.replaceAll(commentsAndPhpTags, '')
		.replaceAll(tags, function($0, $1) {
			return allowed.includes(`<${$1.toLowerCase()}>`) ? $0 : '';
		})
		.trim();
	return strippedTags.length > 0 ? strippedTags : false;
};
