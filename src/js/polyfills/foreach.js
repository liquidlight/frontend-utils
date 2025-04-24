// https://github.com/imagitama/nodelist-foreach-polyfill/blob/master/index.js
if (globalThis.window !== undefined && globalThis.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function(callback, thisArgument) {
		thisArgument = thisArgument || globalThis;
		for (var index = 0; index < this.length; index++) {
			callback.call(thisArgument, this[index], index, this);
		}
	};
}
