<template>
	<div class="app-wrapper">
		<SideBar class="sidebar-container"></SideBar>
		<div :class="{ hasTagsView: needTagsView }" class="main-container">
			<div class="fixed-header">
				<NavBar></NavBar>
				<TagsView></TagsView>
			</div>
			<AppMain></AppMain>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import AppMain from './components/AppMain/index.vue'
import NavBar from './components/NavBar/index.vue'
import SideBar from './components/SideBar/index.vue'
import TagsView from './components/TagsView/index.vue'
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore()
const needTagsView = computed(() => settingsStore.tagsView)
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin.scss';
@import '@/assets/styles/variables.scss';
.app-wrapper {
	@include clearfix;
	position: relative;
	height: 100%;
	width: 100%;
}
.fixed-header {
	position: fixed;
	top: 0;
	right: 0;
	z-index: 9;
	width: calc(100% - #{$base-sidebar-width});
	transition: width 0.28s;
}

.hideSidebar .fixed-header {
	width: calc(100% - 54px);
}

.sidebarHide .fixed-header {
	width: 100%;
}

.mobile .fixed-header {
	width: 100%;
}
</style>
