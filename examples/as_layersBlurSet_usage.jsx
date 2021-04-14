{
	(function func() {
		
		#include "../../../src/ae/include.jsxinc";

		var comp = app.project.activeItem;
		if(comp) {
			as_layersBlurSet(comp, true);
		} else {
			alert("Select target comp!");
		}
		
	})();
}