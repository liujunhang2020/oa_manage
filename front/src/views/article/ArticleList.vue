<template>
    <el-container>
        <el-header>
            <el-row :gutter="40">
                <el-col :span="12">
                    文章标题：<el-input @input="getArticle"  type="text"  style="width: 80%" v-model="keywords" placeholder="请输入标题关键字"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="40">

            </el-row>
        </el-header>

        <el-main>
            <el-table :data="tableData" style='width: 100%;' border>
                <el-table-column width='100' label='id' prop='article_id' fixed></el-table-column>
                <el-table-column width="100" label='文章标题' prop='article_title'></el-table-column>
                <el-table-column label='文章内容' width="300" prop='article_content'></el-table-column>
                <el-table-column width="200"  label='创建时间' prop='article_create_time'></el-table-column>
                <el-table-column width="150"  label='作者' prop='user_name'></el-table-column>

                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button type="text"  size="small" @click="delArticle(scope.row.article_id)">删除</el-button>
                        <el-button type="text" size="small" >编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "ArticleList",
        data() {
            return {
                keywords: '',
                tableData: [],
                state: 1
            }
        },
        methods: {
            getArticle() {
                this.$store.dispatch('getArticle', this)
            },
            delArticle(id) {
                // console.log(id)

                this.$store.dispatch('changeArticleState', { id, vm:this })
                this.getArticle()

            }
        },
        created() {
            this.getArticle()
        }

    }
</script>

<style scoped>
    .el-header, .el-main {
        margin: 10px 10px 0 30px;
    }
</style>