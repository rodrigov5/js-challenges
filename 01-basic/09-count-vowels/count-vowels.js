function vowelsCount(word) {

  let vowels = [0 ,0 ,0 ,0 ,0];

  for(let i = 0; i<word.length; i++) {
    if(word[i] === "a") {
      vowels[0] += 1
    }

    if(word[i] === "e") {
      vowels[1] += 1
    }

    if(word[i] === "i") {
      vowels[2] += 1
    }

    if(word[i] === "o") {
      vowels[3] += 1
    }

    if(word[i] === "u") {
      vowels[4] += 1
    }
  }

  return `          a = ${vowels[0]},
          e = ${vowels[1]},
          i = ${vowels[2]},
          o = ${vowels[3]},
          u = ${vowels[4]},
  `;
}

module.exports = vowelsCount;
