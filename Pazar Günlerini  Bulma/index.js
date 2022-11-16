function getSundayOfCurrentWeek() {
  const today = new Date();
  const first = today.getDate() - today.getDay() + 1;
  const last = first + 6;

  const monday = new Date(today.setDate(first));
  console.log(monday); // pazartesi hangi güne denk geliyor??

  const sunday = new Date(today.setDate(last));

  return sunday;
}

console.log(getSundayOfCurrentWeek());
