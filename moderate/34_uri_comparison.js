var fs = require('fs');

var schemePattern = /[\S]+?\:\/\//;
var hostPattern = /\/\/[\S]+?[\:\d+]*?\//;
var hexPattern = /\%\S\S/g;

var convert = function (str) {
  str = str.replace(schemePattern, schemePattern.test(str) ? str.match(schemePattern)[0].toLowerCase() : '')
    .replace(hostPattern, hostPattern.test(str) ? str.match(hostPattern)[0].toLowerCase().replace(/\:80/, '').replace(/\:\//, '/') : '');
  var hexs = str.match(hexPattern) || [];
  for (var i = 0, len = hexs.length; i < len; i++) {
    // use if to prevent from converting usual % character
    if (parseInt(hexs[i].slice(1, 3), 16))
      str = str.replace(hexs[i], String.fromCharCode(parseInt(hexs[i].slice(1, 3), 16)));
  }
  return str;
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var str1 = convert(line.split(';')[0]);
    var str2 = convert(line.split(';')[1]);
    console.log(str1 === str2 ? 'True' : 'False');
  }
});