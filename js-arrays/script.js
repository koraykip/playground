const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.map(x => [x, x * 10]).flat();
document.getElementById("demo").innerHTML = newArr;
