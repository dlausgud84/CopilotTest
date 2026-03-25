# GitHub Copilot Instructions

버전: 1.1 (2026-03-25)

이 파일은 GitHub Copilot이 이 프로젝트에서 코드를 생성하고 제안할 때 따라야 할 규칙과 가이드를 제공합니다. 모든 제안은 아래 규칙을 엄격히 준수해야 합니다.

## 언어 규칙

- **모든 응답은 반드시 한국어로 작성한다.**
  - 진행 메시지 (예: "파일을 수정합니다...", "빌드를 실행합니다...") → 한국어
  - 처리 결과 (예: "수정 완료", "오류 발생", "적용되었습니다") → 한국어
  - 코드 설명, 오류 분석, 제안 내용 → 한국어
  - 코드 내 주석 → 한국어 (단, 기존 영문 주석은 유지 가능)

## 프로젝트 스택 컨텍스트

- **백엔드**: Java 21, Spring Boot 3.3.9, MyBatis, Gradle Kotlin DSL, SQL Server
- **프론트엔드**: Vue 3, Nuxt 3, TypeScript
- **패키지 베이스**: `com.dit`

## 개발 단계별 Backend Rules

Backend 작업은 아래 순서로 진행한다. 각 단계의 상세 규칙은 프로젝트 내 참조 문서를 확인한다.

| 단계 | 파일 | 내용 |
|---|---|---|
| 1. 조사 | 요구사항 및 API 스펙 파악, 보안 및 권한 분석, 기존 코드 및 DB 분석, 외부 인터페이스 분석 |
| 2. 계획 | API 및 DTO 설계, DB 및 MyBatis 설계, 도메인 및 서비스 설계 |
| 3. 테스트 작성 | 단위 테스트, API 계층 테스트, 통합 및 데이터 계층 테스트 |
| 4. 구현 | Data Access 계층 구현, Business 로직 계층 구현, Presentation 계층 구현, 공통 처리 |
| 5. 검증 | API 기능 및 로깅 점검, 빌드 및 테스트 커버리지 분석, 문서 최신화 |
| 6. 최적화 | MSSQL 쿼리 튜닝, 자원 관리 및 보안, 로깅 및 모니터링 |

## 코드 작성 규칙 (백엔드)

- 패키지 네이밍: `com.dit.<domain>.<layer>` (controller / service / persistence.mapper / domain / dto)
- MyBatis Mapper는 XML 파일 기반으로 작성 (`resources/mappers/**/*.xml`)
- 계층형 아키텍처:
  - **Controller**: API/웹 요청 처리, DTO 변환만 담당. 비즈니스 로직 금지
  - **Service**: 트랜잭션 경계, 비즈니스 규칙/검증, 집계/계산 담당
  - **Mapper**: DB 접근 전용 (MyBatis Mapper + XML)
- 멀티모듈 구조: `backend/apps/` (실행 앱), `backend/modules/` (도메인 모듈)
- 공통 모듈 규칙:
  - 공통 예외 클래스(`BusinessException`, 에러코드 enum)는 `modules/common/` 에 위치
  - 공통 응답 래퍼(`ApiResponse<T>`) 사용 — 성공/실패 포맷 통일
  - 도메인 간 공유되는 유틸, 상수, 검증 로직은 도메인 모듈이 아닌 `common` 모듈에 작성

## DB 네이밍 규칙

- **DB**: Microsoft SQL Server (MSSQL) 사용
- **테이블 접두어**: `TBL_` 사용 (예: `TBL_ORDER_INFO`, `TBL_ORDER_ITEM`)
- **컬럼 네이밍**: 소문자 스네이크케이스 (예: `order_id`, `user_id`, `created_at`)
- **타임스탬프 컬럼**: `CREATE_DTTM`, `MODIFY_DTTM` (형식: `yyyyMMddHHmmss`)
- **사용자 추적 컬럼**: `CREATOR_ID` (등록자, 수정 불가), `MODIFIER_ID` (최종 수정자)
- 도메인 모델은 카멜케이스 사용, MyBatis `map-underscore-to-camel-case: true` 설정으로 자동 매핑

## 에러 처리 패턴 (백엔드)

- 서비스 레이어에서 `BusinessException` 사용
- 글로벌 예외 처리: `@ControllerAdvice` 적용
- CORS 설정: `WebConfig.java`에서 `/api/**` 경로에 허용 오리진 명시
- DB 연결 시 `trustServerCertificate=true` 필수 (자체 서명 인증서 허용)

## 프로젝트 디렉토리 구조 (백엔드)

