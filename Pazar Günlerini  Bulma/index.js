function findSundays() {
  const sundays = [];

  const WEEK_DAYS = 7;
  const REGULAR_DAYS_IN_YEAR = {
    '1': 31,
    '2': 28,
    '3': 31,
    '4': 30,
    '5': 31,
    '6': 30,
    '7': 31,
    '8': 31,
    '9': 30,
    '10': 31,
    '11': 30,
    '12': 31,
  };

  const LEAP_YEAR = {
    '1': 31,
    '2': 29,
    '3': 31,
    '4': 30,
    '5': 31,
    '6': 30,
    '7': 31,
    '8': 31,
    '9': 30,
    '10': 31,
    '11': 30,
    '12': 31,
  }

  let year = 1900;
  // this is because 7.1.1900 is sunday
  let sundayDate = 7;

  while (year <= 2000) {
    for (const key in REGULAR_DAYS_IN_YEAR) {
      if (year % 4 === 0 && year !== 1900) {
        // februaries are 29 days
        while (sundayDate < LEAP_YEAR[key]) {
          sundayDate += WEEK_DAYS;
        }

        sundayDate -= LEAP_YEAR[key];
      } else {
        // februaries are 28 days
        while (sundayDate < REGULAR_DAYS_IN_YEAR[key]) {
          sundayDate += WEEK_DAYS;
        }

        sundayDate -= REGULAR_DAYS_IN_YEAR[key];
      }
      
   
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
