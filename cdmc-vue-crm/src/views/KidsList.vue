
<template>
    <div>
        <dragable-calendar></dragable-calendar>
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
        <div class="row m-b-20">
            <div class="col col-md-9">
                <!--div class="card-block table-border-style">

                    <ul class="nav nav-tabs md-tabs " role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#home7" role="tab"><i class="fa fa-list"></i>Список</a>
                            <div class="slide"></div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#profile7" role="tab">
                                <i class="fa fa-tasks"></i>Гарн</a>
                            <div class="slide"></div>
                        </li>

                    </ul>

                    <div class="tab-content card-block">
                        <div class="tab-pane active" id="home7" role="tabpanel">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Пациент</th>
                                        <th>Специалист</th>
                                        <th>Тип приема</th>
                                        <th>Начало</th>
                                        <th><i class="fa fa-clock-o"></i></th>
                                        <th><i class="fa fa-gears"></i></th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="Event in EventList" :key="Event.id"  >
                                        <th scope="row">{{Event.id}}</th>
                                        <td>{{Event.babycard.kidf}} {{Event.babycard.kidi}} {{Event.babycard.kido}}</td>
                                        <td>{{Event.doctor.username}}</td>
                                        <td>{{Event.typeEvent}}</td>
                                        <td>{{Event.strtime}}</td>
                                        <td>{{Event.duration}}</td>
                                        <td>

                                            <button @click="openModal(Event.id)" data-toggle="modal" data-target="#large-Modal" class="btn btn-success btn-outline-success">
                                                <i class="fa fa-edit"></i>
                                            </button>
                                            <button @click="deleteTask(Event.id)" class="btn btn-danger btn-outline-danger">
                                                <i class="fa fa-trash-o"></i>
                                            </button>
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane" id="profile7" role="tabpanel">
                            <gunt></gunt>
                        </div>
                    </div>

                </div-->
            </div>
            <div class="col-6 col-md-3">
                <div class="panel panel-warning">
                    <div class="panel-heading bg-warning">
                        Warning Panel
                    </div>
                    <div class="panel-body">
                        <ul class="list-view">
                            <li>
                                <div class="card list-view-media">
                                    <div class="card-block">
                                        <div class="media">
                                            <!--a class="media-left" href="#">
                                                <img class="media-object card-list-img" src="/files/assets/images/avatar-1.jpg" alt="Generic placeholder image">
                                            </a-->
                                            <div class="media-body">
                                                <div class="col-xs-12">
                                                    <h6 class="d-inline-block">Heading</h6>
                                                    <label class="label label-info">Agent</label>
                                                </div>
                                                <div class="f-13 text-muted m-b-15">
                                                    Software Engineer
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div class="panel-footer text-warning">
                        Panel Footer
                    </div>
                </div>
            </div>
        </div>

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
            login:false,
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