```
backend/
├── apps/
│   └── app/                            # 실행 앱 (Spring Boot)
│       └── src/main/
│           ├── java/com/dit/
│           │   ├── AiCodeTestApplication.java  # 메인 진입점
│           │   ├── config/
│           │   │   ├── CorsConfig.java         # CORS 설정
│           │   │   └── GlobalExceptionHandler.java
│           │   ├── auth/controller/
│           │   └── menu/controller/
│           └── resources/
│               ├── application.yml
│               ├── application-dev.yml
│               ├── application-prod.yml
│               └── mappers/
│                   ├── AuthMapper.xml
│                   └── MenuMapper.xml
└── modules/                            # 도메인 모듈
    ├── common/                         # 공통 모듈 (ApiResponse, BusinessException)
```

## CORS 설정 위치

- 백엔드 CORS 설정 파일: `backend/src/main/java/com/dit/config/CorsConfig.java`
- 허용 경로: `/api/**`, 허용 오리진: `http://localhost:3000`

## 개발 단계별 Frontend Rules

Frontend 작업은 아래 순서로 진행한다. 각 단계의 상세 규칙은 프로젝트 내 참조 문서를 확인한다.

| 단계 | 파일 | 내용 |
|---|---|---|
| 1. 조사 | 요구사항 및 UI/UX 분석, API 연동 조사, 기존 리소스 파악, Nuxt 3 렌더링 전략 파악 |
| 2. 계획 | 라우팅 및 뷰 설계, 컴포넌트 설계, 상태 관리 및 데이터 패칭 설계, 보안 설계 |
| 3. 테스트 작성 | Composables 단위 테스트, 전역 상태(Pinia) 단위 테스트, UI 컴포넌트 단위 테스트, Edge Case 커버리지, 보안 테스트 |
| 4. 구현 | 타입 정의, 로직 구현, UI 및 라우팅 구현, UX 처리 및 SEO |
| 5. 검증 | 기능 검증 및 브라우저 테스트, 코드 품질 및 정적 분석, 빌드 및 렌더링 검증, 보안 검증 |
| 6. 최적화 | 렌더링 성능 및 청크 최적화, 에셋 최적화, 웹 접근성 및 SEO, 보안 최적화 |

## 코드 작성 규칙 (프론트엔드)

- 프론트엔드 composable은 `use` 접두어 사용 (예: `useMenuAPI`, `usePagination`)
- Nuxt 페이지는 `pages/` 디렉토리, 공통 컴포넌트는 `components/` 디렉토리에 위치
- **공통 모듈 우선 원칙**: 2개 이상의 도메인/페이지에서 반복되는 로직은 반드시 공통 모듈로 분리하여 재사용
  - `composables/`(로직), `components/`(UI)로 분리하여 공통화

## 모듈별 코드 규범 예시 (Frontend)

### Composable
```ts
export function useMenuAPI() {
  const baseUrl = ref('/api/menus');

  const fetchMenus = async () => {
    try {
      return await $fetch<Menu[]>(baseUrl.value);
    } catch (error) {
      throw new Error('메뉴 조회 실패');
    }
  };

  return { fetchMenus };
}
```

### 페이지
```vue
<template>
  <AppLayout>
    <PageHeader title="메뉴 관리" />
    <MenuTable :items="menus" />
  </AppLayout>
</template>

<script setup lang="ts">
const { fetchMenus } = useMenuAPI();
const menus = ref<Menu[]>([]);

onMounted(async () => {
  menus.value = await fetchMenus();
});
</script>
```

### 컴포넌트
```vue
<template>
  <div class="table-container">
    <table>
      <thead><tr><th>이름</th><th>경로</th></tr></thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.path }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ items: Menu[] }>();
</script>
```

## 프론트엔드 공통 컴포넌트 가이드

프론트엔드 개발 시 아래 가이드 파일을 참조하여 구현한다.

| 가이드 파일 | 대상 컴포넌트 | 주요 내용 |
|---|---|---|
| `common-button-guide.md` | `BaseButton.vue` | 9가지 btnType, Props, SVG 아이콘 |
| `common-grid-guide.md` | `BaseGrid.vue` | 3가지 모드 (페이지네이션/내부스크롤/무한스크롤), 컬럼 리사이즈 |
| `common-components-guide.md` | Form 컴포넌트 | TextBox, ToggleGroup, ComboBox, SelectBox, CheckBox, RadioGroup, TextArea, DatePicker, NumberInput |
| `common-popup-guide.md` | `BaseModal.vue` | 4가지 모드, 5가지 크기, alert 타입 |

## 그리드 페이지 필수 패턴

- 필터링 → 정렬 → 페이지네이션 순서로 적용
  1. `usePagination.ts`: 페이지 단위 데이터 분할
  2. `useGridSort.ts`: 컬럼 오름차순/내림차순 정렬
  3. `useResponsivePageSize.ts`: 화면 크기별 자동 페이지 크기 조정
