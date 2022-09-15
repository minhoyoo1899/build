// console.log('a');
// console.log(global);
//console.log(global.process); // global.process는 하드웨어와 맞닿아 있다.

let test = global.process;
console.log(test);

let a = 1;
let b = 2;
let c = [3, 4, 5];

let d = c.map(x => x + 1);

console.log(d);



function sum(first, second) {
  return first + second;
}

console.log(sum(a,b));