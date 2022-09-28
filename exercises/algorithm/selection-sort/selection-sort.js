function selectionSort(array) {
  const arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
const arr = [64, 25, 12, 22, 30, 11, 100];
console.log(selectionSort(arr));
//25,64, 12,22,30,11,100
