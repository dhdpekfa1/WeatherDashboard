## 날씨 오픈 API를 활용한 대시보드 만들기

0. shadcn.ui, google-font 사용
1. Tailwind CSS 설치 :

- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`

2. 리액트 라우터 설치: `npm install react-router-dom`
3. SASS/SCSS 라이브러리 설치: `npm install -D sass-embedded`
4. KakaoMap API SDK 설치: `npm install react-kakao-maps-sdk`

- 참고 문서 `https://react-kakao-maps-sdk.jaeseokim.dev`

- `component/index.ts` file 생성 후 ui의 `export` 부분 전체 경로 설정 -> 이후 컴포넌트를 하나의 경로(`@/component`)에서 import
