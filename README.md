# Triple CodeTest : 카운트업 애니메이션 구현
<br />

## 개요
- 기간 : 3.30(화) ~ 4.6(화)
- 주제 : Triple 홈페이지 메인 섹션 숫자 카운트업, 컴포넌트 Fade-Up 애니메이션 구현
- 기술스택 : HTML/CSS, Javascript(ES6), React, React-Router, Styled-Components, Typescript
<br />

## 요구사항
### Requirements
- 트리플 홈페이지 의 한 섹션을 홈페이지와 동일하게 구현한다.
- React를 이용하여 개발한다. React 외의 개발 스택은 자유롭게 구성한다.
- Google Chrome 최신 버전에서 동작하도록 구현한다.
- 최소 화면폭은 1200px, 반응형 레이아웃은 고려하지 않는다.

### Specification
- 350만 명의 사용자, 21만 개의 리뷰, 650만 개의 저장 등 문구에서 숫자는 0부터 증가합니다.
- 좌측 이미지 --> 사용자, 리뷰, 저장 문구 --> 수상 내역 순으로 화면에 보여집니다.
- 모든 애니메이션의 duration은 700ms이고, 3개의 애니메이션은 100ms 간격으로 차례로 시작합니다.
<br />

## 구현내용
1. `<SectionAchieve>` : 트리플 메인 페이지 실적 및 수상경력 섹션 UI 구현
2. Styled-Components 적용 : CSS-in-JS 패턴, 공통속성 분류(화면폭 1200px, 폰트색, fadeUp 애니메이션 등)
3. Fade-Up 애니메이션 : 공통 애니메이션에 700ms duration 적용, props(aniDelay) 를 통해 지연시간(100ms, 200ms) 설정
4. 컴포넌트 재활용 : 반복요소(`<CounterNum>` 카운트업 숫자, `<AwardsItem>` 수상내용) 해당, 배열 데이터 맵핑 및 props 하달
5. CountUp 로직구현 : 0부터 max값(props)까지 1씩 인터벌 증가, stepTime은 (전체시간 / max) 로 모든 증가가 동일하게 마무리
6. CountUp Delay 로직추가 : stepTime을 지수증가(Math.pow())하여, 뒤로 갈수록 증가속도가 느려짐
7. Typescript 변환 : jsx => tsx 변환, tsconfig 추가, type/interface 추가, 타입 설정<br />
    => _"타입스크립트는 1주일 학습내용 기반으로 연습삼아 적용해보았습니다. 아직 사용하는게 다소 어색한 것 같습니다."_
