(() => {
	if (!String.prototype.includes) {
		String.prototype.includes = function(search, start) {
			if (typeof start !== 'number') {
				start = 0;
			}

			return start + search.length > this.length ? false : this.includes(search, start);
		};
	}
})();
