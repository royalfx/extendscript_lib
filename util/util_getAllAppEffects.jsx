var displayName = [];
var matchName = [];

for (var e = 0, len = app.effects.length; e < len; e++) {
    displayName.push(app.effects[e].displayName);
    matchName.push(app.effects[e].matchName);
}

var pathFile = File($.fileName).path + "/" + "effects.jsxinc";
var file = File(pathFile);
var str = "var matchNames = " + JSON.stringify(matchName, undefined, "\t") + ";";
str = str + "\nvar displayNames = " + JSON.stringify(displayName, undefined, "\t") + ";";
as_fileWrite(file, str, false);