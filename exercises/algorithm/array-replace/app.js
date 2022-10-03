function arrayReplace(arr, searchValue, replaceValue) {
  if (!Array.isArray(arr)) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      arr[i] = replaceValue;
    }
  }
  return arr;
}
console.log(arrayReplace([1, 2, 3, 1, 1, 4], 1, 5));
