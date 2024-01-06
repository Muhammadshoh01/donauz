<script setup></script>

<template>
	<div>
		<router-link to="/" class="new-item">
			<img src="../assets/images/joy.png" class="main" alt="" />
			<div class="item">
				<div class="item__data">
					<h4 class="item__title">Choyshab Lelit</h4>
					<div>
						<img src="../assets/images/star.svg" alt="" />
						<p class="item__rating">4.3</p>
					</div>
				</div>
				<div class="item__cost">
					<h6 class="item__price">149,000 so’m</h6>
					<img src="../assets/images/cart.svg" alt="" />
				</div>
			</div>
		</router-link>
	</div>
</template>

<style lang="scss" scoped>
.new-item {
	border-radius: 8px;
	background: #fff;

	box-shadow: 0px 1px 5px 0px rgba(182, 182, 182, 0.25);
	.main {
		transition: all 0.3s linear;
	}
}
a {
	text-decoration: none;
}
.item {
	padding: 10px;
	text-decoration: none;
	&__data {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 12px;
		div {
			display: flex;
		}
	}
	&__title {
		color: #490d2a;
		font-size: 14px;
		text-decoration: none;
	}
	&__rating {
		color: #666;
		font-size: 12px;
	}
	&__price {
		color: #490d2a;
		font-size: 18px;
		font-weight: 500;
	}
	&__cost {
		display: flex;
		align-items: center;
		justify-content: space-between;
		img {
			width: 27px;
			height: 26px;
		}
	}
}

@media (max-width: 920px) {
	.new-item {
		.main {
			width: 224px;
		}
	}
}

@media (max-width: 740px) {
	.new-item {
		.main {
			width: 100%;
		}
	}
}
</style>
