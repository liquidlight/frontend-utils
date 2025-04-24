(() => {
	if (!Object.entries) {
		Object.entries = function(object) {
			var ownProperties = Object.keys(object),
				index = ownProperties.length,
				resourceArray = Array.from({ index }); // Preallocate the Array
			while (index--)
				resourceArray[index] = [ownProperties[index], object[ownProperties[index]]];

			return resourceArray;
		};
	}
})();
