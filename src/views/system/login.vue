<template>
  <el-button @click="toDashboard">to dashboard</el-button>
  <router-view></router-view>
</template>
<script lang="ts" setup>

const router = useRouter()
const toDashboard = () => {
  router.push({
    name: 'Dashboard'
  })
}
</script>
