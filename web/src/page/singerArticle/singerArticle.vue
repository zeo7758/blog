<template lang="html">
    <section class="article">
        <p class="title" v-html="article.title || ''"></p>
        <div class="markdown-body" v-html="article.content || ''"></div>
    </section>
</template>

<script>
export default {
    name: 'singerArticle',
    data() {
        return {
            article:{}
        }
    },
    methods: {
        getArticle(id) {
            let data = {articleId: id}
            console.log(data);
            this.$axios.get('/blog/queryArcticle',  {
                params: data
              }).then(res => {
                 let msg = res && res.data && res.data.message;
                  this.article = {
                      title: msg.articleName,
                      time: msg.time,
                      // date2: '',
                      content: msg.md
                  }
            })
        }
    },
    created(){
        let articleId = this.$route.params.id || 0;
        // this.article.
        // console.log(articleId)
        this.getArticle(articleId)
    }
}
</script>

<style lang="styl">
.article
    padding 40px 0
.title
    font-size 36px
    font-weight 400
    padding 0 45px

</style>
