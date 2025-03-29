

// export const wrapShift = (str, key, encrypt = true) => {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     const shiftedAlphabet = alphabet.slice(-key) + alphabet.slice(0, -key); // ✅ Wrap shift from the bottom
  
//     return str
//       .toLowerCase()
//       .split("")
//       .map((char) => {
//         let originalIndex = alphabet.indexOf(char);
//         if (originalIndex === -1) return char; // Ignore non-alphabet characters
//         return encrypt ? shiftedAlphabet[originalIndex] : alphabet[shiftedAlphabet.indexOf(char)];
//       })
//       .join("");
//   };

export const wrapShift = (str, key, encrypt = true) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const shiftedAlphabet = encrypt
    ? alphabet.slice(-key) + alphabet.slice(0, -key)
    : alphabet.slice(key) + alphabet.slice(0, key); // Reverse shift for decryption

  return str
    .toLowerCase()
    .split("")
    .map((char) => {
      let originalIndex = alphabet.indexOf(char);
      if (originalIndex === -1) return char; // Preserve spaces and punctuation
      return shiftedAlphabet[originalIndex];
    })
    .join("");
};
