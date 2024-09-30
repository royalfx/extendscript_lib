{
	(function func() {
		
		#include "d:/Dropbox/Projects/Tools and Scripts/ExtendScript Library/include/include_eslib_ae.jsxinc";

		// DO
		if(app.project) {
			var list = as_projectSelectionList();
			alert(list.join("\n"));
		} else {
			alert("Open the project!");
		}

	})();
}