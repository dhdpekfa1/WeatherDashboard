import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
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
        {daysData.map((data) => (
          <div className="w-full flex items-center gap-7 bg-neutral-50 py-0 px-3 rounded-sm">
            <div className="w-fit h-10 flex items-center gap-2">
              <img src={data.imgUrl} alt="" className="h-7 w-7" />
              <div className="flex items-center gap-1 w-20">
                <div className="w-full h-full flex items-start gap-[2px]">
                  <span
                    className={`roboto-medium scroll-m-20 text-lg font-semibold tracking-tight text-red-600`}
                  >
                    {data.highTemp}
                  </span>
                  <span className="text-xs font-normal mt-1">&#8451;</span>
                </div>
                <div className="w-full h-full flex items-start gap-[2px]">
                  <span
                    className={`roboto-medium scroll-m-20 text-lg font-semibold tracking-tight text-sky-600`}
                  >
                    {data.lowTemp}
                  </span>
                  <span className="text-xs font-normal mt-1">&#8451;</span>
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-end gap-5 mb-1">
              <small className="text-sm leading-none">{data.date}</small>
              <small className="text-sm leading-none">{data.day}요일</small>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export { DaysCard };
