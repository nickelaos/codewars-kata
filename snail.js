snail = function(array) {
  const output = [];
  
  while (array.length) {
    let temp = [];
    
    array.forEach((arr, idx) => {

      if (idx === 0 === array.length - 1) {
        output.push(...arr);
        array[0] = [];
        return;
      }
        
      switch(idx) {
          case 0:
            output.push(...arr);
            array[0] = [];
            break;
          case (array.length - 1):
            output.push(...arr.reverse());
            array[arr.length - 1] = [];
            break;
          default:
            output.push(arr[arr.length - 1]);
            temp.push(arr[0]);
            arr[arr.length - 1] = null;
            arr[0] = null;
      }
      
    });
    
    output.push(...temp.reverse());
    temp = [];
    
    array = array.filter(arr => arr.length);
    array.forEach((arr, idx) => {
      array[idx] = arr.filter(Number);
    });

  }
  
  return output;
}
