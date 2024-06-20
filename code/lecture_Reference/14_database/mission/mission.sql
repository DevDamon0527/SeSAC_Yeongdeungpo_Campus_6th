SHOW DATABASES;
CREATE DATABASE sesac_ydp_6 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE sesac_ydp_6;

-- 환자
CREATE TABLE Patient (
	patient_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	birth_date DATE NOT NULL
);

INSERT INTO Patient (name, birth_date) VALUES
	('김철수', '1990-05-15'),
	('박영희', '1985-11-22'),
	('이지원', '1998-03-08'),
	('최민기', '1977-09-25'),
	('한지영', '1992-07-01');

-- 의사
CREATE TABLE Doctor (
	doctor_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	specialty VARCHAR(100) NOT NULL
);

INSERT INTO Doctor (name, specialty) VALUES
	('김의사', '내과'),
	('박의사', '외과'),
	('이의사', '소아과'),
	('최의사', '정형외과'),
	('한의사', '피부과');
    
-- 진료
CREATE TABLE Appointment (
	appointment_id INT PRIMARY KEY AUTO_INCREMENT,
	patient_id INT NOT NULL,
	doctor_id INT NOT NULL,
	appointment_date DATE NOT NULL,
	FOREIGN KEY (patient_id) REFERENCES Patient(patient_id),
	FOREIGN KEY (doctor_id) REFERENCES Doctor(doctor_id)
);

INSERT INTO Appointment (patient_id, doctor_id, appointment_date) VALUES
	(1, 1, '2023-06-01'),
	(2, 3, '2023-06-02'),
	(3, 2, '2023-06-03'),
	(4, 4, '2023-06-04'),
	(5, 5, '2023-06-05');
    
-- 진단
CREATE TABLE Diagnosis (
	diagnosis_code INT PRIMARY KEY AUTO_INCREMENT,
	diagnosis_name VARCHAR(100) NOT NULL,
	description TEXT
);

INSERT INTO Diagnosis (diagnosis_name, description) VALUES
	('감기', '코감기 증상'),
	('골절', '팔 골절'),
	('알레르기', '꽃가루 알레르기'),
	('피부염', '건선 증상'),
	('귀염증', '중이염 증상');

-- 진단내역
CREATE TABLE Diagnosis_Record (
	appointment_id INT NOT NULL,
	diagnosis_code INT NOT NULL,
	PRIMARY KEY (appointment_id, diagnosis_code),
	FOREIGN KEY (appointment_id) REFERENCES Appointment(appointment_id),
	FOREIGN KEY (diagnosis_code) REFERENCES Diagnosis(diagnosis_code)
);

INSERT INTO Diagnosis_Record (appointment_id, diagnosis_code) VALUES
	(1, 1),
	(2, 5),
	(3, 2),
	(4, 2),
	(5, 4);
    
SELECT * FROM Patient;
SELECT * FROM Doctor;
SELECT * FROM Appointment;
SELECT * FROM Diagnosis;
SELECT * FROM Diagnosis_Record;


--------
-- 1. 모든 환자의 이름과 생년월일을 조회하시오.
SELECT name, birth_date FROM Patient;

-- 2. 전공이 '내과'인 의사의 이름을 조회하시오.
SELECT name FROM Doctor WHERE specialty = '내과';

-- 3. 2023년 6월 1일에 진료받은 환자의 이름과 의사 이름을 조회하시오.
SELECT p.name AS 환자명, d.name AS 의사명
    FROM Appointment a
    JOIN Patient p ON a.patient_id = p.patient_id
    JOIN Doctor d ON a.doctor_id = d.doctor_id
    WHERE a.appointment_date = '2023-06-01';

-- 4. 진단명이 '골절'인 진단내역의 환자 이름과 진료일자를 조회하시오.
SELECT p.name AS 환자명, a.appointment_date AS 진료일자
    FROM Diagnosis_Record dr
    JOIN Appointment a ON dr.appointment_id = a.appointment_id
    JOIN Patient p ON a.patient_id = p.patient_id
    JOIN Diagnosis d ON dr.diagnosis_code = d.diagnosis_code
    WHERE d.diagnosis_name = '골절';

-- 5. 각 의사가 진료한 환자 수를 조회하시오.
SELECT d.name AS 의사명, COUNT(DISTINCT a.patient_id) AS 진료환자수
    FROM Doctor d
    LEFT JOIN Appointment a ON d.doctor_id = a.doctor_id
    GROUP BY d.name;

-- 6. 가장 최근에 진료받은 환자의 이름과 진료일자를 조회하시오.
SELECT p.name AS 환자명, a.appointment_date AS 진료일자
    FROM Patient p
    JOIN Appointment a ON p.patient_id = a.patient_id
    ORDER BY a.appointment_date DESC
    LIMIT 1;
