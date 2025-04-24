export default {
	// Does the browser support passive events?
	passive: () => {
		let supportsPassive = false;

		try {
			const options = Object.defineProperty({}, 'passive', {
				get() {
					supportsPassive = true;
					return supportsPassive;
				},
			});
			globalThis.addEventListener('test', null, options);
		} catch {
			//
		}

		return supportsPassive;
	},
};
