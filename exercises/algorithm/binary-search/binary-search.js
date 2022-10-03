function binarySearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const midIndex = Math.floor((low + high) / 2);
    if (arr[midIndex] === value) {
      return midIndex;
    } else if (arr[midIndex] < value) {
      low = midIndex + 1;
    } else {
      high = midIndex - 1;
    }
  }
  return null;
}
console.log(
  binarySearch([1, 3, 5, 6, 9, 11, 15, 19, 20, 24, 27, 35, 36, 38, 50], 27)
);
