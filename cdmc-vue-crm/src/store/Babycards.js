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
        url: '/babycards/',
        BABYCARDS_LIST_FILTER:[],
        BABYCARDS_LIST:[],
        BABYCARD:[],
        POST_STEP:[]
    },
    mutations: {
        POST_STEP(state, payload){
            state.POST_STEP = payload
        },
        BABYCARDS_LIST_FILTER(state, payload){
            state.BABYCARDS_LIST_FILTER = payload
        },
        BABYCARDS_LIST(state, payload){
            state.BABYCARDS_LIST = payload
        },
        BABYCARD(state, payload){
            state.BABYCARD = payload
        }
    },
    actions: {
        URL_CONSTRUCT_BABYCARDS: async (context, filter,GET) => {
            var url = context.state.url
            var DATA = {}


            if(typeof filter != "undefined"){
                //console.log("URL_CONSTRUCT_BABYCARDS",filter)
                if(typeof filter.id != "undefined" && filter.id != null){
                    url = url + filter.id;
                    DATA = filter;
                }else{
                    console.log("URL_CONSTRUCT_BABYCARDS",filter,GET)
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

        // GET_BABYCARD: async (context, filter) => {
        //
        //     return  context.getters.BABYCARD
        // },
        GET_AXIOS_BABYCARDS_LIST_FILTER: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_BABYCARDS",filter)

            //console.log("GET_AXIOS_BABYCARDS_LIST_FILTER--===",data)
            let eventlists =  await Axios.get(data.url,{params:data.data});
            //console.log("GET_AXIOS_BABYCARDS_LIST_FILTER----",eventlists.data)
            var dataRES = []
            eventlists.data.forEach(async element => {
                //element.push({count:0})
                let count = await Axios.get('/eventlists/count?babycard.id='+element.id);
                element.count = count.data

                dataRES.push(element)


            })
            console.log("BABYCARDS_LIST_FILTER",dataRES)
            context.commit('BABYCARDS_LIST_FILTER', dataRES);
        },
        GET_AXIOS_BABYCARD: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_BABYCARDS",filter,true)

            //console.log("GET_AXIOS_BABYCARDS_STORE",filter,typeof filter)
            let eventlists =  await Axios.get(data.url,data.data);
            console.log("GET_AXIOS_BABYCARD_STORE----",eventlists.data)
            context.commit('BABYCARD', eventlists.data);
        },

        GET_AXIOS_BABYCARDS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_BABYCARDS",filter,true)

            //console.log("GET_AXIOS_BABYCARDS_STORE",filter,typeof filter)
            let eventlists =  await Axios.get(data.url,data.data);
            console.log("GET_AXIOS_BABYCARDS_STORE",eventlists.data)
            var sort = eventlists.data.sort(function(a, b){
                var nameA=a.kidf.toLowerCase(), nameB=b.kidf.toLowerCase();
                if (nameA < nameB) //sort string ascending
                    return -1;
                if (nameA > nameB)
                    //console.log("GET_alphabetically_STORE",nameA,nameB)
                    return 1;
                return 0; //default return value (no sorting)
            });
            // sort.forEach(element => {
            //     console.log(element)
            // });
            context.commit('BABYCARDS_LIST', eventlists.data);
        },
        POST_AXIOS_BABYCARDS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_BABYCARDS",filter)

            //console.log("POST_AXIOS_BABYCARDS_STORE",filter,data)
            let eventlists =  await Axios.post(data.url,data.data);
            //console.log("POST_STEP+++-->",eventlists.data)
            context.dispatch("GET_AXIOS_BABYCARDS")
            //context.commit('POST_STEP', eventlists.data);
            //context.commit('BABYCARDS_LIST', eventlists.data);
        },
        PUT_AXIOS_BABYCARDS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_BABYCARDS",filter)

            console.log("---------",data,filter)
            let eventlists =  await Axios.put(data.url,data.data);
            console.log("PUT_AXIOS_BABYCARDS_STORE",eventlists)
            //context.commit('BABYCARDS_LIST', eventlists.data);
            context.dispatch("GET_AXIOS_BABYCARDS")
            context.commit('POST_STEP', eventlists.data);
        },
        DELETE_AXIOS_BABYCARDS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_BABYCARDS",filter)

            //console.log("GET_AXIOS_BABYCARDS_STORE",filter,typeof filter)
            let eventlists =  await Axios.delete(data.url);
            console.log("DELETE_AXIOS_BABYCARDS_STORE",eventlists.data)
            //context.commit('BABYCARDS_LIST', eventlists.data);
            context.dispatch("GET_AXIOS_BABYCARDS_LIST_FILTER")
            context.dispatch("GET_AXIOS_BABYCARDS")

        }
    },
    getters: {

        POST_STEP: state => {
            return state.POST_STEP;
        },
        BABYCARDS_LIST_FILTER: state => {

            //return data;
            return state.BABYCARDS_LIST_FILTER;
        },
        BABYCARD: state => {
            return state.BABYCARD;
        },
        BABYCARDS_LIST: state => {
            return state.BABYCARDS_LIST;
        },
        BABYCARDS_LIST_SELECT_OPTION: state => {
          var data = []
          state.BABYCARDS_LIST.forEach(element => {
            data.push({id:element.id,title:element.kidf+" "+element.kidi+" "+element.kido})
          })
          return data;
        },
    }
}