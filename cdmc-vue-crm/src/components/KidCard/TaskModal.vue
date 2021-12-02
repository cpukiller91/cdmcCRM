<template>
    <div>

        <div class="btn-group dropdown-split-info" style="margin: 0 1%">
            <button type="button"
                    id="add-edit"
                    class="btn btn-info"
                    data-toggle="modal"
                    data-target="#large-Modal"
                    @click="openModal"
            ><!--i class="icofont icofont-info-square"></i-->{{titleWindow}}</button>

            <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle primary</span>
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item waves-effect waves-light" ><all-kid-card-modal ></all-kid-card-modal></a>
                <a class="dropdown-item waves-effect waves-light" ><kid-card-modal ></kid-card-modal></a>
                <!--a class="dropdown-item waves-effect waves-light" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item waves-effect waves-light" href="#">Separated link</a-->
            </div>
        </div>

        <div class="modal fade" id="large-Modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document" id="doc">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{titleWindow}}</h4>
                        <!--button type="button" class="close" data-dismiss="modal" @click="closeModal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button-->
                        <div style="float: left">
                        <button v-if="idRecord" @click="EventDelete(idRecord)" class="btn btn-danger btn-outline-danger">Удалить запись</button>
                        <button type="button" @click="closeModal" ref="closeModal" class="btn btn-default waves-effect " data-dismiss="modal">Закрыть</button>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="row m-b-20">
                            <div class="col-md-4">
                                <v-select
                                        v-model="doctorID"
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
                            <div class="col-md-5">
                                <v-date-picker v-model="EventDate" locale="ru-ru"></v-date-picker>
                            </div>
                            <div class="col-md-3">
                                <v-select
                                        v-model="EventTime"

                                        :items="timeStart"
                                        item-text="title"
                                        item-value="id"
                                        label="Начало"
                                        persistent-hint
                                        return-object
                                        single-line
                                ></v-select>
                              <v-textarea
                                  rows="10"
                                  v-model="groupUser"
                                  label="Групповая запись"
                              ></v-textarea>
                            </div>
                            <div class="col-md-2">
                                <v-text-field
                                    v-model="room"
                                    :rules="requiredF"
                                    counter
                                    maxlength="5"

                                    label="Кабинет"
                                ></v-text-field>
                            </div>
                            <div class="col-md-2">
                                <v-select
                                        v-model="durationSelectRange"

                                        :items="timerDurationRange"
                                        :rules="requiredF"
                                        label="Длительность"
                                        persistent-hint
                                        return-object
                                        single-line
                                ></v-select>
                            </div>
                        </div>

                        <tab-task-modal v-if="accessTab"></tab-task-modal>


                    </div>
                    <div class="modal-footer">
                        <button type="button" id="closeModal" @click="closeModal" ref="closeModal" class="btn btn-default waves-effect " data-dismiss="modal">Закрыть</button>
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
            groupUser:"",

            room: null,
            requiredF:[
                value => !!value || 'Обязательное поле.'
            ],
            EventDate: "",
            EventTime: "9:00",
            accessTab: false,
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
            durationSelectRange:30,
            timeStart:[
                "09:00",
                "09:30",
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
            doctorID:null,
            kid:null,
            timeS:null,
            modal:false,
            editArray:null

        }),
        mounted(){
            // $( "#doc" ).click( () => {
            //     const elem = this.$refs.closeModal
            //     elem.click()
            // });
            // this.openModal()
            //


            //console.log("YYYY-MM-DD H:m",this.timeS,dayjs(curent_date).format('YYYY-MM-DDTH:m'))


        },
        computed: {
            DROP_EVENT(){
                return this.$store.getters.DROP_EVENT;
            },
            USERS_LIST_BY_KEY_ID(){
                return this.$store.getters.USERS_LIST_BY_KEY_ID;
            },
            cartList(){
                return this.$store.getters.BABYCARDS_LIST_SELECT_OPTION;
            },
            userList(){
                return this.$store.getters.USERS_LIST;
            },
            EVENT() {
                return this.$store.getters.EVENT;
            }
        },
        watch:{
            EventTime(nv){
                this.timeS = this.EventDate + " "+nv
                console.log("EventDate-T->",nv,this.timeS)
            },
            EventDate(nv){
                this.timeS = nv + " "+this.EventTime
                console.log("EventDate-->",nv,this.timeS)
            },
            DROP_EVENT(nv){
                this.doctorID = nv.doctor
                // this.timeS =
                //     //"2021-08-19T09:30"
                //     dayjs(nv.strtime).format('YYYY-MM-DDTHH:mm')

                this.EventDate =  dayjs(nv.strtime).format('YYYY-MM-DD')
                this.EventTime =  dayjs(nv.strtime).format('HH:mm')
                //console.log("DROP_EVENT",nv,this.timeS)
            },
            USERS_LIST_BY_KEY_ID(nv){
                //console.log("USERS_LIST_BY_KEY_ID",nv)
            },
            userList(nv){
                //console.log("weweweew",nv)
            },
            EVENT(newValue,oldValue){
               if(newValue.id) {
                   this.EventDate =  dayjs(newValue.strtime).format('YYYY-MM-DD'),
                   this.EventTime =  dayjs(newValue.strtime).format('HH:mm'),
                   this.idRecord = newValue.id;
                   this.durationSelectRange = newValue.duration
                   this.timeS = newValue.strtime
                   this.$store.dispatch("GET_AXIOS_BABYCARD",{id:newValue.babycard.id})
                   this.kid = newValue.babycard
                   this.doctorID = newValue.doctor
                   this.typeCurent = newValue.typeEvent
                   this.room = newValue.title,
                   //console.log("watch-TaskModal-EVENT",newValue,this.idRecord)
                   this.accessTab = true
                  this.groupUser = newValue.groupUser
                }

            }
        },
        methods:{
            EventDelete(id){
                this.$store.dispatch("DELETE_AXIOS_EVENTS",{id:id})
                const elem = this.$refs.closeModal
                elem.click()
                //console.log("EventDelete",id)
            },
            closeModal(){
                var curent_date = new Date();
                this.idRecord = null;
                this.durationSelectRange = null;
                this.EventDate = dayjs(curent_date).format('YYYY-MM-DD');
                this.EventTime = "9:00";
                this.typeCurent = null;
                this.room = ""
                this.doctorID = null;
                this.kid = null;
                this.accessTab = false
                this.groupUser = ""
                //this.$store.dispatch("OPEN_EVENT_MODAL",false)

            },
            openModal(){
                this.$store.dispatch("GET_EVENT")
                this.$store.dispatch("GET_AXIOS_USERS",{params:{"visState_ne":false}})
                this.$store.dispatch("GET_AXIOS_BABYCARDS")
                var curent_date = new Date();
                this.timeS =
                    //"2021-08-17T23:27"
                    dayjs(curent_date).format('YYYY-MM-DDTHH:mm')


            },
          async saveTask(){

                var dodID,kidID
                //console.log(this.idRecord)
                if(this.doctorID == null && this.kid == null){
                    return false;
                }
                console.log("timeS",this.timeS)

                var data = {
                    id:this.idRecord,
                    duration:this.durationSelectRange,

                    // times:this.times,
                    groupUser:this.groupUser,
                    strtime: this.timeS,
                    typeEvent:this.typeCurent,
                    title:this.room,
                    //title:this.userList[dodID].username + " ("+this.cartList[kidID].title+")",
                    doctor:this.doctorID.id,
                    month:dayjs(this.timeS).format('MM'),
                    dayOfMonth:dayjs(this.timeS).format('DD'),
                    times:dayjs(this.timeS).format('YYYY'),
                    color:this.USERS_LIST_BY_KEY_ID[this.doctorID.id].usergroup.color,
                    babycard:this.kid.id,

                }
                console.log("Log<<<<<<<<<<<----------------_>>>>>>>",data)
                //return false;

                var validator = await this.$store.dispatch("GET_AXIOS_EVENTS_VALIDATOR",{
                  params:{
                    babycard:this.kid.id,
                    // doctor:this.doctorID.id,
                    month:dayjs(this.timeS).format('MM'),
                    dayOfMonth:dayjs(this.timeS).format('DD'),
                    times:dayjs(this.timeS).format('YYYY'),
                    strtime: this.timeS
                  }
                })
                console.log("Log validator",validator)

                  if(this.idRecord == null){
                    if(validator == 0){
                      this.$store.dispatch("POST_AXIOS_EVENTS",data)
                    }else{
                      alert("Такая запись уже существует")
                      this.closeModal()
                    }
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
<style>
    .dropdown-menu>a {
        padding: 17px 16px !important;
    }
    .btn-group, .btn-group-vertical {
        padding: 0px 6px !important;
    }
    .v-btn__content {
        color: black !important;
    }
</style>