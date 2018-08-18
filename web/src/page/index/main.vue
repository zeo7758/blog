<template>
  <div class="main">
      <el-container>
        <el-main>
            <articlelist></articlelist>
        </el-main>
        <el-aside width="200px">
            <blog-info></blog-info>
        </el-aside>
      </el-container>
  </div>
</template>

<script>
import articlelist from './../articleList/articleList';
import blogInfo from './../blogInfo/blogInfo';
export default {
    name: 'mains',
    data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
    },
    components:{articlelist,blogInfo}
}
</script>

<style scoped lang="styl">
    .main{

    }
</style>
