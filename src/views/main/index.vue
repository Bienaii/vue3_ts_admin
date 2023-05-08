<template>
    <h1>{{ indexInfo.name }}</h1>
    <el-button @click="toLogin">toLogin</el-button>
    <router-view></router-view>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useIndexStore } from '@/store';

const router = useRouter()
const indexInfo = useIndexStore()
const toLogin = () => {
    router.push({
        name: 'login'
    })
}
</script>