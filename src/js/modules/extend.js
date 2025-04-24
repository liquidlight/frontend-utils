export default function extend(a, b) {
	for (const key in b) {
		if (Object.hasOwn(b, key)) {
			a[key] = b[key];
		}
	}
	return a;
};
