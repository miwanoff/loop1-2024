let x = Math.floor(Math.random() * 10);
console.log(x);

while (true) {
  let n = prompt("Input n from 0 to 10");

  if (n > x) {
    alert("too big!");
  } else if (n == x) {
    alert("You win!");
    break;
  }
}
alert("Game over!");
