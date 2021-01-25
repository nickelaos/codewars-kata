const variance = (numbers) => {
  const mean = calculateMean(numbers);
  return numbers.reduce((acc, curr) => {
    return acc + Math.pow((curr - mean), 2);
  }, 0) / numbers.length;
};

const calculateMean = (numbers) => {
  return (numbers.reduce((a, b) => a + b, 0)) / numbers.length;
}
