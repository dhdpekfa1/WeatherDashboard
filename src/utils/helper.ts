export const formatDate = (epoch: number) => {
  const date = new Date(epoch * 1000); // Convert seconds to milliseconds
  const day = date.toLocaleString("en-EN", { day: "2-digit" }); // Get the day
  const month = date.toLocaleString("en-EN", { month: "short" }); // Get the month (abbreviated)

  return `${day} ${month}`; // Return formatted string
};

export const formatDay = (epoch: number) => {
  const date = new Date(epoch * 1000); // Convert seconds to milliseconds
  const weekday = date.toLocaleString("ko-KR", { weekday: "long" }); // Get the day of the week

  return weekday;
};
