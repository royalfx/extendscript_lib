{
	(function func() {
		
		#include "../../../src/ae/include.jsxinc";
		#include "../../../src/common/include.jsxinc";

		// DO
		if (app.project) {
			var arrFonts = as_projectFontsList();
			alert(arrFonts.sort().join("\n"));
		} else {
			alert("Open the project!");
		}

	})();
}
