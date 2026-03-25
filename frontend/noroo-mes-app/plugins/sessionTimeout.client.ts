export default defineNuxtPlugin(() => {
  const { isWarning, timeLeft, extendSession } = useSessionTimeout()

  // 세션 타임아웃 경고 표시 로직
  watch(isWarning, (newValue) => {
    if (newValue) {
      // 경고 모달 표시 (실제 구현 시 모달 컴포넌트 사용)
      alert(`세션이 ${timeLeft.value}초 후에 만료됩니다. 연장하시겠습니까?`)
      // 연장 버튼 클릭 시 extendSession 호출
    }
  })
})