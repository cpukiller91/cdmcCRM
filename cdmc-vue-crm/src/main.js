import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Deault from "./layouts/Default"
import TaskList from "./layouts/TaskList"
import Login from "./layouts/Login"
import Axios from 'axios'
import TaskDetail from "./layouts/TaskDetail";
import Modal from  "./components/modal";
import Gunt from "./components/Gant";
import KidCardModal from "./components/KidCard/KidCardModal";
import AllKidCardModal from "./components/KidCard/AllKidCardModal";
import TaskModal from "./components/KidCard/TaskModal";

Vue.component('default-layout', Deault)
Vue.component('task-list', TaskList)
Vue.component('task-detail', TaskDetail)
Vue.component('login', Login)
Vue.component('modal', Modal)
Vue.component('gunt', Gunt)
Vue.component('kid-card-modal', KidCardModal)
Vue.component('all-kid-card-modal', AllKidCardModal)
Vue.component('kid-task-modal', TaskModal)

Axios.defaults.baseURL = "https://admin.cdcmc.ru";
Vue.prototype.$http = Axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
