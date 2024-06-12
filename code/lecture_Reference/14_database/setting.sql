-- mysql 실행하기
-- 1. Windows
-- mysql 설치된 경로로 이동
cd "C:\Program Files\MySQL\MySQL Server 8.0\bin" # 경로에 공백있으면 따옴표로 감싸기 (otherwise, too many arguments-- 사용자명 root, 비밀번호 사용해 mysql 접속 
-- 사용자명 root 비밀번호 사용해 mysql 접속
mysql -u root -p # cmd, powershell
winpty mysql -u root -p # gitbash (otherwise, 접속되는 것처럼 보이나 반응 없음)
-- mysql 종료 (다시 콘솔로 돌아가기)
quit # 또는 exit

-- 2. MacOS
-- mysql 설치된 경로로 이동
cd /usr/local/mysql/bin   
-- 사용자명 root, 비밀번호 사용해 mysql 접속 
./mysql -u root -p   # mysql 실행
-- mysql 종료 (다시 콘솔로 돌아가기)
quit # 또는 exit

-- 3. Ubuntu
-- mysql 설치
apt-get update
apt-get install mysql-server # 중간에 y 입력,  3~4분 소요됨
-- 사용자명 root, 비밀번호 사용해 mysql 접속 
mysql -u root -p
-- mysql 종료 (다시 콘솔로 돌아가기)
quit # 또는 exit