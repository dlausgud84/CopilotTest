<template>
  <div class="app-layout">
    <Sidebar />
    <div class="main-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// 전체 레이아웃 래퍼 컴포넌트
</script>

<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>