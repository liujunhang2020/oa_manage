export default [
    {
        path: '/article',
        name: 'Article',
        component: () => import('../../views/article/ArticleList')
    },
    {
        path: '/article/add',
        name: 'AddArticle',
        component: () => import('../../views/article/AddArticle')
    },
    {
        path: '/article/rec',
        name: 'RecList',
        component: ()=> import('../../views/article/RecList')
    }
]