
// METHOD 2
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello from JS");

// METHOD 3
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    e.target.style.background = "blue";
});


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});