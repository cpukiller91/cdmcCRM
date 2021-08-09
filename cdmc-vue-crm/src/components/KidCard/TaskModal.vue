<template>
    <div>
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#large-Modal"><i class="icofont icofont-info-square"></i>{{titleWindow}}</button>
        <!-- Modal large-->

        <div class="modal fade" id="large-Modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{titleWindow}}</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="j-pro/php/action.php" method="post" class="j-pro" id="j-pro" novalidate="">
                            <div class="j-content">
                                <!-- start name -->
                                <div class="j-row">
                                    <div class="j-span6 j-unit">
                                        <div class="j-input">

                                            <select class="js-example-disabled-results" v-model="userPostanov" style="width: 190px !important;">
                                                <option :value="user.id" v-for="user in userList" :key="user.id">{{user.username}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="j-span6 j-unit">
                                        <div class="j-input">

                                            <select class="js-example-disabled-results" v-model="cartCurent" style="width: 190px !important;">
                                                <option :value="cart.id" v-for="cart in cartList" :key="cart.id">{{cart.kidf}} {{cart.kidi}} {{cart.kido}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <!-- end name -->
                                <!-- start email url -->
                                <div class="j-row">
                                    <div class="j-span4 j-unit">
                                        <div class="j-input">

                                            <select class="js-example-disabled-results" v-model="typeCurent" style="width: 190px !important;">
                                                <option :value="typeL" v-for="typeL in typeList" :key="typeL">{{typeL}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="j-span4 j-unit">
                                        <div class="j-input">

                                            <input type="datetime-local">
                                        </div>
                                    </div>
                                    <div class="j-span4 j-unit">
                                        <div class="j-input">
                                            <input type="time">
                                        </div>
                                    </div>
                                </div>
                                <!-- end email url -->


                                <!-- end notify me -->
                                <!-- start response from server -->
                                <div class="j-response"></div>
                                <!-- end response from server -->
                            </div>

                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default waves-effect " data-dismiss="modal">Закрыть</button>
                        <button type="button" @click="saveTask" class="btn btn-primary waves-effect waves-light ">Сохранить</button>
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
            userList:[],
            typeCurent:"Диагностика",
            typeList:[
                "Диагностика",
                "Консультация",
                "Индивидуальное занятие",
                "Групповое занятие",
                "Консультация родителей",
                "Прием КДЦ",
                "Мониторинг"
            ],
            userPostanov:1,
            cartCurent:1,
            menu:false,
            cartList:[],
            userId:null,
            babycard:null

        }),
        mounted(){
            this.openModal()
        },
        methods:{
            openModal(){
                console.log("openModal")
                this.$http.get('/users')
                .then( (response) => {
                    // handle success
                    //this.message = response.message[0].message;
                    this.userList = response.data;
                    // this.src.forEach(element => {
                    //   //console.log("Home list Layouts",element);
                    //   //this.createElement(element)
                    // })
                    console.log("Task list Server",response);
                })
                .catch( (error) => {
                    console.log("Login error",error);
                    // handle error
                    console.log(error);
                });
                ///babycards

                this.$http.get('/babycards')
                .then( (response) => {
                    // handle success
                    //this.message = response.message[0].message;
                    this.cartList = response.data;
                    // this.src.forEach(element => {
                    //   //console.log("Home list Layouts",element);
                    //   //this.createElement(element)
                    // })
                    console.log("Task list Server",response);
                })
                .catch( (error) => {
                    console.log("Login error",error);
                    // handle error
                    console.log(error);
                });
            },
            saveTask(){
                var data = {
                    // durationUnit:this.durationUnit,
                    // duration:this.duration,
                    // times:this.times,
                    // strtime: this.durationSelect,
                    // typeEvent:this.typeEvent,
                    // title:this.title,
                    doctor:this.userId,
                    // month:this.month,
                    // dayOfMonth:this.dayOfMonth,
                    // color:this.details.color,
                    babycard:this.babycard,

                }
                //console.log(this);
                this.$http.post('/eventlists', data)
                    .then(response => {
                        // console.log("eventlists save",response);
                        // window.location.href = '/'

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                //console.log("dss")
            }
        }
    };
</script>