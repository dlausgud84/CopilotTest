export const useMenuAPI = () => {
  const config = useRuntimeConfig()

  const fetchMenus = async () => {
    try {
      const response = await $fetch(`${config.public.apiBaseUrl}/api/menus`)
      return response
    } catch (error) {
      console.error('메뉴 조회 실패:', error)
      throw error
    }
  }

  const createMenu = async (menuData: any) => {
    try {
      const response = await $fetch(`${config.public.apiBaseUrl}/api/menus`, {
        method: 'POST',
        body: menuData
      })
      return response
    } catch (error) {
      console.error('메뉴 생성 실패:', error)
      throw error
    }
  }

  const updateMenu = async (menuId: number, menuData: any) => {
    try {
      const response = await $fetch(`${config.public.apiBaseUrl}/api/menus/${menuId}`, {
        method: 'PUT',
        body: menuData
      })
      return response
    } catch (error) {
      console.error('메뉴 수정 실패:', error)
      throw error
    }
  }

  const deleteMenu = async (menuId: number) => {
    try {
      const response = await $fetch(`${config.public.apiBaseUrl}/api/menus/${menuId}`, {
        method: 'DELETE'
      })
      return response
    } catch (error) {
      console.error('메뉴 삭제 실패:', error)
      throw error
    }
  }

  return {
    fetchMenus,
    createMenu,
    updateMenu,
    deleteMenu
  }
}