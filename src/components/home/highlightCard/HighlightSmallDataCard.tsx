import { Card, CardHeader, CardDescription, CardContent } from "@/components";
import { HighlightSmallDataCardProps } from "@/types/home";

const HighlightSmallDataCard = ({
  labelKo,
  labelEn,
  imgUrl,
  value,
  unit,
}: HighlightSmallDataCardProps) => {
  return (
    <Card className="w-full h-fit bg-neutral-50">
      <CardHeader>
        <CardDescription className="font-semibold text-neutral-700">
          {labelKo}
          <span className="text-neutral-400 font-normal ml-1">{labelEn}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <img src={imgUrl} alt="icon" className="w-10 h-10" />
        <p className="roboto-medium scroll-m-20 text-3xl font-semibold tracking-tight">
          {value}
          {unit.includes("&#") ? (
            <span
              className="text-lg ml-1 align-text-top"
              dangerouslySetInnerHTML={{ __html: unit }}
            />
          ) : (
            <span className="text-lg ml-1">{unit}</span>
          )}
        </p>
      </CardContent>
    </Card>
  );
};

export { HighlightSmallDataCard };
