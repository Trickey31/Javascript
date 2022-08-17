const complexArr = [1, 2, 3, [2, 3, 4], [[4, 5, 6]]];
// console.log(complexArr.flat(Infinity));
function flatArr(arr, deep) {
  const result =
    deep > 0
      ? arr.reduce(
          (prevVal, currVal) =>
            prevVal.concat(
              Array.isArray(currVal) ? flatArr(currVal, deep - 1) : currVal
            ),
          []
        )
      : arr.slice();
  return result;
}
flatArr(complexArr, Infinity);
