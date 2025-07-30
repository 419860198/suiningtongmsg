import webUni from '@/static/uni.webview.1.5.6.js';

export function postUniMessage(params) {
	// #ifdef H5
	const ua = navigator.userAgent;
	if (/miniProgram/i.test(ua) && /micromessenger/i.test(ua)) {
		const weixinApi = jWeixin || wx;
		const url = '/pages/index/serveMsg?params=' + encodeURIComponent(JSON.stringify(params));
		if (weixinApi.miniProgram) {
			weixinApi.miniProgram.navigateTo({
				url: url,
				success: console.log,
				fail: console.log
			});
		} else {
			console.error('微信jsdk未正确引入');
		}
	} else {
		webUni.postMessage({
			data: params
		});
	}
	// #endif
};

// 判断h5是否运行在app中
export const isInApp = !!window.plus