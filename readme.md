# Utils

A collection of JavaScript utilities and helper functions


## Labels

**Returns**

- `l` - gets the current document language
- `labels` - an object with translations

**Usage**

```javascript

import {l, labels} from '@packages/utils';

// Extend the _labels_
$.extend(true, labels, {
	en: {
		'cookify.message': `This site uses cookies.`
	},
	pt: {
		'cookify.message': `Este site usa cookies.`
	}
})

const cookieBanner = $(`<div class="cookiePolicy">${l('cookie.message')}</div>`);

```

## Debounce

An example of sticky navigation on scroll with `debounce` function

**Usage**

```javascript
import { debounce } from '@packages/utils';

(() => {
	const header = $('.siteHeader'),
		headerHeight = header.outerHeight(true);

	window.addEventListener('scroll', debounce(function() {
		if ($(this).scrollTop() > headerHeight) {
			header.addClass('isFixed');
		} else {
			header.removeClass('isFixed');
		}
	}, 200));
})();

```