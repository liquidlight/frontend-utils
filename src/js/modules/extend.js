'use strict';

export default (a, b) => {
	for (const key in b) {
		if (b.hasOwnProperty(key)) {
			a[key] = b[key];
		}
	}
	return a;
};