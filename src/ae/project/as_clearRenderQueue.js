// Copyright (c) 2021 Oleksandr Semeniuk
// This code is licensed under MIT license
// See also http://www.opensource.org/licenses/mit-license.php

/**
 * @version 1.0.0
 * @date Jul 22 2019
 * 
 * @description CLEAR RENDER QUEUE
 * @param
 */
function as_clearRenderQueue() {
	while (app.project.renderQueue.numItems > 0) {
		var rqi = app.project.renderQueue.item(1);
		rqi.remove();
	}
}
