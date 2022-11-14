/*
 * @Author: BoHai
 * @Date: 2022-11-14 15:22:41
 * @LastEditTime: 2022-11-14 16:54:04
 * @LastEditors: BoHai
 * @Description: 
 * @FilePath: /backstageeditapp/src/main.js
 */
import { createApp } from 'vue';
import App from './App.vue';
import { Input, DatePicker, message } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './assets/main.css';

const app = createApp(App); 
app.use(Input);
app.use(DatePicker);
app.config.globalProperties.$message = message;
app.mount('#app')
