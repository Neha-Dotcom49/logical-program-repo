console.log(`=============Reverse the string using predefined methods=====================`);
let text1 = "Software";
let reversedText1 = text1.split('').reverse().join('');
console.log(`Given String is ${text1} and Reverse is:`,reversedText1);

let text2 = "UI Developer";
let reversedText2 = text2.split('').reverse().join('');
console.log(`Given String is ${text2} and Reverse is:`,reversedText2);

console.log(`=============Reverse the string without using predefined methods==============`);
let text3 = "Web Developer";
let reversedText3 = '';
for(let i = text3.length - 1; i >= 0; i--){
    reversedText3 += text3[i];
}
console.log(`Given String is ${text3} and Reverse is:`,reversedText3);

let text4 = "Billion Dollar";
let reversedText4 = '';
for(let i = text4.length - 1; i >= 0; i--){
    reversedText4 += text4[i];
}
console.log(`Given String is ${text4} and Reverse is:`,reversedText4);

let text5 = "Java";
let reversedText5 = '';
for(let i = text5.length - 1; i >= 0; i--){
    reversedText5 += text5[i];
}
console.log(`Given String is ${text5} and Reverse is:`,reversedText5);