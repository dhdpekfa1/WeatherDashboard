import useKakaoLoader from "@/hooks/useKakaoLoader";
import { Header, TodayCard, HoourlyCard, MapCard } from "@/components";

const Home = () => {
  useKakaoLoader();

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <div className="w-full h-full flex flex-col items-flex justify-start py-6 px-6 bg-black">
          {/* 상단 3개 위젯 1:2:1 */}
          <div className="w-full flex items-center gap-6">
            <TodayCard />
            <HoourlyCard />
            <MapCard />
          </div>
          <div className="w-full flex items-center gap-6 bg-slate-500"></div>
          {/* 상단 2개 위젯 3:1 */}
          <div className="w-full flex items-center gap-6 bg-orange-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
