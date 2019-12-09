var cache = {};
for (var i = 1, iLen = app.project.numItems, item; i <= iLen; i++) {
	item = app.project.item(i);
	cache[item.typeName] = 1;
}
alert(JSON.stringify(cache));