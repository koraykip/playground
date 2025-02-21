let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length; //26
console.log(length);
console.log("-----------------");


text = "JavaScript";
console.log(text.at(0));   // "J"  (first character)
console.log(text.at(4));   // "S"
console.log(text.at(-1));  // "t"  (last character)
console.log(text.at(-3));  // "i"  (third-last character)
console.log("-----------------");


text = "JavaScript";
console.log(text.charAt(0));  // "J"
console.log(text.charAt(4));  // "S"
console.log(text.charAt(text.length - 1)); // "t" (last character)
console.log(text.charAt(100)); // ""
console.log("-----------------");


text = "JavaScript";
console.log(text.charCodeAt(0));  // 74  (Unicode for 'J')
console.log(text.charCodeAt(4));  // 83  (Unicode for 'S')
console.log(text.charCodeAt(text.length - 1)); // 116 ('t')
console.log("-----------------");

console.log(String.fromCharCode(74));  // "J"
console.log(String.fromCharCode(83));  // "S"
console.log("-----------------");


text = "JavaScript";
console.log(text[0]);    // "J"
console.log(text[4]);    // "S"
console.log(text[text.length - 1]); // "t" (last character)
console.log(text[100]);  // undefined (out-of-bounds)
console.log("-----------------");


console.log(text);
console.log("text.slice(0, 4)");
text = "JavaScript";
console.log(text.slice(0, 4));   // "Java"  (characters 0 to 3)
console.log(text.slice(4, 10));  // "Script"
console.log(text.slice(4));      // "Script" (from index 4 to the end)
console.log(text.slice(-6));     // "Script" (last 6 characters)
console.log(text.slice(-6, -3)); // "Scr" (from -6 to -3)
console.log("-----------------");


console.log(text);
console.log("text.substring(0, 4)");
text = "JavaScript";
console.log(text.substring(0, 4));   // "Java"
console.log(text.substring(4, 10));  // "Script"
console.log(text.substring(4));      // "Script"
console.log(text.substring(10, 4));  // "Script" (swaps values)
console.log(text.substring(-6, -3)); // "" (negative indexes are ignored) 
console.log("-----------------");


console.log(text);
console.log("text.substr(0, 4)");
text = "JavaScript";
console.log(text.substr(0, 4));  // "Java" (start at 0, take 4 characters)
console.log(text.substr(4, 6));  // "Script" (start at 4, take 6 characters)
console.log(text.substr(4));     // "Script" (start at 4, take all remaining)
console.log(text.substr(-6, 6)); // "Script" (start 6 from the end, take 6)
console.log(text.substr(-6, 3)); // "Scr" (start 6 from the end, take 3) 
console.log("-----------------");


console.log("text.toUpperCase()");
text = "hello world";
console.log(text);
console.log(text.toUpperCase()); // "HELLO WORLD"
console.log("-----------------");


console.log("text.toLowerCase()");
text = "HELLO WORLD";
console.log(text);
console.log(text.toLowerCase()); // "hello world"
console.log("-----------------");


console.log(`str1.concat(" ", str2)`);
console.log(`str1 + " " + str2`);
console.log("${str1} ${str2}");
let str1 = "Hello";
let str2 = "World";
console.log(str1);
console.log(str2);
console.log(str1.concat(" ", str2)); // "Hello World"
console.log(str1 + " " + str2);      // "Hello World" (alternative)
console.log(`${str1} ${str2}`);      // "Hello World" (template literals) 
console.log("-----------------");


text = "   Hello World   ";
console.log("text.trim()");
console.log(text);
console.log(text.trim()); // "Hello World"
console.log("-----------------");


text = "   Hello World   ";
console.log(text);
console.log("text.trimStart())");
console.log(text.trimStart()); // "Hello World   "
console.log("-----------------");


text = "   Hello World   ";
console.log(text);
console.log("text.trimEnd())");
console.log(text.trimEnd()); // "   Hello World"
console.log("-----------------");


let num = "5";
console.log(num);
console.log(`num.padStart(4, "0")`);
console.log(num.padStart(4, "0"));  // "0005"
console.log("123".padStart(6, "-")); // "---123"
console.log("-----------------");


num = "5";
console.log(num);
console.log(`num.padEnd(4, "0")`);
console.log(num.padEnd(4, "0"));  // "5000"
console.log("123".padEnd(6, "-")); // "123---"
console.log("-----------------");


text = "Hello ";
console.log(text.repeat(3)); // "Hello Hello Hello "
console.log("-----------------");


text = "I love JavaScript. JavaScript is awesome!";
console.log(text.replace("JavaScript", "Python")); // "I love Python. JavaScript is awesome!"
console.log("-----------------");


text = "I love JaVaScript. JavaScript is awesome!";
console.log(text.replace(/javascript/i, "Python")); 
console.log("-----------------");


text = "I love JavaScript. JavaScript is awesome!";
console.log(text.replaceAll("JavaScript", "Python")); 
// "I love Python. Python is awesome!"
console.log("-----------------");


text = "apple,banana,cherry";
console.log(text.split(","));  
// ["apple", "banana", "cherry"]
console.log(text.split(""));   
// ["a", "p", "p", "l", "e", ",", "b", "a", "n", "a", "n", "a", ",", "c", "h", "e", "r", "r", "y"]
console.log(text.split(" "));  
// ["apple,banana,cherry"] (no spaces)
console.log("-----------------");


text = "Hello JavaScript, welcome to JavaScript!";
console.log(text.indexOf("JavaScript"));  // 6 (first occurrence)
console.log(text.indexOf("Python"));      // -1 (not found)
console.log(text.indexOf("JavaScript", 10)); // 22 (search starts from index 10)
console.log("-----------------");


text = "Hello JavaScript, welcome to JavaScript!";
console.log(text.search("JavaScript"));  // 6 (first occurrence)
console.log(text.search(/JavaScript/i)); // 6 (case-insensitive match)
console.log(text.search("Python"));      // -1 (not found)
console.log("-----------------");


text = "I love JavaScript. JavaScript is great.";
console.log("text");
console.log("text.match(/JavaScript/g)");
console.log(text.match(/JavaScript/g));  // ["JavaScript", "JavaScript"]
console.log("text.match(/JavaScript/i)");
console.log(text.match(/JavaScript/i));  // ["JavaScript", index: 7, input: "I love JavaScript...", groups: undefined]
console.log(text.match("Python"));       // null (not found)
console.log("-----------------");


text = "I love JavaScript. JavaScript is great.";
let matches = text.matchAll(/JavaScript/g);
console.log([...matches]);  
console.log("-----------------");


text = "Hello JavaScript!";
console.log(text.includes("JavaScript"));  // true
console.log(text.includes("Python"));      // false
console.log(text.includes("Hello", 5));    // false (search starts from index 5)
console.log("-----------------");


text = "Hello JavaScript!";
console.log(text.startsWith("Hello"));  // true
console.log(text.startsWith("Java"));   // false
console.log(text.startsWith("Java", 6)); // true (check from index 6)
console.log("-----------------");


text = "Hello JavaScript!";
console.log(text.endsWith("JavaScript!")); // true
console.log(text.endsWith("Hello"));       // false
console.log(text.endsWith("JavaScript", 17)); 
// true (considering only first 17 chars) 
console.log("-----------------");




