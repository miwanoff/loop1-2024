let n = prompt("Введіть число");
if (!isNaN(n)){

}
else {
let y = 0;
let i = 1;
while (i <= n) {
  y += i;
  i++;
}
alert("Сума ряду:" + y);
}