interface DayCardProps {
  highTemp: number;
  lowTemp: number;
  date: string;
  day: string;
  imgUrl: string;
}

const DayCard = ({ highTemp, lowTemp, date, day, imgUrl }: DayCardProps) => {
  return (
    <div className="w-full flex items-center gap-7 bg-neutral-50 py-0 px-3 rounded-sm">
      <div className="w-fit h-10 flex items-center gap-2">
        <img src={imgUrl} alt="" className="h-7 w-7" />
        <div className="flex items-center gap-1 w-20">
          {/* TODO: 2번 반복되는 날씨 부분 컴포넌트 분리 */}
          <div className="w-full h-full flex items-start gap-[2px]">
            <span className="roboto-medium scroll-m-20 text-lg font-semibold tracking-tight text-red-600">
              {highTemp}
            </span>
            <span className="text-xs font-normal mt-1">&#8451;</span>
          </div>
          <div className="w-full h-full flex items-start gap-[2px]">
            <span className="roboto-medium scroll-m-20 text-lg font-semibold tracking-tight text-sky-600">
              {lowTemp}
            </span>
            <span className="text-xs font-normal mt-1">&#8451;</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-end gap-5 mb-1">
        <small className="text-sm leading-none">{date}</small>
        <small className="text-sm leading-none">{day}요일</small>
      </div>
    </div>
  );
};

export { DayCard };
