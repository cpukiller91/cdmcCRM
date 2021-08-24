<template>

  <div class="row" data-app>
      <!-- task, page, download counter  start
      <div class="col-xl-3 col-md-6">
        <div class="card bg-c-yellow update-card">
          <div class="card-block">
            <div class="row align-items-end">
              <div class="col-8">
                <h4 class="text-white">$30200</h4>
                <h6 class="text-white m-b-0">All Earnings</h6>
              </div>
              <div class="col-4 text-right">
                <canvas id="update-chart-1" height="50"></canvas>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <p class="text-white m-b-0"><i class="feather icon-clock text-white f-14 m-r-10"></i>update : 2:15 am</p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card bg-c-green update-card">
          <div class="card-block">
            <div class="row align-items-end">
              <div class="col-8">
                <h4 class="text-white">290+</h4>
                <h6 class="text-white m-b-0">Page Views</h6>
              </div>
              <div class="col-4 text-right">
                <canvas id="update-chart-2" height="50"></canvas>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <p class="text-white m-b-0"><i class="feather icon-clock text-white f-14 m-r-10"></i>update : 2:15 am</p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card bg-c-pink update-card">
          <div class="card-block">
            <div class="row align-items-end">
              <div class="col-8">
                <h4 class="text-white">145</h4>
                <h6 class="text-white m-b-0">Task Completed</h6>
              </div>
              <div class="col-4 text-right">
                <canvas id="update-chart-3" height="50"></canvas>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <p class="text-white m-b-0"><i class="feather icon-clock text-white f-14 m-r-10"></i>update : 2:15 am</p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card bg-c-lite-green update-card">
          <div class="card-block">
            <div class="row align-items-end">
              <div class="col-8">
                <h4 class="text-white">500</h4>
                <h6 class="text-white m-b-0">Downloads</h6>
              </div>
              <div class="col-4 text-right">
                <canvas id="update-chart-4" height="50"></canvas>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <p class="text-white m-b-0"><i class="feather icon-clock text-white f-14 m-r-10"></i>update : 2:15 am</p>
          </div>
        </div>
      </div>
      task, page, download counter  end -->

      <!--  sale analytics start -->
      <div class="col-xl-12 col-md-12">
        <div class="card">
          <div class="card-header">

            <!--h5>Sales Analytics</h5>
            <span class="text-muted"></span-->
            <!-- Modal large-->
            <crm-task-modal></crm-task-modal>


          </div>


          <div class="card-block">

            <div>

              <!-- Nav tabs -->
              <ul class="nav nav-tabs md-tabs " role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#home7" role="tab"><i class="fa fa-list"></i>Список</a>
                  <div class="slide"></div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#profile7" role="tab">
                    <i class="fa fa-tasks"></i>Гант</a>
                  <div class="slide"></div>
                </li>

              </ul>
              <!-- Tab panes -->
              <div class="tab-content card-block">
                <div class="tab-pane active" id="home7" role="tabpanel">
                  <table id="lang-dt" class="table table-striped table-bordered nowrap">
                    <thead>
                    <tr>
                      <th><i class="fa fa-gears"></i></th>
                      <th>Название</th>
                      <th>Активность</th>
                      <th>Крайняя дата</th>
                      <th>Постановщик</th>
                      <th>Ответственный</th>
                      <th>Проэкт</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="Task in TASK_BOARDS_LIST" :key="Task.id" >
                      <td>
                        <div class="dropdown-primary dropdown open">
                          <button class="btn btn-outline-primary dropdown-toggle waves-effect waves-light " type="button" id="dropdown-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <i class="fa fa-bars"></i>
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdown-2" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                            <!--a class="dropdown-item waves-light waves-effect" >Action</a>
                            <a class="dropdown-item waves-light waves-effect" >Another action</a>
                            <a class="dropdown-item waves-light waves-effect" >Something else here</a-->
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item waves-light waves-effect" @click="editTask(Task.id)" data-toggle="modal" data-target="#large-Modal-task">Редактировать</a>
                            <a class="dropdown-item waves-light waves-effect" @click="deleteTask(Task.id)" >Удалить</a>
                          </div>
                        </div>
                      </td>
                      <td>{{Task.title}}</td>
                      <td>{{convertDate(Task.updated_at)}}</td>
                      <td>{{convertDate(Task.endDate)}}</td>
                      <td ><div v-if="Task.postanovshik">{{Task.postanovshik.username}}</div></td>
                      <td><span v-if="Task.otvetstvenni" >{{Task.otvetstvenni.username}} </span></td>
                      <td>{{Task.project.title}}</td>
                    </tr>

                    </tbody>
                    <tfoot>
                    <tr>
                      <th><i class="fa fa-gears"></i></th>
                      <th>Название</th>
                      <th>Активность</th>
                      <th>Крайняя дата</th>
                      <th>Постановщик</th>
                      <th>Ответственный</th>
                      <th>Проэкт</th>
                    </tr>
                    </tfoot>
                  </table>
                </div>
                <div class="tab-pane" id="profile7" role="tabpanel">
                  <gunt></gunt>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>


    </div>

</template>
<style>
  .select2-container{
    z-index: 1111111111111111111;
  }
  .grid-layout span {
    border:none;
    width: 190px !important;
    padding: 0 !important;

  }
  .select2-selection__arrow b {
    left: 100% !important;
    top: 20% !important;
  }
  .md-content > div ul {
    padding: 0 !important;
  }
