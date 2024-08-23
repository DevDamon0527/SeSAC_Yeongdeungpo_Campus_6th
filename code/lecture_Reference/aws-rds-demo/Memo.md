select \* from mysql.user;

-- ========================================
-- user 계정 생성하기

-- mysql_native_password: mysql 비밀번호 암호화 방식 중 하나
CREATE USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

-- user 계정에 모든 권한 부여
GRANT ALL PRIVILEGES ON _._ TO 'user'@'%' WITH GRANT OPTION;

-- 현재 사용중인 mysql 캐시 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

-- 생성된 계정 확인
SELECT host, user from mysql.user;
