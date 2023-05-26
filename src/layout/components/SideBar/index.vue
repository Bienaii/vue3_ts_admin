<template>
	<div :class="{ 'has-logo': showLogo }" :style="{ backgroundColor: bgColor }">
		<!-- <logo v-if="showLogo" :collapse="isCollapse" /> -->
		<el-scrollbar :class="sideTheme" wrap-class="scrollbar-wrapper">
			<transition mode="out-in">
				<el-menu
					default-active="2"
					:collapse="isCollapse"
					:background-color="bgColor"
					:text-color="textColor"
					:unique-opened="true"
					:active-text-color="theme"
					:collapse-transition="false"
				>
					<sidebar-item v-for="(route, index) in sidebarRouters" :key="route.path + index" :item="route" :base-path="route.path" />
				</el-menu>
			</transition>
		</el-scrollbar>
	</div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import variables from '@/assets/styles/variables.module.scss' // Vite默认支持以 .module.css 为后缀名的 CSS 文件都被认为是一个 CSS modules 文件
import SidebarItem from './SidebarItem.vue'
import useAppStore from '@/store/modules/app'
import useSettingsStore from '@/store/modules/settings'
import usePermissionStore from '@/store/modules/permission'

import { useRouter } from 'vue-router'
const router = useRouter()

const appStore = useAppStore()
const settingsStore = useSettingsStore()
const permissionStore = usePermissionStore()

const sidebarRouters = computed(() => permissionStore.sidebarRouters)
const showLogo = computed(() => settingsStore.sidebarLogo)
const sideTheme = computed(() => settingsStore.sideTheme)
const theme = computed(() => settingsStore.theme)
const isCollapse = computed(() => !appStore.sidebar.opened)

const bgColor = computed(() => (sideTheme.value === 'theme-dark' ? variables.menuBackground : variables.menuLightBackground))
const textColor = computed(() => (sideTheme.value === 'theme-dark' ? variables.menuColor : variables.menuLightColor))

</script>

<style lang="scss" scoped></style>
