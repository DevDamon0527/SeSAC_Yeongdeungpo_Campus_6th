-- # database 심화
SHOW DATABASES;
USE kdt;
SHOW TABLES;

-- ################################################################################
-- [PK, FK 연결하기]
-- 1. 기본 키 제약 조건
-- 고객(Customer) 테이블의 기본키 설정
-- 기본 키 중복 불가능
-- NULL 불가능
DROP TABLE IF EXISTS customer;
CREATE TABLE customer (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);
DESC customer;

-- 고객(Customer) 테이블 데이터 추가 
INSERT INTO customer (id, name, birthday) VALUES ('aaa', '김이현', '1990-03-17');
INSERT INTO customer (id, name, birthday) VALUES ('bbb', '최지율', '1992-11-01');
INSERT INTO customer (id, name, birthday) VALUES ('ccc', '이혜진', '1993-05-31');

-- 고객(Customer) 테이블 정보 확인
SELECT * FROM customer;

-- 잠깐 테이블 삭제하는 순서!
-- 고객(Customer) 테이블과 주문(Orderlist) 테이블은 Customer.id 기준으로 연결됨
-- 즉, 고객(Customer) 테이블의 회원만 주문(Orderlist) 테이블에 들어갈 수 있음
-- 만약, 주문(Orderlist) 테이블이 있는데 고객(Customer) 테이블을 삭제(DROP)하면?
-- 주문(Orderlist) 테이블의 어떤 고객의 생일을 알고 싶어도 고객 테이블이 이미 삭제되어 알 수 없음.
-- PK-FK 관계로 연결된 테이블은 외래키가 설정된 테이블을 먼저 삭제해야 함.

-- 회원 테이블 (기본 키 테이블) -> (2) 나중 삭제
-- 구매 테이블 (왜래 키 테이블) -> (1) 먼저 삭제

-- ################################################################################
-- 2. 외래 키 제약 조건
-- 두 테이블 사이의 관계를 맺어줌
-- 다른 테이블의 기본 키를 외래 키로 연결함
-- 기본키 갖는 테이블: 기준 테이블
-- 외래키가 있는 테이블: 참조 테이블
-- 형식: FOREIGN KEY(열_이름) REFERENCES 기준_테이블(열_이름)

-- ON UPDATE CASCADE: 기준 테이블이 데이터가 변경되면 참조 테이블의 데이터도 변경됨
-- ON DELETE CASCADE: 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제됨
DROP TABLE IF EXISTS orderlist;
CREATE TABLE orderlist (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
	FOREIGN KEY (customer_id) REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- 고객(Orderlist) 테이블 데이터 추가 
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('aaa', '맥북m1', 1);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '빅파이', 31);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '키보드', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '초코파이', 5);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '귀여운텀블러', 1);

-- 고객(Orderlist) 테이블 정보 확인
SELECT * FROM orderlist;


-- #####################################################################
-- [JOIN, 조인]
-- : 두 테이블을 묶어서 하나의 테이블을 만듦 
-- 두 테이블을 엮어야 원하는 형태가 나오기도 하기 때문
-- ex.
-- Customer(아이디, 연락처) / Orderlist(상풍명) 정보가있을 때, 
-- 구매 확정시 회원에게 메세지를 보내려면 구매한 상품을 "누가" 샀으며, 그 사람의 "연락처"가 필요함
-- 즉, 하나의 큰 테이블에 (아이디, 연락처, 상품명)이 필요한 상황


-- 1. 내부 조인 (조인 = 내부조인)
-- 1-1. 일대다(one to many) 관계
-- (1) A 테이블에는 하나의 값만 존재
-- (2) B 테이블에는 여러 개의 값이 존재
-- ex. 한 회원(A)은 여러 개의 주문(B) 정보를 가질 수 있음. -> 즉, 회원은 한 명(one)이지만 구매를 여러 번 (many) 가능
-- 참고) 일대다 관계는 주로 PK-FK 관계로 이루어짐
-- ex. 한 부서(A)에는 여러 명의 사원(B)이 존재함
-- ex. 한 수업(A - KDT3기)에는 여러 명의 교육생(B)이 존재함
-- 추가) 3개 조인도 가능하지만 보통 2개의 테이블을 조인함
-- 참고) 내부 조인은 두 테이블에 모두 있는 내용만 출력됨
--    만약, 양쪽 중에 한 곳이라도 내용이 있을 때 조인하려면 외부 조인을 사용해야 함
--    외부조인은 자주 사용되지 않지만, 가끔 사용됨

/*
SELECT 열_목록
FROM tableA
	INNER JOIN tableB
    ON 조인_조건
[WHERE 검색_조건]
*/
-- JOIN 예약어로 쓰면 자동으로 INNER JOIN으로 인식됨

SELECT * FROM customer;
SELECT * FROM orderlist;

-- 유저아이디를 기준으로 customer와 orderlist 조인 (모든 컬럼에 대해 모든 행 보여주기) 
SELECT * 
FROM customer
	INNER JOIN orderlist
  ON customer.id = orderlist.customer_id;

-- 유저아이디를 기준으로 customer와 orderlist 조인 (모든 컬럼에 대해 where절 만족하는 행만 보여주기) 
SELECT *
FROM customer
	INNER JOIN orderlist
  ON customer.id = orderlist.customer_id
WHERE quantity >= 5;

-- 유저아이디를 기준으로 customer와 orderlist 조인 (특정 컬럼에 대해 모든 행 보여주기) 
SELECT orderlist.id, customer.id, customer.name, orderlist.product_name, orderlist.quantity
FROM customer
	INNER JOIN orderlist
  ON customer.id = orderlist.customer_id;

-- 유저아이디를 기준으로 customer와 orderlist 조인 (특정 컬럼에 이름에 별명을 붙여 모든 행 보여주기) 
SELECT orderlist.id as order_id, customer.id as user_id, customer.name, orderlist.product_name, orderlist.quantity
FROM customer
	INNER JOIN orderlist
  ON customer.id = orderlist.customer_id;

-- 유저아이디를 기준으로 customer와 orderlist 조인 (where절을 만족하는 특정 컬럼에 이름에 별명을 붙여 모든 행 보여주기) 
SELECT orderlist.id as order_id, customer.id as user_id, customer.name, orderlist.product_name, orderlist.quantity
FROM customer
	INNER JOIN orderlist
  ON customer.id = orderlist.customer_id
WHERE orderlist.id = 3;








