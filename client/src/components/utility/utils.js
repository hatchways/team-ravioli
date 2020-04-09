export const dateFormater = () => {
  let d = new Date();
  let month = d.getMonth() + 1;
  let day = d.getDate();
  if (month < 10) month = '0' + month;
  if (day < 10) day = '0' + day;
  let newDate = d.getFullYear() + '-' + month + '-' + day;

  return newDate;
};

const currentDate = dateFormater().split('-');
export const currentMonth = currentDate[1];
export const currentYear = currentDate[0];
