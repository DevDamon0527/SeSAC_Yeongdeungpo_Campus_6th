-- https://victorydntmd.tistory.com/136

-- [개념 정리]
-- 데이터 베이스: 데이터의 집합
-- DBMS: 데이터베이스를 운영/관리하는 프로그램 (ex. MySQL)
-- 테이블: 데이터베이스의 최소단위, 하나 이상의 열과 행으로 구성
-- SQL: 데이터베이스를 구축, 관리하고 활용하기 위해 사용하는 언어 (RDBMS에서 사용되는 언어)
-- 참고) 스키마(schema) = 데이터베이스

-- #####################################################################
-- DDL
-- Data Definiton Language: 데이터베이스/테이블 정의

-- [Database 관련 명령어]
-- 1. database 생성
CREATE DATABASE kdt;
create database codingon default character set utf8 collate utf8_general_ci;
/*
  "DB_NAME"이라는 데이터베이스를 생성하는데, 문자열 셋으로 utf8을, 콜레이션으로 utf8_general_ci를 사용합니다. 
  utf8 문자열 셋은 기본적으로 다양한 유니코드 문자를 지원하지만, 일부 특수한 유니코드 문자들은 저장할 수 없을 수 있습니다. 
  utf8_general_ci 콜레이션은 문자 정렬과 비교에 일반적으로 사용되는데, 이 콜레이션은 대소문자를 구분하지 않고 일반적인 비교 규칙을 사용합니다.
*/
CREATE DATABASE mydatabase CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
/*
  이 명령어는 "mydatabase"라는 데이터베이스를 생성하는데, 문자열 셋으로 utf8mb4를, 콜레이션으로 utf8mb4_unicode_ci를 사용합니다. 
  utf8mb4 문자열 셋은 utf8에 비해 더 많은 유니코드 문자를 지원하며, 특히 이모티콘과 일부 특수 문자를 포함합니다. 
  utf8mb4_unicode_ci 콜레이션은 문자 정렬과 비교에 있어서 더 정확한 비교 규칙을 적용합니다.
  => 두 번째 명령어가 더 많은 유니코드 문자를 지원하며 문자열 비교에 더 정확한 규칙을 적용하는 것으로 보입니다. 
  따라서 특히 다국어 지원이 필요하거나 이모티콘 등의 특수 문자를 다루어야 할 경우에는 두 번째 명령어를 사용하는 것이 더 좋을 수 있습니다.
*/
-- 2. 데이터베이스 생성 확인 (목록 조회)
SHOW DATABASES;

-- 3. 데이터베이스 사용 선언
USE kdt;

-- 4. 데이터베이스 삭제
DROP DATABASE kdt;

-- #####################################################################
-- [테이블 관련 명령어]
-- 1. 테이블 생성
/*
CREATE TABLE 테이블명 (
    필드1 값형식,
    필드2 값형식
)
*/
-- 제약조건
-- NOT NULL: NULL 허용 x
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본키! (중복 허용 x, null 값 허용 x)
--    PK 설정된 열에는 NULL 값이 있을 수 없으므로 생략하면 자동 NOT NULL 설정되긴 함
-- DEFAULT: 기본 값
-- UNIQUE: 중복 허용 x, null 값 허용, 한 테이블에 여러 개 설정 가능
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  model_number VARCHAR(15) NOT NULL,
  series VARCHAR(30) NOT NULL
);

-- 2. 테이블 목록 확인
-- 현재 사용중인 databse의 모든 테이블 조회 
SHOW TABLES; 

-- 3. 테이블 구조 확인
-- products 테이블의 컬럼 정보 확인
DESC products;

-- 4. 테이블 삭제
-- 테이블 존재 자체를 없앰
DROP TABLE products; 
-- 테이블 구조만 남겨놓고 모든 행 삭제
TRUNCATE TABLE products; 

-- 5. 테이블 정의 수정
-- 이미 테이블에 데이터가 추가되었는데,컬럼 정보가 바뀌어야 하는 경우 사용함
-- 5-1. 컬럼 추가
-- : 기존 데이터는 new_column이 갑자기 생겼으므로 null 할당됨
ALTER TABLE products ADD new_column VARCHAR(20);
-- 5-2. 컬럼 타입 수정
-- : VARCHAR(20) -> INT 로 수정
ALTER TABLE products MODIFY new_column INT;
-- (생략) 컬럼명 수정
-- : new_column -> newnew_column VARCHAR(50)으로 컬럼명 변경
-- ALTER TABLE products CHANGE new_column newnew_column VARCHAR(50);
-- 5-3. 컬럼 삭제 
ALTER TABLE products DROP newnew_column;

-- #####################################################################
-- DML
-- Data Mainpulation Language: 데이터 조작어
-- 내부 데이터를 관리하기 위한 언어 

-- DML 연습을 위한 user TABLE 생성
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);
DESC user;
DROP TABLE user;

