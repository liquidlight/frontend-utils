/**
 * ====
 * Imports
 * ====
 */
import 'core-js/stable/symbol/iterator';
import './polyfills/foreach';
import './polyfills/includes';

/**
 * ====
 * Exports
 * ====
 */

/**
 * Debounce
 *
 * Allows you to run a function (on resize, for example) without overloading
 * the client's computer
 */
export { default as debounce } from './modules/debounce';

/**
 * Determines if it's a mobile view
 * As a function so it can be re called at any point
 * @example
 * if(isMobileView())
 */
export * from './modules/mobile-view';

/**
 * Related with Window or Document
 */
export * from './modules/document';

/**
 * A collection of functions to test support for various browser features
 * @example
 * if(supports.passive())
 */
export { default as supports } from './modules/supports';

/**
 * Determines if the user has reduced motion _or_ is on < IE10
 * @example
 * if(reduceMotionOnSite()) {
 *   return;
 * }
 */
export { default as reduceMotionOnSite } from './modules/reduced-motion';

/**
 * Merge two objects into new one
 * @example
 * newObj = extend(obj1, obj2);
 */
export { default as extend } from './modules/extend';

/**
 * Localisation
 */
export * from './modules/labels';

/**
 * Detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
export { default as detectIE } from './modules/detect-browser';

/**
 * Slugify
 * Turns a string into a url/class/id friendly string
 */
export { default as slugify } from './modules/slugify';

/**
 * Strip tags
 * Allow only specific HTML tags
 */
export { default as stripTags } from './modules/strip-tags';
