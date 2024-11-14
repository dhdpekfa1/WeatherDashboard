export const formatDate = (epoch: number) => {
  const date = new Date(epoch * 1000);
  const day = date.toLocaleString("en-EN", { day: "2-digit" });
  const month = date.toLocaleString("en-EN", { month: "short" });

  return `${day} ${month}`;
};

export const formatDay = (epoch: number) => {
  const date = new Date(epoch * 1000);
  const weekday = date.toLocaleString("ko-KR", { weekday: "long" });

  return weekday;
};
