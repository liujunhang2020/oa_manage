<template>
    <div class="login_box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">

            <el-form-item label="用户名" prop="userName">
                <el-input v-model="ruleForm.userName"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="passWord">
                <el-input show-password v-model="ruleForm.passWord"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                ruleForm: {
                    userName: '',
                    passWord: ''
                },
                rules: {
                    userName: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
                    ],
                    passWord: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            submitForm() {
                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch('login', this)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login_box {
        width: 500px;
        height: 400px;
        /*border: 1px solid #e3e3e3;*/
        margin: 100px auto;
    }
</style>