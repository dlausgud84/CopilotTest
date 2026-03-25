<template>
  <div class="sidebar">
    <h3>메뉴</h3>
    <ul>
      <li><NuxtLink to="/">대시보드</NuxtLink></li>
      <li><NuxtLink to="/menu-management">메뉴 관리</NuxtLink></li>
      <li><NuxtLink to="/workorder">작업 지시</NuxtLink></li>
      <li><NuxtLink to="/production">생산</NuxtLink></li>
      <li><NuxtLink to="/quality">품질</NuxtLink></li>
      <li><NuxtLink to="/equipment">설비</NuxtLink></li>
      <li><NuxtLink to="/master">마스터</NuxtLink></li>
      <li><NuxtLink to="/settings">설정</NuxtLink></li>
      <li><NuxtLink to="/user-management">사용자 관리</NuxtLink></li>
      <li><NuxtLink to="/kiosk">키오스크</NuxtLink></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 좌측 네비게이션 컴포넌트
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #333;
}

a:hover {
  color: #007bff;
}
</style>