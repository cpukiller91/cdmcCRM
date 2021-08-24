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
        url: '/task-boards/',
        TASK_BOARDS_LIST:[],
        TASK:[]
    },
    mutations: {
        TASK(state, payload){
            state.TASK = payload
        },
        TASK_BOARDS_LIST(state, payload){
            state.TASK_BOARDS_LIST = payload
        }
    },
    actions: {
        URL_CONSTRUCT_BOARDS: async (context, filter,GET) => {
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

        GET_AXIOS_TASK: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_BOARDS",filter,true)

            //console.log("GET_AXIOS_BOARDS_STORE",filter,typeof filter)
            let eventlists =  await Axios.get(data.url,data.data);
            //console.log("GET_AXIOS_BOARDS_STORE",eventlists.data)
            context.commit('TASK', eventlists.data);
        },

        GET_AXIOS_BOARDS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_BOARDS",filter,true)

            //console.log("GET_AXIOS_BOARDS_STORE",filter,typeof filter)
            let eventlists =  await Axios.get(data.url,data.data);
            console.log("GET_AXIOS_BOARDS_STORE",eventlists.data)
            context.commit('TASK_BOARDS_LIST', eventlists.data);
        },
        POST_AXIOS_BOARDS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_BOARDS",filter)

            console.log("POST_AXIOS_BOARDS_STORE",filter,data)
            let eventlists =  await Axios.post(data.url,data.data);
            console.log("POST_AXIOS_BOARDS_STORE-->",eventlists.data)
            context.dispatch("GET_AXIOS_BOARDS")
            //context.commit('TASK_BOARDS_LIST', eventlists.data);
        },
        PUT_AXIOS_BOARDS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_BOARDS",filter)

            console.log("---------",data,filter)
            let eventlists =  await Axios.put(data.url,data.data);
            console.log("PUT_AXIOS_BOARDS_STORE",eventlists)
            //context.commit('TASK_BOARDS_LIST', eventlists.data);
            context.dispatch("GET_AXIOS_BOARDS")
        },
        DELETE_AXIOS_BOARDS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_BOARDS",filter)

            //console.log("GET_AXIOS_BOARDS_STORE",filter,typeof filter)
            let eventlists =  await Axios.delete(data.url);
            console.log("DELETE_AXIOS_BOARDS_STORE",eventlists.data)
            //context.commit('TASK_BOARDS_LIST', eventlists.data);
            context.dispatch("GET_AXIOS_BOARDS")
        }
    },
    getters: {
        TASK_BOARDS_LIST: state => {
            return state.TASK_BOARDS_LIST;
        },
        TASK: state => {
            return state.TASK;
        },
    }
}