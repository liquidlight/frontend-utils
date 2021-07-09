// https://github.com/imagitama/nodelist-foreach-polyfill/blob/master/index.js
if (typeof window !== 'undefined' && window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function(callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}