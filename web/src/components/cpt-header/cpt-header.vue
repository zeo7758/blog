<template lang="html">
  <div class="cpt-header">
      <el-row :gutter="10">
          <el-col :span="20"><div class="title">小龘龘</div></el-col>
          <el-col :span='4' type="flex">
              <el-col :span='8'><div class="grid-content bg-purple-light" @click='goAbout'>关于</div></el-col>
              <el-col :span='8'><div class="grid-content bg-purple" @click='goArticleList'>列表</div></el-col>
              <el-col :span='8'><div class="grid-content bg-purple-light" @click='goLogin'>登录</div></el-col>
          </el-col>
      </el-row>
  </div>
</template>
<script>
export default {
    name: "cpt-head",
    data() {
        return {

        }
    },
    methods: {
        goAbout() {
            this.$router.push({
                path:'/about'
            })
        },
        goArticleList() {
            this.$router.push({
                path:'/articleList'
            })
        },
        goLogin() {
            this.$router.push({
                path:'/login'
            })
        }
    }

}
</script>

<style lang="styl">
    .cpt-header
        height 60px
        width 100%
        background black
        color white
        line-height 60px
        .title
            padding-left 36px

</style>
