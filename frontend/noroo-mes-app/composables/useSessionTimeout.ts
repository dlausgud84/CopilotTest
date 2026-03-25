export const useSessionTimeout = () => {
  const timeoutDuration = 30 * 60 * 1000 // 30분
  const warningTime = 5 * 60 * 1000 // 5분 전 경고
  let timeoutId: NodeJS.Timeout | null = null
  let warningId: NodeJS.Timeout | null = null

  const isWarning = ref(false)
  const timeLeft = ref(0)

  const startTimeout = () => {
    clearTimeout(timeoutId!)
    clearTimeout(warningId!)

    warningId = setTimeout(() => {
      isWarning.value = true
      timeLeft.value = warningTime / 1000
      const countdown = setInterval(() => {
        timeLeft.value--
        if (timeLeft.value <= 0) {
          clearInterval(countdown)
        }
      }, 1000)
    }, timeoutDuration - warningTime)

    timeoutId = setTimeout(() => {
      // 세션 만료 처리
      console.log('세션 만료')
      // 로그아웃 로직
      navigateTo('/login')
    }, timeoutDuration)
  }

  const resetTimeout = () => {
    isWarning.value = false
    startTimeout()
  }

  const extendSession = () => {
    resetTimeout()
  }

  onMounted(() => {
    startTimeout()
    // 사용자 활동 감지
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']
    events.forEach(event => {
      document.addEventListener(event, resetTimeout, true)
    })
  })

  onUnmounted(() => {
    clearTimeout(timeoutId!)
    clearTimeout(warningId!)
  })

  return {
    isWarning: readonly(isWarning),
    timeLeft: readonly(timeLeft),
    extendSession
  }
}