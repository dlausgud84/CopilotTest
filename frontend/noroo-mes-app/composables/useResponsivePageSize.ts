export const useResponsivePageSize = () => {
  const pageSize = ref(10)

  const updatePageSize = () => {
    if (process.client) {
      const width = window.innerWidth
      if (width < 768) {
        pageSize.value = 5
      } else if (width < 1024) {
        pageSize.value = 10
      } else {
        pageSize.value = 20
      }
    }
  }

  onMounted(() => {
    updatePageSize()
    window.addEventListener('resize', updatePageSize)
  })

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('resize', updatePageSize)
    }
  })

  return {
    pageSize: readonly(pageSize)
  }
}