
<template>
    <div>
        <statistic-kid-action></statistic-kid-action>
        <!-- Basic table card start -->
        <div class="card" v-if="login">

        <div class="card-header">
            <div data-app style="z-index: 100">
                <div class="row">
                    <div class="col-md-3">
                        <kid-task-modal></kid-task-modal>
                    </div>
                    <div class="col-md-3">
                        <button class="btn btn-danger btn-outline-danger" @click="logout"><i class="icofont icofont-eye-alt"></i>Выход</button>
                    </div>
                    <div class="col-md-3">
                        <all-kid-card-modal style="float: right"></all-kid-card-modal>
                    </div>
                    <div class="col-md-3">
                        <kid-card-modal style="float: right"></kid-card-modal>
                    </div>
                </div>


            </div>
        </div>
            <dragable-calendar></dragable-calendar>

    </div>

    </div>
</template>
<script>
    //import ru from 'fullcalendar/locales/ru';

    export default {
        data: () => ({
            titleWindow: "Записать пациента",
            //EventList:[],
            modal:false,
            login:true,
            taskKid: []
        }),
        mounted(){

            this.$store.dispatch("GET_AXIOS_EVENTS")
            this.$store.dispatch("GET_FREE_USER_LIST")
            //this.$store.dispatch("LOGIN_USER_STORAGE")
        // var kT = [{
        //     id: 1,
        //     label: 'Make some noise',
        //     user:
        //         '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
        //     start: this.getDate(-24 * 5),
        //     duration: 15 * 24 * 60 * 60 * 1000,
        //     progress: 85,
        //     type: 'project',
        //     collapsed: false,
        // },
        //     {
        //         id: 2,
        //         label: 'Make some noise2',
        //         user:
        //             '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
        //         start: this.getDate(-24 * 5),
        //         duration: 15 * 24 * 60 * 60 * 1000,
        //         progress: 100,
        //         type: 'project',
        //         collapsed: false,
        //     }]
            //this.$store.dispatch("SET_KID_EVENT_LIST")

        },
        computed: {
            FREE_USERS_LIST(){
                return this.$store.getters.FREE_USERS_LIST;
            },
            Event() {
                return this.$store.getters.EVENT;
            },
            EventList() {
                return this.$store.getters.EVENT_LIST;
            },
        },
        watch:{
            FREE_USERS_LIST(newList){
                console.log("FREE_USERS_LIST",newList)
            }
        },
        methods:{
            logout(){

                this.$store.dispatch("LOGOUT_USER")
                this.$router.push({ name: 'Login' }).catch(()=>{})
            },
            getDate(hours) {
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const currentMonth = currentDate.getMonth();
                const currentDay = currentDate.getDate();
                const timeStamp = new Date(currentYear, currentMonth, currentDay, 0, 0, 0).getTime();
                return new Date(timeStamp + hours * 60 * 60 * 1000).getTime();
            },
            openModal(id){

                this.$store.dispatch("GET_AXIOS_EVENT",{id:id})
                this.$store.dispatch("GET_AXIOS_USERS")
                this.$store.dispatch("GET_AXIOS_BABYCARDS")

            },
            deleteTask(id){
                this.$store.dispatch("DELETE_AXIOS_EVENTS",{id:id})
            }
        }

    };
</script>
