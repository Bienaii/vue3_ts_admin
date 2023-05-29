<template>
  <div>
    <h3>{{ indexInfo.username }}</h3>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import { useIndexStore } from '@/store'

const router = useRouter()
const indexInfo = useIndexStore()
const toLogin = () => {
  router.push({
    name: 'Login'
  })
}

onMounted(() => {})
</script>
