{
	(function build() {

		#includepath "../src/common/file";
		#include "as_getFileExtension.js";
		#include "as_fileWrite.js";
		#include "as_fileRead.js";
		#include "as_fileCollectLib.js";
		#include "as_fileCollectIncludes.js";
		#include "as_fileCollectIncludesJS.js";
		#include "as_convertFilePath.js";
		#include "as_convertFilePathJS.js";

		#includepath "../src/common/loop";
		#include "as_loopDirectories.js";
		#include "as_loopFiles.js";
		
		#includepath "../src/common/data";
		#include "as_arrayCheckValue.js";
		#include "as_stringClearComments.js";

		// Versions
		var ae_version = "1.0.1";
		var ai_version = "1.0.0";
		var ps_version = "1.0.0";

		// Directories
		var rootDir = Folder(new File($.fileName).path).parent;
		var commonDir = Folder(rootDir.fullName + "/src/common");
		var aeDir = Folder(rootDir.fullName + "/src/ae");
		var aiDir = Folder(rootDir.fullName + "/src/ai");
		var psDir = Folder(rootDir.fullName + "/src/ps");

		// Remove prev files
		// var binDir = Folder(rootDir.fullName + "/dist");
		// while (binDir.getFiles().length > 0) {
		// 	binDir.getFiles()[0].remove();
		// }

		// Do
		var filterFileExt = ["js"];
		as_fileWrite(File(rootDir.fullName + "/dist/eslib_ae_" + ae_version + ".jsxinc"), as_fileCollectLib([commonDir, aeDir], true, filterFileExt));
		as_fileWrite(File(rootDir.fullName + "/dist/eslib_ai_" + ai_version + ".jsxinc"), as_fileCollectLib([commonDir, aiDir], true, filterFileExt));
		as_fileWrite(File(rootDir.fullName + "/dist/eslib_ps_" + ps_version + ".jsxinc"), as_fileCollectLib([commonDir, psDir], true, filterFileExt));

		as_fileWrite(File(rootDir.fullName + "/include/include_eslib_ae.jsxinc"), as_fileCollectIncludes([commonDir, aeDir], rootDir, true, filterFileExt));
		as_fileWrite(File(rootDir.fullName + "/include/include_eslib_ai.jsxinc"), as_fileCollectIncludes([commonDir, aiDir], rootDir, true, filterFileExt));
		as_fileWrite(File(rootDir.fullName + "/include/include_eslib_ps.jsxinc"), as_fileCollectIncludes([commonDir, psDir], rootDir, true, filterFileExt));

	})();
}