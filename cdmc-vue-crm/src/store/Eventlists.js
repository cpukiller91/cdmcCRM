import Axios from "axios";
//console.log("GET_AXIOS_DEFECTOLOG_Component",this.$store.dispatch("GET_AXIOS_DEFECTOLOG",{id:4}))
//console.log("DELETE_AXIOS_DEFECTOLOG_Component",this.$store.dispatch("DELETE_AXIOS_DEFECTOLOG",{id:13}))
// console.log("POST_AXIOS_DEFECTOLOG_Component",this.$store.dispatch("POST_AXIOS_DEFECTOLOG",{
//     defIntel:"1",
//     gefMind:"1",
//     defAge:"1",
//     defSipr:"1",
//     babycard: 3,
//     id:null}))
// console.log("PUT_AXIOS_DEFECTOLOG_Component",
//     this.$store.dispatch("PUT_AXIOS_DEFECTOLOG",{
//     defIntel:"1",
//     gefMind:"1",
//     defAge:"1",
//     defSipr:"1",
//     babycard: 3,
//     id:4}))
export default{
    state: {
        url: '/eventlists/',
        EVENT_LIST:[],
        EVENT:[],
        GUNT_EVENT_LIST:[]
    },
    mutations: {
        GUNT_EVENT_LIST(state, payload){
            state.GUNT_EVENT_LIST = payload
        },

        EVENT(state, payload){
            state.EVENT = payload
        },

        EVENT_LIST(state, payload){
            state.EVENT_LIST = payload
        }
    },
    actions: {
        GET_GUNT_EVENT_LIST: async (context, data) => {
          var RES = []
          let eventlists =  await Axios.get('/eventlists');
          console.log("GET_GUNT_EVENT_LIST",eventlists)

          eventlists.data.forEach(element => {
            RES.push({
              id:element.id,
              label:element.title,
              user: '<a style="color:#0077c0;" data-toggle="modal" data-target="#large-Modal">'+ element.doctor.username +'</a>',
              start: element.strtime,
              parent: null,
              duration:  element.duration * 60 * 1000,
              progress: 100,
              //type: 'project',
              type: 'task',
              //type:'milestone',
              collapsed: false,
            })
            //console.log("-1-1->",element);
            //this.createElement(element)
          })
          //console.log("SET_KID_EVENT_LIST_RES",RES)
          context.commit('GUNT_EVENT_LIST', RES);
        },
        URL_CONSTRUCT_EVENTS: async (context, filter,GET) => {
            var url = context.state.url
            var DATA = {}

            //console.log("GET_AXIOS_DEFECTOLOG",filter)
            if(typeof filter != "undefined"){
                if(typeof filter.id != "undefined" && filter.id != null){
                    url = url + filter.id;
                    DATA = filter;
                }else{
                    if(GET == true){
                        DATA.params = filter;
                    }else {
                        DATA = filter;
                    }

                }

            }
            return {
                url : url,
                data:DATA
            }
        },
        GET_EVENT: async (context, filter) => {

            return context.getters.EVENT
        },
        GET_AXIOS_EVENT: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_EVENTS",filter,true)

            let eventlists =  await Axios.get(data.url,data.data);
            console.log("GET_AXIOS_EVENT_STORE",eventlists.data)
            context.commit('EVENT', eventlists.data);
        },
        GET_AXIOS_EVENTS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_EVENTS",filter,true)

            let eventlists =  await Axios.get(data.url,data.data);
            console.log("GET_AXIOS_EVENTS_STORE",eventlists.data)
            context.commit('EVENT_LIST', eventlists.data);
            context.dispatch("GET_GUNT_EVENT_LIST")
        },
        POST_AXIOS_EVENTS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_EVENTS",filter)

            //console.log("POST_AXIOS_EVENTS_STORE",filter,data)
            let eventlists =  await Axios.post(data.url,data.data);
            console.log("POST_AXIOS_EVENTS_STORE-->",eventlists.data)
            context.dispatch("GET_AXIOS_EVENTS")
            //context.commit('EVENT_LIST', eventlists.data);
        },
        PUT_AXIOS_EVENTS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_EVENTS",filter)

            //console.log("---------",data,filter)
            let eventlists =  await Axios.put(data.url,data.data);
            console.log("PUT_AXIOS_EVENTS_STORE",eventlists)
            //context.commit('EVENT_LIST', eventlists.data);
            context.dispatch("GET_AXIOS_EVENTS")
        },
        DELETE_AXIOS_EVENTS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_EVENTS",filter)

            //console.log("GET_AXIOS_EVENTS_STORE",filter,typeof filter)
            let eventlists =  await Axios.delete(data.url);
            console.log("DELETE_AXIOS_EVENTS_STORE",eventlists.data)
            //context.commit('EVENT_LIST', eventlists.data);
            context.dispatch("GET_AXIOS_EVENTS")
        }
    },
    getters: {
        GUNT_EVENT_LIST: state => {
            return state.GUNT_EVENT_LIST;
        },
        EVENT_LIST: state => {
            return state.EVENT_LIST;
        },
        EVENT: state => {
            return state.EVENT;
        },
    }
}