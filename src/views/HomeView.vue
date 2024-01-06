<template>
	<div>
		<headerVue />
		<main>
			<navbarVue />
			<sortVue />
			<itemsVue />
			<brendsVue />
			<popular />
		</main>
		<footerVue />
	</div>
</template>

<script setup>
import headerVue from '@/components/header.vue'
import navbarVue from '../components/navbar.vue'
import sortVue from '../components/sort.vue'
import itemsVue from '@/components/items.vue'
import brendsVue from '../components/brends.vue'
import popular from '../components/popular.vue'
import footerVue from '../components/footer.vue'

import { useStore } from 'vuex'
const store = useStore()

// const enter = () => {
// 	store.commit('setLayout', 'login')
// }
</script>

<style lang="scss" scoped></style>
