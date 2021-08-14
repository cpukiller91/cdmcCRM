import Vue from 'vue'
import Vuex from 'vuex'
//import Axios from 'axios';
import Defectolog from "./Defectolog";
import Eventslists from "./Eventlists";
import Users from "./Users";
import Babycards from "./Babycards";
//Axios.defaults.baseURL = "https://admin.cdcmc.ru";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Defectolog,
    Eventslists,
    Users,
    Babycards
  },
  state: {
    // layout: 'default-layout',
    // modal:false,
    // EventList:[],
    // EventEdit:[],
    // userList:[],
    // cartList:[],
    // taskBoard:[],
    // kidEventList:[],
    // babycards:[],
    // babycard:[],
  },
  mutations: {

    // TASK_BOARD(state, payload){
    //   state.taskBoard = payload
    // },
    //
    // USER_LIST(state, payload){
    //   state.userList = payload
    // },
    //
    // BABY_CARDS(state, payload){
    //   state.babycards = payload
    // },
    //
    // BABY_CARD(state, payload){
    //   state.babycard = payload
    // },
    //
    // CART_LIST(state, payload){
    //   state.cartList = payload
    // },
    //
    // setLayout(state, payload) {
    //   state.layout = payload
    // },
    //
    // EVENT_MODAL_STATE (state,mode) {
    //   state.modal = mode
    // },
    // EVENT_LIST (state,list) {
    //   state.EventList = list
    // },
    // EVENT_EDIT (state,list) {
    //   state.EventEdit = list
    // },
    // KID_EVENT_LIST (state,list) {
    //   state.kidEventList = list
    // },
  },

  actions: {

    // GET_CART_LIST: async (context, filter) => {
    //
    //   let eventlists =  await Axios.get('/babycards',filter);
    //   console.log("store-action-get-cart-list",eventlists.data)
    //   context.commit('CART_LIST', eventlists.data);
    //   context.commit('BABY_CARDS', eventlists.data);
    //
    // },
    //
    // GET_CART_TAB_EDIT: async (context, filter) => {
    //
    //   let eventlists =  await Axios.get('/babycards/'+filter.id,filter);
    //   console.log("babycards=BABY_CARD",eventlists)
    //   context.commit('BABY_CARD', eventlists.data);
    //
    // },
    //
    // SAVE_LOGOPED: async (context, filter) => {
    //
    //   let eventlists =  await Axios.post('/logopeds',filter);
    //   console.log("logopeds-SAVE",eventlists)
    //   context.dispatch("GET_EVENT_EDIT")
    //
    //
    // },
    // DELETE_LOGOPED: async (context, filter) => {
    //
    //   let eventlists =  await Axios.delete('/logopeds/'+filter.id,filter);
    //   console.log("logoped-DELETE",eventlists)
    //   context.dispatch("GET_EVENT_EDIT")
    //
    // },
    //
    // SAVE_DEFECTOLOG: async (context, filter) => {
    //
    //   let eventlists =  await Axios.post('/defectologs',filter);
    //   console.log("defectologs-SAVE",eventlists)
    //   context.dispatch("GET_EVENT_EDIT")
    //
    //
    // },
    //
    // DELETE_DEFECTOLOG: async (context, filter) => {
    //
    //   let eventlists =  await Axios.delete('/defectologs/'+filter.id,filter);
    //   console.log("defectologs-DELETE",eventlists)
    //   context.dispatch("GET_EVENT_EDIT")
    //
    // },
    //
    // GET_CART_LIST_FILTER: async (context, filter) => {
    //
    //   let eventlists =  await Axios.get('/babycards',filter);
    //   //console.log("store-action-get-cart-list",eventlists.data)
    //
    //   context.commit('BABY_CARDS', eventlists.data);
    //
    // },
    //
    // SAVE_KID_CART: async (context, data) => {
    //   let eventlists = await Axios.put('/babycards/'+data.id, data);
    //   console.log("store-action-SAVE_KID_CART",eventlists.data,data)
    //   //context.dispatch("GET_CART_LIST")
    // },
    //
    // DELETE_KID_CART: async (context, id) => {
    //   let eventlists =  await Axios.delete('/babycards/'+id);
    //   context.dispatch("GET_CART_LIST")
    // },
    //
    //
    // SET_KID_EVENT_LIST: async (context, data) => {
    //   var RES = []
    //   let eventlists =  await Axios.get('/eventlists');
    //   console.log("SET_KID_EVENT_LIST",eventlists)
    //
    //   eventlists.data.forEach(element => {
    //     RES.push({
    //       id:element.id,
    //       label:element.title,
    //       user: '<a style="color:#0077c0;" data-toggle="modal" data-target="#large-Modal">'+ element.doctor.username +'</a>',
    //       start: element.strtime,
    //       parent: null,
    //       duration:  element.duration * 60 * 1000,
    //       progress: 100,
    //       //type: 'project',
    //       type: 'task',
    //       //type:'milestone',
    //       collapsed: false,
    //     })
    //     //console.log("-1-1->",element);
    //     //this.createElement(element)
    //   })
    //   console.log("SET_KID_EVENT_LIST_RES",RES)
    //   context.commit('KID_EVENT_LIST', RES);
    // },
    //
    // GET_KID_EVENT_LIST: async (context, data) => {
    //
    // },
    //
    // UPDATE_EVENT: async (context, data) => {
    //   let eventlists = await Axios.put('/eventlists/+'+data.id, data);
    //   context.dispatch("GET_EVENT_LIST")
    //   console.log("store-action-update",eventlists.data)
    // },
    //
    // GET_USER_LIST: async (context, filter) => {
    //
    //   let eventlists =  await Axios.get('/users',filter);
    //   //console.log("store-action-get",eventlists.data)
    //   context.commit('USER_LIST', eventlists.data);
    // },
    //
    // OPEN_EVENT_MODAL: async (context, payload) => {
    //   context.commit('EVENT_MODAL_STATE', payload);
    // },
    //
    // GET_EVENT_LIST: async (context, filter) => {
    //
    //   let eventlists =  await Axios.get('/eventlists',filter);
    //   //console.log("store-action-get",eventlists.data)
    //   context.dispatch("SET_KID_EVENT_LIST")
    //   context.commit('EVENT_LIST', eventlists.data);
    // },
    //
    // GET_EVENT_EDIT_STORE: async (context, filter) => {
    //  return  context.getters.EVENT
    // },
    //
    // GET_EVENT_EDIT: async (context, filter) => {
    //
    //   let eventlists =  await Axios.get('/eventlists/',filter);
    //   console.log("store-action-get-EDIT-eventlists",eventlists.data[0],filter)
    //
    //   context.commit('EVENT_EDIT', eventlists.data[0]);
    // },
    //
    // SAVE_EVENT_LIST: async  (context,data) => {
    //  let eventlists = await Axios.post('/eventlists', data);
    //   context.dispatch("GET_EVENT_LIST")
    //   console.log("store-action-save",eventlists.data)
    //   // console.log("store-action-save",data)
    //
    // },
    // DELETE_EVENT: async  (context,id) => {
    //   let eventlists = await Axios.delete('/eventlists/'+id);
    //   context.dispatch("GET_EVENT_LIST")
    //   console.log("store-action-delete",eventlists.data)
    //   // console.log("store-action-save",data)
    //
    // },


  },
  getters: {
    // layout(state) {
    //   return state.layout
    // },
    // MODAL_EVENT: state => {
    //   return state.modal;
    // },
    // EVENT_LIST: state => {
    //   return state.EventList;
    // },
    // EVENT: state => {
    //   return state.EventEdit;
    // },
    // USER_LIST: state => {
    //   return state.userList;
    // },
    //
    // BABY_CARDS_LIST: state => {
    //   return state.babycards;
    // },
    //
    // BABY_CARD: state => {
    //   return state.babycard;
    // },
    //
    // CART_LIST: state => {
    //   var data = []
    //   state.cartList.forEach(element => {
    //     data.push({id:element.id,title:element.kidf+" "+element.kidi+" "+element.kido})
    //       //console.log("-1-1-",element);
    //       //this.createElement(element)
    //   })
    //   return data;
    // },
    // GUNT_GET_KID_EVENT_LIST: state => {
    //   return state.kidEventList;
    //   // var data = []
    //   // return state.EventList.forEach(element => {
    //   //   data.push({id:element.id,title:element.id})
    //   // });
    //   //return data;
    //
    // },

  }
})