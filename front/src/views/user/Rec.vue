<template>
    <el-container>

        <el-header>
            <!--            张三  小三 李四
            三 ==》 张三 、 小三
            -->
            <el-input v-model="keywords" style="width:200px;" placeholder="请输入内容"></el-input>
            <el-button type="primary" @click="getUser">搜索</el-button>
        </el-header>

        <el-main>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        fixed
                        prop="user_id"
                        label="用户id"
                        width="90">
                </el-table-column>
                <el-table-column
                        prop="user_name"
                        label="用户名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="user_email"
                        label="邮箱"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="user_create_time"
                        label="创建时间"
                        width="120">
                </el-table-column>

                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="RecUser(scope.row.user_id)">恢复</el-button>

                    </template>
                </el-table-column>
            </el-table>

            <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="getUser"
                    :page-count="pageNum">
            </el-pagination>





        </el-main>

    </el-container>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                keywords: '',
                tableData: [],
                pageIndex: 1,
                pageNum: 1,
                form: {
                    userName: '',
                    email: '',
                    userId: 1
                },
                formLabelWidth: '120px',
                dialogFormVisible: false
            }
        },
        methods: {
            // keywords pageIndex state
            getUser(pageIndex) {
                this.pageIndex = pageIndex || 1
                const info = {
                    pageIndex:  this.pageIndex,
                    keywords: this.keywords,
                    state: 2,
                    vm: this
                }
                this.$store.dispatch('getUserList', info)
            },
            RecUser(id) {
                // console.log(params)
                this.$store.dispatch('delUser', { vm:this, id,state:1 })
                this.getUser(this.pageIndex)
            },
            // updateUser(params) {
            //     this.form.userName = params.user_name
            //     this.form.email = params.user_email
            //     this.form.userId = params.user_id
            //     this.dialogFormVisible = true
            // },
            // updateInfo() {
            //     this.dialogFormVisible = false
            //     this.$store.dispatch('updateUserInfo', this)
            //     this.getUser(this.pageIndex)
            // }
        },
        created() {
            this.getUser()
        }
    }
</script>

<style scoped>
    .el-button {
        margin-left: 10px;
    }
    .el-header, .el-main {
        margin: 10px auto;
    }
</style>