-- [Create - INSERT]
-- : 데이터 추가
-- 참고) AUTO_INCREMENT 컬럼의 값은 NULL 넣으면 알아서 하나씩 증가함
-- 주의) 단, AUTO_INCREMENT 지정하는 열은 반드시 PK 지정되어야 함  
INSERT INTO user (name, age, address) VALUES ('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES ('이지수', 30, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES ('최솔이', 22, '대구광역시 동구');
INSERT INTO user (name, age, address) VALUES ('한소희', 25, '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUES ('정세희', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES ('이한이', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('이지은', 32, '부산광역시 동구 ');
INSERT INTO user (name, age, address) VALUES ('윤세희', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES ('박수진', 26, '충청남도 공주시');
INSERT INTO user (name, age, address) VALUES ('박찬희', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('권희수', 36, '서울특별시 영등포구');

-- [Read - SELECT]
-- : 데이터 조회(읽기)
-- * : all
-- 참고) select 문에서 조건 순서
-- select > from > whrere > group by > having > order by > limit
SELECT * FROM user;  -- 전체 컬럼 조회
SELECT name FROM user; -- 이름 컬럼만 조회
SELECT age, name FROM user; -- 나이, 이름 컬럼 조회 
SELECT id, address FROM user; -- id, 주소 컬럼 조회

-- where 절: 특정 조건 걸기
SELECT * FROM user WHERE age >= 25; 
SELECT * FROM user WHERE id = 7; 
SELECT name FROM user WHERE id = 7; 
SELECT id, age FROM user WHERE name='이지은';

-- ORDER BY절: 데이터 정렬
-- DESC: 내림차순
-- ACS: 오름차순 (기본값)
SELECT * FROM user ORDER BY age DESC;
SELECT * FROM user WHERE id > 6 ORDER BY age ASC;

-- LIKE: 패턴 조회
SELECT * FROM user WHERE address LIKE '서울%'; -- '서울'로 시작하는 주소값 찾음
SELECT * FROM user WHERE name LIKE '__희'; -- 마지막 글자가 '희' 인 사람
SELECT * FROM user WHERE name LIKE '%희%'; -- 이름에 '희'가 들어가는 사람
SELECT * FROM user WHERE address LIKE '%광역%'; -- 주소에 '광역' 들어가는 사람
SELECT * FROM user WHERE name LIKE '__희' ORDER BY age DESC; -- 마지막 글자가 '희' 인 사람들 나이 내림차순

-- LIMIT: 데이터 개수 제한
SELECT * FROM user LIMIT 3;
SELECT * FROM user WHERE address LIKE '서울%' LIMIT 2;

-- BETWEEN a AND b: 사이값 조회
SELECT * FROM user WHERE age BETWEEN 25 AND 30;

-- IN (list): 리스트 있는 것중에 일치하면 참
SELECT * FROM user WHERE age IN (20, 21, 22, 23);

-- IS NULL
-- IS NOT NULL
-- NULL 값을 갖는 튜플(행) 추가 (address에 null 추가)
INSERT INTO user (name, age) VALUES ('서현승', 28);
SELECT * FROM user;

SELECT * FROM user WHERE address IS NULL;
SELECT * FROM user WHERE address IS NOT NULL;

-- 논리연산자: AND, OR, NOT
SELECT * FROM user WHERE address IS NOT NULL AND age < 25;
SELECT * FROM user WHERE name like '이%' AND age = 23; -- 이씨이자 나이 23인 사람


-- [Update - UPDATE]
-- : 데이터 갱신
-- 참고) Error Code: 1175.
-- 테이블을 update나 delete 하려고 할 떄 key 컬럼을 이용한 수정/삭제만 가능하도록 설정되어 있어
-- key가 아닌 컬럼을 이용하여 수정/삭제할 경우, 해당 오류 발생
SELECT * FROM user;
UPDATE user SET address = '서욱특별시 강북구' WHERE id = 1;
-- mysql에서는 set 내부가 한 번에 업데이트가 되는 것이 아니라 순차적으로 업데이트함
-- where 미사용시 모든 행의 데이터가 변경되니 주의 (즉, update에서는 where가 항상 따라다닌다)
UPDATE user SET address = '제주특별자치도 제주시', name = '이지현' WHERE id = 2; 


-- [Delete - DELETE]
-- : 데이터 삭제
-- where 미사용시 모든 행의 데이터가 변경되니 주의 (즉, delete에서는 where가 항상 따라다닌다)
SELECT * FROM user;
DELETE FROM user WHERE id = 11;
DELETE FROM user WHERE id > 8;


-- #####################################################################
-- DCL
-- Data Control Language: 데이터 제어어
-- 데이터베이스 관리 목적으로 보안, 무결성, 회복, 병행제어 등을 정의하는 언어
-- 데이터베이스에 접근해 읽거나 쓰는 것을 제한할 수 있는 권한 부여/박탈

-- GRANT: 특정 데이터베이스 사용자에게 특정 작업에 대한 수행 "권한 부여"
-- REVOKE: 특정 데이터베이스 사용자에게 특정 작업에 대한 "권한 박탈" 

