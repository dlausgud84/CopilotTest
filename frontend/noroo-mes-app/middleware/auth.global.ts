export default defineNuxtRouteMiddleware((to) => {
  // 로그인 페이지 제외
  if (to.path === '/login') {
    return
  }

  // 인증 여부 확인 (실제 구현 시 토큰 확인 로직 추가)
  const isAuthenticated = false // 임시로 false

  if (!isAuthenticated) {
    return navigateTo('/login')
  }
})