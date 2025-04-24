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
export function documentReady(function_) {
	// See if DOM is already available
	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		// Call on next available tick
		setTimeout(function_, 1);
	} else {
		document.addEventListener('DOMContentLoaded', function_);
	}
}
