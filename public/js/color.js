//color game
var i = 0;
const all = [
  "สีแดง",
  "สีน้ำเงิน",
  "สีเขียว",
  "สีเหลือง",
  "สีชมพู",
  "สีขาว",
  "สีดำ",
  "สีเทา",
  "สีน้ำตาล",
  "สีส้ม",
];
function a() {
  var q = Math.floor(Math.random() * 9);
  console.log(q);
  var r = prompt("How many rounds you do want to play?");
  var num = 0;
  if (isNaN(prompt)) {
    alert("Invalid input! Please enter a number!");
    window.location.reload();
  } else {
    while (i == 0) {
      var color = prompt("Let's Play!");
      if (color == "red" || color == "สีแดง" || color == "แดง") {
        ans = 0;
      } else if (
        color == "blue" ||
        color == "สีน้ำเงิน" ||
        color == "น้ำเงิน"
      ) {
        ans = 1;
      } else if (color == "้green" || color == "สีเขียว" || color == "เขียว") {
        ans = 2;
      } else if (
        color == "yellow" ||
        color == "สีเหลือง" ||
        color == "เหลือง"
      ) {
        ans = 3;
      } else if (color == "pink" || color == "สีชมพู" || color == "ชมพู") {
        ans = 4;
      } else if (color == "white" || color == "สีขาว" || color == "ขาว") {
        ans = 5;
      } else if (color == "black" || color == "สีดำ" || color == "ดำ") {
        ans = 6;
      } else if (color == "grey" || color == "สีเทา" || color == "เทา") {
        ans = 7;
      } else if (color == "brown" || color == "สีน้ำตาล" || color == "น้ำตาล") {
        ans = 8;
      } else if (color == "orange" || color == "สีส้ม" || color == "ส้ม") {
        ans = 9;
      } else {
        ans = -1;
      }

      if (ans == q) {
        alert("That's Correct!!");
        num = num + 1;
        break;
      } else {
        alert("It's Wrong~~");
        r = r - 1;
        num = num + 1;
        if (r < 1) {
          alert("round have been emptied");
          break;
        }
      }
    }
  }

  document.getElementById("one").innerHTML = "Correct Color";
  document.getElementById("answer").innerHTML = all[q];
  document.getElementById("two").innerHTML = "Round to play all";
  document.getElementById("round").innerHTML = num + " Round";
}