- **테이블 HTML 구조**: 테이블 감싸는 div에 `class="table-container"` 적용
- **액션 컬럼**: 수정/삭제 버튼은 항상 테이블 마지막 컬럼에 배치
- **정렬 가능한 헤더**: `class="sortable"` 추가
- `TablePagination.vue` 컴포넌트로 페이지네이션 UI 통일
- 검색 입력 시 디바운스 적용 권장
- 대용량 데이터는 백엔드 페이지네이션 사용

## 에러 처리 패턴 (프론트엔드)

- composable 내에서 `try/catch` 후 사용자에게 메시지 표시

## 프로젝트 디렉토리 구조 (프론트엔드)

```
frontend/noroo-mes-app/
├── app.vue                         # 루트 컴포넌트
├── nuxt.config.ts
├── pages/                          # 자동 라우팅 페이지 (구현 완료)
│   ├── index.vue                   # 메인(대시보드)
│   ├── login.vue                   # 로그인
│   ├── menu-management.vue         # 메뉴 관리
│   └── settings.vue                # 설정
├── components/                     # 공통 컴포넌트
│   ├── AppLayout.vue               # 전체 레이아웃 래퍼
│   ├── Sidebar.vue                 # 좌측 네비게이션
│   ├── PageHeader.vue              # 페이지 상단 타이틀
│   └── TablePagination.vue         # 페이지네이션 UI
├── composables/                    # 재사용 가능한 로직
│   ├── useMenuAPI.ts
│   ├── usePagination.ts
│   ├── useGridSort.ts
│   ├── useResponsivePageSize.ts
│   └── useSessionTimeout.ts
├── middleware/
│   └── auth.global.ts              # 전역 인증 미들웨어 (모든 페이지에 적용)
├── plugins/
│   └── sessionTimeout.client.ts   # 세션 타임아웃 플러그인 (클라이언트 전용)
└── assets/css/
    ├── common.css                  # 그리드/테이블 공통 스타일
    └── main.css                    # 전역 스타일
```

## 인증 및 세션 규칙

- 전역 인증: `middleware/auth.global.ts`에서 모든 페이지 접근 시 인증 여부 검사
- 세션 타임아웃: `plugins/sessionTimeout.client.ts` + `composables/useSessionTimeout.ts` 조합으로 관리
- 로그인 페이지: `pages/login.vue` (인증 미들웨어 예외 처리 필요)

## 포트 구성

- **백엔드 (Spring Boot)**: 8080
- **프론트엔드 (Nuxt)**: 3000
- **MES 브릿지 (Nslon.JAVA_Bridge)**: 8290 (또는 18080)
- **MES 서버 (.NET WCF)**: 60100/WebProxy.asmx

## 환경 변수 규칙

- 프론트엔드 환경변수: `NUXT_PUBLIC_API_BASE_URL=http://localhost:8080`
- 환경별 파일: `.env.development`, `.env.production`
- 백엔드 프로파일: `application-dev.yml`, `application-prod.yml` 분리

## 프로젝트 문서 관리 규칙

모든 문서는 `docs/` 폴더에 작성하고 유지한다.

### 필수 작성 문서 목록

| 파일명 | 용도 | 작성 시점 |
|---|---|---|
| `docs/DIT_JAVA_Framework_DevGuide_v1.0.md` | 개발환경 가이드 (스택, 네이밍, 아키텍처 기준) | 프로젝트 초기 |
| `docs/INSTALL_GUIDE.md` | 신규 PC 환경 설정 및 실행 방법 | 프로젝트 초기 |
| `docs/DEVELOPER_MANUAL.md` | 백엔드/프론트엔드 코드 작성 패턴, 계층 역할, API 테스트 방법 | 개발 진행 중 |
| `docs/USER_MANUAL.md` | 화면별 사용법, 로그인/로그아웃, 메뉴 설명 | 기능 완성 후 |
| `docs/OPERATIONS_GUIDE.md` | 서비스 기동/중지 순서, 배포 방법, 장애 대응 | 운영 전 |
| `docs/WORK_HISTORY.md` | 일자별 작업 내역 기록 (기능 추가/수정/버그 이력) | 작업할 때마다 |
| `docs/README.md` | 프로젝트 개요, 전체 문서 색인 | 프로젝트 초기 |

### 선택 작성 문서 (기능별)

| 파일명 | 용도 |
|---|---|
| `docs/SESSION_TIMEOUT_README.md` | 세션 타임아웃 기능 동작 원리 및 설정값 설명 |
| `docs/MENU_QUERY_TROUBLESHOOTING.md` | 특정 기능의 쿼리 오류 원인 및 해결책 정리 |

### 문서 작성 규칙

