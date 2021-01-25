const moveZeros = function (arr) {
  let zeroCounter = 0;
  
  arr.forEach((el, idx) => {
    if (el === 0) {
      zeroCounter++;
    }
  });
  
  arr = arr.filter(el => el !== 0);
  
  for (let i = 0; i < zeroCounter; i++) {
    arr.push(0);
  }
  
  return arr;
}
