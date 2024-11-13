import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components";

const DaysCard = () => {
  return (
    <Card className="w-1/4">
      <CardHeader>
        <CardTitle className="text-xl">7 Days</CardTitle>
        <CardDescription>이번 주 날씨를 조회하고 있습니다.</CardDescription>
      </CardHeader>
      <CardContent className="w-full flex flex-col items-center gap-1">
        {/* 7일 - 컴포넌트로 분리 */}
        <div className="w-full flex items-center gap-7 bg-neutral-50 py-0 px-3 rounded-sm">
          <div className="w-fit h-10 flex items-center gap-2">
            <img src="src/assets/icons/1000d.svg" alt="" className="h-7 w-7" />
            <div className="flex items-center gap-1 w-20">
              {/* TODO: 2번 반복되는 날씨 부분 컴포넌트 분리 */}
              <div className="w-full h-full flex items-start gap-[2px]">
                <span className="roboto-medium scroll-m-20 text-lg font-semibold tracking-tight text-red-600">
                  20
                </span>
                <span className="text-xs font-normal mt-1">&#8451;</span>
              </div>
              <div className="w-full h-full flex items-start gap-[2px]">
                <span className="roboto-medium scroll-m-20 text-lg font-semibold tracking-tight text-sky-600">
                  10
                </span>
                <span className="text-xs font-normal mt-1">&#8451;</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-end gap-5 mb-1">
            <small className="text-sm leading-none">03 Nov</small>
            <small className="text-sm leading-none">일요일</small>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { DaysCard };
