// let form = document.querySelector(".form");
// let showdata = document.querySelector("#showdata");
// console.log(showdata);

// let btn = form.children[1];

// btn.addEventListener("click", function () {
//   let input = btn.previousElementSibling;
//   let uservalue = input.value;
//   showdata.innerHTML += `<h1> ${uservalue} </h1> `;
// });
// console.log(btn);
// let img = document.getElementById("img");
let path = [
  "images/image2.jpg",
  "images/im3.jpg",
  "images/im4.jpg",
  "images/im5.jpg",
  "images/im6.jpg",
  "images/im7.jpg",
];

function one() {
  let index = Math.floor(Math.random() * path.length);
  console.log(index);
  let img = document.querySelector("#img");
  img.src = path[index];
}
