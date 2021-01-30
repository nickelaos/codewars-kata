function zipWith(fn, arr1, arr2) {
  const result = [];
  const shorterArrLength = (arr1.length > arr2.length) ? arr2.length : arr1.length;
  
  for (let i = 0; i < shorterArrLength; i++) {
    result.push(fn(arr1[i], arr2[i]));
  }
  
  return result;
}
