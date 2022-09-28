function quickSort(array) {
  const arr = [...array];
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const smaller = arr.filter((item) => item < pivot);
  const bigger = arr.filter((item) => item > pivot);
  return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}
const arr = [64, 25, 12, 22, 30, 11, 100];
console.log(quickSort(arr));
