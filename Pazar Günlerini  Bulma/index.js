function getSundayOfCurrentWeek() {
  const date1  = "01.01.1990"
  const date2 = "31.12.2000"
  const today = new Date();
  const first = date2 - date1
  const last = first + 6;

  const monday = "01.01.1900"

  const sunday = new Date(today.setDate(last));

  return sunday;
}

console.log(getSundayOfCurrentWeek());
