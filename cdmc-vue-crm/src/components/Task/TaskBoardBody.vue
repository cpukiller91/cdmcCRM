<template>

    <!-- Main-body start -->
    <div class="main-body">
        <!-- Modal large-->

        <div class="modal fade" id="large-Modal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Modal title</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <input type="file" name="files[]" id="filer_input1" multiple="multiple">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default waves-effect " data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary waves-effect waves-light ">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="page-wrapper">
            <!-- Page-header start -->
            <div class="page-header">
                <div class="row align-items-end">
                    <div class="col-lg-8">
                        <div class="page-header-title">
                            <div class="d-inline">
                                <h4>Task Board</h4>
                                <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="page-header-breadcrumb">
                            <ul class="breadcrumb-title">
                                <li class="breadcrumb-item">
                                    <a href="index-1.htm"> <i class="feather icon-home"></i> </a>
                                </li>
                                <li class="breadcrumb-item"><a href="#!">Task</a>
                                </li>
                                <li class="breadcrumb-item"><a href="#!">Task Board</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Page-header end -->

            <!-- Page body start -->
            <div class="page-body">
                <div class="row">
                    <!-- Right column start -->
                    <div class="col-xl-3 col-lg-12 push-xl-9">
                        <!-- Search box card start -->
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-header-text">Search Box</h5>
                            </div>
                            <div class="card-block p-t-10">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search here...">
                                    <span class="input-group-addon" id="basic-addon1"><i class="icofont icofont-search"></i></span>
                                </div>
                                <div class="task-right">
                                    <div class="task-right-header-status">
                                        <span data-toggle="collapse">Completed Status</span>
                                        <i class="icofont icofont-rounded-down f-right"></i>
                                    </div>
                                    <!-- end of sidebar-header completed status-->
                                    <div class="taskboard-right-progress">
                                        <h6>Highest Priority</h6>
                                        <div class="faq-progress">
                                            <div class="progress">
                                                <!-- <span class="faq-text3"></span> -->
                                                <div class="faq-bar3" style="width: 80%;"></div>
                                            </div>
                                        </div>
                                        <h6>High Priority</h6>
                                        <div class="faq-progress">
                                            <div class="progress">
                                                <!-- <span class="faq-text1"></span> -->
                                                <div class="faq-bar1" style="width: 70%;"></div>
                                            </div>
                                        </div>
                                        <h6>Normal Priority</h6>
                                        <div class="faq-progress">
                                            <div class="progress">
                                                <!-- <span class="faq-text2"></span> -->
                                                <div class="faq-bar2" style="width: 50%;"></div>
                                            </div>
                                        </div>
                                        <h6>Low Priority</h6>
                                        <div class="faq-progress">
                                            <div class="progress">
                                                <!-- <span class="faq-text4"></span> -->
                                                <div class="faq-bar4" style="width: 60%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of task-board-right progress -->
                                    <!-- start task right users -->
                                    <div class="task-right-header-users">
                                        <span data-toggle="collapse">Assign Users</span>
                                        <i class="icofont icofont-rounded-down f-right"></i>
                                    </div>
                                    <div class="user-box assign-user taskboard-right-users">
                                        <div class="media">
                                            <div class="media-left media-middle photo-table">
                                                <a href="#">
                                                    <img class="media-object img-radius" src="files\assets\images\avatar-1.jpg" alt="Generic placeholder image">
                                                    <div class="live-status bg-danger"></div>
                                                </a>
                                            </div>
                                            <div class="media-body">
                                                <h6>Josephin Doe</h6>
                                                <p>Santa Ana,CA</p>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="media-left media-middle photo-table">
                                                <a href="#">
                                                    <img class="media-object img-radius" src="files\assets\images\avatar-2.jpg" alt="Generic placeholder image">
                                                    <div class="live-status bg-success"></div>
                                                </a>
                                            </div>
                                            <div class="media-body">
                                                <h6>Josephin Doe</h6>
                                                <p>Huntingston, NJ</p>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="media-left media-middle photo-table">
                                                <a href="#">
                                                    <img class="media-object img-radius" src="files\assets\images\avatar-3.jpg" alt="Generic placeholder image">
                                                    <div class="live-status bg-danger"></div>
                                                </a>
                                            </div>
                                            <div class="media-body">
                                                <h6>Josephin Doe</h6>
                                                <p>Willingstion, WA</p>
                                            </div>
                                        </div>
                                        <div class="media">
                                            <div class="media-left media-middle photo-table">
                                                <a href="#">
                                                    <img class="media-object img-radius" src="files\assets\images\avatar-2.jpg" alt="Generic placeholder image">
                                                    <div class="live-status bg-success"></div>
                                                </a>
                                            </div>
                                            <div class="media-body">
                                                <h6>Josephin Doe</h6>
                                                <p>Illions, IL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end of task-board-right users -->
                                    <div class="task-right-header-revision">
                                        <span data-toggle="collapse">Revision</span>
                                        <i class="icofont icofont-rounded-down f-right"></i>
                                    </div>
                                    <div class="taskboard-right-revision user-box">
                                        <div class="media">
                                            <div class="media-left">
                                                <a class="btn btn-outline-primary btn-lg txt-muted btn-icon" href="#!" role="button"><i class="icofont icofont-gears"></i>
                                                </a>
                                            </div>
                                            <div class="media-body">
                                                <div class="chat-header">Drop the IE specific hacks for temporal inputs</div>
                                                <p class="chat-header  text-muted">4 minutes ago</p>
                                            </div>
                                            <!-- end of media body -->
                                        </div>
                                        <!-- end of media -->
                                        <div class="media">
                                            <div class="media-left">
                                                <a class="btn btn-outline-danger btn-lg txt-muted btn-icon" href="#!" role="button"><i class="icofont icofont-share"></i>
                                                </a>
                                            </div>
                                            <div class="media-body">
                                                <div class="chat-header">Have Carousel ignore keyboard events</div>
                                                <p class="chat-header  text-muted">12 Dec,2015</p>
                                            </div>
                                            <!-- end of media body -->
                                        </div>
                                        <!-- end of media -->
                                        <div class="media">
                                            <div class="media-left">
                                                <a class="btn btn-outline-warning btn-lg txt-muted btn-icon" href="#!" role="button"><i class="icofont icofont-font"></i>
                                                </a>
                                            </div>
                                            <div class="media-body">
                                                <div class="chat-header">Add full font overrides for popovers and tooltips</div>
                                                <p class="chat-header text-muted">2 month ago</p>
                                            </div>
                                            <!-- end of media body -->
                                        </div>
                                        <!-- end of media -->
                                        <div class="media">
                                            <div class="media-left">
                                                <a class="btn btn-outline-success btn-lg txt-muted btn-icon" href="#!" role="button"><i class="icofont icofont-responsive"></i>
                                                </a>
                                            </div>
                                            <div class="media-body">
                                                <div class="chat-header">Responsive Asssignment</div>
                                                <p class="chat-header  text-muted">6 month ago</p>
                                            </div>
                                            <!-- end of media body -->
                                        </div>
                                        <!-- end of media -->
                                    </div>
                                    <!-- end of task-right-revision -->
                                </div>
                                <!-- end of sidebar-right -->
                            </div>
                            <!-- end of card-block -->
                        </div>
                        <!-- Search box card end -->
                    </div>
                    <!-- Right column end -->
                    <!-- Left column start -->
                    <div class="col-xl-9 col-lg-12 pull-xl-3 filter-bar">
                        <!-- Nav Filter tab start -->
                        <nav class="navbar navbar-light bg-faded m-b-30 p-10">
                            <ul class="nav navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" >Фильтровать: <span class="sr-only">(current)</span></a>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#!" id="bydate" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="icofont icofont-clock-time"></i> По дате:</a>
                                    <div class="dropdown-menu" aria-labelledby="bydate">
                                        <a class="dropdown-item" >Показать все</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" >Today</a>
                                        <a class="dropdown-item" >Yesterday</a>
                                        <a class="dropdown-item" >This week</a>
                                        <a class="dropdown-item" >This month</a>
                                        <a class="dropdown-item" >This year</a>
                                    </div>
                                </li>
                                <!-- end of by date dropdown -->
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#!" id="bystatus" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icofont icofont-chart-histogram-alt"></i> By Status</a>
                                    <div class="dropdown-menu" aria-labelledby="bystatus">
                                        <a class="dropdown-item" href="#!">Показать все</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" v-for="priorityItem in priorityList" :key="priorityItem.id" >Open</a>
                                        <a class="dropdown-item" href="#!">On hold</a>
                                        <a class="dropdown-item" href="#!">Resolved</a>
                                        <a class="dropdown-item" href="#!">Closed</a>
                                        <a class="dropdown-item" href="#!">Dublicate</a>
                                        <a class="dropdown-item" href="#!">Wontfix</a>
                                    </div>
                                </li>

                                <!-- end of by status dropdown -->
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#!" id="bypriority" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icofont icofont-sub-listing"></i> By Priority</a>
                                    <div class="dropdown-menu" aria-labelledby="bypriority">
                                        <a class="dropdown-item" href="#!">Show all</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#!">Highest</a>
                                        <a class="dropdown-item" href="#!">High</a>
                                        <a class="dropdown-item" href="#!">Normal</a>
                                        <a class="dropdown-item" href="#!">Low</a>
                                    </div>
                                </li>
                            </ul>
                            <div class="nav-item nav-grid">
                                <button type="button" class="btn btn-sm btn-primary waves-effect waves-light m-r-10" data-toggle="modal" data-target="#large-Modal">
                                    <i class="fa fa-plus"></i></button>

                                <!--span class="m-r-15">View Mode: </span>
                                <button type="button" class="btn btn-sm btn-primary waves-effect waves-light m-r-10" data-toggle="tooltip" data-placement="top" title="list view">
                                    <i class="icofont icofont-listine-dots"></i>
                                </button>
                                <button type="button" class="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="grid view">
                                    <i class="icofont icofont-table"></i>
                                </button-->

                            </div>
                            <!-- end of by priority dropdown -->

                        </nav>
                        <!-- Nav Filter tab end -->
                        <!-- Task board design block start-->


                        <div class="row">
                            <div class="col-sm-6" v-for="item in TaskItem" :key="item.id">
                                <div :class="'card '+item.TypeHeaderColor" >

                                    <div class="card-header">
                                        <!--a href="/task-detail" class="card-title">#24. Create UI design model </a-->
                                        <router-link to="/task-detail"  class="card-title">#{{item.id}} {{item.title}}</router-link>
                                        <span class="label label-default f-right">{{item.endDate}} </span>
                                    </div>
                                    <div class="card-block">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <p class="task-detail">{{item.Task}}</p>
                                                <p class="task-due"><strong> Due : </strong><strong class="label label-danger">23 hours</strong></p>
                                            </div>
                                            <!-- end of col-sm-8 -->
                                        </div>
                                        <!-- end of row -->
                                    </div>
                                    <div class="card-footer" >
                                        <div class="task-list-table">
                                            <a href=""><img class="img-fluid img-radius" src="files\assets\images\avatar-1.jpg" alt="1"></a>
                                            <a href=""><img class="img-fluid img-radius" src="files\assets\images\avatar-2.jpg" alt="1"></a>
                                            <a href=""><i class="icofont icofont-plus"></i></a>
                                        </div>
                                        <div class="task-board" v-if="access==true">
                                            <div class="dropdown-secondary dropdown">
                                                <button class="btn btn-primary btn-mini dropdown-toggle waves-effect waves-light" type="button" id="dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{item.Priority}} </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdown1" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                                    <a class="dropdown-item waves-light waves-effect" @click="priority(priorityItem.id,item.id)" v-for="priorityItem in priorityList" :key="priorityItem.id" >
                                                        <span class="point-marker bg-danger"></span>{{priorityItem.title}}
                                                    </a>
                                                    <!--a class="dropdown-item waves-light waves-effect" @click="priority('High')"><span class="point-marker bg-warning"></span>High priority</a>
                                                    <a class="dropdown-item waves-light waves-effect active" @click="priority('Normal')" ><span class="point-marker bg-success"></span>Normal priority</a>
                                                    <a class="dropdown-item waves-light waves-effect" @click="priority('Low')"><span class="point-marker bg-info"></span>Low priority</a-->
                                                </div>
                                                <!-- end of dropdown menu -->
                                            </div>
                                            <div class="dropdown-secondary dropdown">
                                                <button
                                                        class="btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted"
                                                        type="button"
                                                        id="dropdown2"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false">{{item.Status}}</button>
                                                <div class="dropdown-menu" aria-labelledby="dropdown2" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">

                                                    <!--a class="dropdown-item waves-light waves-effect active">Open</a>
                                                    <a class="dropdown-item waves-light waves-effect" >On hold</a>
                                                    <a class="dropdown-item waves-light waves-effect" >Resolved</a>
                                                    <a class="dropdown-item waves-light waves-effect" >Closed</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item waves-light waves-effect" >Dublicate</a>
                                                    <a class="dropdown-item waves-light waves-effect" >Invalid</a-->
                                                    <a class="dropdown-item waves-light waves-effect" @click="SetStatusTask(statusTaskItem.id,item.id)" v-for="statusTaskItem in statusTask" :key="statusTaskItem.id" >{{statusTaskItem.title}}</a>
                                                </div>
                                                <!-- end of dropdown menu -->
                                            </div>
                                            <!-- end of dropdown-secondary -->
                                            <div  class="dropdown-secondary dropdown">
                                                <button class="btn btn-default btn-mini dropdown-toggle waves-light b-none txt-muted" type="button" id="dropdown3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icofont icofont-navigation-menu"></i></button>
                                                <div class="dropdown-menu" aria-labelledby="dropdown3" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                                    <a class="dropdown-item waves-light waves-effect" @click="CheckIn"><i class="icofont icofont-ui-alarm"></i> Check in</a>
                                                    <a class="dropdown-item waves-light waves-effect" @click="AttachScreenshot"><i class="icofont icofont-attachment"></i> Attach screenshot</a>
                                                    <a class="dropdown-item waves-light waves-effect" @click="Reassign"><i class="icofont icofont-spinner-alt-5"></i> Reassign</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item waves-light waves-effect" data-toggle="modal" data-target="#large-Modal" @click="EditTask(item.id)"><i class="icofont icofont-ui-edit"></i> Редактировать</a>
                                                    <a class="dropdown-item waves-light waves-effect" @click="Remove(item.id)" ><i class="icofont icofont-close-line"></i> Удалить</a>
                                                </div>
                                                <!-- end of dropdown menu -->
                                            </div>
                                            <!-- end of seconadary -->
                                        </div>
                                        <!-- end of pull-right class -->
                                    </div>
                                    <!-- end of card-footer -->
                                </div>
                            </div>
                        </div>
                        <!-- Task board design block end -->
                    </div>
                    <!-- Left column end -->
                </div>
            </div>
            <!-- Page body end -->
        </div>
    </div>
    <!-- Main-body end -->
