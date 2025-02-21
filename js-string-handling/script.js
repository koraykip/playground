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







