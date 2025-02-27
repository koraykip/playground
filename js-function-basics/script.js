
function add7(num) { return num + 7 }; 
console.log( add7(2) );

function multiply(num1, num2) { return num1 * num2 }
console.log( multiply(3, 4) );


function capitalize(string) {
        let tmp = string.trim().toLowerCase();
        return tmp[0].toUpperCase() + tmp.slice(1); 
    }
console.log( capitalize("test") );

function capitalize2(string) {
    return string.trim().toLowerCase().replace(/^(.)/, (match) => match.toUpperCase());
}
console.log( capitalize2("test") );

function lastLetter(string) { return string.slice(-1)}
console.log(lastLetter("abcd"))