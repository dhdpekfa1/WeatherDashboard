import {
  Header,
  TodayCard,
  HourlyCard,
  KakaoMapCard,
  HighlightCard,
  // Card,
  // CardHeader,
  // CardTitle,
  // CardDescription,
  // CardContent,
} from "@/components";

const Home = () => {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <div className="w-full h-full flex flex-col items-flex justify-start gap-6 py-6 px-6 bg-black">
          {/* 상단 3개 위젯 1:2:1 */}
          <div className="w-full flex items-center gap-6">
            <TodayCard />
            <HourlyCard />
            <KakaoMapCard />
          </div>
          {/* 하단 2개 위젯 3:1 */}
          <div className="w-full flex items-center gap-6">
            <HighlightCard />
            {/* <Card className="flex-1 max-w-[calc(50%-48px)] h-full">
              <CardHeader>
                <CardTitle className="text-xl">7 Day's</CardTitle>
                <CardDescription>
                  이번 주 날씨를 조회하고 있습니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex items-center gap-4 overflow-x-scroll"></CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
