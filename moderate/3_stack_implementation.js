fs = require('fs');

var Stack = function () {
  this.data = [];
  this.top = -1;
};

Stack.prototype.push = function (ele) {
  this.data[++this.top] = ele;
};

Stack.prototype.pop = function () {
  return this.data[this.top--];
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  var result = [], stack = new Stack();
  line.split(' ').forEach(function (ele) {
    stack.push(ele);
  });
  while(1) {
    if (output = stack.pop())
      result.push(output);
    if (!stack.pop())
      break;
  }
  console.log(result.join(' '));
});