</style>
<script>

  export default {
    name: 'Home',
    data: () => ({


      projectTask:1,
      titleTask:"",
      descTask:"",
      datetimeEnd:"",
      createDatetime:"",
      startDatetime:"",
      datetimeFinish:"",
      userPostanov:1,
      userOtvet:2,

      projectList:[],
      userList:[],
      menu:false,
      TaskItem:[],
      src:[
// //-------------- Required Jquery"2017-06-01T08:30"
//         "/files/bower_components/jquery/js/jquery.min.js",
//         "/files/bower_components/jquery-ui/js/jquery-ui.min.js",
//         "/files/bower_components/popper.js/js/popper.min.js",
//         "/files/bower_components/bootstrap/js/bootstrap.min.js",
// //--------------jquery slimscroll js
//         "/files/bower_components/jquery-slimscroll/js/jquery.slimscroll.js",
// //--------------modernizr js
//         "/files/bower_components/modernizr/js/modernizr.js",
// //--------------ck editor -->
//         //"/files/assets/pages/ckeditor/ckeditor.js",
//         //"/files/assets/pages/ckeditor/ckeditor-custom.js",
// //--------------sweet alert js -->
//         "/files/bower_components/sweetalert/js/sweetalert.min.js",
//         "/files/assets/js/modal.js",
//         "/files/assets/js/modalEffects.js",
//         "/files/assets/js/classie.js",
// //--------------data-table js -->
//         "/files/bower_components/datatables.net/js/jquery.dataTables.min.js",
//         "/files/bower_components/datatables.net-buttons/js/dataTables.buttons.min.js",
//         "/files/assets/pages/data-table/js/jszip.min.js",
//         "/files/assets/pages/data-table/js/pdfmake.min.js",
//         "/files/assets/pages/data-table/js/vfs_fonts.js",
//         "/files/bower_components/datatables.net-buttons/js/buttons.print.min.js",
//         "/files/bower_components/datatables.net-buttons/js/buttons.html5.min.js",
//         "/files/bower_components/datatables.net-bs4/js/dataTables.bootstrap4.min.js",
//         "/files/bower_components/datatables.net-responsive/js/dataTables.responsive.min.js",
//         "/files/bower_components/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js",
// //--------------Chart js
//         //"/files/bower_components/chart.js/js/Chart.js",
// //--------------amchart js
//         //"/files/assets/pages/widget/amchart/amcharts.js",
//         //"/files/assets/pages/widget/amchart/serial.js",
//         //"/files/assets/pages/widget/amchart/light.js",
// //------------- Custom js -->
//
//         "/files/assets/pages/dashboard/custom-dashboard.min.js",
//         "/files/assets/pages/data-table/js/data-table-custom.js",
//         "/files/assets/js/pcoded.min.js",
//         "/files/assets/js/horizontal-layout.min.js",
//         "/files/assets/js/jquery.mCustomScrollbar.concat.min.js",
//         "/files/assets/js/script.js"


      ]
    }),
    mounted() {
      this.$store.dispatch("GET_AXIOS_BOARDS")
      this.loadTask()
    },
    watch:{
      TASK_BOARDS_LIST(){

      },
      TASK(nv){
        //console.log("TASK-->",nv)
      }
    },
    computed:{
      TASK(){
        return this.$store.getters.TASK
      },
      TASK_BOARDS_LIST(){
        return this.$store.getters.TASK_BOARDS_LIST
      }
    },
    methods:{
      editTask(id){
        this.$store.dispatch("GET_AXIOS_TASK",{id:id})
      },
      deleteTask(id){
        this.$store.dispatch("DELETE_AXIOS_BOARDS",{id:id})
      },
      saveTask(){
        this.$http.post('/task-boards', {
          datetimeEnd:this.datetimeEnd,
          createDatetime:this.createDatetime,
          startDatetime:this.startDatetime,
          datetimeFinish:this.datetimeFinish,
          userPostanov:this.userPostanov,
          userOtvet:this.userOtvet
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

        // .then( (response) => {
        //   // handle success
        //   //this.message = response.message[0].message;
        //   this.TaskItem = response.data;
        //   this.src.forEach(element => {
        //     //console.log("Home list Layouts",element);
        //     //this.createElement(element)
        //   })
        //   console.log("Task list Server",response);
        // })

        // datetimeEnd:"",
        //         createDatetime:"",
        //         startDatetime:"",
        //         datetimeFinish:"",
        //         userPostanov:"",
        //         userOtvet:"",
        console.log("ooo",this.datetime)
      },
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
        this.$http.get('/projects')
        .then( (response) => {
          // handle success
          //this.message = response.message[0].message;
          this.projectList = response.data;
          // this.src.forEach(element => {
          //   //console.log("Home list Layouts",element);
          //   //this.createElement(element)
          // })
          //console.log("Task list Server",response);
        })
        .catch( (error) => {
          console.log("Login error",error);
          // handle error
          console.log(error);
        });
      },
      loadTask(){
        // Make a request for a user with a given ID
        this.$http.get('/task-boards?_limit=100')
        .then( (response) => {
          // handle success
          //this.message = response.message[0].message;
          this.TaskItem = response.data;
          this.src.forEach(element => {
            //console.log("Home list Layouts",element);
            //this.createElement(element)
          })
          console.log("Task list Server",response);
        })
        .catch( (error) => {
          console.log("Login error",error);
          // handle error
          console.log(error);
        });
      },
      createElement(src){
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', src)
        document.head.appendChild(recaptchaScript)
      },
      convertDate(dateInit){
        var date = new Date(dateInit);

        var options = {
          //era: 'long',
          //year: 'numeric',
          month: 'long',
          day: 'numeric',
          // weekday: 'long',
          //timezone: 'UTC',
          hour: 'numeric',
          minute: 'numeric',
          //second: 'numeric'
        };
        return date.toLocaleString("ru", options)
        //return dateInit;
      }
    }
  }
</script>


