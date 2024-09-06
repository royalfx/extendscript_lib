(function replaceComps() {
    var project = app.project;
    var oldFolder = findFolder("old");
    var newFolder = findFolder("new");

    if (!oldFolder || !newFolder) {
        alert("One or both specified folders do not exist in the project.");
        return;
    }

    app.beginUndoGroup("Replace Compositions");
    processFolder(oldFolder);
    app.endUndoGroup();

    function processFolder(folder) {
        for (var i = 1; i <= folder.numItems; i++) {
            var item = folder.item(i);
            if (item instanceof CompItem) {
                var newComp = findCompInFolder(newFolder, item.name);
                if (newComp) {
                    replaceComp(item, newComp);
                }
            } else if (item instanceof FolderItem) {
                processFolder(item); // Recursively process subfolders
            }
        }
    }

    function findFolder(folderName) {
        for (var i = 1; i <= project.numItems; i++) {
            if (project.item(i) instanceof FolderItem && project.item(i).name === folderName) {
                return project.item(i);
            }
        }
        return null;
    }

    function findCompInFolder(folder, compName) {
        for (var i = 1; i <= folder.numItems; i++) {
            var item = folder.item(i);
            if (item instanceof CompItem && item.name === compName) {
                return item;
            } else if (item instanceof FolderItem) {
                var foundComp = findCompInFolder(item, compName); // Recursive search
                if (foundComp) return foundComp;
            }
        }
        return null;
    }

    function replaceComp(oldComp, newComp) {
        var usingComps = oldComp.usedIn;
        for (var i = 0; i < usingComps.length; i++) {
            var comp = usingComps[i];
            for (var j = 1; j <= comp.numLayers; j++) {
                var layer = comp.layer(j);
                if (layer.source === oldComp) {
                    layer.replaceSource(newComp, true);
                }
            }
        }
    }
})();
