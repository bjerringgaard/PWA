import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: "mdi",
	},
	theme : {
		themes: {
			light:{
				primary: '#38895f',
				secondary: '#91b496',
				card: '#f7f3f0',
				cardbg: '#f7f6f5',

				red: '#A53642',
				rose: '#FB9397',
				champange: '#E5B764',
				white: '#FDE3A7',

				bg: '#ffffff',
				darkbg: '#2d3131',
				grey: '#464646',
				darkgrey: '#707070',
				lightgrey: '#cacaca'
			}
		}
	}
});