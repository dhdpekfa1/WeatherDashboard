import { Card, CardHeader, CardDescription, CardContent } from "@/components";
import { ReactNode } from "react";

interface HighlighBigDataCardProps {
  labelKo: string;
  labelEn: string;
  imgUrl?: string;
  children: ReactNode;
}

const HighlighBigDataCard = ({
  labelKo,
  labelEn,
  children,
  imgUrl,
}: HighlighBigDataCardProps) => {
  return (
    <Card className="w-full bg-neutral-100">
      <CardHeader>
        <CardDescription className="font-semibold text-neutral-700">
          {labelKo}
          <span className="text-neutral-400 font-normal ml-1">{labelEn}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex items-center justify-between">
        {imgUrl && <img src={imgUrl} alt="waves-icon" className="h-14" />}
        {children}
      </CardContent>
    </Card>
  );
};

export { HighlighBigDataCard };
