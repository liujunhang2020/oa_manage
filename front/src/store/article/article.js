import axios from 'axios'
const state = {

}

const mutations = {

}

const actions = {
    getArticle(content, vm) {
        axios.get('/api/article/list', {
            params: {
                keywords: vm.keywords,
                state: vm.state
            }
        })
            .then(result => {
                // console.log(result)
                if (result.data.errno !== 0) {
                    vm.$message.error('查询失败')
                    return
                }
                vm.tableData = result.data.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    changeArticleState( content, { id, vm } ) {
        // 1 2
        let state = vm.state === 1 ? 2 : 1
        let message = vm.state === 1 ? '删除' : '恢复'

        axios.get('/api/article/change', {
            params: {
                id,
                state
            }
        })
            .then(result => {
                console.log(result)
                if(result.data.errno === 0) {
                    vm.$message({type:'success', message:message + '成功'})
                    return
                }
                vm.$message.error(message + '失败')
            })
            .catch(err => {
                console.log(err)
            })
    },
    getAuthor(content, vm) {

        axios.get('/api/article/author')
            .then(result => {
                // console.log(result)
                if (result.data.errno !== 0) {
                    vm.$message.error(result.data.message)
                    return
                }
                vm.article_author = result.data.data
            })
            .catch(err => {
                console.log(err)
            })

    },
    addArticle(content, vm) {
        axios.post('/api/article/add', vm.ruleForm)
            .then(result => {
                console.log(result)
                if (result.data.errno !== 0) {
                    vm.$message.error('添加失败')
                    return
                }
                vm.$message({type:'success', message:'添加成功'})
                vm.$router.push('/article')
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