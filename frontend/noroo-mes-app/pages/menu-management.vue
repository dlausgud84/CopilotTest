<template>
  <div>
    <PageHeader title="메뉴 관리" />
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th class="sortable">메뉴 ID</th>
            <th class="sortable">메뉴 이름</th>
            <th class="sortable">부모 메뉴 ID</th>
            <th class="sortable">정렬 순서</th>
            <th class="sortable">활성 상태</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="menu in menus" :key="menu.menuId">
            <td>{{ menu.menuId }}</td>
            <td>{{ menu.menuName }}</td>
            <td>{{ menu.parentMenuId }}</td>
            <td>{{ menu.sortOrder }}</td>
            <td>{{ menu.isActive ? '활성' : '비활성' }}</td>
            <td>
              <button @click="editMenu(menu)">수정</button>
              <button @click="deleteMenu(menu.menuId)">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <TablePagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-changed="handlePageChange"
    />
  </div>
</template>

<script setup lang="ts">
const { data: menus } = await $fetch('/api/menus')
const currentPage = ref(1)
const totalPages = ref(10)

const editMenu = (menu: any) => {
  // 수정 로직
  console.log('메뉴 수정:', menu)
}

const deleteMenu = (menuId: number) => {
  // 삭제 로직
  console.log('메뉴 삭제:', menuId)
}

const handlePageChange = (page: number) => {
  currentPage.value = page
  // 페이지 변경 로직
}
</script>