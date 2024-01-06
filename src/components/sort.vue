<template>
	<div class="sort container">
		<router-link
			v-for="(sort, index) in sorts"
			:key="index"
			:to="sort.link"
			class="sort__items container"
		>
			<img :src="getImg(sort.img)" alt="" />
			<p>{{ sort.title }}</p>
		</router-link>
	</div>
</template>

<script setup>
import { ref } from 'vue'
const sorts = ref([
	{
		title: 'Uy va hovli uchun',
		link: '/',
		img: 'home',
	},
	{
		title: 'Bolalar uchun',
		link: '/',
		img: 'child',
	},
	{
		title: 'Sovg’alar',
		link: '/',
		img: 'gift',
	},
	{
		title: 'Automobillar uchun',
		link: '/',
		img: 'car',
	},
	{
		title: 'Smartfonlar',
		link: '/',
		img: 'phone',
	},
	{
		title: 'Go’zallik va salomatlik',
		link: '/',
		img: 'health',
	},
	{
		title: 'Quloqchinlar ',
		link: '/',
		img: 'earphone',
	},
	{
		title: 'Aqlli soatlar',
		link: '/',
		img: 'clock',
	},
	{
		title: 'Kolonkalar',
		link: '/',
		img: 'hear',
	},
	{
		title: 'Kitoblar',
		link: '/',
		img: 'book',
	},
	{
		title: 'Voyaga yetganalar uchun',
		link: '/',
		img: 'adult',
	},
	{
		title: 'Bolajonlar',
		link: '/',
		img: 'children',
	},
])
const getImg = (link) => {
	return new URL(`/src/assets/images/types/${link}.png`, import.meta.url)
}
</script>

<style lang="scss" scoped>
.sort {
	padding: 0 20px;
	display: grid;
	gap: 30px;
	grid-template-columns: auto auto auto auto auto;
	margin-top: 40px;
	a {
		text-decoration: none;
		&:hover p {
			color: #f77f00;
		}
	}
	p {
		margin-top: 7px;
		color: #250615;
		font-weight: 500;
		transition: all 0.2s ease;
		text-align: center;
	}
}

@media (max-width: 1000px) {
	.sort {
		grid-template-columns: auto auto auto auto;
	}
}

@media (max-width: 920px) {
	.sort {
		grid-template-columns: auto auto auto;
	}
}

@media (max-width: 590px) {
	.sort {
		grid-template-columns: auto auto;
		gap: 15px;
	}
}
</style>