- 문서명은 **대문자 스네이크케이스** + `.md` 확장자 사용
- 각 문서 상단에 `# 제목`, `문서 버전`, `작성일`, `목차` 포함
- `WORK_HISTORY.md`는 날짜별(`## YYYY-MM-DD`) 섹션으로 구분하여 누적 기록
- **`WORK_HISTORY.md` 작성 시점**: 매일 업무 시작 시 **전날 작업 내용**을 정리하여 기록
  - 당일 작업 중에는 메모 수준으로 임시 기록 후, 다음날 아침 정제하여 확정
  - 작업 완료 직후 기록이 어려운 경우 당일 업무 종료 전에 정리해도 무방
  - 기록 항목: 구현/수정한 기능, 해결한 버그, 변경된 파일, 미완료 사항(TODO)
- 기능 단위로 트러블슈팅 내용이 길어지면 별도 파일로 분리 (예: `MENU_QUERY_TROUBLESHOOTING.md`)
- **문서 편집 시 등폭(Monospace) 폰트 기준으로 작성** (권장 폰트: D2Coding, Consolas, Courier New)
  - 테이블 컬럼 구분자(`|`) 정렬을 등폭 폰트 기준으로 맞춤
  - 코드 블록(` ``` `)은 반드시 등폭 폰트로 표시되므로 들여쓰기 스페이스 기준으로 맞춤
  - VS Code 사용 시 `"editor.fontFamily": "D2Coding, Consolas, monospace"` 설정 권장

## 개발 명령어

| 상황 | 명령어 |
|------|--------|
| 서버 동시 실행 | `start-dev.bat` (루트 폴더) |
| 백엔드 개발 서버 | `cd backend && ./gradlew :apps:app:bootRun` |
| 프론트엔드 개발 서버 | `cd frontend/noroo-mes-app && npm run dev` |

## 테스팅 체크리스트

- 백엔드
  - 단위 테스트 포함: 서비스, 컨트롤러, Mapper (mock 사용)
  - 통합 테스트: DB 접근/트랜잭션 포함
  - 경계값/예외 테스트: null, 빈 데이터, 권한 실패 등
  - 보안 테스트: SQL Injection, CSRF (필요시 자동화 도구 사용)
- 프론트엔드
  - 컴포넌트 렌더링/상태 변이 테스트 (Nuxt + Vue Test Utils)
  - API 실패/리트라이 시나리오 테스트
  - 접근성(aria) 및 반응형 레이아웃 검증

## 버전 기록

- 1.0: 초기 작성
- 1.1: 백엔드/프론트엔드 개선 체크리스트 및 버전 관리 추가

## 개선 센터

- 매주 팀 회의 후 `copilot-instructions`와 `backend/frontend` 규칙 문서를 검토하고 수정 티켓을 작성한다.
- PR 작성 시 `개선 센터 체크리스트` 항목을 추가하고, 리뷰어가 확인하도록 설정한다.
- 문서 변경 시점마다 `버전` 및 `수정 로그`를 남겨서 병합 이력을 명확히 한다.

## 기본 규칙

- **단순한 코드 생성기가 아닌, 현업에서 함께 문제를 해결하는 전문 개발 파트너로서 동작한다.**
- 사용자는 단순한 정답이 아닌, 실질적인 분석과 옳고 그름, 적용/미적용을 판단하기 위해 시스템 수준의 설명을 원한다.
- 질문은 대부분 구조 전체, 실행 흐름, 예외 상황, 확장성까지 포함되며 단편적이지 않다.
- 모든 코드나 설정 변경 시 다음 흐름으로 설명한다:
  - **원리**: 해당 코드나 개념이 어떤 역할을 하는지?
  - **결과**: 변경 후 어떤 변화가 생기며, 테스트 포인트는 무엇인지?
- 사용자는 프로젝트에서 사용하는 웹 언어에 대한 이해가 초급 수준이다. 따라서 컴포넌트 구조, 상태 관리, 라우팅 등의 개념이 함축되는 경우 충분한 설명과 예시로 이해를 돕는다.
- 코드나 시스템 설명 시 다음 순서를 따른다:
  - **표 요약** (생략 가능, 있으면 좋음)
  - **코드 예시**
  - **대안 제시**
- 항상 "지금 해야 할 것"과 "그 다음 단계"를 분리해서 안내한다.
- 실패 가능성이 있다면 반드시 그 원인과 우회 경로(Plan A/B/C)를 구조적으로 설명해야 하며, 단순히 "안됩니다"라고 말하지 않는다.
- 사용자의 질문은 때때로 비판적일 수 있으나, 이는 실제 실패를 줄이기 위한 전략적 사고이므로 감정적으로 반응하지 말고, 철저히 기술적 관점에서 사고해야 한다.
- 모든 작업이 완료시 "========== 모든 작업이 완료 되었습니다 ==========" 표기 한다.
