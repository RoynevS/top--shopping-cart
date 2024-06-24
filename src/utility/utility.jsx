function toTitleCase(string) {
  return string
    .trim()
    .split("")
    .map((char, index) => {
      if (index === 0) return char.toUpperCase();
      return char.toLowerCase();
    })
    .join("");
}

const calculateTotal = (array) => {
  const total = array
    .map((product) => product.price * product.amount)
    .reduce((acc, cur) => acc + cur, 0);
  return (Math.round(total * 100) / 100).toFixed(2);
};

export { toTitleCase, calculateTotal };
