<template>
    <div class="col-sm-4">
        <label>Напомнить </label>
        <div v-for="(item, index)  in reminder">
            <input type="date" v-model="reminder[index].DATE" />
            <!--p>{{index}}{{item}}</p-->
            <!--i class="fa fa-plus-square-o" @click="reminderAdd"></i-->
            <i class="fa fa-minus-square-o" @click="reminderRemove(item)" v-if="item.id" ></i>
        </div>
    </div>
</template>
<script>
    export default {

        data: () => ({
            //TaskID:true,
            reminder:[[]]
        }),
        props:{
            taskID:Number,
        },
        watch:{
            reminder(nv) {
                console.log("reminder_LIST-->", nv,nv.length)
                if (nv) {
                    nv.forEach(async (remi,index) => {

                        if (index == 0 && remi.DATE) {
                            this.$store.dispatch("POST_AXIOS_REMINDERS", {
                                task_board: this.taskID,
                                reminderDate: remi.DATE
                            })
                            console.log("GET_AXIOS_REMINDERS_COUNT",index,  remi.DATE)
                            //this.reminderList++
                        }

                    })
                }
            },

            taskID(nv){
                console.log("watch->taskID",nv)
                this.$store.dispatch("GET_AXIOS_REMINDERS",{params:{task_board:nv}})
            },
            TASK(nv){
                this.reminder = []
                //console.log("TASKTASKTASKTASKTASKTASKTASK",nv)
            },
            REMINDERS_LIST(nv){
                //this.reminder = [{}]

                nv.forEach((itemRem,index) => {

                    this.reminder[index] = {
                        id:itemRem.id,
                        DATE :dayjs(itemRem.reminderDate).format('YYYY-MM-DD'),
                        taskId: this.taskID
                    }

                })

                console.log("REMINDERS_LIST-->",nv,
                    //dayjs(itemRem.reminderDate).format('YYYY-MM-DD')
                    this.reminder)

                return this.reminder.unshift({})
                //console.log("watch->REMINDERS_LIST",nv)
            }

        },
        computed:{
            TASK(){
                return this.$store.getters.TASK
            },
            REMINDERS_LIST(){
                return this.$store.getters.REMINDERS_LIST
            },
        },
        mounted(){
            //console.log("this.taskID",this.taskID)


        },
        methods:{
            reminderRemove(RemId){

                //this.reminder = [{}]
                this.$store.dispatch("DELETE_AXIOS_REMINDERS",{id:RemId.id,task_board:this.taskID})
                var pos = this.reminder.indexOf(RemId);
                this.reminder.splice(pos, 1);
                console.log(RemId,pos)
                //

                // this.$store.dispatch("GET_AXIOS_REMINDERS",{
                //     params:{task_board:this.taskID}
                // })
                // console.log("reminderRemove",RemId)
                //this.reminderList--
            }
        }
    }
</script>