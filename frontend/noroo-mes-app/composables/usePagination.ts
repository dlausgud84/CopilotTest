export const usePagination = (items: any[], pageSize: number) => {
  const currentPage = ref(1)
  const totalPages = computed(() => Math.ceil(items.length / pageSize))

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    const end = start + pageSize
    return items.slice(start, end)
  })

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  return {
    currentPage: readonly(currentPage),
    totalPages,
    paginatedItems,
    goToPage,
    nextPage,
    prevPage
  }
}