{
	(function func() {
		
		#includepath "../src/common/file";
		#include "as_fileWrite.js";

		var displayName = [];
		var matchName = [];

		for (var e = 0, len = app.effects.length; e < len; e++) {
			displayName.push(app.effects[e].displayName);
			matchName.push(app.effects[e].matchName);
		}

		var rootFolder = Folder(new File($.fileName).path).parent;

		var file = File(rootFolder.fullName + "/src/ae/app/effects.jsxinc");
		var str = "var ae_effects_matchNames = " + JSON.stringify(matchName, undefined, "\t") + ";";
		str = str + "\nvar ae_effects_displayNames = " + JSON.stringify(displayName, undefined, "\t") + ";";
		as_fileWrite(file, str, false);

	})();
}