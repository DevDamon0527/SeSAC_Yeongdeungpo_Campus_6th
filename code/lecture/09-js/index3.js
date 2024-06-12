//  &&(and)    || (or)
// true && ture
// true && false

// const x =5;
// const result = x || 100;  //
// console.log(result)

// const y = 7;
// const result3 = x < y && 'yy가 큼';
// console.log(result3); // 

//falsy의 경우  undefined, null, 0, false, '',NaN
// let userColor ='red';
let userColor =undefined;
let defaultColor ="blue";
let currentColor = userColor || defaultColor;
console.log(currentColor) 