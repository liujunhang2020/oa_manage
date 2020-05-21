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
                        <el-button type="text" size="small" @click="delUser(scope.row.user_id)">删除</el-button>
                        <el-button type="text" size="small" @click="updateUser(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="getUser"
                    :page-count="pageNum">
            </el-pagination>

            <el-dialog title="编辑用户" :visible.sync="dialogFormVisible" center style="margin-left: 200px">
                <el-form :model="form">
                    <el-form-item label="用户名" :label-width="formLabelWidth">
                        <el-input v-model="form.userName" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="邮箱" :label-width="formLabelWidth">
                        <el-input v-model="form.email" autocomplete="off"></el-input>
                    </el-form-item>

                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="updateInfo">确 定</el-button>
                </div>
            </el-dialog>



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
                    state: 1,
                    vm: this
                }
                this.$store.dispatch('getUserList', info)
            },
            delUser(id) {
                // console.log(params)
                this.$store.dispatch('delUser', { vm:this, id })
                this.getUser(this.pageIndex)
            },
            updateUser(params) {
                this.form.userName = params.user_name
                this.form.email = params.user_email
                this.form.userId = params.user_id
                this.dialogFormVisible = true
            },
            updateInfo() {
                this.dialogFormVisible = false
                this.$store.dispatch('updateUserInfo', this)
                this.getUser(this.pageIndex)
            }
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