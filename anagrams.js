function anagrams(str, words) {
  const strSorted = sortCharsInString(str);
  return words.filter(word => {
    return strSorted === sortCharsInString(word);
  });
}

function sortCharsInString(str) {
  return str.split('').sort().join();
}
