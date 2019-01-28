var fs = require("fs");
var babel = require("@babel/core");

//read file from command prompt
var fileName = process.argv[2];

fs.readFile(fileName, function read(err, data) {
  if (err) {
      throw err;
  }
  var src = data.toString();

  var out = babel.transform(src,{
    plugins:[
      "./src/RemoveDebugger.js"
    ]
  });
  //print output to console

  console.log(out.code);
});