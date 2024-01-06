import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			layout: 'defaultL',
		}
	},
	getters: {
		layout(state) {
			return state.layout
		},
	},
	mutations: {
		setLayout(state, payload) {
			state.layout = payload
		},
	},
})

export default store
