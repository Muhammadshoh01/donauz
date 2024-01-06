<template>
	<div class="nItem container">
		<h2>Ommabop tovarlar</h2>
		<div class="newItem">
			<newItem v-for="(item, index) in 8" :key="index" />
		</div>
		<div class="all">
			<button>Barchasini ko’rish</button>
		</div>
	</div>
</template>

<script setup>
import newItem from '../components/newItem.vue'
</script>

<style lang="scss" scoped>
.newItem {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	justify-items: start;
	column-gap: 30px;
	row-gap: 20px;
	padding: 0 20px;
}

@media (max-width: 1200px) {
	.newItem {
		grid-template-columns: auto auto auto;
	}
}

@media (max-width: 920px) {
	.newItem {
		column-gap: 14px;
	}
	.all {
		display: none;
	}
	.nItem {
		margin-bottom: 80px;
	}
}

@media (max-width: 740px) {
	.newItem {
		grid-template-columns: auto auto;
	}
}

@media (max-width: 590px) {
	.nItem {
		margin-bottom: 10px;
	}
}
</style>
