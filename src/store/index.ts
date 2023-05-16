import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
  state: () => {
    return {
      name: 'old name'
    }
  },
  getters: {
    myName: (state) => {
      return `getters ${state.name}`
    }
  }
})
