<template>
  <div class="main">
      <el-container>
        <el-main>
            mian
        </el-main>
        <el-aside width="200px">Aside</el-aside>
      </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="styl">
    .main{
        max-width: 1000px;
        margin: 0 auto;
    }
</style>
