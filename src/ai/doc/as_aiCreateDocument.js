/**
 * 
 * @param {number} width 
 * @param {number} height 
 */
function as_aiCreateDocument(width, height) {
	var doc = app.documents.add(DocumentColorSpace.RGB);
	doc.artboards[0].artboardRect = [0, 0, width, -height];
	return doc;
}
