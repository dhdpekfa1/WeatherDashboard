import { Header } from "@/components";

const Home = () => {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <div className="w-full h-full">
          {/* 상단 3개 위젯 1 2 1 */}
          <div className="w-full flex items-center gap-6 bg-slate-500"></div>
          {/* 상단 2개 위젯 3 1 */}
          <div className="w-full flex items-center gap-6 bg-orange-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
