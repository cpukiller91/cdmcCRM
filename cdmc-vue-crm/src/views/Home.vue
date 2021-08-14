<template>

  <div class="row">
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
            <button v-if="menu" type="button" class="btn btn-primary waves-effect" data-toggle="modal" data-target="#large-Modal"><i class="fa fa-plus"></i></button>
            <div v-if="menu" class="modal fade" id="large-Modal" tabindex="-1" role="dialog">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title">Modal title</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <!-- Stacked to Horizontal card start -->
                    <div class="col-xs-12 col-sm-12 col-lg-12">
                      <div class="card">
                        <div class="card-header">
                          <h5>Stacked to Horizontal</h5>
                          <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>

                        </div>
                        <div class="card-block">
                          <p>Using a single set of <code>.col-md-*</code> grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns within any <code>.row</code>.</p>
                          <div class="bs-example grid-layout">

                            <div class="row m-b-20">
                              <div class="col-md-8">
                                <span>col-md-8</span>
                              </div>
                              <div class="col-md-4">
                                <span>col-md-4</span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="form-group has-success row">
                      <div class="col-sm-2">
                        <label class="col-form-label" for="inputSuccess1">Input with
                          success</label>
                      </div>
                      <div class="col-sm-10">
                        <input type="text" class="form-control form-control-success" id="inputSuccess1">
                        <div class="col-form-label">Success! You've done it.</div>
                      </div>
                    </div>
                    <select class="js-example-basic-hide-search col-sm-12" multiple="multiple" style="width: 75%">
                      <optgroup label="Developer">
                        <option value="AL">Smith</option>
                        <option value="WY">Peter</option>
                        <option value="WY">James</option>
                        <option value="WY">Hanry Die</option>
                        <option value="WY">John Doe</option>
                        <option value="WY">Harry Poter</option>
                      </optgroup>
                    </select>



                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default waves-effect " data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary waves-effect waves-light ">Save changes</button>
                  </div>
                </div>
              </div>
            </div>


            <div class="animation-model">

              <button @click="openModal" type="button" class="btn btn-info btn-outline-info waves-effect md-trigger" data-modal="modal-12">
                <i class="fa fa-plus"></i></button>

              <div class="md-modal md-effect-12 " id="modal-12" style="
                                  overflow: scroll;
                                  width: 90% !important;
                                  max-width: 100% !important;
                                  height: 600px;

                                ">
                <div >


                  <!--button class="btn btn-info btn-outline-info"><i class="icofont icofont-info-square"></i></button>
                  <button class="btn btn-warning btn-outline-warning"><i class="icofont icofont-warning-alt"></i></button>
                  <button class="btn btn-danger btn-outline-danger"><i class="icofont icofont-eye-alt"></i></button>
                  <button class="btn btn-inverse btn-outline-inverse"><i class="icofont icofont-exchange"></i></button>
                  <button class="btn btn-disabled btn-outline-disabled disabled"><i class="icofont icofont-not-allowed"></i></button-->
                </div>
                <div class="md-content col-xs-12 col-sm-12 col-lg-12">
                  <!--h3><span class="text-muted text-center">Modal Dialog</span></h3-->
                  <div>
                    <!-- Stacked to Horizontal card start -->
                    <div class="col-xs-12 col-sm-12 col-lg-12">
                      <div class="card">

                        <div class="card-block" >

                          <div class="grid-layout">

                            <div class="row m-b-20">
                              <div class="col-md-8">
                                <!-- Nav tabs -->
                                <ul class="nav nav-tabs md-tabs " role="tablist">
                                  <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#curent-task" role="tab"><i class="icofont icofont-home"></i>Текущая задача</a>
                                    <div class="slide"></div>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#history" role="tab"><i class="icofont icofont-ui-user "></i>Другие задачи</a>
                                    <div class="slide"></div>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#comment" role="tab"><i class="icofont icofont-ui-user "></i>Коментарии</a>
                                    <div class="slide"></div>
                                  </li>
                                </ul>
                                <!-- Tab panes -->
                                <div class="tab-content card-block">
                                  <div class="tab-pane active" id="curent-task" role="tabpanel">
                                    <div>
                                      <h4 class="sub-title">Новая задача</h4>
                                      <form>
                                        <div class="form-group row">
                                          <label class="col-sm-2 col-form-label" >Название</label>
                                          <div class="col-sm-10">
                                            <input type="text" class="form-control" v-model="titleTask">
                                          </div>
                                        </div>
                                        <div class="form-group row">
                                          <label class="col-sm-2 col-form-label" >Задача</label>
                                          <div class="col-sm-10">
                                            <textarea rows="5" cols="5" class="form-control" v-model="descTask" placeholder="Default textarea"></textarea>
                                          </div>
                                        </div>

                                        <input type="file" name="files[]" id="filer_input1" multiple="multiple">
                                        <div class="form-group row">

                                        </div>

                                      </form>


                                    </div>
                                  </div>
                                  <div class="tab-pane" id="history" role="tabpanel">
                                    ---
                                  </div>
                                  <div class="tab-pane" id="comment" role="tabpanel">
                                    <!-- Post comment card start -->
                                    <div class="card">
                                      <div class="card-header">
                                        <h5>Post Your Comment Here</h5>
                                        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>

                                      </div>
                                      <div class="card-block">
                                        <div class="j-wrapper j-wrapper-640">
                                          <form action="j-pro/php/action.php" method="post" class="j-pro" id="j-pro" novalidate="">
                                            <div class="j-content">
                                              <!-- start name -->
                                              <div class="j-row">
                                                <div class="j-span6 j-unit">
                                                  <div class="j-input">
                                                    <label class="j-icon-left" for="first_name">
                                                      <i class="icofont icofont-ui-user"></i>
                                                    </label>
                                                    <input type="text" id="first_name" name="first_name" placeholder="First name" class="name-group">
                                                  </div>
                                                </div>
                                                <div class="j-span6 j-unit">
                                                  <div class="j-input">
                                                    <label class="j-icon-left" for="last_name">
                                                      <i class="icofont icofont-ui-user"></i>
                                                    </label>
                                                    <input type="text" id="last_name" name="last_name" placeholder="Last name" class="name-group">
                                                  </div>
                                                </div>
                                              </div>
                                              <!-- end name -->
                                              <!-- start email url -->
                                              <div class="j-row">
                                                <div class="j-span6 j-unit">
                                                  <div class="j-input">
                                                    <label class="j-icon-left" for="email">
                                                      <i class="icofont icofont-envelope"></i>
                                                    </label>
                                                    <input type="email" placeholder="Email" id="email" name="email">
                                                  </div>
                                                </div>
                                                <div class="j-span6 j-unit">
                                                  <div class="j-input">
                                                    <label class="j-icon-left" for="url">
                                                      <i class="icofont icofont-globe"></i>
                                                    </label>
                                                    <input type="url" placeholder="Website" id="url" name="url">
                                                  </div>
                                                </div>
                                              </div>
                                              <!-- end email url -->
                                              <!-- start message -->
                                              <div class="j-unit">
                                                <div class="j-input">
                                                  <label class="j-icon-left" for="message">
                                                    <i class="icofont icofont-file-text"></i>
                                                  </label>
                                                  <textarea placeholder="Comments" spellcheck="false" id="message" name="message"></textarea>
                                                </div>
                                              </div>
                                              <!-- end message -->
                                              <!-- start notify me -->
                                              <div class="j-unit">
                                                <label class="j-checkbox-toggle">
                                                  <input type="checkbox" class="js-single" checked=""> Notify me about new comments
                                                </label>
                                              </div>
                                              <!-- end notify me -->
                                              <!-- start response from server -->
                                              <div class="j-response"></div>
                                              <!-- end response from server -->
                                            </div>
                                            <!-- end /.content -->
                                            <div class="j-footer">
                                              <button type="submit" class="btn btn-primary">Post comment</button>
                                            </div>
                                            <!-- end /.footer -->
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                    <!-- Post comment card end -->
                                  </div>
                                </div>



                              </div>

                              <div class="col-md-4">
                                <div class=" panels-wells">
                                  <div class="panel panel-info">
                                    <div class="panel-heading bg-info">
                                      В ожидании от 02.08.2021 00:09:19
                                    </div>
                                    <div class="panel-body ">

                                      <form>
                                        <div class="form-group row">
                                          <label class="col-sm-5 col-form-label">Проект:</label>
                                          <div class="col-sm-5">
                                            <select class="js-example-disabled-results" v-model="projectTask" style="width: 190px !important;">
                                              <option :value="project.id" v-for="project in projectList" :key="project.id">{{project.title}}</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="form-group row">
                                          <label class="col-sm-5 col-form-label">Крайняя дата:</label>
                                          <div class="col-sm-5">
                                            <input type="datetime-local" v-model="datetimeEnd" style="width: 190px;">
                                          </div>
                                        </div>
                                        <div class="form-group row">
                                          <label class="col-sm-5 col-form-label">Поставлено от:</label>
                                          <div class="col-sm-5">
                                            <input type="datetime-local" v-model="startDatetime" style="width: 190px;">
                                          </div>
                                        </div>
                                        <div class="form-group row">
                                          <label class="col-sm-5 col-form-label">Старт:</label>
                                          <div class="col-sm-5">
                                            <input type="datetime-local" v-model="createDatetime" style="width: 190px;">
                                          </div>
                                        </div>
                                        <div class="form-group row">
                                          <label class="col-sm-5 col-form-label">Финиш:</label>
                                          <div class="col-sm-5">
                                            <input type="datetime-local" v-model="datetimeFinish" style="width: 190px;">
                                          </div>
                                        </div>

                                        <div class="form-group row" v-if="userList">
                                          <label class="col-sm-5 col-form-label">Постановщик:</label>
                                          <div class="col-sm-5">
                                            <select class="js-example-disabled-results" v-model="userPostanov" style="width: 190px !important;">
                                              <option :value="user.id" v-for="user in userList" :key="user.id">{{user.username}}</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="form-group row">
                                          <label class="col-sm-5 col-form-label">Ответственный:</label>
                                          <div class="col-sm-5">
                                            <select class="js-example-disabled-results" v-model="userOtvet" style="width: 190px !important;">
                                              <option :value="user.id" v-for="user in userList" :key="user.id">{{user.username}}</option>
                                            </select>
                                          </div>
                                        </div>

                                      </form>
                                    </div>
                                    <div class="panel-footer text-info " style="height: 62px;">
                                      <button @click="saveTask" class="btn btn-success btn-outline-success" style="float: left">Сохранить<i class="icofont icofont-check-circled"></i></button>
                                      <button type="button" class="btn btn-primary waves-effect md-close btn-danger btn-outline-danger" style="float: right;" >Отмена</button>

                                    </div>

                                  </div>
                                </div>


                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <!--animation modal  Dialogs ends -->
              <div class="md-overlay"></div>
            </div>
            <!--modal></modal-->

            <div class="card-header-right">
              <ul class="list-unstyled card-option">
                <li><i class="feather icon-maximize full-card"></i></li>
                <li><i class="feather icon-minus minimize-card"></i></li>
                <li><i class="feather icon-trash-2 close-card"></i></li>
              </ul>
            </div>
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
                    <i class="fa fa-tasks"></i>Гарн</a>
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
                    <tr v-for="Task in TaskItem" :key="Task.id" >
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
                            <a class="dropdown-item waves-light waves-effect" >Редактировать</a>
                            <a class="dropdown-item waves-light waves-effect" >Удалить</a>
                          </div>
                        </div>
                      </td>
                      <td>{{Task.title}}</td>
                      <td>{{convertDate(Task.updated_at)}}</td>
                      <td>{{convertDate(Task.endDate)}}</td>
                      <td ><div v-if="Task.postanovshik">{{Task.postanovshik.username}}</div></td>
                      <td><span v-if="Task.postanovshik" v-for="otvetstvenni in Task.otvetstvenni" :key="otvetstvenni.id">{{otvetstvenni.username}} </span></td>
                      <td></td>
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
      <!--<div class="col-xl-3 col-md-12">
        <div class="card user-card2">
          <div class="card-block text-center">
            <h6 class="m-b-15">Project Risk</h6>
            <div class="risk-rate">
              <span><b>5</b></span>
            </div>
            <h6 class="m-b-10 m-t-10">Balanced</h6>
            <a href="#!" class="text-c-yellow b-b-warning">Change Your Risk</a>
            <div class="row justify-content-center m-t-10 b-t-default m-l-0 m-r-0">
              <div class="col m-t-15 b-r-default">
                <h6 class="text-muted">Nr</h6>
                <h6>AWS 2455</h6>
              </div>
              <div class="col m-t-15">
                <h6 class="text-muted">Created</h6>
                <h6>30th Sep</h6>
              </div>
            </div>
          </div>
          <button class="btn btn-warning btn-block p-t-15 p-b-15">Download Overall Report</button>
        </div>
      </div>
        sale analytics end --

      <div class="col-xl-8 col-md-12">
        <div class="card table-card">
          <div class="card-header">
            <h5>Application Sales</h5>
            <div class="card-header-right">
              <ul class="list-unstyled card-option">
                <li><i class="feather icon-maximize full-card"></i></li>
                <li><i class="feather icon-minus minimize-card"></i></li>
                <li><i class="feather icon-trash-2 close-card"></i></li>
              </ul>
            </div>
          </div>
          <div class="card-block">
            <div class="table-responsive">
              <table class="table table-hover  table-borderless">
                <thead>
                <tr>
                  <th>
                    <div class="chk-option">
                      <div class="checkbox-fade fade-in-primary">
                        <label class="check-task">
                          <input type="checkbox" value="">
                          <span class="cr">
                                                                          <i class="cr-icon feather icon-check txt-default"></i>
                                                                      </span>
                        </label>
                      </div>
                    </div>
                    Application</th>
                  <th>Sales</th>
                  <th>Change</th>
                  <th>Avg Price</th>
                  <th>Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <div class="chk-option">
                      <div class="checkbox-fade fade-in-primary">
                        <label class="check-task">
                          <input type="checkbox" value="">
                          <span class="cr">
                                                                          <i class="cr-icon feather icon-check txt-default"></i>
                                                                      </span>
                        </label>
                      </div>
                    </div>
                    <div class="d-inline-block align-middle">
                      <h6>Able Pro</h6>
                      <p class="text-muted m-b-0">Powerful Admin Theme</p>
                    </div>
                  </td>
                  <td>16,300</td>
                  <td><canvas id="app-sale1" height="50" width="100"></canvas></td>
                  <td>$53</td>
                  <td class="text-c-blue">$15,652</td>
                </tr>
                <tr>
                  <td>
                    <div class="chk-option">
                      <div class="checkbox-fade fade-in-primary">
                        <label class="check-task">
                          <input type="checkbox" value="">
                          <span class="cr">
                                                                          <i class="cr-icon feather icon-check txt-default"></i>
                                                                      </span>
                        </label>
                      </div>
                    </div>
                    <div class="d-inline-block align-middle">
                      <h6>Photoshop</h6>
                      <p class="text-muted m-b-0">Design Software</p>
                    </div>
                  </td>
                  <td>26,421</td>
                  <td><canvas id="app-sale2" height="50" width="100"></canvas></td>
                  <td>$35</td>
                  <td class="text-c-blue">$18,785</td>
                </tr>
                <tr>
                  <td>
                    <div class="chk-option">
                      <div class="checkbox-fade fade-in-primary">
                        <label class="check-task">
                          <input type="checkbox" value="">
                          <span class="cr">
                                                                          <i class="cr-icon feather icon-check txt-default"></i>
                                                                      </span>
                        </label>
                      </div>
                    </div>
                    <div class="d-inline-block align-middle">
                      <h6>Guruable</h6>
                      <p class="text-muted m-b-0">Best Admin Template</p>
                    </div>
                  </td>
                  <td>8,265</td>
                  <td><canvas id="app-sale3" height="50" width="100"></canvas></td>
                  <td>$98</td>
                  <td class="text-c-blue">$9,652</td>
                </tr>
                <tr>
                  <td>
                    <div class="chk-option">
                      <div class="checkbox-fade fade-in-primary">
                        <label class="check-task">
                          <input type="checkbox" value="">
                          <span class="cr">
                                                                          <i class="cr-icon feather icon-check txt-default"></i>
                                                                      </span>
                        </label>
                      </div>
                    </div>
                    <div class="d-inline-block align-middle">
                      <h6>Flatable</h6>
                      <p class="text-muted m-b-0">Admin App</p>
                    </div>
                  </td>
                  <td>10,652</td>
                  <td><canvas id="app-sale4" height="50" width="100"></canvas></td>
                  <td>$20</td>
                  <td class="text-c-blue">$7,856</td>
                </tr>
                </tbody>
              </table>
              <div class="text-center">
                <a href="#!" class=" b-b-primary text-primary">View all Projects</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-md-12">
        <div class="card user-activity-card">
          <div class="card-header">
            <h5>User Activity</h5>
          </div>
          <div class="card-block">
            <div class="row m-b-25">
              <div class="col-auto p-r-0">
                <div class="u-img">
                  <img src="files\assets\images\breadcrumb-bg.jpg" alt="user image" class="img-radius cover-img">
                  <img src="files\assets\images\avatar-2.jpg" alt="user image" class="img-radius profile-img">
                </div>
              </div>
              <div class="col">
                <h6 class="m-b-5">John Deo</h6>
                <p class="text-muted m-b-0">Lorem Ipsum is simply dummy text.</p>
                <p class="text-muted m-b-0"><i class="feather icon-clock m-r-10"></i>2 min ago</p>
              </div>
            </div>
            <div class="row m-b-25">
              <div class="col-auto p-r-0">
                <div class="u-img">
                  <img src="files\assets\images\breadcrumb-bg.jpg" alt="user image" class="img-radius cover-img">
                  <img src="files\assets\images\avatar-2.jpg" alt="user image" class="img-radius profile-img">
                </div>
              </div>
              <div class="col">
                <h6 class="m-b-5">John Deo</h6>
                <p class="text-muted m-b-0">Lorem Ipsum is simply dummy text.</p>
                <p class="text-muted m-b-0"><i class="feather icon-clock m-r-10"></i>2 min ago</p>
              </div>
            </div>
            <div class="row m-b-25">
              <div class="col-auto p-r-0">
                <div class="u-img">
                  <img src="files\assets\images\breadcrumb-bg.jpg" alt="user image" class="img-radius cover-img">
                  <img src="files\assets\images\avatar-2.jpg" alt="user image" class="img-radius profile-img">
                </div>
              </div>
              <div class="col">
                <h6 class="m-b-5">John Deo</h6>
                <p class="text-muted m-b-0">Lorem Ipsum is simply dummy text.</p>
                <p class="text-muted m-b-0"><i class="feather icon-clock m-r-10"></i>2 min ago</p>
              </div>
            </div>
            <div class="row m-b-5">
              <div class="col-auto p-r-0">
                <div class="u-img">
                  <img src="files\assets\images\breadcrumb-bg.jpg" alt="user image" class="img-radius cover-img">
                  <img src="files\assets\images\avatar-2.jpg" alt="user image" class="img-radius profile-img">
                </div>
              </div>
              <div class="col">
                <h6 class="m-b-5">John Deo</h6>
                <p class="text-muted m-b-0">Lorem Ipsum is simply dummy text.</p>
                <p class="text-muted m-b-0"><i class="feather icon-clock m-r-10"></i>2 min ago</p>
              </div>
            </div>

            <div class="text-center">
              <a href="#!" class="b-b-primary text-primary">View all Projects</a>
            </div>
          </div>
        </div>
      </div>

      -- wather user --
      <div class="col-xl-3 col-md-6">
        <div class="card user-card">
          <div class="card-block text-center">
            <div class="usre-image">
              <img src="files\assets\images\avatar-4.jpg" class="img-radius" alt="User-Profile-Image">
            </div>
            <h6 class="m-t-25 m-b-10">John Deo</h6>
            <p class="text-muted">Web Designer</p>
            <a href="#!" class="text-c-red d-block">websitename.com</a>
            <button class="btn btn-primary d-block">View Profile</button>
            <div class="row justify-content-center user-social-link m-b-15">
              <div class="col-auto"><a href="#!" data-toggle="tooltip" data-placement="bottom" title="facebook"><i class="feather icon-facebook text-facebook f-20"></i></a></div>
              <div class="col-auto"><a href="#!" data-toggle="tooltip" data-placement="bottom" title="twitter"><i class="feather icon-twitter text-twitter f-20"></i></a></div>
              <div class="col-auto"><a href="#!" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="feather icon-instagram text-dribbble f-20"></i></a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="card wather-card">
          <div class="nature-card">
            <img src="files\assets\images\widget\wathernature.png" alt="whether image" class="img-fluid main-img">
            <img src="files\assets\images\widget\watherstar1.png" alt="whether image" class="snow1">
            <img src="files\assets\images\widget\watherstar2.png" alt="whether image" class="snow2">
            <img src="files\assets\images\widget\watherbottom.png" alt="whether image" class="bottom-img">
            <div class="nature-cont text-white">
              <h6>Snow</h6>
              <h2>-10°</h2>
              <h6>10:20 AM</h6>
            </div>
          </div>
          <div class="card-block">
            <div class="row text-c-yellow">
              <div class="col">
                <h6>Sunday</h6></div>
              <div class="col text-right">-10°<i class="fa fa-snowflake-o m-l-20"></i></div>
            </div>
            <div class="row m-t-15">
              <div class="col">
                <h6>Monday</h6></div>
              <div class="col text-right">8°<i class="fa fa-cloud m-l-20"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-12">
        <div class="card user-card-full">
          <div class="row m-l-0 m-r-0">
            <div class="col-sm-4 bg-c-lite-green user-profile">
              <div class="card-block text-center text-white">
                <div class="m-b-25">
                  <img src="files\assets\images\avatar-4.jpg" class="img-radius" alt="User-Profile-Image">
                </div>
                <h6 class="f-w-600">Jeny William</h6>
                <p>Web Designer</p>
                <i class="feather icon-edit m-t-10 f-16"></i>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="card-block">
                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                <div class="row">
                  <div class="col-sm-6">
                    <p class="m-b-10 f-w-600">Email</p>
                    <h6 class="text-muted f-w-400"><a href="cdn-cgi\l\email-protection.htm" class="__cf_email__" data-cfemail="d8b2bdb6a198bfb5b9b1b4f6bbb7b5">[email&#160;protected]</a></h6>
                  </div>
                  <div class="col-sm-6">
                    <p class="m-b-10 f-w-600">Phone</p>
                    <h6 class="text-muted f-w-400">0023-333-526136</h6>
                  </div>
                </div>
                <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                <div class="row">
                  <div class="col-sm-6">
                    <p class="m-b-10 f-w-600">Recent</p>
                    <h6 class="text-muted f-w-400">Guruable Admin</h6>
                  </div>
                  <div class="col-sm-6">
                    <p class="m-b-10 f-w-600">Most Viewed</p>
                    <h6 class="text-muted f-w-400">Able Pro Admin</h6>
                  </div>
                </div>
                <ul class="social-link list-unstyled m-t-40 m-b-10">
                  <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook"><i class="feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter"><i class="feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram"><i class="feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      -- wather user -->

      <!-- social download  start -
      <div class="col-xl-4 col-md-6">
        <div class="card social-card bg-simple-c-blue">
          <div class="card-block">
            <div class="row align-items-center">
              <div class="col-auto">
                <i class="feather icon-mail f-34 text-c-blue social-icon"></i>
              </div>
              <div class="col">
                <h6 class="m-b-0">Mail</h6>
                <p>231.2w downloads</p>
                <p class="m-b-0">Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
          </div>
          <a href="#!" class="download-icon"><i class="feather icon-arrow-down"></i></a>
        </div>
      </div>
      <div class="col-xl-4 col-md-6">
        <div class="card social-card bg-simple-c-pink">
          <div class="card-block">
            <div class="row align-items-center">
              <div class="col-auto">
                <i class="feather icon-twitter f-34 text-c-pink social-icon"></i>
              </div>
              <div class="col">
                <h6 class="m-b-0">twitter</h6>
                <p>231.2w downloads</p>
                <p class="m-b-0">Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
          </div>
          <a href="#!" class="download-icon"><i class="feather icon-arrow-down"></i></a>
        </div>
      </div>
      <div class="col-xl-4 col-md-12">
        <div class="card social-card bg-simple-c-green">
          <div class="card-block">
            <div class="row align-items-center">
              <div class="col-auto">
                <i class="feather icon-instagram f-34 text-c-green social-icon"></i>
              </div>
              <div class="col">
                <h6 class="m-b-0">Dropbox</h6>
                <p>231.2w downloads</p>
                <p class="m-b-0">Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
          </div>
          <a href="#!" class="download-icon"><i class="feather icon-arrow-down"></i></a>
        </div>
      </div>
      -- social download  end -->

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
      this.loadTask()
    },
    computed:{

    },
    methods:{
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


