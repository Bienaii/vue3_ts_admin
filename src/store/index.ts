import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
  state: () => {
    return {
      name: 'hey, young man'
    }
  },
  getters: {
    myName: (state) => {
      return `getters ${state.name}`
    }
  }
})
