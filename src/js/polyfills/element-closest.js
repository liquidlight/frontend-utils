// From https://www.npmjs.com/package/element-closest
(function(ElementProto) {
	if (typeof ElementProto.matches !== 'function') {
		ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
			var element = this;
			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			var index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof ElementProto.closest !== 'function') {
		Element.prototype.closest = function(s) {
			var el = this;

			if (!document.documentElement.contains(el)) return null;

			do {
				if (el.matches(s)) return el;
				el = el.parentElement;
			} while (el !== null);

			return null;
		};

	}
})(window.Element.prototype);