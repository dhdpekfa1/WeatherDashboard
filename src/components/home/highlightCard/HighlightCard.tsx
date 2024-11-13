import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  SunriseAndSunset,
  HighlightDataCard,
  HighlightSummaryCard,
} from "@/components";

const HighlightCard = () => {
  const cardData = [
    {
      labelKo: "습도",
      labelEn: "Humidity",
      imgUrl: "src/assets/icons/Humidity.svg",
      value: 80,
      unit: "%",
    },
    {
      labelKo: "기압",
      labelEn: "Pressure",
      imgUrl: "src/assets/icons/Wind.svg",
      value: 1024,
      unit: "hPa",
    },
    {
      labelKo: "가시거리",
      labelEn: "Visibility",
      imgUrl: "src/assets/icons/Fog.svg",
      value: 10,
      unit: "km",
    },
    {
      labelKo: "체감온도",
      labelEn: "Fells Lick",
      imgUrl: "src/assets/icons/Hot.svg",
      value: 80,
      unit: `&#8451;`,
    },
  ];

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-xl">Today's Highlight</CardTitle>
        <CardDescription>
          오늘의 날씨 중 주의깊게 살펴보아야 할 이벤트를 조회하고 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          {/* TODO: 2개의 CardContent 부분  컴포넌트 분리 */}
          {/* {summaryCard.map((data) => ( */}
          <HighlightSummaryCard
            labelKo={"해양 및 조수 데이터"}
            labelEn={"Marine and Sailing"}
            imgUrl={"src/assets/icons/Waves.png"}
          >
            {/* TODO: Tides 컴포넌트 분리 */}
            <div className="w-fit grid grid-cols-4 gap-3">
              <div className="flex flex-col items-center">
                <p className="text-sm text-muted-foreground">1회 - 만조</p>
                <p className="roboto-medium scroll-m-20 text-lg font-semibold tracking-tighter">
                  05:48
                  <span className="ml-[1px]">am</span>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm text-muted-foreground">2회 - 간조</p>
                <p className="roboto-medium scroll-m-20 text-lg font-semibold tracking-tighter">
                  11:56
                  <span className="ml-[1px]">am</span>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm text-muted-foreground">3회 - 만조</p>
                <p className="roboto-medium scroll-m-20 text-lg font-semibold tracking-tighter">
                  18:14
                  <span className="ml-[1px]">pm</span>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm text-muted-foreground">4회 - 간조</p>
                <p className="roboto-medium scroll-m-20 text-lg font-semibold tracking-tighter">
                  18:14
                  <span className="ml-[1px]">pm</span>
                </p>
              </div>
            </div>
          </HighlightSummaryCard>

          <HighlightSummaryCard
            labelKo={"일출 / 일몰"}
            labelEn={"Sunrise and Sunset"}
          >
            <SunriseAndSunset
              imgUrl={"src/assets/icons/1000d.svg"}
              label={"Sunrise"}
              time={"07:00 AM"}
            />
            <SunriseAndSunset
              imgUrl={"src/assets/icons/1000n.svg"}
              label={"Sunset"}
              time={" 05:34 PM"}
            />
          </HighlightSummaryCard>
        </div>
        <div className="w-full grid grid-cols-4 gap-5">
          {cardData.map((data) => (
            <HighlightDataCard
              labelKo={data.labelKo}
              labelEn={data.labelEn}
              imgUrl={data.imgUrl}
              value={data.value}
              unit={data.unit}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { HighlightCard };
