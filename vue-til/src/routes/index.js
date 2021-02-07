import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    // #을 이용하면 배포 단계에서 server Configurations 
    mode: "history",
    routes: [
        {
            // 새로고침시 리다이렉트 설정:
            path: "/",
            redirect: "/login"
        },
        {
            path: "/login",
            component: () => import("@/views/LoginPage")
        },
        {
            path: "/signup",
            component: () => import("@/views/SignupPage")
        },
        {
            path: "*", //풀백 없는 페이지에 대한 바응
            component: ()=> import("@/views/NotFoundPage.vue")
        }
    ],
});


