function findSundays() {
  const sundays = [];

  // haftanın günleri
  const wd = 7;

  //sabit yıl
  const sy = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  //artık yıl
  const ay = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  let year = 1900;
  // 7.1.1900 pazar günü düşünürsek
  let sundayDate = 7;

  while (year <= 2000) {
    for (const key in sy) {
      if (year % 4 === 0 && year !== 1900) {
        // şubat 29 ise
        while (sundayDate < ay[key]) {
          sundayDate += wd;
        }

        sundayDate -= ay[key];
      } else {
        // şubat 28 ise
        while (sundayDate < sy[key]) {
          sundayDate += wd;
        }

        sundayDate -= sy[key];
      }

      // +key + 1 doğru ayı çağırma

      if (sundayDate === 1 && +key < 12) {
        sundays.push(`1/${+key + 1}/${year}`);
      } else if (sundayDate === 1 && +key === 12) {
        sundays.push(`1/1/${year + 1}`);
      }
    }

    year++;
  }

  return sundays;
}
