# AI Agent Skills 가이드

문서 버전: 1.0
작성일: 2026-03-26

## 목차

1. [개요](#1-개요)
2. [설치 방법](#2-설치-방법)
3. [설치된 스킬 목록](#3-설치된-스킬-목록)
4. [카테고리별 스킬 설명](#4-카테고리별-스킬-설명)
   - [Nuxt / Vue 핵심](#41-nuxt--vue-핵심)
   - [Vue 모범 사례](#42-vue-모범-사례)
   - [빌드 / 테스트](#43-빌드--테스트)
   - [TypeScript / 아키텍처](#44-typescript--아키텍처)
   - [Java 백엔드](#45-java-백엔드)
   - [데이터베이스 / SQL](#46-데이터베이스--sql)
   - [개발 워크플로우](#47-개발-워크플로우)
5. [스킬 관리 명령어](#5-스킬-관리-명령어)
6. [스킬 추가 방법](#6-스킬-추가-방법)

---

## 1. 개요

`skills` CLI를 통해 GitHub Copilot Agent에 도메인별 전문 지식 파일(SKILL.md)을 설치합니다.
스킬은 `.agents/skills/` 폴더에 저장되며, Copilot이 특정 작업 수행 시 자동으로 참조합니다.

- **스킬 저장 위치**: `.agents/skills/<스킬명>/SKILL.md`
- **적용 대상 에이전트**: GitHub Copilot, Claude Code, Cline, Codex 등
- **공식 스킬 검색**: https://skills.sh/

---

## 2. 설치 방법

```bash
# skills CLI 기본 사용법 (npx 로 실행)
npx skills add <패키지명>                    # 특정 패키지의 전체 스킬 설치
npx skills add <패키지명> --list             # 설치 가능한 스킬 목록 조회
npx skills add <패키지명> --skill <스킬명>   # 특정 스킬만 선택 설치
npx skills list                             # 현재 프로젝트 설치 스킬 목록
npx skills update                           # 전체 스킬 최신화
npx skills remove                           # 스킬 제거 (대화형)
```

---

## 3. 설치된 스킬 목록

| 스킬명 | 출처 | 적용 에이전트 |
|---|---|---|
| `nuxt` | onmax/nuxt-skills → antfu/skills | GitHub Copilot, Claude Code |
| `vue` | onmax/nuxt-skills → antfu/skills | GitHub Copilot, Claude Code |
| `pinia` | antfu/skills | GitHub Copilot, Claude Code |
| `vueuse` | onmax/nuxt-skills | GitHub Copilot, Claude Code |
| `vueuse-functions` | antfu/skills | GitHub Copilot, Claude Code |
| `vite` | onmax/nuxt-skills | GitHub Copilot, Claude Code |
| `vitest` | onmax/nuxt-skills | GitHub Copilot, Claude Code |
| `vue-best-practices` | antfu/skills, hyf0/vue-skills | GitHub Copilot, Claude Code 외 |
| `vue-debug-guides` | hyf0/vue-skills | GitHub Copilot, Claude Code 외 |
| `vue-router-best-practices` | antfu/skills | GitHub Copilot, Claude Code 외 |
| `vue-testing-best-practices` | antfu/skills | GitHub Copilot, Claude Code 외 |
| `vue-pinia-best-practices` | hyf0/vue-skills | GitHub Copilot, Claude Code 외 |
| `vue-jsx-best-practices` | hyf0/vue-skills | GitHub Copilot, Claude Code 외 |
| `vue-options-api-best-practices` | hyf0/vue-skills | GitHub Copilot, Claude Code 외 |
| `create-adaptable-composable` | 기존 설치 | GitHub Copilot, Claude Code 외 |
| `typescript-advanced-types` | wshobson/agents | GitHub Copilot, Claude Code |
| `api-design-principles` | wshobson/agents | GitHub Copilot, Claude Code |
| `architecture-patterns` | wshobson/agents | GitHub Copilot, Claude Code |
| `java-springboot` | github/awesome-copilot | GitHub Copilot, Claude Code 외 |
| `refactor` | github/awesome-copilot | GitHub Copilot, Claude Code 외 |
| `postgresql-table-design` | wshobson/agents | GitHub Copilot, Claude Code |
| `sql-optimization-patterns` | wshobson/agents | GitHub Copilot, Claude Code 외 |
| `code-review-excellence` | wshobson/agents | GitHub Copilot, Claude Code 외 |
| `git-advanced-workflows` | wshobson/agents | GitHub Copilot, Claude Code 외 |

---

## 4. 카테고리별 스킬 설명

### 4.1 Nuxt / Vue 핵심

#### `nuxt`
- **출처**: `npx skills add onmax/nuxt-skills --skill nuxt` (antfu/skills로 덮어씀)
- **용도**: Nuxt 4+ 프로젝트 작업 시 자동 활성화
- **주요 내용**: 서버 라우트, 파일 기반 라우팅, 미들웨어 패턴, Nuxt 전용 composable, h3 v1 헬퍼, Nitropack v2 패턴

#### `vue`
- **출처**: `npx skills add onmax/nuxt-skills --skill vue` (antfu/skills로 덮어씀)
- **용도**: `.vue` 파일 편집, Vue 3 컴포넌트 작성 시 자동 활성화
- **주요 내용**: Composition API 패턴, Props/Emits 모범 사례, VueUse 통합, 반응성 분해 안내

#### `pinia`
- **출처**: `npx skills add antfu/skills --skill pinia`
- **용도**: Pinia 스토어 정의, 상태 관리 패턴 작업 시
- **주요 내용**: store 설정, state/getters/actions, Vue 앱 내 스토어 패턴

#### `vueuse`
- **출처**: `npx skills add onmax/nuxt-skills --skill vueuse`
- **용도**: VueUse composable 사용 시
- **주요 내용**: useMouse, useStorage, useNetwork, refDebounced 등 API

#### `vueuse-functions`
- **출처**: `npx skills add antfu/skills --skill vueuse-functions`
- **용도**: VueUse composable을 Vue/Nuxt 기능에 적용할 때
- **주요 내용**: 간결하고 유지보수 가능한 Vue.js / Nuxt 기능 구현 패턴

---

### 4.2 Vue 모범 사례

#### `vue-best-practices`
- **출처**: `npx skills add antfu/skills --skill vue-best-practices`
- **용도**: Vue.js 작업 전반에 걸쳐 자동 활성화 (필수 스킬)
- **주요 내용**: `<script setup>` + TypeScript 표준, Vue 3 SSR, Volar, vue-tsc 활용법
- **주의**: Options API가 명시적으로 요구되지 않는 한 항상 Composition API 사용

#### `vue-debug-guides`
- **출처**: `npx skills add hyf0/vue-skills --all`
- **용도**: Vue 3 런타임 오류, 경고, 비동기 실패, SSR/Hydration 문제 진단 시
- **주요 내용**: 런타임 에러, 비동기 실패, SSR 하이드레이션 오류 처리

#### `vue-router-best-practices`
- **출처**: `npx skills add antfu/skills --skill vue-router-best-practices`
- **용도**: Vue Router 4 작업 시
- **주요 내용**: 내비게이션 가드, 라우트 파라미터, 라우트-컴포넌트 라이프사이클 상호작용

#### `vue-testing-best-practices`
- **출처**: `npx skills add antfu/skills --skill vue-testing-best-practices`
- **용도**: Vue.js 테스트 작성 시
- **주요 내용**: Vitest, Vue Test Utils, 컴포넌트 테스트, 모킹, Playwright E2E 테스트

#### `vue-pinia-best-practices`
- **출처**: `npx skills add hyf0/vue-skills --all`
- **용도**: Pinia 스토어, 상태 관리 패턴 구현 시
- **주요 내용**: store 설정, reactivity 와 스토어 연동

#### `vue-jsx-best-practices`
- **출처**: `npx skills add hyf0/vue-skills --all`
- **용도**: Vue에서 JSX 문법 사용 시
- **주요 내용**: class vs className, JSX 플러그인 설정

#### `vue-options-api-best-practices`
- **출처**: `npx skills add hyf0/vue-skills --all`
- **용도**: Vue 3 Options API 스타일 작업 시
- **주요 내용**: data(), methods, this 컨텍스트

#### `create-adaptable-composable`
- **용도**: 재사용 가능한 Vue composable 작성 시
- **주요 내용**: MaybeRef / MaybeRefOrGetter 수용, toValue()/toRef() 활용 패턴

---

### 4.3 빌드 / 테스트

#### `vite`
- **출처**: `npx skills add onmax/nuxt-skills --skill vite`
- **용도**: Vite 프로젝트 작업, vite.config.ts 설정 시
- **주요 내용**: Vite 빌드 도구 설정, 플러그인 API, SSR, Vite 8 Rolldown 마이그레이션

#### `vitest`
- **출처**: `npx skills add onmax/nuxt-skills --skill vitest`
- **용도**: 단위/통합 테스트 작성 시
- **주요 내용**: vitest.config.ts 설정, describe/it 테스트 스위트, vi.fn/vi.mock 모킹, 코드 커버리지

---

### 4.4 TypeScript / 아키텍처

#### `typescript-advanced-types`
- **출처**: `npx skills add wshobson/agents --skill typescript-advanced-types`
- **용도**: 복잡한 TypeScript 타입 로직, 재사용 가능한 타입 유틸리티 구현 시
- **주요 내용**: Generics, 조건부 타입, 맵드 타입, 템플릿 리터럴, 유틸리티 타입

#### `api-design-principles`
- **출처**: `npx skills add wshobson/agents --skill api-design-principles`
- **용도**: 새 API 설계, API 스펙 리뷰, API 설계 표준 수립 시
- **주요 내용**: REST 및 GraphQL API 설계 원칙, 직관적이고 확장 가능한 API 구현

#### `architecture-patterns`
- **출처**: `npx skills add wshobson/agents --skill architecture-patterns`
- **용도**: 복잡한 백엔드 시스템 설계, 기존 애플리케이션 리팩토링 시
- **주요 내용**: Clean Architecture, Hexagonal Architecture, Domain-Driven Design

---

### 4.5 Java 백엔드

#### `java-springboot`
- **출처**: `npx skills add github/awesome-copilot --skill java-springboot`
- **용도**: Spring Boot 애플리케이션 개발 시
- **주요 내용**: Spring Boot 모범 사례, 보일러플레이트 코드 생성, 스프링부트 패턴

#### `refactor`
- **출처**: `npx skills add github/awesome-copilot --skill refactor`
- **용도**: 코드 리팩토링 작업 시 (백엔드/프론트엔드 모두)
- **주요 내용**: 함수 추출, 변수명 개선, God 함수 분해, 타입 안전성 강화, 코드 스멜 제거, 디자인 패턴 적용

---

### 4.6 데이터베이스 / SQL

#### `postgresql-table-design`
- **출처**: `npx skills add wshobson/agents --skill postgresql-table-design`
- **용도**: DB 스키마 설계, 테이블 구조 설계 시
- **주요 내용**: PostgreSQL 전용 스키마 설계, 데이터 타입, 인덱싱, 제약조건, 성능 패턴
- **참고**: MSSQL 환경이지만 공통 SQL 설계 원칙 적용 가능

#### `sql-optimization-patterns`
- **출처**: `npx skills add wshobson/agents --skill sql-optimization-patterns`
- **용도**: 느린 쿼리 디버깅, 인덱스 전략 설계, DB 성능 최적화 시
- **주요 내용**: SQL 쿼리 최적화, 인덱스 전략, EXPLAIN 분석

---

### 4.7 개발 워크플로우

#### `code-review-excellence`
- **출처**: `npx skills add wshobson/agents --skill code-review-excellence`
- **용도**: 코드 리뷰, 리뷰 표준 수립, 개발자 멘토링 시
- **주요 내용**: 건설적인 피드백 방법, 버그 조기 발견, 팀 모럴 유지 코드 리뷰 관행

#### `git-advanced-workflows`
- **출처**: `npx skills add wshobson/agents --skill git-advanced-workflows`
- **용도**: 복잡한 Git 히스토리 관리, 브랜치 전략, 저장소 문제 해결 시
- **주요 내용**: rebase, cherry-pick, bisect, worktrees, reflog 활용

---

## 5. 스킬 관리 명령어

```bash
# 현재 설치된 스킬 목록 조회
npx skills list

# 스킬 업데이트 확인
npx skills check

# 전체 스킬 업데이트
npx skills update

# 특정 스킬 제거 (대화형)
npx skills remove

# skills-lock.json 으로부터 스킬 복원 (팀 공유 후 재설치)
npx skills experimental_install
```

> **팀 협업 시**: `skills-lock.json` 파일을 Git에 커밋하면 다른 팀원이 `npx skills experimental_install` 로 동일한 스킬 환경을 복원할 수 있습니다.

---

## 6. 스킬 추가 방법

새로운 스킬을 추가하려면 아래 절차를 따릅니다.

```bash
# 1. 스킬 검색
npx skills find <키워드>

# 2. 특정 패키지의 스킬 목록 확인
npx skills add <패키지명> --list

# 3. 필요한 스킬만 선택 설치
npx skills add <패키지명> --skill <스킬명1> <스킬명2> --yes
```

### 권장 추가 스킬팩

| 상황 | 명령어 |
|---|---|
| Nuxt Auth 인증 구현 필요 시 | `npx skills add onmax/nuxt-skills --skill nuxt-better-auth` |
| Nuxt Content(CMS) 작업 시 | `npx skills add onmax/nuxt-skills --skill nuxt-content` |
| SEO 설정 작업 시 | `npx skills add onmax/nuxt-skills --skill nuxt-seo` |
| 모노레포 관리 필요 시 | `npx skills add wshobson/agents --skill monorepo-management` |
| Python 백엔드 추가 시 | `npx skills add wshobson/agents --skill async-python-patterns` |
