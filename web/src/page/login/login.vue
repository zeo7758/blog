<template lang="html">
    <div class="login">
        <div class='wrapper'>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="昵称">
                  <el-input placeholder="请输入昵称" v-model="form.name"  clearable></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input placeholder="请输入密码" v-model="form.password"  type="password" clearable></el-input>
                </el-form-item>
                <el-form-item>
                   <el-button type="primary" @click="onSubmit">确定</el-button>
                   <el-button>取消</el-button>
                 </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'login',
    data() {
        return {
            form: {
                name: '',
                password: '',
            }
        }
    },
    methods: {
        onSubmit() {
            axios.post('/blog/signIn', {
                name: this.form.name,
                password: this.form.password,
            }).then(res => {
                if(res.data && res.data.success) {
                    this.$message({
                      message: '登录成功',
                      type: 'warning',
                      onClose: () => {
                          this.$router.push({
                              path: '/main'
                          })
                      }
                    });

                }else{
                    this.$message({
                      message: '登录失败',
                      type: 'warning'
                    });
                }
            })
        }
    },
    created(){

    }
}
</script>

<style lang="styl">
    .login
        padding-top 100px
        .wrapper
            width 320px
            margin 0 auto

</style>
