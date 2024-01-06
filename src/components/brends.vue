<template>
	<div class="brends container">
		<div class="brend">
			<img src="../assets/images/apple.png" alt="" />
		</div>
		<div class="brend">
			<img src="../assets/images/lg.png" alt="" />
		</div>
		<div class="brend">
			<img src="../assets/images/acer.png" alt="" />
		</div>
		<div class="brend">
			<img src="../assets/images/sony.png" alt="" />
		</div>
		<div class="brend">
			<img src="../assets/images/asus.png" alt="" />
		</div>
		<div class="brend">
			<img src="../assets/images/hp.png" alt="" />
		</div>
	</div>
</template>

<script></script>

<style lang="scss">
.brends {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	.brend {
		border-radius: 8px;
		border: 1px solid #f0f0f0;
		background: #fff;
		box-shadow: 0px 1px 5px 0px rgba(182, 182, 182, 0.25);
		width: 170px;
		height: 108px;

		display: flex;
		align-items: center;
		justify-content: center;
	}
}

@media (max-width: 1200px) {
	.brends {
		flex-wrap: wrap;
		gap: 35px;
		justify-content: flex-start;
	}
}

@media (max-width: 920px) {
	.brends {
		gap: 20px;
	}
	.brends .brend {
		width: 30%;
	}
}

@media (max-width: 590px) {
	.brends {
		gap: 10px;
	}
	.brends .brend {
		width: 48%;
	}
}
</style>
