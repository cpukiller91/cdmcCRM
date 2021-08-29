import Vue from 'vue'
import Vuex from 'vuex'

import Defectolog from "./Defectolog";
import Eventslists from "./Eventlists";
import Users from "./Users";
import Babycards from "./Babycards";
import Logopeds from "./Logopeds";
import Psihologs from "./Psihologs";
import SimPsihologs from "./Simpsihologs";
import Projects from "./Projects";
import TaskBoards from "./TaskBoards";
import Comments from "./Comments";
import Reminder from "./Reminder";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Defectolog,
    Eventslists,
    Users,
    Babycards,
    Logopeds,
    Psihologs,
    SimPsihologs,
    Projects,
    TaskBoards,
    Comments,
    Reminder
  },
  state: {

  },
  mutations: {

  },

  actions: {

  },
  getters: {

  }
})