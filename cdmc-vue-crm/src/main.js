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
import TabTaskModal from "./components/KidCard/TabTaskModal";
import StatisticKidActon from "./components/StatisticKidActon";
import DragableCalendar from "./components/DragableCalendar";
import UserMeny from "./components/UserMeny";
import CRMTaskModal from "./components/Task/CRMTaskModal";
import Reminder from "./components/Task/Reminder";
import VueHtmlToPaper from 'vue-html-to-paper';

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css'
  ],
  timeout: 1000, // default timeout before the print window appears
  autoClose: true, // if false, the window will not close after printing
  windowTitle: window.document.title, // override the window title
}

Vue.use(VueHtmlToPaper, options);
Vue.component('default-layout', Deault)
Vue.component('task-list', TaskList)
Vue.component('task-detail', TaskDetail)
Vue.component('login', Login)
Vue.component('modal', Modal)
Vue.component('gunt', Gunt)
Vue.component('kid-card-modal', KidCardModal)
Vue.component('all-kid-card-modal', AllKidCardModal)
Vue.component('kid-task-modal', TaskModal)
Vue.component('tab-task-modal', TabTaskModal)
Vue.component('statistic-kid-action', StatisticKidActon)
Vue.component('dragable-calendar', DragableCalendar)
Vue.component('user-meny', UserMeny)
Vue.component('crm-task-modal', CRMTaskModal)
Vue.component('remindes', Reminder)



Axios.defaults.baseURL = "https://admin.cdcmc.ru";
//Axios.defaults.baseURL = "http://localhost:1338";
Vue.prototype.$http = Axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
