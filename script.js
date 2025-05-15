function firstWord(s) {
  // your code here
// Trim any leading and trailing whitespace from the input string
  let trimStr = str.trim();
  // Split the string into an array of words based on space character
  let words = str.split(" "); // ["see", "and", "stop"]
  // Return the first word (first element of the array)
  return words[0];
}
console.log(firstWord("see and stop"));
// Test case 2: " Hello World!" should return "Hello" (note: there's an issue here as trimStr isn't used)
console.log(firstWord(" Hello World!"));
// Test case 3: "12345" should return "12345" (single word)
console.log(firstWord("12345"));
// Test case 4: "" should return undefined (empty string has no words)
console.log(firstWord(""));
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
