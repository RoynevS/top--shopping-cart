function toTitleCase(string) {
  return string
    .split("")
    .map((char, index) => {
      if (index === 0) return char.toUpperCase();
      return char;
    })
    .join("");
}

export { toTitleCase };
