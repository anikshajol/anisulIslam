var num = 5;

if (num % 5 === 0) {
  //   console.log("even");
}
// if (num % 2 !== 0) {
//   console.log("odd");
// }
else {
  //   console.log("odd");
}

var marks = 79;

if (marks >= 80 && marks <= 100) {
  console.log("A+");
} else if (marks >= 70 && marks < 80) {
  console.log("A");
} else if (marks >= 60 && marks < 70) {
  console.log("B");
} else if (marks >= 50 && marks < 60) {
  console.log("C");
} else if (marks >= 33 && marks < 50) {
  console.log("D");
} else if (marks >= 0 && marks < 33) {
  console.log("Fail");
} else {
  console.log("Not a Valid number");
}

var num1 = 5,
  num2 = 7,
  num3 = 5;

if (num1 > num2 && num1 > num3) {
  console.log("Num1:", num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("Num2", num2);
} else if (num3 > num1 && num3 > num2) {
  console.log("Num3", num3);
} else {
  console.log("equal");
}

var letter = "e";

letter = letter.toUpperCase();

if (
  letter === "A" ||
  letter === "E" ||
  letter === "I" ||
  letter === "O" ||
  letter === "U"
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}
