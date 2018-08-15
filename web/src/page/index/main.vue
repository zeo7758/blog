<template>
  <div class="main">
      <el-container>
        <el-main>
            <articlelist></articlelist>
        </el-main>
        <el-aside width="200px">Aside</el-aside>
      </el-container>
  </div>
</template>

<script>
import articlelist from './../articleList/articleList'
export default {
    name: 'mains',
    data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
    },
    components:{articlelist}
}
</script>

<style scoped lang="styl">
    .main{
        max-width: 960px;
        margin: 0 auto;
        background: #fff;
    }
</style>
