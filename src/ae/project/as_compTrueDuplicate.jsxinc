// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description TRUE DUPLICATE
 * @param {CompItem} comp
 */
function as_compTrueDuplicate(comp) {

	return duplicateComp(comp, {});

	function duplicateComp(comp, compsCollector) {

		// DUPLICATE
		var compDuplicated = comp.duplicate();

		// UNIQUE NAME
		// ..

		// COLLECT
		compsCollector[comp.id] = compDuplicated;

		// PRECOMPS
		duplicatePrecomps(compDuplicated, compsCollector);

		// Return
		return compDuplicated;
	}

	function duplicatePrecomps(comp, compsCollector) {
		for (var i = 1, layer; i <= comp.numLayers; i++) {
			layer = comp.layer(i);
			if (layer.source instanceof CompItem) {
				var sourceDuplicated;
				if (compsCollector[layer.source.id]) {
					sourceDuplicated = compsCollector[layer.source.id];
				}
				else {
					sourceDuplicated = duplicateComp(layer.source, compsCollector);
				}
				layer.replaceSource(sourceDuplicated, true);
			}
		}
	}
}
