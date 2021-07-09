export default () => {
	let reducedMotion = false,
		ua = window.navigator.userAgent;

	if (
		window.matchMedia('(prefers-reduced-motion)').matches ||
		ua.indexOf('MSIE ') > 0
	) {
		reducedMotion = true;
		document.documentElement.classList.add('hasReducedMotion');
	}

	return reducedMotion;
};