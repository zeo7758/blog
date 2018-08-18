<template lang="html">
  <section class="blogInfo">
        <div class="head-wrap">
            <img src="../../common/image/head.jpg" alt="" class='headImg'>
        </div>
        <div class="wrap">
            <!-- <p class='titl'>关于我</p> -->
            <ul class='infos'>
                <li>姓名：朱。。</li>
                <li>职业：web前端开发</li>
                <li>邮箱：1322879355@qq.com</li>
                <li>定位：上海</li>
                <!-- <li></li> -->
            </ul>
        </div>
        <div class="word">
            web前端开发，就职于上海。愿未来更好。
        </div>
        <div class="link">
            <p class='titl'>相关链接</p>
            <ul>
                <li>
                    <a target='_blank' href="https://github.com/zeo7758">github</a>
                </li>
            </ul>
        </div>

  </section>
</template>

<script>
export default {
}
</script>

<style lang="styl">
.blogInfo
    width 100%
    padding 10px
    .head-wrap
        width 80px
        height 80px
        border-radius 50%
        overflow hidden
        margin 0 auto 20px
    .wrap
        .titl
            font-size 16px
            font-weight 400
        .infos
            font-size 12px
            li
                line-height 36px
                border-bottom: 1px solid #ecf0f5
    .link
        margin-top 50px
        font-size 12px
        li
            line-height 36px
        .titl
            font-size 16px
            font-weight 400
            line-height 36px
            border-bottom: 1px solid #ecf0f5
    .word
        font-size 12px
        line-height 20px

</style>
