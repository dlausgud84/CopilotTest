# DIT Java Framework 개발 가이드 v1.0

## 문서 버전
v1.0

## 작성일
2024-03-25

## 목차
1. [프로젝트 개요](#프로젝트-개요)
2. [기술 스택](#기술-스택)
3. [아키텍처 원칙](#아키텍처-원칙)
4. [코딩 규칙](#코딩-규칙)
5. [DB 설계 규칙](#db-설계-규칙)

## 프로젝트 개요
본 프로젝트는 DIT MES 시스템의 백엔드 프레임워크를 구축하는 것을 목표로 합니다.

## 기술 스택
- **백엔드**: Java 21, Spring Boot 4.x, MyBatis, Gradle Kotlin DSL, SQL Server
- **프론트엔드**: Vue 3, Nuxt 3, TypeScript

## 아키텍처 원칙
- 계층형 아키텍처 (Controller → Service → Mapper)
- 멀티모듈 구조
- 공통 모듈 우선 원칙

## 코딩 규칙
- 패키지 네이밍: `com.dit.<domain>.<layer>`
- MyBatis XML 기반 매핑
- Lombok 사용

## DB 설계 규칙
- 테이블 접두어: `TBL_`
- 컬럼 네이밍: 소문자 스네이크케이스
- 타임스탬프 컬럼: `CREATE_DTTM`, `MODIFY_DTTM`