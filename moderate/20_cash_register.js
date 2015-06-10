var fs = require('fs');

var values = [
  {name: 'PENNY', value: 1},
  {name: 'NICKEL', value: 5},
  {name: 'DIME', value: 10},
  {name: 'QUARTER', value: 25},
  {name: 'HALF DOLLAR', value: 50},
  {name: 'ONE', value: 100},
  {name: 'TWO', value: 200},
  {name: 'FIVE', value: 500},
  {name: 'TEN', value: 1000},
  {name: 'TWENTY', value: 2000},
  {name: 'FIFTY', value: 5000},
  {name: 'ONE HUNDRED', value: 10000}
];

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== '') {
    var num1 = parseFloat(line.split(';')[0]) * 100;
    var num2 = parseFloat(line.split(';')[1]) * 100;
    var sub = num2 - num1;
    if (sub === 0) {
      console.log('ZERO');
    } else if (sub < 0) {
      console.log('ERROR');
    } else {
      var result = [];
      for (var i = 11; i >= 0; i--){
        while (sub >= values[i].value){
          result.push(values[i].name);
          sub -= values[i].value;
        }
      }
      console.log(result.join(','));
    }
  }
});