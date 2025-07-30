import App from './App'
import VConsole from 'vconsole';

import {
	createSSRApp
} from 'vue'

const vConsole = new VConsole();

export function createApp() {
	const app = createSSRApp(App)
	app.use(vConsole);
	return {
		app
	}
}