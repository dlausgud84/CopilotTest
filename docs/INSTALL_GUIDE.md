# 설치 가이드

## 문서 버전
v1.0

## 작성일
2024-03-25

## 목차
1. [시스템 요구사항](#시스템-요구사항)
2. [개발 환경 설정](#개발-환경-설정)
3. [프로젝트 실행](#프로젝트-실행)

## 시스템 요구사항
- Java 21
- Node.js 18+
- SQL Server 2019+

## 개발 환경 설정
1. JDK 21 설치
2. Node.js 설치
3. SQL Server 설치 및 데이터베이스 생성

## 프로젝트 실행
### 백엔드
```bash
cd backend
./gradlew bootRun
```

### 프론트엔드
```bash
cd frontend/noroo-mes-app
npm install
npm run dev
```