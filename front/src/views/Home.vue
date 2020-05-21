<template>

    <el-main>

        <el-row>
            <el-col :span="6">
                <el-menu
                        :default-openeds="list"
                        class="el-menu-vertical-demo"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-user-solid"></i>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item index="1-1">
                           <router-link to="/user">用户列表</router-link>
                        </el-menu-item>

                        <el-menu-item index="1-2">
                            <router-link to="/user/add">添加用户</router-link>
                        </el-menu-item>

                        <el-menu-item index="1-3">
                            <router-link to="/user/rec">回收站</router-link>
                        </el-menu-item>
                    </el-submenu>


                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-edit"></i>
                            <span>文章管理</span>
                        </template>
                        <el-menu-item index="2-1">
                            <router-link to="/article">文章列表</router-link>
                        </el-menu-item>

                        <el-menu-item index="2-2">
                            <router-link to="/article/add">添加文章</router-link>
                        </el-menu-item>

                        <el-menu-item index="2-3">
                            <router-link to="/article/rec">回收站</router-link>
                        </el-menu-item>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-cpu"></i>
                            <span>管理员中心</span>
                        </template>
                        <el-menu-item index="3-1">
                            <router-link to="/user">退出</router-link>
                        </el-menu-item>

                    </el-submenu>
                </el-menu>
            </el-col>

            <el-col :span="18">
                <router-view></router-view>
            </el-col>
        </el-row>

    </el-main>

</template>

<script>


    export default {
        name: 'Home',
        data() {
            return {
                list: ['1','2','3']
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding:0;
    }

    .el-main {
        padding: 0 !important;
    }

    .el-menu-vertical-demo {
        min-height: 800px;
    }

    a {
        text-decoration: none;
        color: white;
    }
</style>