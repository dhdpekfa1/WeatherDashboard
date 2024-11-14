import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  SunriseAndSunset,
  HighlightSmallDataCard,
  HighlighBigDataCard,
} from "@/components";
import { Tide } from "@/types/data";
import { HighlightCardProps } from "@/types/home";

const HighlightCard = ({ currentData, tideData }: HighlightCardProps) => {
  const cardData = [
    {
      labelKo: "습도",
      labelEn: "Humidity",
      imgUrl: "src/assets/icons/Humidity.svg",
      value: currentData.current.humidity,
      unit: "%",
    },
    {
      labelKo: "기압",
      labelEn: "Pressure",
      imgUrl: "src/assets/icons/Wind.svg",
      value: currentData.current.pressure_mb,
      unit: "hPa",
    },
    {
      labelKo: "가시거리",
      labelEn: "Visibility",
      imgUrl: "src/assets/icons/Fog.svg",
      value: currentData.current.vis_km,
      unit: "km",
    },
    {
      labelKo: "체감온도",
      labelEn: "Fells Lick",
      imgUrl: "src/assets/icons/Hot.svg",
      value: currentData.current.feelslike_c,
      unit: "&#8451;",
    },
  ];

  if (!currentData || !tideData) {
    return <div>데이터를 블러오는 중입니다...</div>;
  }

  const tideTimesWithUnits = tideData.day.tides[0].tide.map((item: Tide) => {
    const [, hourString] = item.tide_time.split(" ");
    const [hour] = hourString.split(":").map(Number);
    const formattedUnit = hour < 12 ? "am" : "pm";

    return {
      displayTime: item.tide_time.split(" ")[1],
      unit: formattedUnit,
      type: item.tide_type,
    };
  });

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-xl">Today's Highlight</CardTitle>
        <CardDescription>
          오늘의 날씨 중 주의깊게 살펴보아야 할 이벤트를 조회하고 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex items-center justify-center gap-5">
          <HighlighBigDataCard
            labelKo={"해양 및 조수 데이터"}
            labelEn={"Marine and Sailing"}
            imgUrl={"src/assets/icons/Waves.png"}
          >
            <div className="w-full flex items-center justify-between">
              <div className="w-fit flex gap-4 items-center ml-4">
                {tideTimesWithUnits.map((tide, index) => (
                  <div className="flex flex-col items-center" key={index}>
                    <p className="text-sm text-muted-foreground">
                      {index + 1}회 {tide.type === "HIGH" ? "만조" : "간조"}
                    </p>
                    <p className="roboto-medium scroll-m-20 text-lg font-semibold tracking-tight">
                      {tide.displayTime}
                      <span className="ml-[1px]">{tide.unit}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </HighlighBigDataCard>

          <HighlighBigDataCard
            labelKo={"일출 / 일몰"}
            labelEn={"Sunrise and Sunset"}
          >
            <SunriseAndSunset
              imgUrl={"src/assets/icons/1000d.svg"}
              label={"Sunrise"}
              time={tideData.astro.sunrise}
            />
            <SunriseAndSunset
              imgUrl={"src/assets/icons/1000n.svg"}
              label={"Sunset"}
              time={tideData.astro.sunset}
            />
          </HighlighBigDataCard>
        </div>
        <div className="w-full grid grid-cols-4 gap-5">
          {cardData.map((data) => (
            <HighlightSmallDataCard
              key={data.labelKo}
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
