function isPalindrome(str) {
  if (typeof str !== "string") return null;
  const newStr = str.toLowerCase();
  // Cách 1
  // const reverseStr = newStr.split("").reverse().join("");
  // return reverseStr === newStr;

  // Cách 2
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += newStr[i];
  }
  return reverseStr === newStr;
}
console.log(isPalindrome("aaBAA"));
