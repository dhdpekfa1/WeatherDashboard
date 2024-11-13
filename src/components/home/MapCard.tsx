import { Map } from "react-kakao-maps-sdk";
import { Card } from "@/components";

const MapCard = () => {
  return (
    <Card className="w-1/4 min-w-[25%] h-full">
      <Map
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 37.5683,
          lng: 126.9778,
        }}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "8px",
        }}
        level={3} // 지도의 확대 레벨
      />
    </Card>
  );
};

export { MapCard };
