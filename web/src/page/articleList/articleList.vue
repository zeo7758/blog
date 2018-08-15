<template lang="html">
  <div class="articleList">
      <ul class="list">
          <li class="article" v-for="art in articleList">
              <h4 class="title">{{art.articleName}}</h4>
              <div class="content">
                  {{art.content}}
              </div>
              <!-- posted @ 2017-11-09 11:01 小龘龘 阅读(27) 评论(0) 编辑 -->
              <div class="info">
                  <span>{{formatDate(art.time)}}</span>
                  <!-- <span>阅读</span>
                  <span>评论</span> -->
                  <span @click='editorArticle(art.articleId)' class='editor'>编辑</span>
              </div>
          </li>
      </ul>
      <div class="btnwrap">
          <span class='prev' @click='prev' v-show="pageIndex > 1">←prev</span>
          <span class="next" @click='next' v-show='nextShow'>→next</span>
      </div>
  </div>
</template>

<script>
const LIMIT = 4;
import common from './../../common/js/common'
export default {
    name: 'articleList',
    data() {
        return {
            articleList:[],
            pageIndex: 1,
            nextShow:true
        }
    },
    methods: {
        formatDate(t) {
            return common.dateFormat(t, "YY-MM-DD")
        },
        prev() {
            this.pageIndex --;
            if(this.pageIndex <=0) {
                this.pageIndex = 0;
            }
            this.getList();
        },
        next() {
            this.pageIndex ++;
            this.getList();
        },
        getList() {
            this.$axios.get('/blog/getArticleList',{
                params: {
                    limit: LIMIT,
                    pageIndex: this.pageIndex,
                }
            }).then(res => {
                // articleId:1
                // articleName:"闭包的理解"
                // comment:"type-1已经完成，type-0,暂存"
                // content"闭包的理解。理解个鬼啊"
                // time"2018-08-06 12:20:10"
                // console.log( res.data);
                this.articleList = res.data && res.data.message || [];

                 // 判断nex按钮是否需要存在
                let num = res.data && res.data.number;
                if(num <=  this.pageIndex * LIMIT) {
                    this.nextShow = false
                }else{
                    this.nextShow = true;
                }
            })
        },
        editorArticle(id) {
            this.$router.push({
                path: '/editor',
                query: {
                    articleId: id
                }
            })
        }
    },
    created() {
        this.getList();
    }
}
</script>

<style lang="styl">
.articleList
    .list
        .article
            margin-bottom 18px
            border-bottom 1px solid #DCDFE6
            padding-bottom 16px
            .title
                font-size 18px
                font-weight 400
                width 100%
                text-overflow ellipsis
                overflow hidden
                white-space nowrap
            .content
                height 40px
                font-size 14px
                color #909399
                margin 8px 0
                display -webkit-box
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow hidden
            .info
                font-size 0
                color #909399
                .editor
                    padding 0 10px
                    cursor pointer
                span
                    font-size 12px
                    padding-right 10px
    .btnwrap
        width 100%
        span
            padding 3px 10px
            cursor pointer
        .prev
            float left
        .next
            float right
</style>
