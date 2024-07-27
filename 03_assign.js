
console.log(`----------------1.Program to Count the total number of a character-----------------------------`);
function charCount(str){
    var counter = 0;
for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index);
    if (ch=="a") {
        counter ++;
    }
}
console.log(`Total number of a char in Given string "${str}" is : `,counter);
}
charCount("JavaScript");
charCount("Do or Die");
charCount("Learn with us, Job with us");
charCount("Empowering Dreams, Guaranteeing Futures");
charCount("Anny, My favorite fruit is Apple");


console.log(`-------------------2. Program to Count the total number of vowels ---------------------`);
function countVowels(str){
    var vowels = "aeiou";
    var counter = 0;
for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index);
    var chLowerCase = ch.toLowerCase();
    if (vowels.includes(chLowerCase)) {
        counter++;
    }
    
}
console.log(`Total No. of vowels in Given string "${str}" is : `,counter);
}
countVowels("JavaScript");
countVowels("HTML and CSS");
countVowels("Language Of Internet");
countVowels("I am UI Developer");
countVowels("Do or Die");


console.log(`------------------------3. Program to print total number of word count------------------------------`);
function wordCount(str){
    // var wordCount = 0;
    var wordCount = str.split(' ').length;
//     for (let i = 0; i < str.length; i++) {
//     if (str[i] == " " || i == str.length - 1) {
//         wordCount++;
//     }
// }
console.log(`Total word count in given string ${str} is : `,wordCount);
}
wordCount("JavaScript The language of Internet");
wordCount("Enhance Your Learning Journey with Exclusive Add-ons");
wordCount("Beyond frameworks, Beyond Imagination");
wordCount("I am passionate software developer");




