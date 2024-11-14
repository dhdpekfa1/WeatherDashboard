import { useMemo } from "react";

export const useFormattedTime = (time: string) => {
  return useMemo(() => {
    const [, hourString] = time.split(" ");
    const [hour] = hourString.split(":").map(Number);

    let formattedTime;

    if (hour === 0) {
      formattedTime = "오전 0시";
    } else if (hour === 12) {
      formattedTime = "오후 12시";
    } else {
      const isAm = hour < 12;
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // 12시간 형식으로 변환
      const period = isAm ? "오전" : "오후";

      formattedTime = `${period} ${formattedHour}시`;
    }

    return formattedTime;
  }, [time]);
};
