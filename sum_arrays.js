function addArrays(array1, array2) {
  if (!array1.length && !array2.length) return [];
  
  const arrayToNumber1 = parseInt(array1.join('')) || 0;
  const arrayToNumber2 = parseInt(array2.join('')) || 0;
  
  const sum = String(arrayToNumber1 + arrayToNumber2);
  const sumArr = sum.split("");
  
  sumArr.forEach((item, idx) => {
    if (item === "-") {
      sumArr[idx + 1] = sumArr[idx + 1] * -1;
    }
  });
  
  return sumArr.filter(item => Number(item) || Number(item) === 0).map(Number);
}
