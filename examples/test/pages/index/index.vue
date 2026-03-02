<template>
	<view class="content">
		<VuUser size="24" color="#333" />
		<text>uv-icons图标</text>
	</view>
</template>

<script setup>
	import VuUser from '../../node_modules/vu-icons/dist/uniapp/VuUser.vue'
	import VuSearch from '../../node_modules/vu-icons/dist/uniapp/VuSearch.vue'
	console.log('VuUser component:', VuUser)
	console.log('VuSearch component:', VuSearch)
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
