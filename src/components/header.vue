<template>
	<header class="header">
		<div class="container header__inner">
			<div class="header__data">
				<span class="header__info">
					<img src="../assets/images/location.svg" alt="location icon" />
					<p>Toshkent, O’zbekiston</p>
				</span>
				<span class="header__info">
					<img src="../assets/images/phone.svg" alt="telephone number" />
					<a href="tel:+998954012021">+99895 401-20-21</a>
				</span>
			</div>
			<div class="header__links">
				<router-link to="/login" @click="enter">Kirish</router-link>
				<router-link to="/">Ro'yxatdan o'tish</router-link>
			</div>
		</div>
	</header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
	background: #f77f00;
	padding: 13px 20px;
	&__data {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	&__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__links {
		display: flex;
		gap: 17px;
		align-items: center;
		a {
			font-size: 12px;
			color: white;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}
	}
	&__info {
		display: flex;
		align-items: center;
		gap: 5px;
		a,
		p {
			font-size: 14px;
			font-weight: 500;
			line-height: 16px;
			color: white;
			text-decoration: none;
		}
		a:hover {
			text-decoration: underline;
		}
	}
}
@media (max-width: 920px) {
	.header__links {
		display: none;
	}
	.header__data {
		justify-content: space-between;
		width: 100%;
	}
}

@media (max-width: 590px) {
	.header__data {
		gap: 0;
	}
}
</style>
