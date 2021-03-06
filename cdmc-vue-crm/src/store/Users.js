import Axios from "axios";
import router from '../router';
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
        url: '/users/',
        USERS_LIST:[],
        TASK_USER_LIST:[],
        LOGIN_USER:[],
        USERS_LIST_BY_KEY_ID:[]
    },
    mutations: {
        TASK_USER_LIST(state, payload){
            state.TASK_USER_LIST = payload
        },

        LOGIN_USER(state, payload){
            state.LOGIN_USER = payload
        },

        USERS_LIST(state, payload){
            state.USERS_LIST = payload
        },

        USERS_LIST_BY_KEY_ID(state, payload){
            state.USERS_LIST_BY_KEY_ID = payload
        }
    },
    actions: {
        URL_CONSTRUCT_USERS: async (context, filter,GET) => {
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

        LOGOUT_USER: async (context, filter) => {
            localStorage.removeItem('login');
            context.commit('LOGIN_USER', []);
            //return router.push({ name: 'Login' })
        },
        LOGIN_USER_STORAGE: async (context, filter) => {
            var currentColor = localStorage.getItem('login');
            context.commit('LOGIN_USER', JSON.parse(currentColor) );

        },

        GET_AXIOS_LOGIN_USER: async (context, filter) => {
            //context.state.url+filter.id
            //var data = await context.dispatch("URL_CONSTRUCT_USERS",filter,true)

            //console.log("GET_AXIOS_DEFECTOLOG_STORE",filter,typeof filter)
            let eventlists =  await Axios.post("/auth/local",filter);

            if(eventlists.data.jwt){
                console.log("--GET_AXIOS_LOGIN_USER--",eventlists.data)
                let json = JSON.stringify(eventlists.data)
                //this.logIn = true;
                localStorage.setItem("login", json)
                context.commit('LOGIN_USER', eventlists.data);
                //router.push({ name: 'Home' })
            }else{
                context.dispatch("LOGOUT_USER")

            }



        },
        GET_AXIOS_TASK_USER_LIST: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_USERS",filter,true)

            //console.log("GET_US",filter)
            let eventlists =  await Axios.get(data.url,data.data);

            //console.log("GET_AXIOS_USERS_STORE",eventlists.data)
            context.commit('TASK_USER_LIST', eventlists.data);
            //context.dispatch("GET_USERS_LIST_BY_KEY_ID")
        },
        GET_AXIOS_USERS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_USERS",filter,true)

            //console.log("GET_US",filter)
            let eventlists =  await Axios.get(data.url+"",data.data);

            var sort = eventlists.data.sort(function(a, b){
                var nameA=a.username.toLowerCase(), nameB=b.username.toLowerCase();
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
            //console.log("GET_alphabetically_STORE",sort)
            context.commit('USERS_LIST', sort);
            context.dispatch("GET_USERS_LIST_BY_KEY_ID")
        },
        POST_AXIOS_USERS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_USERS",filter)

            console.log("POST_AXIOS_USERS_STORE",filter,data)
            let eventlists =  await Axios.post(data.url,data.data);
            console.log("POST_AXIOS_USERS_STORE-->",eventlists.data)
            context.dispatch("GET_AXIOS_TASK_USER_LIST")
            //context.commit('USERS_LIST', eventlists.data);
        },
        PUT_AXIOS_USERS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_USERS",filter)

            console.log("---------",data,filter)
            let eventlists =  await Axios.put(data.url,data.data);
            console.log("PUT_AXIOS_USERS_STORE",eventlists)
            //context.commit('USERS_LIST', eventlists.data);
            context.dispatch("GET_AXIOS_TASK_USER_LIST")
        },
        DELETE_AXIOS_USERS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_USERS",filter)

            //console.log("GET_AXIOS_USERS_STORE",filter,typeof filter)
            let eventlists =  await Axios.delete(data.url);
            console.log("DELETE_AXIOS_USERS_STORE",eventlists.data)
            //context.commit('USERS_LIST', eventlists.data);
            context.dispatch("GET_AXIOS_TASK_USER_LIST")
        },
        GET_USERS_LIST_BY_KEY_ID: async (context, filter) => {

            let data = context.getters.USERS_LIST
                let RES = [];
            data.forEach(element => {
                RES[element.id] = element
            })
            context.commit('USERS_LIST_BY_KEY_ID', RES);
        }
    },
    getters: {
        TASK_USER_LIST: state => {
            return state.TASK_USER_LIST;
        },
        LOGIN_USER: state => {
            return state.LOGIN_USER;
        },
        USERS_LIST: state => {
            return state.USERS_LIST;
        },
        USERS_LIST_BY_KEY_ID: state => {
            return state.USERS_LIST_BY_KEY_ID;
        },

    }
}