var fs = require('fs');
var fontName = 'lomino_font.ttf';
var androidBasePath = '../react-native-magic-script/android';

// check if android folder exists
if (fs.existsSync(androidBasePath)) {
  // console.log('The file exists.');
  var destFile = androidBasePath.concat('/src/main/res/font/').concat(fontName);
  fs.copyFile(fontName, destFile, (err) => {
	if (err) throw err;
  });
}