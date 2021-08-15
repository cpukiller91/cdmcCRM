
<template>
    <div>

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
        <div class="card-block table-border-style">
            <!-- Nav tabs -->
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
            <!-- Tab panes -->
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
                                <th>Длительность</th>
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

        </div>
    </div>
    </div>
</template>
<script>
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
            // LOGIN_USER(){
            //     return this.$store.getters.LOGIN_USER;
            // },
            Event() {
                return this.$store.getters.EVENT;
            },
            EventList() {
                return this.$store.getters.EVENT_LIST;
            },
        },
        watch:{
            // LOGIN_USER(newValue){
            //     console.log("LOGIN_USER",newValue)
            //     // if(newValue == null){
            //     //
            //     //     this.$router.push({ name: 'Login' })
            //     // }else{
            //     //     this.login = true
            //     //     this.$router.push({ name: 'Home' })
            //     // }
            // }
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

                //console.log("--11--",this.eventID)
                // var data = {
                //     params: {
                //         id: id
                //     }
                // }
                this.$store.dispatch("GET_AXIOS_EVENT",{id:id})
                this.$store.dispatch("GET_AXIOS_USERS")
                this.$store.dispatch("GET_AXIOS_BABYCARDS")
                //
                // console.log("--modal-edit--",this.eventID)
                //console.log("----",this.eventID)
                // console.log("--TaskModal-->>",this.todoList)
                // //this.question;
                // console.log("openModal")
                // this.$http.get('/users')
                // .then( (response) => {
                //     // handle success
                //     //this.message = response.message[0].message;
                //     this.userList = response.data;
                //     // this.src.forEach(element => {
                //     //   //console.log("Home list Layouts",element);
                //     //   //this.createElement(element)
                //     // })
                //     console.log("Task list Server",response);
                // })
                // .catch( (error) => {
                //     console.log("Login error",error);
                //     // handle error
                //     console.log(error);
                // });
                // ///babycards
                //
                // this.$http.get('/babycards')
                // .then( (response) => {
                //     // handle success
                //     //this.message = response.message[0].message;
                //     this.cartList = []
                //     //
                //     response.data.forEach(element => {
                //         this.cartList.push({
                //             title:element.kidf+" "+element.kidi+" "+element.kido,
                //             id:element.id
                //         });
                //       //console.log("babycards",element.id,element.kidf);
                //       //this.createElement(element)
                //     })
                //     console.log("babycards",response);
                // })
                // .catch( (error) => {
                //     console.log("Login error",error);
                //     // handle error
                //     console.log(error);
                // });
            },
            deleteTask(id){
                this.$store.dispatch("DELETE_AXIOS_EVENTS",{id:id})
            }
        }

    };
</script>
