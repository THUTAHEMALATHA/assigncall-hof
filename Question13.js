const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const countOccurrences = categories.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});