export const useGridSort = (items: any[], defaultSortKey: string = '') => {
  const sortKey = ref(defaultSortKey)
  const sortOrder = ref<'asc' | 'desc'>('asc')

  const sortedItems = computed(() => {
    if (!sortKey.value) return items
    return [...items].sort((a, b) => {
      const aValue = a[sortKey.value]
      const bValue = b[sortKey.value]

      if (aValue < bValue) return sortOrder.value === 'asc' ? -1 : 1
      if (aValue > bValue) return sortOrder.value === 'asc' ? 1 : -1
      return 0
    })
  })

  const sortBy = (key: string) => {
    if (sortKey.value === key) {
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
    } else {
      sortKey.value = key
      sortOrder.value = 'asc'
    }
  }

  return {
    sortKey: readonly(sortKey),
    sortOrder: readonly(sortOrder),
    sortedItems,
    sortBy
  }
}