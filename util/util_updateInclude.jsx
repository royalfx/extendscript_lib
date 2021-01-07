{
	(function func() {

		#includepath "../src/common/file";
		#include "as_singleLibraryJSXINC.js";
		#include "as_singleLibraryJS.js";
		#include "as_getFileExtension.js";
		#include "as_fileWrite.js";

		#includepath "../src/common/loop";
		#include "as_loopDirectories.js";
		#include "as_loopFiles.js";

		#includepath "../src/common/data";
		#include "as_arrayCheckValue.js";

		var rootFolder = Folder(new File($.fileName).path).parent;

		as_singleLibraryJSXINC(Folder(rootFolder.fullName + "/src/ae"));
		as_singleLibraryJSXINC(Folder(rootFolder.fullName + "/src/ai"));
		as_singleLibraryJSXINC(Folder(rootFolder.fullName + "/src/ps"));
		as_singleLibraryJSXINC(Folder(rootFolder.fullName + "/src/common"), undefined, true);
		as_singleLibraryJS(Folder(rootFolder.fullName + "/src/common"));
		as_singleLibraryJSXINC(Folder(rootFolder.fullName + "/src"), undefined, true);

	})();
}