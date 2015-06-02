var fs = require('fs');

var tree = {
  '30': '30',
  '8': '30',
  '52': '30',
  '3': '8',
  '20': '8',
  '10': '20',
  '29': '20'
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != '') {
    var num1 = line.split(' ')[0],
        num2 = line.split(' ')[1],
        result1 = [],
        result2 = [];
    while (tree[num1]) {
      result1.push(tree[num1]);
      if (num1 === tree[num1])
        break;
      else
        num1 = tree[num1];
    }
    while (tree[num2]) {
      result2.push(tree[num2]);
      if (num2 === tree[num2])
        break;
      else
        num2 = tree[num2];
    }
    if (result2.indexOf(line.split(' ')[0]) !== -1)
      console.log(line.split(' ')[0]);
    else if (result1.indexOf(line.split(' ')[1]) !== -1)
      console.log(line.split(' ')[1]);
    else
      console.log(result1.length <= result2.length ? result1[0] : result2[0]);
  }
});
