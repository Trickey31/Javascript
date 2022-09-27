// --> Độ phức tạp: O(n^2)

function bubbleSort(array) {
  const arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Cách 1
        // const tmp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = tmp;

        // Cách 2
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
const arr = [1, 5, 3, 6, 77, 9, 10, 200, 100, 50];
console.log(bubbleSort(arr));
console.log(arr);
