<template>
    <div class="box">

        <el-form :model="form" ref="form" :rules="rules">

            <el-form-item label="用户名" prop="userName">
                <el-input v-model="form.userName"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="passWord">
                <el-input v-model="form.passWord" show-password></el-input>
            </el-form-item>

            <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>

        </el-form>

    </div>
</template>

<script>
    export default {
        name: "Add",
        data() {
            return {
                form: {
                    userName: '',
                    passWord: '',
                    email: ''
                },
                rules: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 10, message: '长度在3到10个字符', trigger: 'blur' }
                    ],
                    passWord: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 3, max: 20, message: '长度在3到20个字符', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ]
                }
            }
        },
        methods: {
            submitForm() {
                this.$refs['form'].validate(valia => {
                    if (valia) {
                        this.$store.dispatch('addUser', this)
                    }else {
                        console.log('error submit')
                        return false
                    }
                })
            }
        }
    }
</script>

<style scoped>
.box {
    margin: 30px 30px 0 30px !important;
}
</style>