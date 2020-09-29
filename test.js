const arr = [];
const obj = {};
const set = new Set();
const MAX_LEN = 100000;

for (var i = 0; i < MAX_LEN; ++i) {
  arr.push(i.toString());
}

for (var i = 0; i < MAX_LEN; ++i) {
  obj[i.toString()] = true;
}

for (var i = 0; i < MAX_LEN; ++i) {
  set.add(i.toString());
}

var start = new Date().getTime();
for (var i = 0; i < MAX_LEN; ++i) {
  arr.includes(i.toString());
}
var elapsed = new Date().getTime() - start;
console.log('arr: ', elapsed, 'ms');

var start = new Date().getTime();
for (var i = 0; i < MAX_LEN; ++i) {
  i.toString() in obj;
}
var elapsed = new Date().getTime() - start;
console.log('obj: ', elapsed, 'ms');

var start = new Date().getTime();
for (var i = 0; i < MAX_LEN; ++i) {
  set.has(i.toString());
}
var elapsed = new Date().getTime() - start;
console.log('set: ', elapsed, 'ms');