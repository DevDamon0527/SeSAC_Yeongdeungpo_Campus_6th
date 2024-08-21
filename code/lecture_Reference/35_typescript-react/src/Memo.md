React 프로젝트에서 TS 사용
-- TS 패키지 설치
**npx create-react-app my-app --template typescript**

-- 기존 프로젝트에 TS 추가 하려면
**npm install typescript @types/react @types/react-dom**
@types/node @types/jest

-- 확장자명
.ts / .tsx 사용
.tsx = JSX를 포함.

-- Todo 코드 작성 순서 --

1. types.ts: 타입 정의
2. TodoItem.tsx: 개별 투두 아이템 컴포넌트
3. TodoList.tsx: 전체 투두 리스트 컴포넌트
