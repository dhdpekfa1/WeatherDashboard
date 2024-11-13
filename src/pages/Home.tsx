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
  // SunriseAndSunset,
} from "@/components";

const Home = () => {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <div className="w-full h-full flex flex-col items-flex justify-start py-6 px-6 bg-black">
          {/* 상단 3개 위젯 1:2:1 */}
          <div className="w-full flex items-center gap-6">
            <TodayCard />
            <HourlyCard />
            <KakaoMapCard />
          </div>
          {/* 하단 2개 위젯 3:1 */}
          <div className="w-full flex items-center gap-6">
            <HighlightCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
