<template>
	<nav class="navbar">
		<div class="navbar__inner container">
			<div class="navbar__item navbar__item_1">
				<img src="../assets/images/mainlogo.png" alt="" />
			</div>
			<div class="navbar__item navbar__item_2">
				<input type="search" placeholder="Izlash..." />
				<span class="navbar__search">
					<img src="../assets/images/search.svg" alt="" />
				</span>
				<div class="search">
					<div class="search__item">
						<img src="../assets/images/watch.png" alt="" />
						<div>
							<h3>Smart Watch (M16Plus)</h3>
							<p>159.000 so’m</p>
						</div>
					</div>
					<div class="search__item">
						<img src="../assets/images/watch.png" alt="" />
						<div>
							<h3>Smart Watch (M16Plus)</h3>
							<p>159.000 so’m</p>
						</div>
					</div>
					<div class="search__item">
						<img src="../assets/images/watch.png" alt="" />
						<div>
							<h3>Smart Watch (M16Plus)</h3>
							<p>159.000 so’m</p>
						</div>
					</div>
				</div>
			</div>
			<div class="navbar__item navbar__item_3">
				<img
					class="search__dark"
					src="../assets/images/search_dark.svg"
					alt=""
				/>
				<img src="../assets/images/cart.svg" alt="" />
				<img src="../assets/images/user.svg" alt="" />
			</div>
		</div>
	</nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
	padding: 18px 20px;
	box-shadow: 0px 7px 5px 0px rgba(208, 208, 208, 0.15);
	&__inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__search {
		background-color: #f77f00;
		cursor: pointer;
	}
	&__item {
		position: relative;
		.search {
			position: absolute;
			top: 60px;
			left: 0;
			right: 0;

			border-radius: 10px;
			background: #fff;
			padding: 10px 5px;

			display: flex;
			flex-direction: column;
			gap: 10px;

			opacity: 0;
			pointer-events: none;
			transition: opacity 0.3s ease-in-out;

			/* k */
			box-shadow: 0px 1px 5px 1px rgba(86, 86, 86, 0.15);
			&__item {
				display: flex;
				gap: 10px;
				align-items: center;
				row-gap: 10px;
				padding: 7px 11px;
				&:hover {
					background-color: #f5f5f5;
					border-radius: 10px;
				}
				h3 {
					color: #490d2a;
					font-size: 14px;
					padding-bottom: 25px;
				}
				p {
					color: #f77f00;
					font-size: 14px;
					font-weight: 500;
				}
				img {
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
		&_2 {
			display: flex;
		}
		&_3 {
			display: flex;
			gap: 23px;
		}
		input {
			border-radius: 10px 0px 0px 10px;
			border: 1px solid rgba(128, 128, 128, 0.5);
			background: #fff;
			width: 494px;
			height: 45px;
			color: rgba(128, 128, 128, 0.5);
			padding: 10px 19px;
			font-size: 18px;
			font-weight: 500;
			outline: none;
		}
		span {
			border-radius: 0px 10px 10px 0px;
			border: 1px solid #f77f00;
			background: #f77f00;
			display: flex;
			width: 57px;
			height: 45px;
			padding: 9px 16px;
			align-items: flex-start;
			gap: 10px;
			flex-shrink: 0;
		}
	}
}
@media (max-width: 920px) {
	.navbar__item {
		input {
			width: 235px;
			height: 40px;
			font-size: 16px;
		}
		span {
			width: 43px;
			height: 40px;
			padding: 9px 16px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}

@media (max-width: 590px) {
	.navbar__item {
		input,
		.navbar__search {
			display: none;
		}
	}
	.navbar__item_1 {
		img {
			width: 103px;
		}
	}
}
</style>
