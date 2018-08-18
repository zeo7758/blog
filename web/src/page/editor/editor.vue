<template lang="html">
    <div class="editor">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="发布时间">
                <span>
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </span>
            </el-form-item>
            <el-form-item label="内容">
                <textarea name="name" class='textInput' v-model="form.desc"></textarea>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">发布</el-button>
                <el-button @click="onSave">暂存</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import common from '../../common/js/common'
export default {
    name: 'editor',
    data() {
        return {
            form:{
                title: '',
                date1: '',
                // date2: '',
                desc: '',
            },
            articleId:''
        }
    },
    methods: {
        onSubmit() {
            let form = this.form;
            let {title,date1,desc} = form;
            if(!title || !date1 || !desc){
                return;
            }
            date1 = common.isDate(date1) ? date1.getTime(): date1;
            this.$axios.post('/blog/addArticle', {
                title,
                desc,
                date1,
                articleId: this.articleId,
                type: 1
            }).then(res => {
                if(res && res.data && res.data.success) {
                    this.$message({
                      message: '发布成功',
                      type: 'warning',
                      onClose: () => {
                          this.$router.push({
                              path: '/main'
                          })
                      }
                    });
                }else{
                    this.$message({
                      message: '发布失败',
                      type: 'warning',
                  })
                }
            })
        },
        onSave() {
            let form = this.form;
            // 暂存为0
            form.type = 0;
            this.$axios.post('/blog/tempSaveArticle', form).then(res => {
                if(res && res.data && res.data.success) {
                    this.$message({
                      message: '暂存成功',
                      type: 'warning',
                      onClose: () => {
                          this.$router.push({
                              path: '/main'
                          })
                      }
                    });
                }else{
                    this.$message({
                      message: '暂存失败',
                      type: 'warning',
                  })
                }
            })
        },
        queryArticle(articleId) {
            let data = {articleId: articleId}
            console.log(data);
            this.$axios.get('/blog/queryArcticle',  {
                params: data
              }).then(res => {
                 let msg = res && res.data && res.data.message;
                  this.form = {
                      title: msg.articleName,
                      date1: msg.time,
                      // date2: '',
                      desc: msg.content
                  }
            })
        },
    },
    created() {
        this.articleId = Number(this.$route.query.articleId) || '';
        console.log(this.articleId);
        if(this.articleId) {
            this.queryArticle(this.articleId)
        }
    }
}
</script>

<style lang="styl">
    .textInput
        border: 1px solid #dcdfe6;
        min-height 400px
        width 100%
        padding 10px
</style>
