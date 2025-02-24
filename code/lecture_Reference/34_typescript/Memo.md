1. TypeScript 설치 (전역 설치를 희망한다면 –g 옵션)

    # npm install typescript (Mac : sudo npm install typescript)

    # npm i **-g** typeSciprt

2. 설치가 잘 되었는지 version 확인

    # npx tsc -v

3. tsconfig 파일 생성 (기본 tsconfig.json 파일을 생성)

    # npx tsc --init

    TypeScript의 설정 파일
    이 파일은 TypeScript 컴파일러의 동작 방식을 설정

    - 프로젝트 규모가 커질 때
    - 여러 개발자가 협업할 때
    - 다중 파일을 효율적으로 관리할 때
    - 빌드 환경을 자동화하고 싶을 때 (예: CI/CD)

4. ts 파일을 만들고 js로 변환하고 싶을 때

    # npx tsc 파일이름.ts

    실제 사용은 변환된 js 파일을 사용하면 됩니다. **(node 파일이름.js)**

5. ts 파일을 일일이 변환한 후에, js 파일을 실행하는게 귀찮아요!
   ts-node 모듈 설치
   **npm install ts-node**
   package.json 에 ts-node 모듈이 잘 설치되어있는지 확인하기

    실행은
    **npx ts-node 파일이름.ts**
