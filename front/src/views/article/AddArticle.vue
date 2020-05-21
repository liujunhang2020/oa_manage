<template>
    <div class="box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="文章标题" prop="article_title">
                <el-input v-model="ruleForm.article_title"></el-input>
            </el-form-item>

            <el-form-item label="文章作者" prop="article_author_id">
                <el-select v-model="ruleForm.article_author_id" placeholder="请选择文章作者">
<!--                    <el-option label="区域二" value="beijing"></el-option>-->

                    <el-option v-for="item in article_author" :label="item.user_name" :value="item.user_id" :key="item.user_id"></el-option>

                </el-select>
            </el-form-item>

            <el-form-item label="文章内容" prop="article_content">
                <el-input type="textarea" :rows="22" v-model="ruleForm.article_content"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm">立即发布</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "AddArticle",
        data() {
            return {
                article_author: [],
                ruleForm: {
                    article_title: '',
                    article_content: '',
                    article_author_id: ''
                },
                rules: {
                    article_title: [
                        {required: true, message: '请输入文章标题', trigger: 'blur'},
                        {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
                    ],
                    article_content: [
                        {required: true, message: '请填写文章内容', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            submitForm() {
                this.$refs['ruleForm'].validate(valid => {
                    if (valid) {
                        console.log('验证通过')
                        this.$store.dispatch('addArticle', this)
                    }else {
                        console.log('验证失败')
                        return false
                    }
                })
            }
        },
        created() {
            this.$store.dispatch('getAuthor', this)
        }
    }
</script>

<style scoped>
    .box {
        margin: 20px auto;
    }
</style>