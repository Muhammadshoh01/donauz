<template>
	<div>
		<router-link to="/" class="logo">
			<img src="../assets/images/mainlogo.png" alt="" />
		</router-link>
		<div class="login">
			<h3>Tizimga kirish</h3>
			<p>Parol va Telefon raqamingizni kiriting</p>
			<input
				type="number"
				class="number"
				placeholder="+9989* *** ** **"
				v-model="number"
			/>
			<input
				type="password"
				placeholder="Parol"
				class="password"
				v-model="password"
			/>
			<button @click="save">Kirish</button>
			<div class="actions">
				<router-link to="/">Ro’yhatdan o’tmaganmisiz?</router-link>
				<router-link to="/">Parolingizni unutdingizmi?</router-link>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
const password = ref('')
const number = ref('')
const save = () => {
	localStorage.setItem('login', [password.value, number.value])
}
</script>

<style lang="scss" scoped>
.logo {
	display: inline-block;
	margin: 20px 0 0 135px;
}
.login {
	text-align: center;
	border-radius: 8px;
	background: #fafafa;
	box-shadow: 0px 1px 5px 0px rgba(62, 62, 62, 0.25);
	padding: 30px 30px 40px 30px;
	width: 547px;
	height: 381px;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	h3 {
		color: #141414;
		font-size: 25px;
		font-weight: 600;
		line-height: 100%;
	}
	p {
		color: #141414;
		font-size: 18px;
		line-height: 100%;
		padding: 20px 0;
		text-align: left;
	}
	input {
		border-radius: 8px;
		background: #e1e1e1;
		padding: 18px 17px;
		color: var(--text-main, #141414);
		font-size: 15px;
		width: 487px;
		height: 50px;
		outline: none;
		border: 1px solid #e1e1e1;
	}
	button {
		border-radius: 8px;
		background: #f77f00;
		padding: 12px 48px;
		color: #fff;
		font-weight: 500;
		line-height: 100%;
		border: none;
		cursor: pointer;
		border-radius: 8px;
		box-shadow: 0px 1px 5px 0px rgba(62, 62, 62, 0.25);
		&:hover {
			background: #ff8401;
		}
	}
	.password {
		margin: 20px 0;
	}
	.actions {
		display: flex;
		align-items: center;
		justify-content: space-between;
		a {
			color: #141414;
			text-decoration: none;
			font-size: 15px;
			margin-top: 20px;
			line-height: 100%; /* 15px */
		}
	}
}

@media (max-width: 600px) {
	.login {
		width: 90%;
		height: auto;
		input {
			width: 100%;
		}
		.actions {
			flex-direction: column;
			padding-bottom: 20px;
		}
	}
	.logo {
		margin: 30px 0 0 15px;
	}
}
</style>
