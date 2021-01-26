var moveZeros = function (arr) {
  let zeroCounter = 0;
  
  arr = arr.filter(el => {
    if (el === 0) {
      zeroCounter++;
    }
    return el !== 0;
  });
  
  for (let i = 0; i < zeroCounter; i++) {
    arr.push(0);
  }
  
  return arr;
}
