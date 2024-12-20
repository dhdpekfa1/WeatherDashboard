// import { useState } from "react";
import useKakaoLoader from "@/hooks/useKakaoLoader";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Card } from "@/components";

const KakaoMapCard = () => {
  // const [cityName, setCityName] = useState("seoul");

  useKakaoLoader();

  const positions = [
    {
      cityName: "seoul",
      latlng: { lat: 37.5683, lng: 126.9778 },
    },
    {
      cityName: "incheon",
      latlng: { lat: 37.4562557, lng: 126.7052062 },
    },
    {
      cityName: "gwangju",
      latlng: { lat: 35.1599785, lng: 126.8513072 },
    },
    {
      cityName: "daejeon",
      latlng: { lat: 36.3504567, lng: 127.3848187 },
    },
    {
      cityName: "cheongju",
      latlng: { lat: 36.6358093, lng: 127.4913338 },
    },
    {
      cityName: "daegu",
      latlng: { lat: 35.8715411, lng: 128.601505 },
    },
    {
      cityName: "ulsan",
      latlng: { lat: 35.5396224, lng: 129.3115276 },
    },
    {
      cityName: "busan",
      latlng: { lat: 35.179665, lng: 129.0747635 },
    },
  ];

  return (
    <Card className="w-1/4 min-w-[25%] h-full">
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 37.5683,
          lng: 126.9778,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100%",
          borderRadius: "8px",
        }}
        level={12} // 지도의 확대 레벨
      >
        {positions.map((position) => (
          <MapMarker
            key={`${position.cityName}-${position.latlng}`}
            position={position.latlng}
            image={{
              src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
              size: {
                width: 24,
                height: 35,
              },
            }}
            title={position.cityName}
            clickable={true}
            onClick={(marker) => console.log(marker.getTitle())}
            // onClick={(marker) => setCityName(marker.getTitle())}
          />
        ))}
      </Map>
    </Card>
  );
};

export { KakaoMapCard };
