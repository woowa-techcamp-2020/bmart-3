## 👻이 프로젝트를 보시는 분들을 위한 설명!
- 우아한테크캠프는 페어 프로그래밍 형식으로 프로젝트를 진행합니다. 이 프로젝트는 3명이 3주 동안 진행한 프로젝트입니다. 저는 `주로 메인 페이지 구현`을 담당했습니다.
- 주어진 프로젝트에는 `주어진 기술만 사용`할 수 있습니다. 이 프로젝트는 `GraphQL, styled-components, apollo, context api를 필수 기술조건`으로 받아 사용했습니다. 
- 3주 동안 처음 사용하는 기술이 많아 각자 새로운 기술 중 하나씩을 정해서 프로젝트에 적용해보고 서로 사용방법과 공부한 내용을 공유하는 방식으로 빠르게 기술을 도입했습니다.
- 각자 맡은 페이지에 따라서 역할을 분담했는데 검색부분을 담당한 멤버도 있고 graphQL을 처음 도입하여 세팅을 해준 멤버도 있습니다. 저는 기술조건 중에는 styled-components와 apollo를 도입하는 역할을 맡았고 graphQL 세팅을 담당한 팀원이 만든 API들을 프론트로 가져와 데이터를 뿌리고 새로운 데이터를 API로 서버로 요청을 보내는 부분을 도입했고 쓰로틀링을 이용하여 무한 스크롤을 구현했습니다. 

### 기존 페이지 개선점
- 기존 페이지는 서로 다른 이벤트영역 (반짝할인,깜짝세일 등)으로 쭉쭉 내리는 방식으로 구현되어 있었습니다. 이전 영역을 보기 위해서는 다시 위로 해당 영역까지 스크롤해 이동해야되는 
  불편함이 있었습니다.
