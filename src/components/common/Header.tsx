import { SearchBar } from "@/components";

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center p-6 gap-6">
      <div className="w-1/2 flex items-center justify-start gap-6">
        {/* logo */}
        <div className="h-full flex items-center justify-center gap-2">
          <img src="" alt="logo" className="h-10" />
          <h3 className="roboto-bold scroll-m-20 text-2xl font-semibold tracking-tight">
            Weather.io
          </h3>
        </div>
        {/* search input */}
        <div className="flex-1">
          <SearchBar placeholder="검색할 지역 이름을 영어로 입력하세요." />
        </div>
      </div>
    </header>
  );
};

export { Header };
