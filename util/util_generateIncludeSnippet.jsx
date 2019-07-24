#include "/d/Google Drive/Adobe Scripting/ae_scripts/lib/include.jsxinc";

var dirLib = Folder("/d/Google Drive/Adobe Scripting/ae_scripts/lib");
var dirs = dirLib.getFiles();
var lines = [];
for (var d = 0, dir; d < dirs.length; d++) {
    dir = dirs[d];
    if(dir instanceof Folder) {
        lines.push("\n// " + dir.displayName.toUpperCase());
        lines.push("#includepath \"" + dir.fullName + "\";");
        var files = dir.getFiles("*.jsxinc");
        for (var f = 0, file; f < files.length; f++) {
            file = files[f];
            lines.push("#include \"" + file.displayName + "\";");
        }
    }
};
var fileInclude = File(dirLib.fullName + "/" + "include.jsxinc");
as_fileWrite(fileInclude, lines.join("\n"), false);
fileInclude.execute();