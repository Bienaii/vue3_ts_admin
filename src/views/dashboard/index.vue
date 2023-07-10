<template>
  <div>
    <h3>{{ indexInfo.username }}</h3>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import { useIndexStore } from '@/store'
import { getUser } from '@/api/user'

const router = useRouter()
const indexInfo = useIndexStore()
const toLogin = () => {
  router.push({
    name: 'Login'
  })
}
const getData = async () => {
  try {
    const rsp = await getUser()
    console.log(rsp, 'getdata');
    
  } catch (error) {}
}

onMounted(() => {
  getData()
})
</script>
