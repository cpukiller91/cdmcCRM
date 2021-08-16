<template>
    <div>
        <button  @click="openModal" type="button" id="add-edit" class="btn btn-info" data-toggle="modal" data-target="#large-Modal"><i class="icofont icofont-info-square"></i>{{titleWindow}}</button>
        <!-- Modal large-->

        <div class="modal fade" id="large-Modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{titleWindow}}</h4>
                        <button type="button" class="close" data-dismiss="modal" @click="closeModal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row m-b-20">
                            <div class="col-md-4">
                                <v-select
                                        v-model="doctor"
                                        :rules="requiredF"
                                        :items="userList"
                                        item-text="username"
                                        item-value="id"
                                        label="Специалист"
                                        persistent-hint
                                        return-object
                                        single-line
                                ></v-select>
                            </div>
                            <div class="col-md-4">
                                <v-select
                                        v-model="kid"
                                        :rules="requiredF"
                                        :items="cartList"
                                        item-text="title"
                                        item-value="id"
                                        label="Ребенок"
                                        persistent-hint
                                        return-object
                                        single-line
                                ></v-select>
                            </div>
                            <div class="col-md-4">
                                <v-select
                                        v-model="typeCurent"
                                        :rules="requiredF"
                                        :items="typeList"

                                        label="Тип приема"
                                        persistent-hint
                                        return-object
                                        single-line
                                ></v-select>
                            </div>
                        </div>

                        <div class="row m-b-20">
                            <div class="col-md-4">
                                <input type="datetime-local" :rules="requiredF" v-model="timeS">
                            </div>
                            <!--div class="col-md-4">
                                <v-select
                                        v-model="timeS"

                                        :items="timeStart"
                                        item-text="title"
                                        item-value="id"
                                        label="Начало приема"
                                        persistent-hint
                                        return-object
                                        single-line
                                ></v-select>
                            </div-->
                            <div class="col-md-4">
                                <v-select
                                        v-model="durationSelectRange"

                                        :items="timerDurationRange"
                                        :rules="requiredF"
                                        label="Длительность приема"
                                        persistent-hint
                                        return-object
                                        single-line
                                ></v-select>
                            </div>


                        </div>

                        <tab-task-modal v-if="accessTab"></tab-task-modal>


                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="closeModal" ref="closeModal" class="btn btn-default waves-effect " data-dismiss="modal">Закрыть</button>
                        <button type="button" ref="openModal" @click="saveTask" class="btn btn-primary waves-effect waves-light ">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // props: {
        //     // title: String,
        //     // likes: Number,
        //     // isPublished: Boolean,
        //     editEvent: Array
        //     // author: Object,
        //     // callback: Function,
        //     // contactsPromise: Promise // или любой другой конструктор
        // },
        data: () => ({
            requiredF:[
                value => !!value || 'Обязательное поле.'
            ],
            accessTab:false,
            titleWindow: "Записать пациента",
            idRecord:null,
            startDATE:"",
            typeList:[
                "Диагностика",
                "Консультация",
                "Индивидуальное занятие",
                "Групповое занятие",
                "Консультация родителей",
                "Прием КДЦ",
                "Мониторинг"
            ],
            timerDurationRange:[30,60],
            durationSelectRange:"",
            timeStart:[
                "9:00",
                "9:30",
                "10:00",
                "10:30",
                "11:00",
                "11:30",
                "12:00",
                "12:30",
                "13:00",
                "13:30",
                "14:00",
                "14:30",
                "15:00",
                "15:30",
                "16:00",
                "16:30",
                "17:00",
                "17:30",
                "18:00",
                "18:30",
                "19:00",
            ],
            typeCurent:"Диагностика",
            doctor:null,
            kid:null,
            timeS:null,
            modal:false,
            editArray:null

        }),
        mounted(){
            // this.openModal()
            //
            var curent_date = new Date();
            this.startDATE = dayjs(curent_date).format('YYYY-MM-DD H:m')


        },
        computed: {

            cartList(){
                return this.$store.getters.BABYCARDS_LIST_SELECT_OPTION;
            },
            userList(){
                return this.$store.getters.USERS_LIST;
            },
            EVENT() {
                return this.$store.getters.EVENT;
            },
        },
        watch:{
            EVENT(newValue,oldValue){
               if(newValue.id) {

                   this.idRecord = newValue.id;
                   this.durationSelectRange = newValue.duration
                   this.timeS = newValue.strtime
                   this.$store.dispatch("GET_AXIOS_BABYCARD",{id:newValue.babycard.id})
                   this.kid = newValue.babycard.id
                   this.doctor = newValue.doctor.id
                   this.typeCurent = newValue.typeEvent
                   //console.log("watch-TaskModal-EVENT",newValue,this.idRecord)
                   this.accessTab = true
                }

            }
        },
        methods:{
            closeModal(){
                this.idRecord = null;
                this.durationSelectRange = null;
                this.timeS = null;
                this.typeCurent = null;

                this.doctor = null;
                this.kid = null;
                this.accessTab = false
                //this.$store.dispatch("OPEN_EVENT_MODAL",false)

            },
            openModal(){
                this.$store.dispatch("GET_EVENT")
                this.$store.dispatch("GET_AXIOS_USERS")
                this.$store.dispatch("GET_AXIOS_BABYCARDS")

            },
            saveTask(){
                var dodID,kidID
                console.log(this.idRecord)
                if(this.doctor == null && this.kid == null){
                    return false;
                }

                if(this.idRecord == null){
                    dodID = this.doctor.id
                    kidID = this.kid.id
                }else{
                    dodID = this.doctor
                    kidID = this.kid
                }
                //
                //
                var data = {
                    id:this.idRecord,
                    duration:this.durationSelectRange,
                    // times:this.times,
                    strtime: this.timeS,
                    typeEvent:this.typeCurent,
                    //title:this.userList[dodID].username + " ("+this.cartList[kidID].title+")",
                    doctor:dodID,
                    // month:this.month,
                    // dayOfMonth:this.dayOfMonth,
                    // color:this.details.color,
                    babycard:kidID,

                }

                if(this.idRecord == null){
                    //console.log("new",data)
                    this.$store.dispatch("POST_AXIOS_EVENTS",data)
                }else{
                    //console.log("edit",data)
                    this.$store.dispatch("PUT_AXIOS_EVENTS",data)
                }


                const elem = this.$refs.closeModal
                elem.click()


            }

        }
    };
</script>