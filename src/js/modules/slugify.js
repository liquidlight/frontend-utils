export default function slugify(text) {
	return text.toString().toLowerCase()
		.replaceAll(/\s+/g, '-') // Replace spaces with -
		.replaceAll(/[^\w-]+/g, '') // Remove all non-word chars
		.replaceAll(/--+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
};
