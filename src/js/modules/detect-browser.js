export default function IEagent() {
	const ua = globalThis.navigator.userAgent,
		msie = ua.indexOf('MSIE ');

	if (msie > 0) {
		// IE 10 or older => return version number
		return Number.parseInt(ua.slice(msie + 5, ua.indexOf('.', msie)));
	}

	const trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return Number.parseInt(ua.slice(rv + 3, ua.indexOf('.', rv)));
	}

	const edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return Number.parseInt(ua.slice(edge + 5, ua.indexOf('.', edge)));
	}

	// Other browser
	return false;
};
