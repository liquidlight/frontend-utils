export default function reducedMotion() {
	let reducedMotionState = false;
	const ua = globalThis.navigator.userAgent;

	if (
		globalThis.matchMedia('(prefers-reduced-motion)').matches ||
		ua.indexOf('MSIE ') > 0
	) {
		reducedMotionState = true;
		document.documentElement.classList.add('hasReducedMotion');
	}

	return reducedMotionState;
};
