interface FormatDateResponse {
  date: string;
  hour: string;
}

const formatDate = (dateString: string): FormatDateResponse => {
  const replacedDateString = dateString?.replace(" ", "T") ?? Date();
  const currentDate = new Date(replacedDateString);

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const formatedMonth = month < 10 ? `0${month}` : month;
  const year = currentDate.getFullYear().toString().slice(2);

  let hours = currentDate.getHours().toString();
  if (currentDate.getHours() < 10) {
    hours = `0${currentDate.getHours()}`;
  }

  let minutes = currentDate.getMinutes().toString();
  if (currentDate.getMinutes() < 10) {
    minutes = `0${currentDate.getMinutes()}`;
  }

  return {
    date: `${day}.${formatedMonth}.${year}`,
    hour: `${hours}:${minutes}`,
  };
};

export default formatDate;
