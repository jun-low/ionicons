console.log('Copy optimized svg files');

var fs = require('fs-extra');
var path = require('path');

var optimizedSvgsDir = path.join(__dirname, '..', 'dist', 'svg');
var componentSvgsDir = path.join(__dirname, '..', 'dist', 'ionicons', 'svg');
var collectionSvgsDir = path.join(__dirname, '..', 'dist', 'collection', 'icon', 'svg');
var docsSvgsDir = path.join(__dirname, '..', 'docs', 'ionicons', 'svg');

fs.emptyDirSync(componentSvgsDir);
fs.emptyDirSync(collectionSvgsDir);
fs.emptyDirSync(docsSvgsDir);

fs.copySync(optimizedSvgsDir, collectionSvgsDir);
fs.copySync(optimizedSvgsDir, docsSvgsDir);
fs.moveSync(optimizedSvgsDir, componentSvgsDir);
