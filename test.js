# Logic For Saving Forum to Folder

mySaveAs = app.trustPropagatorFunction(function(doc,path) {app.beginPriv(); doc.saveAs(path); app.endPriv(); })
myTrustedSpecialTaskFunc = app.trustedFunction(function(doc,path) {app.beginPriv(); mySaveAs(doc,path); app.endPriv(); });
