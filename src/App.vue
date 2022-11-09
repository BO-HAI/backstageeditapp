<template>
	<img alt="Vue logo" src="./assets/logo.png">
	<HelloWorld msg="Welcome to Your Vue.js App"/>
	<form action="/process_post" method="post">
		<p class="form-item">
			<label for="">文件名:</label>
			<input type="text" name="fileName" placeholder="文件名: xxx.vue">
		</p>
		<p class="form-item">
			<label for="">输出路径:</label>
			<input type="text" name="output" placeholder="输出路径: ./src/views/">
		</p>
		<p class="form-item">
			<label for="">页面类型:</label>
			<select name="type" id="">
				<option value="list-page">列表查询页面</option>
				<option value="form-page">表单提交页面</option>
			</select>
		</p>	
		<input type="submit" value="提交">
	</form>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
	name: 'App',
	components: {
		HelloWorld
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
