<template>
	<div class="navbar">
		<Hamburger class="hamburger-container" :is-active="appStore.sidebar.opened" @toggleClick="toggleSideBar"></Hamburger>
	</div>
</template>

<script lang="ts" setup>
import {} from 'vue'
import Hamburger from '@/components/Hamburger/index.vue'
import useAppStore from '@/store/modules/app'
const appStore = useAppStore()

const toggleSideBar = () => {
	appStore.toggleSideBar()
}
</script>

<style lang="scss" scoped>
.navbar {
	height: 50px;
	overflow: hidden;
	position: relative;
	background: #fff;
	box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
	.hamburger-container {
		line-height: 46px;
		height: 100%;
		float: left;
		cursor: pointer;
		transition: background 0.3s;
		-webkit-tap-highlight-color: transparent;

		&:hover {
			background: rgba(0, 0, 0, 0.025);
		}
	}
}
</style>
