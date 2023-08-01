/**
 * Localisation
 */
export let labels = {en: {}};

export function l(message, tokens) {
	var string = new String();
	try {
		if(labels[$('html').attr('lang')][message] !== undefined) {
			string = labels[$('html').attr('lang')][message];
		} else {
			string = message;
		}
	} catch(e) {
		string = message;
	}
	try {
		for(var token in tokens) {
			re = new RegExp(token, 'gim');
			string = string.replace(re, tokens[token]);
		}
	} catch(e) {}
	return string;
};
