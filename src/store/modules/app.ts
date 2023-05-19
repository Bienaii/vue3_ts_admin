import { storage } from '@/utils/storage'
import { defineStore } from 'pinia'

const useAppStore = defineStore('app', {
	state: () => ({
		sidebar: {
			opened: storage.get('sidebarStatus') ? !!+storage.get('sidebarStatus') : true,
			withoutAnimation: false,
			hide: false
		}
	}),
	actions: {
		toggleSideBar(withoutAnimation?: boolean) {
			if (this.sidebar.hide) {
				return false
			}
			this.sidebar.opened = !this.sidebar.opened
			this.sidebar.withoutAnimation = withoutAnimation
			if (this.sidebar.opened) {
				storage.set('sidebarStatus', 1)
			} else {
				storage.set('sidebarStatus', 0)
			}
		},
		toggleSideBarHide(status) {
			this.sidebar.hide = status
		}
	}
})

export default useAppStore
