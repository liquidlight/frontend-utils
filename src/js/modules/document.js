/**
 * Document Ready
 * Similar to jQuery document ready
 * @param {object} fn Function
 * Source: https://stackoverflow.com/a/9899701
 * Usage:
   docReady(function() {
     // DOM is loaded and ready for manipulation here
   });
 */
export function docReady(fn) {
	// see if DOM is already available
	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		// call on next available tick
		setTimeout(fn, 1);
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}
