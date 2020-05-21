import axios from 'axios'
const state = {

}

const mutations = {

}

const actions = {
    getUserList(content, info) {
        axios.get('/api/user/list', {
            params: {
                pageIndex: info.pageIndex,
                keywords: info.keywords,
                state: info.state
            }
        })
            .then(result => {
                console.log(result)
                info.vm.tableData = result.data.data.result
                info.vm.pageNum = result.data.data.pageNum
            })
            .catch(err => {
                info.vm.$message.error('登录过期，请重新登录')
                info.vm.$router.push('/login')
                content.commit('LOGOUT')
            })
    },
    delUser(content, { vm, id, state }) {
        axios.get('/api/user/del', {
            params: {
                id,
                state
            }
        })
            .then(result => {
                // console.log(result)

                if(result.data.errno === 0) {

                    const message = state === 1 ? "恢复" : "删除"

                    vm.$message({
                        type: "success",
                        message: message + "成功"
                    })
                    return
                }
                vm.$message.error(message + "失败")

            })
            .catch(err => {
                console.log(err)
            })
    },

    updateUserInfo(content, vm) {
        axios({
            method: 'post',
            url: '/api/user/update',
            data: {
                user_id: vm.form.userId,
                user_name: vm.form.userName,
                user_email: vm.form.email
            }
        })
            .then(result => {
                console.log('修改结果:',result)
                if (result.data.errno === 0) {
                    vm.$message({type: "success", message: "更新成功"})
                    return
                }
                vm.$message.error('更新失败')
            })
            .catch(err => {
                console.log(err)
            })
    },

    addUser(content, vm) {
        axios({
            url: '/api/user/add',
            method: 'post',
            data: {
                user_name: vm.form.userName,
                user_pass: vm.form.passWord,
                user_email: vm.form.email
            }
        })
            .then(result => {
                if (result.data.errno === 0) {
                    vm.$message({type: "success", message: "添加成功"})
                }else {
                    vm.$message.error("添加失败")
                }
                vm.$router.push('/user')
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export default {
    state,
    mutations,
    actions
}