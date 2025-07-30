<template>
	<view class="content">
		<view class="methods">
			<button @click="jump">跳转</button>
			<button @click="onSendMessage">发送消息</button>
			<button @click="toLogin">登录</button>
			<button @click="onScanQRCode">扫码</button>
			<button @click="onShare">分享</button>
		</view>
		<text class="text">{{ log }}</text>
	</view>
</template>

<script>
import { isInApp, postUniMessage } from '@/utils/uni-message';

export default {
	data() {
		return {
			title: 'Hello',
			log: ''
		};
	},
	onLoad() {},
	methods: {
		jump() {
			// app中可用
			plus.runtime.openURL('alipay://xxx');
		},
		onSendMessage() {
			postUniMessage({
				method: 'mp',
				mpID: 'gh_07a51e585b9c',
				path: 'pages%2Fhome%2Fhome%3Fg_no%3D1451645910%26who_no%3D1161047782',
				appId: 'wx58af2ff5ee236123',
				mptype: 0
			});
		},
		toLogin() {
			postUniMessage({
				method: 'login',
				type: 0,
				redirectUri: encodeURIComponent('https://m.baidu.com?a=b')
			});
		},
		onScanQRCode() {
			if (!window.scanResult) {
				window.scanResult = (res) => {
					console.log(res);
				};
			}
			postUniMessage({
				method: 'scanQRCode',
				redirectUrl: 'https://m.baidu.com',
				//app
				callBackFun: 'scanResult',
				scene: '停车'
			});
		},
		onShare() {
			if (isInApp) {
				console.log('app中可以分享');
				postUniMessage({
					method: 'share',
					title: '名称',
					weburl: 'https://m.baidu.com'
				});
			} else {
				uni.showToast({
					title: '非app 环境不支持分享',
					icon: 'none'
				});
			}
		}
	}
};
</script>

<style>
.content {
	display: flex;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}
.methods {
	padding: 16px;
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}
</style>
