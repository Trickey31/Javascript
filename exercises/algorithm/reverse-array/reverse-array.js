function reverseArray(arr) {
  if (!Array.isArray(arr)) return null;
  const newArr = [...arr];
  for (let i = 0; i < newArr.length / 2; i++) {
    [newArr[i], newArr[newArr.length - 1 - i]] = [
      newArr[newArr.length - 1 - i],
      newArr[i],
    ];
  }
  return newArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
