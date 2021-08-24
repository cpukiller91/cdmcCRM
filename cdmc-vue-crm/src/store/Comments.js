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
        url: '/comments/',
        COMMENTS_LIST:[]
    },
    mutations: {

       COMMENTS_LIST(state, payload){
            state.COMMENTS_LIST = payload
        }
    },
    actions: {
        URL_CONSTRUCT_COMMENTS: async (context, filter,GET) => {
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

        GET_AXIOS_COMMENTS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_COMMENTS",filter,true)

            //console.log("GET_AXIOS_COMMENTS_STORE",filter,typeof filter)
            let eventlists =  await Axios.get(data.url,data.data);
            console.log("GET_AXIOS_COMMENTS_STORE",eventlists.data)
            context.commit('COMMENTS_LIST', eventlists.data);
        },
        POST_AXIOS_COMMENTS: async (context, filter) => {

            let eventlists =  await Axios.post(
                "/comments/"
                ,filter
                ,{headers: {"Content-Type": "multipart/form-data"}});
            console.log("POST_AXIOS_COMMENTS-->",eventlists.data)
            context.dispatch("GET_AXIOS_COMMENTS")

        },
        PUT_AXIOS_COMMENTS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_COMMENTS",filter)

            console.log("---------",data,filter)
            let eventlists =  await Axios.put(data.url,data.data);
            console.log("PUT_AXIOS_COMMENTS_STORE",eventlists)
            //context.commit('COMMENTS_LIST', eventlists.data);
            context.dispatch("GET_AXIOS_COMMENTS")
        },
        DELETE_AXIOS_COMMENTS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_COMMENTS",filter)

            //console.log("GET_AXIOS_COMMENTS_STORE",filter,typeof filter)
            let eventlists =  await Axios.delete(data.url);
            console.log("DELETE_AXIOS_COMMENTS_STORE",eventlists.data)
            //context.commit('COMMENTS_LIST', eventlists.data);
            context.dispatch("GET_AXIOS_COMMENTS")
        }
    },
    getters: {
       COMMENTS_LIST: state => {
            return state.COMMENTS_LIST;
        },
    }
}