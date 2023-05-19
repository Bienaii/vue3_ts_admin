import defaultSettings from '@/settings'
import { storage } from '@/utils/storage'
import { defineStore } from 'pinia'
const { sideTheme, showSettings, topNav, tagsView, fixedHeader, sidebarLogo } = defaultSettings
const storageSetting = storage.get('layout-setting') || ''

export const useSettingsStore = defineStore('settings', {
	state: () => ({
		title: '',
		theme: storageSetting.theme || '#409EFF',
		sideTheme: storageSetting.sideTheme || sideTheme,
		showSettings: showSettings,
		topNav: storageSetting.topNav === undefined ? topNav : storageSetting.topNav,
		tagsView: storageSetting.tagsView === undefined ? tagsView : storageSetting.tagsView,
		fixedHeader: storageSetting.fixedHeader === undefined ? fixedHeader : storageSetting.fixedHeader,
		sidebarLogo: storageSetting.sidebarLogo === undefined ? sidebarLogo : storageSetting.sidebarLogo
	}),
	actions: {
		// 修改布局设置
		changeSetting(data) {
			const { key, value } = data
			if (this.hasOwnProperty(key)) {
				this[key] = value
			}
		}
	}
})
