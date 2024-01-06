<template>
	<component :is="layout">
		<RouterView />
	</component>
</template>

<script>
import { ref, computed } from 'vue'
import defaultL from './layout/default.vue'
import login from './layout/login.vue'

export default {
	components: {
		login: login,
		default: defaultL,
	},
	computed: {
		layout() {
			return this.$store.getters.layout
		},
	},
}
</script>

<style scoped></style>
