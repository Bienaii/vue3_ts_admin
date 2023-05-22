<template>
  <div>
    <h1>{{ indexInfo.name }}</h1>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useIndexStore } from '@/store'
import { getInfo } from '@/api/user'
import { onMounted } from 'vue'

const router = useRouter()
const indexInfo = useIndexStore()
const toLogin = () => {
  router.push({
    name: 'Login'
  })
}

const getUserInfo = async () => {
  try {
    const rsp = await getInfo()
    console.log('rsp: ', rsp)
  } catch (error) {
    /* empty */
  }
}

onMounted(() => {
  getUserInfo()
})
</script>
