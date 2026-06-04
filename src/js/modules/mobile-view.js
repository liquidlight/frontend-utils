import { debounce } from '../index';

const DEFAULT_MOBILE_VIEW_MAX_WIDTH = 715;

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
 * @param {string} selector
 * @param {number} fallbackWidth
 * @returns {boolean}
 * @example isMobileView()
 */
export function isMobileView(selector = '.mobileNavigation', fallbackWidth = DEFAULT_MOBILE_VIEW_MAX_WIDTH) {
	const element = document.querySelector(selector);

	if (element) {
		return element.offsetParent !== null;
	}

	return window.matchMedia(`(max-width: ${fallbackWidth}px)`).matches;
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
