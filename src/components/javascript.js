"use client";

// //arrow function
// const add = (a = 1, b = 5) => {
//     return (a + b);
// }
// const result = add();
// console.log(result);

// const Sub = (a = 9, b = 6) => {
//     return (a - b);
// }
// console.log(Sub());

// //loop
// const num = [12, 23, 4, 3, 21]
// num.forEach((item) => {
//     console.log(item)
// })

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const evenPrint = numbers.filter((element) => {
//     return element % 2 == 0;
// });
// console.log(evenPrint())

// const s1 = {
//     name: "Nikita",
//     age: 20,
//     address: {
//         pa: "Ktm",
//         ta: "Bkt",
//     }
// };

// const s2 = {
//     name: "Manashi",
//     age: 20,
//     address: {
//         pa: "Ktm",
//         ta: "Ktm",
//     }
// };
// const s3 = {
//     name: "Cherish",
//     age: 20,
//     address: {
//         pa: "Bkt",
//         ta: "Bkt",
//     }
// };
// students = [s1, s2, s3];

// const filterAddress = students.filter(address(element)=> {
//     return element.address.pa==="Ktm",
// });
// console.log((filterAddress));


// const ktmWeather={
//     humidity:0.2,
//     temp:20,
//     uvRays:0.4,
//     wind:"12 km/hr"
// };
// // const humidity=ktmWeather.humidity;
// // console.log(humidity);

// const{humidity,temp,uvRays}=ktmWeather;
// console.log(humidity);










//QN-1
// const display = (string) => {
//     var length = string.length;
//     var lastCharacter = string[length - 1];
//     console.log("Length of string:", length);
//     console.log('Last character of string:', lastCharacter);
// };

// display("Arigato");

//QN-2
// const countString = (string, character) => {
//     let count = 0;
//     [...string].forEach(char => {
//         if (char === character) {

//             count++;
//         }
//     });
//     return count;
// };
// const occurences = countString('Nikita Manandhar', 'a');
// console.log('Occurence of a:', occurences);

//QN-3
// const distinctCharacter = (string) => {
//     let dischar = '';
//     [...string].forEach(char=>{
//         if(!dischar.includes(char)){
//             dischar+=char;
//         }
//     });
//     return dischar;
// };
// const distinct=distinctCharacter("apple");
// console.log('Distinct characters:',distinct);

//QN-5
// const reverse = (string) => {
//     return [...string].reverse().join('');
// }
// const reversedString = reverse("Nikita")
// console.log("Reversed String:", reversedString)

//QN-6
// const countCase=(string)=>{
//     let upperCase=0;
//     let lowerCase=0;
//     [...string].forEach((char)=>{
//         if(char>='a'&& char<='z'){
//             lowerCase++;

//         }
//         else {
//             upperCase++;

//         }

//     });
//     return {
//         upperCase,
//         lowerCase
//     };

// }
// const result= countCase("Nikita MananNDHar");
// console.log("Number of lowercase:",result.lowerCase);
// console.log("Number of uppercase:",result.upperCase);

//QN-7
// const sortingString=(string)=>{
//     return string.split('').sort().join('')
// }
// const result=sortingString("nikitamanandhar");
// console.log("Sorted string:",result);

//QN-8
// const presentString=(string,word)=>{
//     return string.includes(word);
// }
// const result=presentString("This is orange juice","orange");
// if(result){
//     console.log("the word is present.")
// }
// else{
//     console.log("The word is absent.")
// }

//QN-9
// const count=(string)=>{
//     let countVowel=0;
//     let countConsonant=0;
//     let countDigit=0;
//     let countWhitespace=0;
//     [...string].forEach((char)=>{
//         if("aeiouAEIOU".includes(char)){
//             countVowel++;
//         }
//         else if((char>='a'&& char<='z') || (char>='A'&& char<='Z')){
//             countConsonant++;
//         }
//         else if(char>='0'&&char<='9'){
//             countDigit++;
//         }
//         else if(char==' '){
//             countWhitespace++
//         }
//     })
//     return{
//         countVowel,
//         countConsonant,
//         countDigit,
//         countWhitespace,
//     }
// }
// const result=count("Nikita Manandhar123")
// console.log("Number of vowels:",result.countVowel);
// console.log("Number of consonants:",result.countConsonant);
// console.log("Number of digits:",result.countDigit);
// console.log("Number of whitespaces:",result.countWhitespace);

//QN-10
// const printOdd = (string) => {
//     let result = '';
//     [...string].forEach((char, index) => {
//         if (index % 2 == 0) {
//             result = result + char;
//         }
//     });
//     return result;
// };
// const printing=printOdd("Javascript");
// console.log("Printing odd indexes:",printing);

//QN-11
// const number = (string) => {
//     return !isNaN(string) && string!=='';
// }
// const result = number("246462");
// console.log(result);

//QN-12
// const number = (a, b) => {
//     return a + b;
// }
// const sum = number(10, 15);
// console.log("Sum:", sum);

//QN-13
// const circle=(radius)=>{
//     const area= Math.PI*radius*radius;
//     const circumference= 2*Math.PI*radius;
//     return{
//         area,
//         circumference,
//     };
// }
// const radius=parseInt(prompt("Enter the radius:"));
// const result=circle(radius);
// console.log("Area is:",result.area);
// console.log("Circumference is:",result.circumference);










function Javascript() {
    return null;
}
export default Javascript;