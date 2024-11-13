import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

const useKakaoLoader = () => {
  useKakaoLoaderOrigin({
    appkey: "041a27ee4f8a585c8e36a8e917f162ae",
    libraries: ["clusterer", "drawing", "services"],
  });
};

export default useKakaoLoader;
