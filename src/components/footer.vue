<template>
	<footer>
		<div class="footer container">
			<router-link to="/" class="logo">
				<img src="../assets/images/darklogo.png" alt="" />
			</router-link>
			<div>
				<h4>Kompaniya</h4>
				<ul>
					<li>Biz haqimizda</li>
					<li>Aloqa</li>
					<li>Hamkorlarimiz</li>
				</ul>
			</div>
			<div>
				<h4>To’lov turlari</h4>
				<ul class="price">
					<li>
						<a href="#">
							<img src="../assets/images/uzcard.png" alt="" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../assets/images/click.png" alt="" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../assets/images/viza.png" alt="" />
						</a>
					</li>
					<li class="uzcard">
						<a href="#">
							<img src="../assets/images/uzcard.png" alt="" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src="../assets/images/payme.png" alt="" />
						</a>
					</li>
				</ul>
			</div>
			<div class="contact">
				<h4>Aloqa uchun</h4>

				<div class="contact__info">
					<span>
						<img src="../assets/images/location.svg" alt="location icon" />
						<p>Toshkent, O’zbekiston</p>
					</span>
					<span>
						<img src="../assets/images/phone.svg" alt="telephone number" />
						<a href="tel:+998954012021">+99895 401-20-21</a>
					</span>
				</div>
			</div>
			<div>
				<h4>Ijtimoiy tarmoqlarda</h4>
				<ul class="social">
					<li>
						<a href="#"><img src="../assets/images/telegram.png" alt="" /></a>
					</li>
					<li>
						<a href="#"><img src="../assets/images/instagram.png" alt="" /></a>
					</li>
					<li>
						<a href="#"><img src="../assets/images/facebook.png" alt="" /></a>
					</li>
				</ul>
			</div>
		</div>
		<div class="copy container">
			<p class="dona">&copy; 2021 Donauz</p>
			<p>Sayt GREATSOFT kompaniyasi tomonidan ishlab chiqildi</p>
		</div>
	</footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
	background: #111344;
	padding: 60px 50px 0 50px;
	.copy {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #fff;
		padding-top: 30px;
		padding-bottom: 60px;
	}
}
.footer {
	display: grid;
	gap: 65px;
	grid-template-columns: 1fr auto 1fr 1fr auto;
	h4 {
		color: #fff;
		font-size: 22px;
		font-weight: 700;
		padding-bottom: 35px;
	}
	ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 15px;
		li {
			color: #fff;
			display: flex;
			align-items: center;
			gap: 7px;
		}
	}
	.price {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 15px;
	}
	.social {
		display: flex;
		flex-direction: row;
		gap: 30px;
	}
	.contact {
		&__info {
			display: flex;
			flex-direction: column;
			gap: 15px;
		}
		span {
			display: flex;
			align-items: center;
			gap: 7px;
			color: #fff;
		}
		a {
			color: #fff;
			text-decoration: none;
		}
	}
}

@media (max-width: 1200px) {
	.footer {
		grid-template-columns: auto auto auto auto auto;
		gap: 45px;
	}
}

@media (max-width: 1000px) {
	.footer {
		grid-template-columns: auto auto auto;
		gap: 45px;
	}
}

@media (max-width: 920px) {
	.footer .logo {
		grid-column: 1/-1;
	}
	.footer {
		grid-template-columns: auto auto;
		justify-items: start;
	}
	.dona {
		display: none;
	}
	footer {
		.copy {
			justify-content: flex-end;
		}
	}
}

@media (max-width: 590px) {
	.footer {
		grid-template-columns: auto;
		.contact,
		.uzcard {
			display: none;
		}
	}
	footer {
		padding-bottom: 30px;
		.copy {
			display: none;
		}
	}
}
</style>
