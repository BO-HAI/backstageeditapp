<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
	<form action="/process_post" method="post">
    <a-date-picker />
    <a-input v-model:value="value" placeholder="Basic usage" />
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
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
