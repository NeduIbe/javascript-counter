let minus = document.getElementById("lower");
let add = document.getElementById("add");

let int = document.getElementById("number");
let integer = 7;


minus.addEventListener("click", function () {
  integer -= 1;
  int.innerHTML = integer;

  if (integer <= 0) {
    document.getElementById("lower").setAttribute('disabled', "disabled");
}
  if (integer < 50) {
    document.getElementById("add").removeAttribute('disabled', "disabled");
}
});

add.addEventListener("click", function () {
  integer += 1;
  int.innerHTML = integer;

  if (integer > 0) {
    document.getElementById("lower").removeAttribute('disabled', "disabled");
}
  if (integer >= 50) {
    document.getElementById("add").setAttribute('disabled', "disabled");
}
});