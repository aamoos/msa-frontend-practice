import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import router from './routers'; // 라우터 설정을 가져옴
import { instance } from './axios'

const app = createApp(App);
app.use(Antd);
app.use(router);
app.provide('axios', instance)

app.mount('#app');