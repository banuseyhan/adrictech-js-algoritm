// Başlangıçta sert veya yumuşak harf yokmuş gibi düşünürüz
// Ardından, hardVowels ve softVowels doğrulanabilirleri ile kelimenin her harfini kontrol ediyoruz
// Döngüden sonra, 'isHardLetter' ve 'isSoftLetter doğru ise dönüş yanlış olur
// Çünkü kurala göre kelimede sert ve yumuşak ünlüler yoktur
// yalnızca bir doğrulanabilir yanlışsa, sonuç doğru olur
// Çünkü bu, kelimenin yalnızca bir sesli harf öğesi olduğu anlamına gelir.

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