- 이에 상단에 탭 버튼이 있는 플로팅 스크롤탭을 도입했습니다. 스크롤을 하다가도 특정 영역의 탭을 클릭하면 해당 위치로 이동이 되고 탭에서도 여러 영역 중에 현재 해당하는 영역이 어디인지를 다른 스타일을 입혀서 표시해주는 방식으로 기존 페이지 UI를 개선해보았습니다.
 
 
### 이 프로젝트를 통해 배운점 & 문제 해결
- 처음으로 graphQL과 styled-components, context api를 사용해보았습니다.
- 리액트를 제대로 공부하지 않은 상태에서 도입하여 기본적인 hooks만 사용했습니다. 코드 리뷰시에 customHooks등을 사용하라는 피드백을 받아 개인 toy프로젝트에 공부하여 적용했습니다.
- 메인페이지에서 무한 스크롤을 구현할 때 추가 데이터를 요청하는 것을 scroll이벤트에 붙였다가 한 번에 수많은 api 요청이 날아가 too many connections에러를 내며 서버가 뻗는 문제가 있었습니다. 이에 현재 데이터를 불러오고 있는 상태인지를 나타내는 fetching이라는 state를 사용하여 또 다른 data fetching 요청을 막았습니다. 그 때는 하나의 데이터 요청이 끝나지 않으면 추가적인 데이터 요청을 막기위해 도입했던 것인데, 추후 이것이 쓰로틀링이라는 것을 알게되었습니다. 쓰로틀링과 함께 디바운싱이라는 것을 알게되었는데, 다른 팀원이 개발한 검색 컴포넌트에 디바운싱도 적용해볼 수 있다는 것을 알게되었습니다.
- 각 컴포넌트에 스타일과 데이터를 불러오는 로직과 조작하는 로직이 한데 뒤섞여 있어 오류나 수정이 필요할 때 해당하는 부분을 찾기가 힘들어 유지보수가 힘든 부분이 있었습니다. 이 프로젝트에서는 각 페이지별로 그리고 한 페이지 안에서는 UI 단위로 컴포넌트를 나눴는데 좀 더 역할 구분이 필요한 구조를 생각해야된다고 생각했습니다. 추후에 개발한 [whowants](https://github.com/ozirapsu-web-server/whowants-web) 프로젝트에서는 새로운 구조를 도입하여 개발해보았습니다. 
  

---

# 🐼 프로젝트 개요
- 우아한 테크캠프의 마지막 프로젝트인 Bmart 서비스 입니다!

# 🦁 팀 멤버
- 조현욱
- 임학수
- 최해랑

# 🐯 환경설정 및 실행 방법
### 1. 깃 클론 및 모듈 설치
```bash
git clone https://github.com/woowa-techcamp-2020/bmart-3
cd bmart-3/client
npm install
cd ../server
npm install
```

### 2. 디비 설정
.env 파일 접근
프론트엔드  
```bash
cd bmart-3/client
```
sample.env 파일을 현재 경로에 복사하고 .env 파일로 이름 변경 후 환경변수 설정
```
REACT_APP_API_HOST=http://localhost
REACT_APP_API_PORT= API 포트번호
REACT_APP_PUBLIC_URI= http://'퍼블릭 ec2 주소' 
REACT_APP_GOOGLE_LOGIN_CLIENT_ID= 구글 Oauth client ID
```
백엔드
```bash
cd bmart-3/docker/development
```
sample.env 파일을 현재 경로에 복사하고 .env 파일로 이름 변경 후 DB정보 입력
```
#DB_HOST 수정 금지
DB_HOST=db
DB_ROOT_PASSWORD= mysql root 계정 비밀번호
DB_PORT= mysql 포트
DB_USER= mysql 계정
DB_PASSWORD= mysql 비밀번호
DB_DATABASE= 데이터베이스 이름
PORT=80
```
초기 데이터 삽입
```
bmart-3/docker/mysql/ 폴더의 1,2,3번 쿼리 실행( ❗️한글입력이 가능한 라이브러리, 툴을 사용 )
```

### 3. 서버(백엔드, 프론트엔드) 실행 명령어
```bash
cd bmart-3/docker/development
./start.sh
```

# 🐶 사용 기술 스택(추가 중)
**프론트엔드**
- ![title](https://img.shields.io/badge/-Vanila_javascript-77216F?&logo=javascript&logoColor=white)
- ![title](https://img.shields.io/badge/-React-00CAFF?&logo=React&logoColor=white)
- ![title](https://img.shields.io/badge/-HTML5-E8E8E8?&logo=html5&logoColor=white)

**백엔드**
- ![title](https://img.shields.io/badge/-Node.js-339933?&logo=Node.js&logoColor=white)
- ![title](https://img.shields.io/badge/-Express-00ED00?&logo=Node.js&logoColor=white)
- ![title](https://img.shields.io/badge/-MySQL-4479A1?&logo=MySQL&logoColor=white)
- ![title](https://img.shields.io/badge/-Passport-45B6F2?&logo=LogMein&logoColor=white)

**배포**
- ![title](https://img.shields.io/badge/-EC2-232F3E?&logo=Amazon-AWS&logoColor=white)
- ![title](https://img.shields.io/badge/-S3-13FF3D?&logo=Amazon-S3&logoColor=white)

**크롤링**
- 

# 🌹 기획서 

[https://docs.google.com/presentation/d/1Gpiz_4jD_yiq9a-ML7j73ceZXoYINcdev6DNCGnBqw4/edit#slide=id.p](https://docs.google.com/presentation/d/1Gpiz_4jD_yiq9a-ML7j73ceZXoYINcdev6DNCGnBqw4/edit#slide=id.p)


# 🐹 기능 소개
<img src="https://user-images.githubusercontent.com/24838124/91518834-092d0680-e92c-11ea-9c0b-18bc5a2f76ad.gif" alt="drawing" width="220" /><img src="https://user-images.githubusercontent.com/24838124/91518849-0fbb7e00-e92c-11ea-80b6-88cba9fd846b.gif" alt="drawing" width="220" /><img src="https://user-images.githubusercontent.com/24838124/91519018-717be800-e92c-11ea-91d1-7bcb347677b7.gif" alt="drawing" width="220" /><img src="https://user-images.githubusercontent.com/24838124/91519033-78a2f600-e92c-11ea-815e-cda5d87a6c4d.gif" alt="drawing" width="220" />

# 🐵 팀 룰

### 🐤 그라운드 룰

- 아침에 18층에서 먹으면서 스크럼 하기
- 의견이 있으면 주저하지 않고 즉시 말할 것
- 과자는 항상 보충해 놓을것
- 서로의 의견에 대해서는 항상 넓은 시야를 가질 것
- develop브랜치의 코드에 대해서는 팀원 모두 구조를 숙지할 것
- 가능하면 개개인이 프론트,백,db를 모두 경험해볼 것



### 🐦 스타일 가이드

- 커밋 스타일 가이드는 https://siyoon210.tistory.com/56에 이슈번호를 추가하는 방식을 사용

  ex) feat: #5 로그인 기본 레이아웃 구현

- 브랜치 네이밍은 https://dev.to/couchcamote/git-branching-name-convention-cch 에 프론트 백엔드 여부를 추가한 양식 사용

  Ex) feature/front-header, fix/back-loginAPI

- 변수 네이밍은 다음과 같다.

  1. 클래스명은 PascalCase

  2. 변수, 함수는 camelCase

  3. 상수는 대문자 SNAKE_CASE

  4. html tag classname은 -를 구분자로 사용하며 태그가 div가 아니라면 가장 마지막에 태그네임을 기재

     Ex) calendar-wrapper, login-signup-button

  5. 폴더 및 파일이름은 front는 camelCase를 사용하고 back은 kebab-case를 사용



### 🐧 협업 가이드라인

- 깃헙의 develop 브랜치에 merge할 때 팀원들과 코드리뷰 하기 > 최종본(develop)에 있는 코드는 팀원 모두가 제대로 이해할 것
- develop에 대한 merge는 팀원 전부의 코멘트를 받은 후에 merge하기
- 전체적인 UI, 구조, 기능은 함께 페어프로그래밍 하기. 이후에 세부기능은 분업하기


# 🐻 프로젝트 산출물
- [투두리스트](https://github.com/woowa-techcamp-2020/bmart-3/wiki/%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8)
- [테이블 상세구조](https://github.com/woowa-techcamp-2020/bmart-3/wiki/DB-%ED%85%8C%EC%9D%B4%EB%B8%94-%EA%B5%AC%EC%A1%B0)
- [ERD](https://github.com/woowa-techcamp-2020/bmart-3/wiki/ERD)
- [회고록](https://github.com/woowa-techcamp-2020/bmart-3/wiki/%ED%9A%8C%EA%B3%A0%EB%A1%9D)
