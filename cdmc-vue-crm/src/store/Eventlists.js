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
        DROP_EVENT:[],
        GUNT_EVENT_LIST:[],
        FREE_USERS_LIST:[],
        FULLCALENDAR:[],

        YEAR_STATISTIC:[],
        DAY_STATISTIC:[],
        MONTH_STATISTIC:[],

        STATISTIC_CHART:[],
        STATISTIC_CHART_TABLE:[],


    },
    mutations: {

        STATISTIC_CHART_TABLE(state, payload){
            state.STATISTIC_CHART_TABLE = payload
        },

        STATISTIC_CHART(state, payload){
            state.STATISTIC_CHART = payload
        },

        YEAR_STATISTIC(state, payload){
            state.YEAR_STATISTIC = payload
        },

        DAY_STATISTIC(state, payload){
            state.DAY_STATISTIC = payload
        },

        MONTH_STATISTIC(state, payload){
            state.MONTH_STATISTIC = payload
        },

        DROP_EVENT(state, payload){
            state.DROP_EVENT = payload
        },

        GUNT_EVENT_LIST(state, payload){
            state.GUNT_EVENT_LIST = payload
        },

        FULLCALENDAR(state, payload){
            state.FULLCALENDAR = payload
        },

        EVENT(state, payload){
            state.EVENT = payload
        },

        EVENT_LIST(state, payload){
            state.EVENT_LIST = payload
        },

        FREE_USERS_LIST(state, payload){
            state.FREE_USERS_LIST = payload
        }
    },
    actions: {

        GET_AXIOS_STATISTIC_CHART: async (context, data) => {
            var RES = []
            var Table = []

            let diagnostic =  await Axios.get('/eventlists/count',{
                params:{
                    typeEvent :"Диагностика",
                    "doctor.id" : data.doctor_id != null ? data.doctor_id  : null,
                    "strtime_gte":data.strtime_gte != null ? data.strtime_gte : null,
                    "strtime_lte":data.strtime_lte != null ? data.strtime_lte  : null
                }
            });

            //data.typeEvent = "Консультация"
            let consalt =  await Axios.get('/eventlists/count',{
                params:{
                    typeEvent :"Консультация",
                    "doctor.id" : data.doctor_id != null ? data.doctor_id  : null,
                    "strtime_gte":data.strtime_gte != null ? data.strtime_gte : null,
                    "strtime_lte":data.strtime_lte != null ? data.strtime_lte  : null
                }
            });

            let individual =  await Axios.get('/eventlists/count',{
                params:{
                    typeEvent :"Индивидуальное занятие",
                    "doctor.id" : data.doctor_id != null ? data.doctor_id  : null,
                    "strtime_gte":data.strtime_gte != null ? data.strtime_gte : null,
                    "strtime_lte":data.strtime_lte != null ? data.strtime_lte  : null
                }
            });

            let group =  await Axios.get('/eventlists/count',{
                params:{
                    typeEvent :"Групповое занятие",
                    "doctor.id" : data.doctor_id != null ? data.doctor_id  : null,
                    "strtime_gte":data.strtime_gte != null ? data.strtime_gte : null,
                    "strtime_lte":data.strtime_lte != null ? data.strtime_lte  : null
                }
            });

            let parent_kons =  await Axios.get('/eventlists/count',{
                params:{
                    typeEvent : "Консультация родителей",
                    "doctor.id" : data.doctor_id != null ? data.doctor_id  : null,
                    "strtime_gte":data.strtime_gte != null ? data.strtime_gte : null,
                    "strtime_lte":data.strtime_lte != null ? data.strtime_lte  : null
                }
            });

            let KDC =  await Axios.get('/eventlists/count',{
                params:{
                    typeEvent : "Прием КДЦ",
                    "doctor.id" : data.doctor_id != null ? data.doctor_id  : null,
                    "strtime_gte":data.strtime_gte != null ? data.strtime_gte : null,
                    "strtime_lte":data.strtime_lte != null ? data.strtime_lte  : null
                }
            });

            let monitor =  await Axios.get('/eventlists/count',{
                params:{
                    typeEvent : "Мониторинг",
                    "doctor.id" : data.doctor_id != null ? data.doctor_id  : null,
                    "strtime_gte":data.strtime_gte != null ? data.strtime_gte : null,
                    "strtime_lte":data.strtime_lte != null ? data.strtime_lte  : null
                }
            });

            RES = [
                ['Диагностика',diagnostic.data],
                ['Консультация',consalt.data],
                ["Индивидуальное занятие",individual.data],
                ["Групповое занятие",group.data],
                ["Консультация родителей",parent_kons.data],
                ["Прием КДЦ",KDC.data],
                ["Мониторинг",monitor.data]
            ]
            Table = [
                {title:'Диагностика',val:diagnostic.data},
                {title:'Консультация',val:consalt.data},
                {title:'Индивидуальное занятие',val:individual.data},
                {title:'Групповое занятие',val:group.data},
                {title:'Консультация родителей',val:parent_kons.data},
                {title:'Прием КДЦ',val:KDC.data},
                {title:'Мониторинг',val:monitor.data},
            ]
            //STATISTIC_CHART_TABLE
            context.commit("STATISTIC_CHART",RES)
            context.commit("STATISTIC_CHART_TABLE",Table)
            //console.log("GET_AXIOS_STATISTIC_CHART",RES)
        },

        GET_DROP_EVENT: async (context, data) => {
            //console.log("GET_DROP_EVENT",data)
            context.commit('DROP_EVENT', data);
        },

        GET_FULLCALENDAR: async (context, data) => {
            var RES = []
            let eventlists =  await Axios.get('/eventlists');
            console.log("GET_FULLCALENDAR",eventlists)

            eventlists.data.forEach(element => {
                //new Date(element.strtime).getMinutes()
                //console.log("END_DATE",new Date(element.strtime).setMinutes(element.duration))
                let getEndDate = new Date(element.strtime).getMinutes()
                let newEndDate = new Date(element.strtime).setMinutes(getEndDate+element.duration)
                RES.push({
                    id:element.id,
                    title: element.doctor.username+" ("+element.babycard.kidf+" "+element.babycard.kidi+" "+element.babycard.kido+")" ,
                        //+ "("+element.babycard.kidf+" "+element.babycard.kidi
                        //+" "+element.babycard.kido
                    //+")" ,
                    end:newEndDate,
                    start: element.strtime,
                    //date: '2021-08-16 16:00',
                    color: element.color,     // an option!
                    textColor: 'white',
                    editable:true,
                    itemSelector:".item-class",
                    // eventMinHeight:5,
                    // eventShortHeight:30,
                    //durationEditable:true,
                    duration:element.duration
                })
                //console.log("-1-1->",element);
                //this.createElement(element)
            })
            //console.log("SET_KID_EVENT_LIST_RES",RES)
            context.commit('FULLCALENDAR', RES);
        },

        GET_FREE_USER_LIST: async (context, data) => {
            let users =  await Axios.get("/users");
            let eventlists =  await Axios.get('/eventlists');
            let RES = {
                users:users,
                eventlists:eventlists
            }
            context.commit('FREE_USERS_LIST', RES);

        },

        GET_GUNT_EVENT_LIST: async (context, data) => {
          var RES = []
          let eventlists =  await Axios.get('/eventlists');
          console.log("GET_GUNT_EVENT_LIST",eventlists)

          eventlists.data.forEach(element => {
            RES.push({
              id:element.id,
              label:element.babycard.kidf+" "+element.babycard.kidi+" "+element.babycard.kido,
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
            //console.log("GET_AXIOS_EVENT_STORE",eventlists.data)
            context.commit('EVENT', eventlists.data);
        },
        GET_AXIOS_EVENTS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_EVENTS",filter,true)

            let eventlists =  await Axios.get(data.url,data.data);
            //console.log("GET_AXIOS_EVENTS_STORE",eventlists.data)
            context.commit('EVENT_LIST', eventlists.data);
            context.dispatch("GET_GUNT_EVENT_LIST")
            context.dispatch("GET_FULLCALENDAR")

        },
        POST_AXIOS_EVENTS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_EVENTS",filter)

            //console.log("POST_AXIOS_EVENTS_STEP___++++",data)
            let eventlists =  await Axios.post(data.url,data.data);
            //console.log("POST_AXIOS_EVENTS_STORE-->",eventlists.data)
            context.dispatch("GET_AXIOS_EVENTS")

        },

        PUT_AXIOS_EVENTS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_EVENTS",filter)

            //console.log("---------",data,filter)
            let eventlists =  await Axios.put(data.url,data.data);
            //console.log("PUT_AXIOS_EVENTS_STORE",eventlists)
            //context.commit('EVENT_LIST', eventlists.data);
            context.dispatch("GET_AXIOS_EVENTS")
        },
        DELETE_AXIOS_EVENTS: async (context, filter) => {
            //context.state.url+filter.id
            var data = await context.dispatch("URL_CONSTRUCT_EVENTS",filter)

            //console.log("GET_AXIOS_EVENTS_STORE",filter,typeof filter)
            let eventlists =  await Axios.delete(data.url);
            //console.log("DELETE_AXIOS_EVENTS_STORE",eventlists.data)
            //context.commit('EVENT_LIST', eventlists.data);
            context.dispatch("GET_AXIOS_EVENTS")
        },
        GET_AXIOS_EVENT_COUNT: async (context, filter) => {
            //console.log("GET_AXIOS_EVENT_COUNT",filter)
            let eventlists = await Axios.get('/eventlists/count',{
                params:{
                    "strtime_gte":filter.date,
                    "doctor.id":filter.id
                }
            });
            return eventlists.data;
        },
        GET_AXIOS_YEAR_STATISTIC: async (context, filter) => {
            var RES = []

            let USERlists =  await Axios.get('/users/',{
                params:{
                    "visState_ne":false
                }
            });
            USERlists.data.forEach(async (element) => {
            let EventCount = await Axios.get('/eventlists/count',{
                params:{
                    //"strtime_gte":filter.date,
                    "doctor.id":element.id,
                    //dayOfMonth:filter.DayOfMonth,
                    times:filter.times
                }
            });

            if(EventCount.data){
                RES.push([element.username + " ("+EventCount.data+")",EventCount.data])
            }
        })

            context.commit('YEAR_STATISTIC', RES);
            // context.dispatch("GET_AXIOS_EVENTS")
        },
        GET_AXIOS_DAY_STATISTIC: async (context, filter) => {
            var RES = []

            let USERlists =  await Axios.get('/users/',{
                params:{
                    "visState_ne":false
                }
            });

            USERlists.data.forEach(async (element) => {
                let EventCount = await Axios.get('/eventlists/count',{
                    params:{
                        //"strtime_gte":filter.date,
                        "doctor.id":element.id,
                        times:filter.times,
                        dayOfMonth:filter.DayOfMonth,
                        month:filter.Month
                    }
                });

                if(EventCount.data){
                    RES.push([element.username + " ("+EventCount.data+")",EventCount.data])
                }
            })

            context.commit('DAY_STATISTIC', RES);
        },
        GET_AXIOS_MONTH_STATISTIC: async (context, filter) => {
            var RES = []

            let USERlists =  await Axios.get('/users/',{
                params:{
                    "visState_ne":false
                }
            });

            USERlists.data.forEach(async (element) => {
                let EventCount = await Axios.get('/eventlists/count',{
                    params:{
                        //"strtime_gte":filter.date,
                        "doctor.id":element.id,
                        times:filter.times,
                        month:filter.Month
                    }
                });

                if(EventCount.data){
                    RES.push([element.username + " ("+EventCount.data+")",EventCount.data])
                }
            })

            context.commit('MONTH_STATISTIC', RES);
        }
    },
    getters: {

        STATISTIC_CHART_TABLE: state => {
            return state.STATISTIC_CHART_TABLE;
        },

        STATISTIC_CHART: state => {
            return state.STATISTIC_CHART;
        },

        YEAR_STATISTIC: state => {
            return state.YEAR_STATISTIC;
        },
        DAY_STATISTIC: state => {
            return state.DAY_STATISTIC;
        },
        MONTH_STATISTIC: state => {
            return state.MONTH_STATISTIC;
        },

        DROP_EVENT: state => {
            return state.DROP_EVENT;
        },
        GUNT_EVENT_LIST: state => {
            return state.GUNT_EVENT_LIST;
        },
        FULLCALENDAR: state => {
            return state.FULLCALENDAR;
        },
        EVENT_LIST: state => {
            return state.EVENT_LIST;
        },
        EVENT: state => {
            return state.EVENT;
        },
        FREE_USERS_LIST: state => {
            return state.FREE_USERS_LIST;
        }
    }
}