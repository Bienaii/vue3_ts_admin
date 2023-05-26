<template>
  <div>
    <h3>{{ indexInfo.username }}</h3>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useIndexStore } from '@/store'
import { onMounted } from 'vue'

const router = useRouter()
const indexInfo = useIndexStore()
const toLogin = () => {
  router.push({
    name: 'Login'
  })
}

onMounted(() => {})
</script>
