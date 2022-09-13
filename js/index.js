// Iteration 1: Names and Input
console.log("I'm ready!");

let hacker1 = "xavi";
console.log("The driver's name is " + hacker1);
let hacker2 = "samane";
console.log("The navigator name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length}characters.`
  );
} else if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length}characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length}characters!`
  );
}

// Iteration 3: Loop

// let uppercase = hacker1.toUpperCase().split(" ").join(" ");

// console.log (uppercase);

let separateName = "xavi";
for (let i = 0; i < hacker1.length; i++) {
  separateName += hacker1[i].toUpperCase() + " ";
}

let reserveName = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reserveName += hacker1[i];
}
console.log(reserveName);

// buno1
// first metode

let latin =
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis commodo aliquet. Donec eu facilisis eros. Donec placerat dolor vel augue scelerisque, quis aliquam ipsum efficitur. Phasellus in fermentum sapien. Donec ultrices justo enim, ut imperdiet ligula varius a. In porttitor risus at erat rutrum rhoncus. Vivamus mi dolor, maximus sit amet ligula in, rhoncus eleifend lectus. Nullam molestie, justo in pharetra dignissim, ligula lacus tempor risus, a auctor sem ante non velit. Sed scelerisque, tortor pharetra fermentum sagittis, dolor mauris placerat risus, ut rutrum purus augue ut tellus. Phasellus tempus tellus nec enim accumsan finibus.";

let words = 0;
let letters = latin.length;

for (i = 0; i <= letters; i++) {
  if (latin.charAt(i) === " ") {
    words++;
  }
}

console.log(words + 1);

function countOccurences(string, word) {
  return string.split(word).length - 1;
}
var text = "We went down to the stall, then down to the river.";
var count = countOccurences(words, "et");

// let lorem = function amount0forwords(samane) {
//   return samane.split(" ").filter((word) => word !== "").lenght;
// };
// console.log(amount0forwords(lorem));

// // second metode

// function amount0forwords(samane) {
//   return samane.split(" ").lenght;
// }

// // third metode

// function samaneFuction(samane) {
//   return `${(samane.match(/ et /g) || []).lenght}`;
// }

// console.log(`samaneFunction ${samaneFunction(lorem)}`);

// Bouns2

// let pharaseToCheck = "luzazul";

// function palindromecheck(wordToCheck) {
//   let lenght;
// }

// Bonus2
const phraseToCheck = "Was it a car or a cat I saw?";
const withoutSpecialChars = phraseToCheck.replace(/[,?!'. ]/g, "");
const splitSentence = withoutSpecialChars.split("");
const firstCompare = splitSentence.join("").toLowerCase();
const reversedSentence = splitSentence.reverse();
const secondCompare = reversedSentence.join("").toLowerCase();
firstCompare === secondCompare
  ? console.log("It's a Palindrome! :)")
  : console.log("It's not a Palindrome, bad luck! :(");
