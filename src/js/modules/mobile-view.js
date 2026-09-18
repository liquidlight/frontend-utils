import { debounce } from '../index';

/**
 * Check if is a mobile device based on Agent
 * @param {string} agent
 * @returns {boolean}
 * @example isMobileAgent()
 */
export function isMobileAgent(agent = navigator.userAgent) {
	return /Android|iPhone|iPad|iPod/i.test(agent);
}

/**
 * Check if is a mobile based on selector being visible frontend
 * Falls back to a screen-width check if the selector doesn't match an element
 * @param {string} selector
 * @param {number} breakpoint - width (px) used as the mobile fallback threshold when selector isn't found
 * @returns {boolean}
 * @example isMobileView()
 */
export function isMobileView(selector = '.mobileNavigation', breakpoint = 715) {
	const element = document.querySelector(selector);

	return element ? element.offsetParent !== null : window.innerWidth <= breakpoint;
}

/**
 * Helper that adds/removes `.isMobileDeviceAgent` class from document
 * @param {Boolean} condition
 */
function mobileAgentHandler(condition) {
	if (condition && isMobileAgent()) {
		document.documentElement.classList.add('isMobileDevice');
	} else {
		document.documentElement.classList.remove('isMobileDevice');
	}
}

/**
 * Mobile device listener
 * @param {Boolean} condition
 * @example isMobileDeviceAgent(false)
 */
export function isMobileDeviceAgent(condition = true) {
	mobileAgentHandler(condition);
	window.addEventListener('resize', debounce(() => mobileAgentHandler(condition), 400));
};
