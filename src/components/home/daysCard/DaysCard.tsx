import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  DayCard,
} from "@/components";

const DaysCard = () => {
  const daysData = [
    {
      highTemp: 20,
      lowTemp: 14,
      date: "03 Nov",
      day: "일",
      imgUrl: "src/assets/icons/1006d.svg",
    },
    {
      highTemp: 17,
      lowTemp: 9,
      date: "04 Nov",
      day: "월",
      imgUrl: "src/assets/icons/1000d.svg",
    },
    {
      highTemp: 18,
      lowTemp: 12,
      date: "05 Nov",
      day: "화",
      imgUrl: "src/assets/icons/1240d.svg",
    },
    {
      highTemp: 13,
      lowTemp: 8,
      date: "06 Nov",
      day: "수",
      imgUrl: "src/assets/icons/1240d.svg",
    },
    {
      highTemp: 14,
      lowTemp: 8,
      date: "07 Nov",
      day: "목",
      imgUrl: "src/assets/icons/1000d.svg",
    },
    {
      highTemp: 13,
      lowTemp: 6,
      date: "08 Nov",
      day: "금",
      imgUrl: "src/assets/icons/1003d.svg",
    },
    {
      highTemp: 13,
      lowTemp: 9,
      date: "09 Nov",
      day: "토",
      imgUrl: "src/assets/icons/1000d.svg",
    },
  ];
  return (
    <Card className="w-1/4">
      <CardHeader>
        <CardTitle className="text-xl">7 Days</CardTitle>
        <CardDescription>이번 주 날씨를 조회하고 있습니다.</CardDescription>
      </CardHeader>
      <CardContent className="w-full flex flex-col items-center gap-1">
        {/* 7일 - 컴포넌트로 분리 */}
        {daysData.map((data) => (
          <DayCard
            highTemp={data.highTemp}
            lowTemp={data.lowTemp}
            date={data.date}
            day={data.day}
            imgUrl={data.imgUrl}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export { DaysCard };
