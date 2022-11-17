

const isHasMajorVowelHarmony = word => {
  const hardVowels = "aıou";
  const softVowels = "eiöü";

  let isHardLetter = false;
  let isSoftLetter = false;
  for (var i = 0; i < word.length; i++) {
    if (hardVowels.indexOf(word[i]) !== -1) {
      isHardLetter = true;
    }
    if (softVowels.indexOf(word[i]) !== -1) {
      isSoftLetter = true;
    }
  }
  if (isHardLetter && isSoftLetter) return false;
  else if (isHardLetter || isSoftLetter) return true;
};

export default isHasMajorVowelHarmony;