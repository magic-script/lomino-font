var fs = require("fs");
var fse = require("fs-extra");
var path = require("path");

var currentDirPath = path.resolve();
var basePath = currentDirPath.concat("/../../assets/fonts/");
// check if assets folder exists
!fs.existsSync(basePath) && fs.mkdirSync(basePath);
if (fs.existsSync(basePath)) {
  var currentPath = path.resolve();
  fs.readdir(currentPath, (err, files) => {
    files.forEach(file => {
      // double check if file is file
      if (fs.lstatSync(file).isFile() && path.extname(file) == ".ttf") {
        var destFile = basePath.concat(file);
        console.log(destFile);
        fse.copy(path.resolve(__dirname,file), destFile);
      }
    });
  });
}
