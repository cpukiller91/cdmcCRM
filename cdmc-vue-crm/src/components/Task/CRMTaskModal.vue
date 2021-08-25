<template>

    <div class="btn-group dropdown-split-success">
        <button data-toggle="modal" data-target="#large-Modal-task" type="button" class="btn btn-success"><i class="icofont icofont-check-circled"></i>Поставить задачу</button>
        <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle primary</span>
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item waves-effect waves-light" href="#">Action</a>
            <a class="dropdown-item waves-effect waves-light" href="#">Another action</a>
            <a class="dropdown-item waves-effect waves-light" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item waves-effect waves-light" href="#">Separated link</a>
        </div>


        <!-- Modal large-->

        <div class="modal fade" id="large-Modal-task" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Задачи CRM</h4>
                        <button @click="closeModal" type="button" id="closeModalTask" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs md-tabs tabs-left b-none" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#project" role="tab">Проект</a>
                                <div class="slide"></div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#profile5" role="tab">Задача</a>
                                <div class="slide"></div>
                            </li>
                            <!--li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#messages5" role="tab">Выполнение</a>
                                <div class="slide"></div>
                            </li-->
                            <li class="nav-item" v-if="commentAccess">
                                <a class="nav-link" data-toggle="tab" href="#settings5" role="tab">Комментарий</a>
                                <div class="slide"></div>
                            </li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content tabs-left-content card-block" style="width: 100%">
                            <div class="tab-pane active" id="project" role="tabpanel">

                                <div class="form-group row">

                                    <div class="col-sm-12">
                                        <v-select
                                            v-model="curentProject"
                                            :items="PROJECT_LIST"
                                            label="Проект для редактирования"
                                            item-text="title"
                                            item-value="id"

                                        ></v-select>
                                    </div>
                                </div>
                                <div class="form-group row">

                                    <div class="col-sm-12">
                                        <div style="float: right">
                                            <button @click="resetNew" class="btn btn-info btn-outline-info"><i class="icofont icofont-eye-alt"></i>Скинуть фильтр</button>
                                            <button @click="saveProject" class="btn btn-success btn-outline-success"><i class="icofont icofont-check-circled"></i>Сохранить</button>
                                            <button @click="removeProject" class="btn btn-danger btn-outline-danger"><i class="icofont icofont-eye-alt"></i>Удалить</button>
                                        </div>
                                    </div>
                                </div>
                                <!--v-divider></v-divider-->
                                <div class="form-group row" >
                                   <div class="col-sm-6" >
                                       <div  >
                                           <v-menu


                                                   ref="menuStartProject"
                                                   v-model="menuStartProject"
                                                   :close-on-content-click="false"
                                                   :return-value.sync="dateStartProject"
                                                   transition="scale-transition"
                                                   offset-y
                                                   min-width="auto"
                                           >
                                               <template v-slot:activator="{ on, attrs }">
                                                   <v-text-field
                                                           v-model="dateStartProject"
                                                           label="Начало проекта"
                                                           prepend-icon="mdi-calendar"
                                                           readonly
                                                           v-bind="attrs"
                                                           v-on="on"
                                                   ></v-text-field>
                                               </template>
                                               <v-date-picker
                                                       v-model="dateStartProject"
                                                       no-title
                                                       scrollable
                                                       locale="ru-ru"
                                               >
                                                   <v-spacer></v-spacer>
                                                   <v-btn
                                                           text
                                                           color="primary"
                                                           @click="menuStartProject = false"
                                                   >
                                                       Cancel
                                                   </v-btn>
                                                   <v-btn
                                                           text
                                                           color="primary"
                                                           @click="$refs.menuStartProject.save(dateStartProject)"
                                                   >
                                                       OK
                                                   </v-btn>
                                               </v-date-picker>
                                           </v-menu>
                                       </div>

                                   </div>
                                   <div class="col-sm-6">
                                       <v-text-field
                                               v-model="duration"
                                               label="Длительность проекта в днях"
                                               type="number"

                                       ></v-text-field>

                                   </div>
                               </div>
                                <div class="form-group row">

                                    <div class="col-sm-12">
                                        <v-select
                                                :items="TASK_USER_LIST"
                                                v-model="PROJECT.boss"
                                                item-text="username"
                                                item-value="id"
                                                label="Руководитель"

                                        ></v-select>
                                    </div>
                                </div>

                                <div class="form-group row">

                                    <div class="col-sm-12">
                                        <v-text-field label="Название проекта" v-model="PROJECT.title"></v-text-field>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-sm-12">
                                        <v-textarea
                                                autocomplete="email"
                                                label="Описание"
                                                v-model="PROJECT.description"
                                        ></v-textarea>
                                    </div>
                                </div>


                                <div class="form-group row">
                                    <div class="col-sm-6">

                                    </div>
                                    <div class="col-sm-6">
                                        <div style="float: right">
                                            <button @click="saveProject" class="btn btn-success btn-outline-success"><i class="icofont icofont-check-circled"></i>Сохранить</button>
                                            <button @click="removeProject" class="btn btn-danger btn-outline-danger"><i class="icofont icofont-eye-alt"></i>Удалить</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane" id="profile5" role="tabpanel">

                                <div class="form-group row">

                                    <div class="col-sm-12">
                                        <div style="float: right">
                                            <!--button @click="resetNew" class="btn btn-info btn-outline-info"><i class="icofont icofont-eye-alt"></i>Скинуть фильтр</button-->
                                            <button @click="saveTask" class="btn btn-success btn-outline-success"><i class="icofont icofont-check-circled"></i>Сохранить</button>
                                            <button @click="removeTask" class="btn btn-danger btn-outline-danger"><i class="icofont icofont-eye-alt"></i>Удалить</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">

                                    <div class="col-sm-6">
                                        <v-text-field label="Название задачи" v-model="taskName"></v-text-field>
                                    </div>
                                    <div class="col-sm-6">
                                        <v-select
                                            v-model="taskProject"
                                            :items="PROJECT_LIST"
                                            label="Проект"
                                            item-text="title"
                                            item-value="id"
                                        ></v-select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-3">
                                        <v-select
                                                :items="statusList"
                                                v-model="status"
                                                label="Статус"

                                        ></v-select>
                                    </div>
                                    <div class="col-sm-3">
                                        <v-select
                                                :items="priorityList"
                                                v-model="priority"
                                                label="Приоритет"

                                        ></v-select>
                                    </div>
                                    <div class="col-sm-3">
                                        <input type="date" v-model="startDate">
                                    </div>
                                    <div class="col-sm-3">
                                        <v-text-field
                                                v-model="durationTask"
                                                label="Длительность задачи в днях"
                                                type="number"

                                        ></v-text-field>
                                    </div>
                                </div>
                                <div class="form-group row">

                                    <div class="col-sm-12">
                                        <v-textarea
                                                autocomplete="email"
                                                label="Описание"
                                                v-model="taskDescription"
                                        ></v-textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-4">
                                        <v-select
                                                :items="TASK_USER_LIST"
                                                v-model="postanovchik"
                                                item-text="username"
                                                item-value="id"
                                                label="Постановщик"

                                        ></v-select>
                                    </div>
                                    <div class="col-sm-4">
                                        <v-select
                                                :items="TASK_USER_LIST"
                                                v-model="otvetstvennij"
                                                item-text="username"
                                                item-value="id"
                                                label="Ответственный"

                                        ></v-select>
                                    </div>

                                    <div class="col-sm-4">
                                        <label>Напомнить </label>
                                        <div v-for="i in reminderList">
                                            <input type="date" v-model="reminder[i]">
                                            <i class="fa fa-plus-square-o" @click="reminderAdd"></i>
                                            <i class="fa fa-minus-square-o" @click="reminderRemove" v-if="reminderList > 1" ></i>
                                        </div>
                                    </div>

                                </div>


                                <div class="form-group row">
                                    <div class="col-sm-6">

                                    </div>
                                    <div class="col-sm-6">

                                    </div>
                                </div>

                                <!--v-divider></v-divider-->



                                <div class="form-group row">
                                    <div class="col-sm-6">

                                    </div>
                                    <div class="col-sm-6">
                                        <div style="float: right">
                                            <button @click="saveTask" class="btn btn-success btn-outline-success"><i class="icofont icofont-check-circled"></i>Сохранить</button>
                                            <button @click="removeTask" class="btn btn-danger btn-outline-danger"><i class="icofont icofont-eye-alt"></i>Удалить</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="messages5" role="tabpanel">
                                <p class="m-0">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>
                            </div>

                            <div class="tab-pane" id="settings5" role="tabpanel" v-if="commentAccess">
                                <div class="form-group row">


                                </div>
                                <div class="form-group row">

                                    <div class="col-sm-12">
                                        <v-textarea
                                                autocomplete="email"
                                                label="Комментарий исполнителя"
                                                v-model="commentTask"
                                        ></v-textarea>
                                    </div>
                                </div>
                                <div class="form-group row">

                                    <div class="col-sm-12">
                                        <v-file-input
                                                v-model="attachFile"
                                                chips
                                                multiple
                                                label="Прикрепленные файлы"
                                        ></v-file-input>
                                    </div>
                                    <div class="col-sm-12">
                                        <div style="float: right">
                                            <!--button @click="resetNew" class="btn btn-info btn-outline-info"><i class="icofont icofont-eye-alt"></i>Скинуть фильтр</button-->
                                            <button @click="saveComment" class="btn btn-success btn-outline-success">
                                                <i class="icofont icofont-check-circled"></i>Сохранить</button>
                                            <!--button @click="removeTask" class="btn btn-danger btn-outline-danger"><i class="icofont icofont-eye-alt"></i>Удалить</button-->
                                        </div>
                                    </div>
                                </div>

                                <template>
                                    <v-expansion-panels>
                                        <v-expansion-panel
                                                v-for="COMMENTS in COMMENTS_LIST" :key="COMMENTS.id"
                                        >
                                            <v-expansion-panel-header>
                                                {{COMMENTS.published_at}}

                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <div class="col-sm-12">
                                                    <div style="float: right">
                                                        <button @click="removeComment(COMMENTS.id)" class="btn btn-danger btn-outline-danger">
                                                            <i class="icofont icofont-eye-alt"></i>Удалить</button>
                                                    </div>
                                                </div>
                                                {{COMMENTS.comment}}
                                                <div v-for="Files in COMMENTS.AttachedFiles" :key="Files.id">
                                                    <a target="_blank" :href="'https://admin.cdcmc.ru' + Files.url">{{Files.name}}</a>
                                                </div>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
                                </template>
                            </div>
                        </div>

                    </div>
                    <!--div class="modal-footer">
                        <button type="button" class="btn btn-default waves-effect " data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary waves-effect waves-light ">Save changes</button>
                    </div-->
                </div>
            </div>
        </div>
    </div>


