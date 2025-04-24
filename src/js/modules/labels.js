/**
 * Localisation
 */
export const labels = { en: {} };

export function l(message, tokens) {
	var string = String();
	try {
		string = labels[$('html').attr('lang')][message] === undefined ? message : labels[$('html').attr('lang')][message];
	} catch {
		string = message;
	}
	try {
		for (var token in tokens) {
			const re = new RegExp(token, 'gim');
			string = string.replace(re, tokens[token]);
		}
	} catch {
		//
	}
	return string;
};
