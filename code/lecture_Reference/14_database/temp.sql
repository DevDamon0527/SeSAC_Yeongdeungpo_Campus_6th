-- DDL
-- (1), (3) 데이터베이스 목록 보기 
SHOW DATABASES; 

-- (2) 데이터베이스 생성 
-- kdt라는 데이터베이스를 생성
-- 기본 문자 세트를 UTF-8로 지정하고 
-- 정렬 방식은 utf8_unicode_ci로 생성하시오 
-- 참고: COLLATE이란 해당 문자셋을 어떻게 정렬할지를 결정하는 알고리즘
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- (3) 데이터베이스 선택(사용)
USE kdt;

-- (4), (6) (현재 사용 중인) 데이터베이스 내 테이블 목록 보기 
SHOW TABLES;

-- (5) (현재 사용 중인) 데이터베이스 내 테이블 생성하기 (구조 생성) 
-- 테이블 생성: 값을 저장할 공간을 데이터베이스에게 미리 말해주는 과정
-- 컬럼은 필요한 만큼 추가, VARCHAR은 문자열을 의미, 괄호 속 숫자는 글자 수
/*
CREATE TABLE 테이블명 (
	필드1 값형식,
	필드2 값형식 
);
*/
CREATE TABLE member (
	id VARCHAR(10) NOT NULL PRIMARY KEY,
	name VARCHAR(10) NOT NULL,
	birthday DATE NOT NULL 
);

-- (7) 생성한 테이블 구조 보기
DESC member;