</template>
<script>
    import axios from "axios"
    export default {
        data: () => ({
            reminder:[],

            menuEndProject:false,
            menuStartProject:false,
            EndProject:null,
            dateStartProject:null,

            rules: {
                required: value => !!value || 'Обязательное поле.',
                counter: value => value.length <= 20 || 'Max 20 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            },

            duration:1,
            commentTask:"",
            startDate:"2021-08-24",
            durationTask:1,
            status:"",
            statusList:["Открытый","Закрытый","Новый","В работе"],

            priorityList:["Высший","Высокий","Нормальный","Низкий"],
            priority:"",

            dateEndTask:"",
            menuModalEndDate:"",

            otvetstvennij:'',
            taskDescription:"",
            taskName:"",

            postanovchik:'',
            taskProject:"",
            reminderList:1,

            TaskID:null,
            commentAccess:false,
            isReset:true,
            dates: [],
            dialog:false,
            boss:0,
            curentProject:null,
            projectList:[],
            attachFile:null
            // src:[
            //     "/files/bower_components/jquery.cookie/js/jquery.cookie.js",
            //     "/files/bower_components/jquery.steps/js/jquery.steps.js",
            //     "/files/bower_components/jquery-validation/js/jquery.validate.js",
            //
            //     "/files/assets/pages/form-validation/validate.js",
            //     "/files/assets/pages/forms-wizard-validation/form-wizard.js"
            // ]
        }),
        watch:{
            reminder(nv){
                console.log("reminder_LIST-->",nv)
            },
            COMMENTS_LIST(nv){

                console.log("COMMENTS_LIST-->",nv)
            },
            TASK(nv){
                    console.log("TASK-CRM->",nv)

                this.taskName = nv.title,
                this.taskProject = nv.project,

                this.priority = nv.Priority,
                this.status = nv.Status,
                this.taskDescription = nv.Task,

                this.otvetstvennij = nv.otvetstvenni,
                this.postanovchik = nv.postanovshik,

                //this.dateEndTask = dayjs(nv.dateEndTask).format('YYYY-MM-DD'),
                this.durationTask = nv.duration,
                this.startDate = dayjs(nv.startDate).format('YYYY-MM-DD')

                this.TaskID = nv.id
                this.commentAccess = true
                this.$store.dispatch("GET_AXIOS_COMMENTS",{task_board:nv.id})

            },
            TASK_USER_LIST(){

            },
            curentProject(nv){
                this.$store.dispatch("GET_AXIOS_PROJECT",{id:nv})
                console.log("watch curentProject",nv)
            },
            PROJECT_LIST(nv){
                console.log("watch PROJECT_LIST",nv)
            },
            PROJECT(nv){
                this.duration = nv.duration,
                this.dateStartProject = dayjs(nv.startProject).format('YYYY-MM-DD'),
                //this.$refs.menuStartProject.save(dayjs(nv.dateStartProject).format('YYYY-MM-DD'))
                // this.PROJECT.startProject = dayjs(nv.startProject).format('YYYY-MM-DD')
                // this.PROJECT.endProject = dayjs(nv.endProject).format('YYYY-MM-DD')
               // $refs.menu.save([])
               //  this.dates[0] = dayjs(nv.startProject).format('YYYY-MM-DD')
               //  this.dates[1] = dayjs(nv.endProject).format('YYYY-MM-DD')
                //this.onClear()
                //this.PROJECT.boss = nv.boss.id

                // this.dates[0] = nv.startProject
                // this.dates[1] = nv.endProject
                console.log("watch PROJECT",nv)
            }
        },
        computed: {
            COMMENTS_LIST(){
                return this.$store.getters.COMMENTS_LIST
            },
            TASK(){
                return this.$store.getters.TASK
            },
            TASK_USER_LIST(){
                return this.$store.getters.TASK_USER_LIST
            },
            PROJECT_LIST(){
                return this.$store.getters.PROJECT_LIST
            },
            PROJECT(){
                return this.$store.getters.PROJECT
            },
            dateRangeText () {
                //console.log("watch dateRangeText",this.dates)
                return this.dates.join(' ~ ')
            },
        },
        mounted() {
            this.dateEndTask = ""

            var curent_date = new Date();
            this.dates[0] = dayjs(curent_date).format('YYYY-MM-DD')
            this.dates[1] = dayjs(curent_date).format('YYYY-MM-DD')

            // this.dates[0] = '2019-08-10'
            // //dayjs(nv.startProject).format('YYYY-MM-DD')
            // this.dates[1] = '2019-08-15'
            //dayjs(nv.endProject).format('YYYY-MM-DD')
            this.$store.dispatch("GET_AXIOS_TASK_USER_LIST")
            this.$store.dispatch("GET_AXIOS_PROJECT_LIST")
            this.$store.dispatch("GET_GUNT_TASK_BOARD_LIST")

            // this.src.forEach(element => {
            //
            //     //this.createElement(element)
            // })

        },
        methods:{
            reminderAdd(){
                this.reminderList++
            },
            reminderRemove(){
                this.reminderList--
            },
            removeComment(id){
                this.$store.dispatch("DELETE_AXIOS_COMMENTS",{id:id})
            },
            saveComment(){
                let formData = new FormData();

                // files
                for (let file of this.attachFile) {
                    //console.log("files-->",file)
                    formData.append("files.AttachedFiles", file, file.name);

                    //console.log('>> formData >> ', formData);
                }
                //formData.append('AttachedFiles', this.attachFile);


                var data = {
                    title: this.commentTask,
                    comment: this.commentTask,
                    //AttachedFiles: this.attachFile,
                    task_board:  this.TaskID
                }

                formData.append("data", JSON.stringify(data));
                //formData.append('file', this.imageData);
                // axios.post(
                //     "/comments/"
                //     ,formData
                //     ,{headers: {"Content-Type": "multipart/form-data"}}
                // )
                //     .then(response => {
                //         console.log("multipart/form-data",response)
                //     })

                this.$store.dispatch("POST_AXIOS_COMMENTS",formData)


            },
            closeModal(){
                this.duration = 1,
                this.dateStartProject = '',
                this.commentAccess = false
                this.taskName = ""
                this.taskDescription = ""
                this.TaskID = null
                this.taskProject = null
                this.status = ""
                this.priority = ""
                this.dateEndTask = ""
                this.postanovchik = ""
                this.otvetstvennij = ""
                $("#closeModalTask").click()
            },
            saveTask(){
                var data = {
                    title: this.taskName,
                    AttachedFiles:[],
                    Task: this.taskDescription,
                    id:this.TaskID,
                    comments:[],
                    project: this.taskProject,

                    postanovshik:this.postanovchik,
                    otvetstvenni:this.otvetstvennij,
                    //
                    Status: this.status,
                    Priority: this.priority,
                    //
                    duration: this.durationTask,
                    startDate: this.startDate
                }
                if(this.TaskID == null){
                    this.$store.dispatch("POST_AXIOS_BOARDS",data)

                }else{
                    this.$store.dispatch("PUT_AXIOS_BOARDS",data)
                }
                //this.$store.dispatch("GET_GUNT_TASK_PROJECT_BOARD_LIST")
                //this.$store.dispatch("GET_GUNT_TASK_PROJECT_LIST")
                this.closeModal()
                //this.$store.dispatch("POST_AXIOS_BOARDS",data)
                console.log("saveTask",data);
            },
            removeTask(id){
                this.$store.dispatch("DELETE_AXIOS_BOARDS",{id:this.TaskID})
                console.log("removeTask");
            },
            // onClear() {
            //     this.isReset = true
            //     this.$nextTick(() => {
            //         this.isReset = false
            //         //* Resetting your data to initial state, eg:
            //         this.$emit(this.emits.onSave, this.latestAcceptedValue)
            //     })
            // },
            resetNew(){
                var curent_date = new Date();
                this.curentProject = ''
                this.duration = 1,
                this.dateStartProject = '',
                this.dates[0] = dayjs(curent_date).format('YYYY-MM-DD')
                this.dates[1] = dayjs(curent_date).format('YYYY-MM-DD')
            },
            saveProject(){
                this.PROJECT.startProject = this.dates[0]
                this.PROJECT.endProject = this.dates[1]

                var data = {
                    boss:this.PROJECT.boss,

                    //this.boss,
                    id:this.PROJECT.id,
                    title:this.PROJECT.title,
                    description: this.PROJECT.description,
                    duration: this.duration,
                    startProject: this.dateStartProject,
                    //endProject: this.PROJECT.endProject
                }

                if(this.PROJECT.id == null){
                    this.$store.dispatch("POST_AXIOS_PROJECT",data)

                }else{
                    this.$store.dispatch("PUT_AXIOS_PROJECT",data)
                }


            },
            removeProject(){
                this.$store.dispatch("DELETE_AXIOS_PROJECT",{id:this.PROJECT.id})
                this.resetNew()
            },
            createElement(src){
                let recaptchaScript = document.createElement('script')
                recaptchaScript.setAttribute('src', src)
                document.head.appendChild(recaptchaScript)
            }
        }
    }
</script>
<style>

</style>