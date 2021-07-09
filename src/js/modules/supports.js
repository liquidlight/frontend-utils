export default {
	// Does the browser support passive events?
	passive: () => {
		let supportsPassive = false;

		try {
			let opts = Object.defineProperty({}, 'passive', {
				get: function() {
					supportsPassive = true;
				}
			});
			window.addEventListener('test', null, opts);
		} catch (e) {
			//
		}

		return supportsPassive;
	},

	// Does the browser support CSS position sticky
	sticky: () => {
		let supportSticky;

		const prefix = ['', '-o-', '-webkit-', '-moz-', '-ms-'],
			test = document.head.style;

		for (let i = 0; i < prefix.length; i += 1) {
			test.position = `${prefix[i]}sticky`;
		}

		supportSticky = !!test.position;
		test.position = '';

		return supportSticky;
	}
};
