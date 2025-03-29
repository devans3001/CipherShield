

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

// export const wrapShift = (str, key, encrypt = true) => {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const shiftedAlphabet = encrypt
//     ? alphabet.slice(-key) + alphabet.slice(0, -key)
//     : alphabet.slice(key) + alphabet.slice(0, key); // Reverse shift for decryption

//   return str
//     .toLowerCase()
//     .split("")
//     .map((char) => {
//       let originalIndex = alphabet.indexOf(char);
//       if (originalIndex === -1) return char; // Preserve spaces and punctuation
//       return shiftedAlphabet[originalIndex];
//     })
//     .join("");
// };

export const wrapShift = (str, keyLetter, encrypt = true) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const shift = alphabet.indexOf(keyLetter.toLowerCase());

  if (shift === -1) return "Invalid shift key"; // Ensure it's a valid letter

  const shiftedAlphabet = encrypt
    ? alphabet.slice(-shift) + alphabet.slice(0, -shift) // Encrypt: Shift forward
    : alphabet.slice(shift) + alphabet.slice(0, shift); // Decrypt: Shift backward

  return str
    .split("")
    .map((char) => {
      const lowerChar = char.toLowerCase();
      const index = alphabet.indexOf(lowerChar);
      if (index === -1) return char; // Preserve non-alphabet characters
      const newChar = shiftedAlphabet[index];
      return char === lowerChar ? newChar : newChar.toUpperCase(); // Preserve case
    })
    .join("");
};