</template>
<script>
    export default {
        name: 'TaskBoardBody',
        data: () => ({
            priorityList:[
                {id:"Highest",title:"Высший приоритет"},
                {id:"High",title:"Высокий приоритет"},
                {id:"Normal",title:"Нормальный приоритет"},
                {id:"Low",title:"Низкий приоритет"}
            ],
            statusTask:[
                {id:"Open",title:"Открыт"},
                {id:"OnHold",title:"На удержании"},
                {id:"Resolved",title:"Решено"},
                {id:"Closed",title:"Закрыто"},
                {id:"Dublicate",title:"Дублирован"},
                {id:"Invalid",title:"Не Действительный"},
                {id:"Wontfix",title:"Нуждаеться в исправлении"},

            ],
            access: true,
            TaskItem:[]
        }),
        mounted() {
            this.loadTask();
        },
        methods: {
            loadTask(){
            // Make a request for a user with a given ID
            this.$http.get('/task-boards')
                .then( (response) => {
                    // handle success
                    //this.message = response.message[0].message;
                    this.TaskItem = response.data;
                    console.log("Task list Server",response);
                })
                .catch( (error) => {
                    console.log("Login error",error);
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        },
            SetStatusTask(current,id){
                console.log(current,id)

                this.$http.put('/task-boards/'+id, {
                    Status: current
                })
                .then( (response) => {
                    // handle success
                    //this.message = response.message[0].message;

                    console.log("Status",response);
                    this.loadTask();
                })
                .catch( (error) => {
                        console.log("Login error",error);
                        // handle error
                        console.log(error);
                    });
            },
            priority(current,id){
                //console.log(current,id);
                this.$http.put('/task-boards/'+id, {
                    Priority: current
                })
                .then( (response) => {
                    // handle success
                    //this.message = response.message[0].message;

                    console.log("Priority",response);
                    this.loadTask();
                })
                .catch( (error) => {
                    console.log("Login error",error);
                    // handle error
                    console.log(error);
                });
            },

            CheckIn(){
                console.log("CheckIn")
            },
            AttachScreenshot(){
                console.log("AttachScreenshot")
            },
            Reassign(){
                console.log("Reassign")
            },
            EditTask(id){
                console.log("EditTask")
            },
            Remove(id){
                this.$http.delete('/task-boards/'+id)
                    .then( (response) => {
                        // handle success
                        //this.message = response.message[0].message;

                        console.log("delete",response);
                        this.loadTask();
                    })
                    .catch( (error) => {
                        console.log("Login error",error);
                        // handle error
                        console.log(error);
                    });
                console.log("Remove",id)
            },
            logout(){

        }
    }

    }
</script>