<template lang="html">
    <section class="article">
        <p>{{article.title || ''}}</p>
        <div class="markdown" v-html="article.content || ''">
        </div>
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
.markdown pre{
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #F0F0F0;
    border-radius: 3px;
    border: 1px solid #fff;
}
.markdown blockquote{
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
    margin: 10px 0;
}
.markdown ul li{
    list-style: circle;
    margin-top: 5px;
}
</style>
