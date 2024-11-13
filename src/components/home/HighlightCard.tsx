import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  SunriseAndSunset,
} from "@/components";

const HighlightCard = () => {
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
          <Card className="w-full bg-neutral-100">
            <CardHeader>
              <CardDescription className="font-semibold text-neutral-700">
                해양 및 조수 데이터
                <span className="text-neutral-400 font-normal ml-1">
                  Marine and Sailing
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full flex items-center justify-between">
              <img
                src="src/assets/icons/Waves.png"
                alt="waves-icon"
                className="h-14"
              />
              <div className="w-fit grid grid-cols-4 gap-3">
                {/* TODO: 해양 데이터 컴포넌트 분리 */}
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
            </CardContent>
          </Card>
          <Card className="w-full bg-neutral-100">
            <CardHeader>
              <CardDescription className="font-semibold text-neutral-700">
                일출 / 일몰
                <span className="text-neutral-400 font-normal ml-1">
                  Sunrise and Sunset
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2">
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
            </CardContent>
          </Card>
        </div>
        <div></div>
      </CardContent>
    </Card>
  );
};

export { HighlightCard };
