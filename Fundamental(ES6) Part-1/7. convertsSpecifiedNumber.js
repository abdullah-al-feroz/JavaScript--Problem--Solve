const digitize = n => [...`${n}`].map(i => parseInt(i));

console.log(digitize(12345));
console.log(digitize(123450));