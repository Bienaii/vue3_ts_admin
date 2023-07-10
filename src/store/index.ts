import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getUser } from '@/api/user'
export const useIndexStore = defineStore('index', () => {
	const username = ref()
	const age = ref()
	const sex = ref()

	// 获取用户信息
	const getUserInfo = async (): Promise<void> => {
		try {
			const res = await getUser()
			username.value = res.data.username
			age.value = res.data.age
			sex.value = res.data.sex
			return new Promise(resolve => resolve(res))
		} catch (error) {
			return Promise.reject(error)
		}
	}
	return {
		username,
		age,
		sex,
		getUserInfo
	}
})
export default useIndexStore
