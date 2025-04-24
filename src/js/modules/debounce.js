const debounce = (function_, wait, immediate) => {
	let timeout;
	return function() {
		const arguments_ = arguments,
			later = function() {
				timeout = null;
				if (!immediate) function_.apply(this, arguments_);
			},
			callNow = immediate && !timeout;

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);

		if (callNow) {
			function_.apply(this, arguments_);
		}
	};
};

export default debounce;
