import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  HourlyCardItem,
} from "@/components";

const HourlyCard = () => {
  return (
    <Card className="flex-1 max-w-[calc(50%-48px)] h-full">
      <CardHeader>
        <CardTitle className="text-xl">Hourly</CardTitle>
        <CardDescription>
          오늘의 시간대별 날씨를 조회하고 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex items-center gap-4 overflow-x-scroll">
        {/* TODO: CardItem 시간대 별 map() */}
        <HourlyCardItem time="오후 1시" temperature={12} />
        <HourlyCardItem time="오후 2시" temperature={13} />
        <HourlyCardItem time="오후 3시" temperature={13} />
        <HourlyCardItem time="오후 4시" temperature={13} />
        <HourlyCardItem time="오후 5시" temperature={10} />
        <HourlyCardItem time="오후 6시" temperature={9} />
      </CardContent>
    </Card>
  );
};

export { HourlyCard };
