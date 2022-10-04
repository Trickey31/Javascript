function arrayChunking(arr, value) {
  let result = [];
  if (!Array.isArray(arr)) return null;
  for (let i = 0; i < arr.length; i += value) {
    result.push(arr.slice(i, i + value));
  }
  return result;
}
console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
