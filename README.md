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
cd hbk-1/client
npm install
cd ../server
npm install
```

### 2. 디비 설정
.env 파일 접근
```bash
cd bmart-3/server
```
.env 파일 열어서 DB정보 입력
```
DB_HOST= 디비 호스트IP
DB_USER= 디비 유저아이디
DB_PASSWORD= 디비 유저비밀번호
DB_NAME= 디비 이름
```

### 3. npm 명령어
서버 실행(server, client 디렉토리에서 각각 실행, 아래 명령어들도 동일)
```bash
npm start
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

# 🐱 디렉토리 구조


# 🐹 기능 소개


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
- [테이블 상세구조](https://github.com/woowa-techcamp-2020/bmart-3/wiki/DB-%ED%85%8C%EC%9D%B4%EB%B8%94-%EA%B5%AC%EC%A1%B0)
- [ERD](https://github.com/woowa-techcamp-2020/bmart-3/wiki/ERD)
- [회고록](https://github.com/woowa-techcamp-2020/bmart-3/wiki/%ED%9A%8C%EA%B3%A0%EB%A1%9D)