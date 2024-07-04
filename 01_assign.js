console.log(`=============== 1. total number of characters in the given strings===============`);

let str1 = "Hello, World!";
let length1 = str1.length;
console.log(`${str1}-->`,length1); 

let str2 = "JavaScript is the language of Internet";
let length2 = str2.length;
console.log(`${str2}-->`,length2); 


console.log(`=============== 2. last character of the given strings=====================`);
let str3 = "Hey, my friend, Programming Language";
const len = str3.length;
console.log(`${str3}-->`,str3[len-1]);


let str4 = "I am learning logical programs";
const len1 = str4.length;
console.log(`${str4}-->`,str4[len1-1]); 


let str5= "Angular";
const len2 = str5.length;
console.log(`${str5}-->`,str5[len2-1]);

console.log(`============== 3. log the first character of the given strings=================`);
let str6 = "React";
let firstChar1 = str6[0];
console.log(`${str6}-->`,firstChar1); 

let str7 = "Elon Musk";
let firstChar2 = str7[0];
console.log(`${str7}-->`,firstChar2); 


let str8 = "Apple founder is";
let firstChar3 = str8[0];
console.log(`${str8}-->`,firstChar3); 

console.log(`============= 4. capitalize the first letter of each word=============`);
function capitalizeWord(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
          
    }
    return words.join(" ");
  
}
console.log(capitalizeWord("language of internet"));
console.log(capitalizeWord("Elon musk-The tycoon of decade"));
console.log(capitalizeWord("My Life My Rule"));
console.log(capitalizeWord("logical programming question SET"));


console.log(`=============== 5. given strings contain the word 'Ul' or not===============`);

let str9 = "React-UI Developer";
console.log(`${str9} contain UI-->`,str9.includes('UI')); 


let str10 = "UI Developer";
console.log(`${str10} contain UI-->`,str10.includes('UI')); 

let str11 = "Front end and back end technology";
console.log(`${str11} contain UI-->`,str11.includes('UI')); 

let str12= "MEAN or MERN - UI Developer";
console.log(`${str12} contain UI-->`,str12.includes('UI')); 



console.log(`============= 6. split a string into an array of substrings===================`);
let str13= "apple, orange, banana";
let arr1 = str13.split(", ");
console.log(arr1); 

let str14 = "Stew, Bill, Jenny, Elon";
let arr2 = str14.split(", ");
console.log(arr2); 

let str15 = "Rupees, Dollar, Krone, Pound, Dinar";
let arr3 = str15.split(", ");
console.log(arr3); 