// User 相关的路由规则
export default [
    {
        path: '/user',
        name: 'User',
        component: () => import("../../views/user/List")
    },
    {
        path: '/user/add',
        name: 'AddUser',
        component: () => import("../../views/user/Add")
    },
    {
        path: '/user/rec',
        name: 'RecList',
        component: () => import("../../views/user/Rec")
    }
]