<template>
<div>
    <div class="card">
        <div class="card-header">
            <div class="card-header-right">
                <ul class="list-unstyled card-option">
                    <li> <button @click="print"><i class="fa fa-print"></i></button></li>
                    <!--li><i class="feather icon-maximize full-card"></i></li>
                    <li><i class="feather icon-minus minimize-card"></i></li>
                    <li><i class="feather icon-trash-2 close-card"></i></li-->
                </ul>
            </div>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >

            <v-select
                :items="USERS_LIST"
                v-model="USERS"
                item-text="username"
                item-value="id"
                label="Специалисты"
                dense
            ></v-select>
                <input type="date" v-model="startFilter">
                <input type="date" v-model="endFilter">

                <!-- OUTPUT -->

            <!--v-select
                    v-model="duration"
                    :items="durationLIST"
                    label="Период"
                    item-text="title"
                    item-value="duration"
                    dense
            ></v-select-->
            </v-col>

            <!-- SOURCE -->


        </div>


        <div class="card-block">
            <div id="chart-user-statistic" ></div>

            <div id="printMe" v-if="isTable">
                <h4>{{USERS_LIST[USERS-1].username}}</h4>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th v-for="header in STATISTIC_CHART_TABLE">{{header.title}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td v-for="td in STATISTIC_CHART_TABLE">{{td.val}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>

    <div v-if="menu" class="card">
        <div class="card-header">
            <h5>Аналитика за</h5>
            <div class="card-header-right">
                <ul class="list-unstyled card-option">
                    <li><i class="feather icon-maximize full-card"></i></li>
                    <li><i class="feather icon-minus minimize-card"></i></li>
                    <li><i class="feather icon-trash-2 close-card"></i></li>
                </ul>
            </div>
        </div>
        <div class="card-block">
            <v-row>

                <v-spacer></v-spacer>
                <v-col
                        cols="12"
                        sm="6"
                        md="4"
                >
                    <v-dialog
                            ref="dialog"
                            v-model="modal"
                            :return-value.sync="dateAnalitics"
                            persistent
                            width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                    v-model="dateAnalitics"
                                    label="Период выборки аналитики"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                                v-model="dateAnalitics"
                                scrollable
                                locale="ru-ru"
                        >
                            <v-spacer></v-spacer>
                            <v-btn
                                    text
                                    color="primary"
                                    @click="modal = false"
                            >
                                Закрыть
                            </v-btn>
                            <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.dialog.save(dateAnalitics)"
                            >
                                Выбрать
                            </v-btn>
                        </v-date-picker>
                    </v-dialog>
                </v-col>
                <v-spacer></v-spacer>

            </v-row>

            <div class="row m-b-20">
                <div class="col-6 col-md-4">
                    <h5>год</h5>
                    <div id="year"></div>
                </div>
                <div class="col-6 col-md-4">
                    <h5> месяц</h5>
                    <div id="month" ></div>
                </div>
                <div class="col-6 col-md-4">
                    <h5>день</h5>
                    <div id="day" ></div>
                </div>
            </div>
            <!--div id="chart"></div>

            <div id="chart_bar" style="width: 100%; height: 500px; "></div>
            <div-- class="col-xl-4 col-md-12">
                <div class="card">
                    <div class="card-block bg-c-green">
                        <div id="proj-earning" style="height: 230px"></div>
                    </div>
                    <div class="card-footer">
                        <h6 class="text-muted m-b-30 m-t-15">Total completed project and earning</h6>
                        <div class="row text-center">
                            <div class="col-6 b-r-default">
                                <h6 class="text-muted m-b-10">Completed Projects</h6>
                                <h4 class="m-b-0 f-w-600 ">175</h4>
                            </div>
                            <div class="col-6">
                                <h6 class="text-muted m-b-10">Total Earnings</h6>
                                <h4 class="m-b-0 f-w-600 ">76.6M</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div-->
        </div>
    </div>

</div>
</template>

<script>
    export default {
        computed:{
            STATISTIC_CHART_TABLE(){
                return this.$store.getters.STATISTIC_CHART_TABLE
            },
            STATISTIC_CHART(){
                return this.$store.getters.STATISTIC_CHART
            },
            USERS_LIST(){
              return this.$store.getters.USERS_LIST
            },
            GET_AXIOS_YEAR_STATISTIC(){
                return this.$store.getters.YEAR_STATISTIC
            },
            GET_AXIOS_DAY_STATISTIC(){
                return this.$store.getters.DAY_STATISTIC
            },
            GET_AXIOS_MONTH_STATISTIC(){
                return this.$store.getters.MONTH_STATISTIC
            }
        },
        watch:{
            STATISTIC_CHART_TABLE(nv){
                this.isTable = true
                //console.log("STATISTIC_CHART_TABLE+++",nv)
            },
            STATISTIC_CHART(nv){
                var chart = c3.generate({
                    bindto: '#chart-user-statistic',

                    // axis: {
                    //     x: {
                    //         // type: 'category',
                    //         // categories: this.durationLIST
                    //         type: 'timeseries',
                    //         tick: {
                    //             format: '%Y-%m-%d'
                    //         }
                    //     }
                    // },
                    data: {
                        //x: 'x',
                        // iris data from R
                        columns: nv,
                        //     [
                        //     // ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06',
                        //     //     '2013-01-07', '2013-01-08', '2013-01-09','2013-01-10','2013-01-11','2013-01-12'],
                        //    // date,
                        //     //this.GET_AXIOS_STATISTIC_CHART
                        //     //CRM
                        //     //['data2', 130, 340, 200, 500, 250, 350]
                        // ],
                        type: 'bar',
                        //type: "line",

                        options: {

                            responsive: true,
                            plugins: {
                                legend: {

                                    position: 'top',
                                },
                                title: {
                                    display: true,
                                    text: 'Chart.js Line Chart'
                                }
                            }
                        },
                        onclick: function(d, i) {
                            console.log("onclick", d, i);
                        },
                        // onmouseover: function(d, i) {
                        //     console.log("onmouseover", d, i);
                        // },
                        // onmouseout: function(d, i) {
                        //     console.log("onmouseout", d, i);
                        // }
                    },
                    size: {
                        height: 600
                    },
                    padding: {
                        //bottom: 200
                    },
                    // color: {
                    //     pattern: ['#1ABC9C', '#4C5667', '#00C292', '#AB8CE4']
                    // },

                });
                chart.load()

            },
            USERS(USERS){
                //this.buildStatistik()
                var params = {
                    "strtime_gte":this.startFilter,
                    "strtime_lte":this.endFilter,
                    "doctor_id":USERS
                }
                this.$store.dispatch("GET_AXIOS_STATISTIC_CHART", params)
                //console.log("--->>",USERS, this.duration)


            },
            USERS_LIST(){
                //console.log("dateAnalitics",nvL)
            },
            startFilter(){
                var params = {
                    "strtime_gte":this.startFilter,
                    "strtime_lte":this.endFilter,
                    "doctor_id":this.USERS
                }
                this.$store.dispatch("GET_AXIOS_STATISTIC_CHART", params)
                //this.buildStatistik()
            },
            endFilter(){
                var params = {
                    "strtime_gte":this.startFilter,
                    "strtime_lte":this.endFilter,
                    "doctor_id":this.USERS
                }
                this.$store.dispatch("GET_AXIOS_STATISTIC_CHART", params)
               // this.buildStatistik()
            },
            dateAnalitics(nvL){
                //console.log("dateAnalitics",nvL)
                this.startDate = nvL;
                this.getStatistic()
            },
            GET_AXIOS_DAY_STATISTIC(nv){

                var day = c3.generate({
                    bindto: '#day',
                    data: {
                        // iris data from R
                        columns: nv,
                        type: 'pie',

                        onclick: function(d, i) {
                            console.log("onclick", d, i);
                        },
                        // onmouseover: function(d, i) {
                        //     console.log("onmouseover", d, i);
                        // },
                        // onmouseout: function(d, i) {
                        //     console.log("onmouseout", d, i);
                        // }
                    },
                    size: {
                        height: 600
                    },
                    padding: {
                        //bottom: 200
                    },
                    // color: {
                    //     pattern: ['#1ABC9C', '#4C5667', '#00C292', '#AB8CE4']
                    // },
                });

                day.load()
                //this.year_columns = nv
                console.log("watch GET_AXIOS_DAY_STATISTIC",nv)

            },
            GET_AXIOS_MONTH_STATISTIC(nv){

                var month = c3.generate({
                    bindto: '#month',
                    data: {
                        // iris data from R
                        columns: nv,
                        type: 'pie',

                        // onclick: function(d, i) {
                        //     console.log("onclick", d, i);
                        // },
                        // onmouseover: function(d, i) {
                        //     console.log("onmouseover", d, i);
                        // },
                        // onmouseout: function(d, i) {
                        //     console.log("onmouseout", d, i);
                        // }
                    },
                    size: {
                        height: 600
                    },
                    padding: {
                        //bottom: 200
                    },
                    // color: {
                    //     pattern: ['#1ABC9C', '#4C5667', '#00C292', '#AB8CE4']
                    // },
                });


                month.load()
                //this.year_columns = nv
                console.log("watch GET_AXIOS_MONTH_STATISTIC",nv)

            },
            GET_AXIOS_YEAR_STATISTIC(nv){
                console.log("GET_AXIOS_YEAR_STATISTIC-->",nv)

                var year = c3.generate({
                    bindto: '#year',
                    data: {
                        // iris data from R
                        columns: nv,
                        type: 'pie',

                        onclick: function(d, i) {
                            console.log("onclick", d, i);
                        },
                        // onmouseover: function(d, i) {
                        //     console.log("onmouseover", d, i);
                        // },
                        // onmouseout: function(d, i) {
                        //     console.log("onmouseout", d, i);
                        // }
                    },
                    size: {
                        height: 600
                    },
                    padding: {
                        //bottom: 200
                    },
                    // color: {
                    //     pattern: ['#1ABC9C', '#4C5667', '#00C292', '#AB8CE4']
                    // },
                });

                setTimeout(function () {
                        year.load()


                }, 1500);
                //this.year_columns = nv
                console.log("watch GET_AXIOS_YEAR_STATISTIC",nv)

            }
        },
        data: () => ({
            isTable:false,
            durationLIST:[
                {title:"За год",duration:360},
                {title:"За 6 мес",duration:186},
                {title:"За 3 мес",duration:93},
                {title:"За месяц",duration:31},

            ],

            startFilter:dayjs(new Date()).format('YYYY-MM-DD'),
            endFilter:dayjs(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).format('YYYY-MM-DD'),

            duration:null,
            dateAnalitics: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
            USERS:null,
            startDate: null,
                //dayjs(nv.strtime).format('YYYY-MM-DDTHH:mm'),
            rules: [
                value => !!value || 'Required.'],
            src:[
                'files/assets/pages/chart/google/js/custom-google-chart.js'
            ],

        }),
        mounted(){
            this.$store.dispatch("GET_AXIOS_USERS")
            //this.buildStatistik()
            var curent_date = new Date();
            this.startDate = dayjs(curent_date).format('YYYY-MM-DD')

            //this.getStatistic()





            // google.charts.load('current', { packages: ['corechart', 'bar'] });
            // google.charts.setOnLoadCallback(this.drawStacked);


            // this.src.forEach(element => {
            //     //console.log("Home list Layouts",element);
            //     //this.createElement(element)
            // })
        },
        methods:{
            async print () {
                // Pass the element id here
                await this.$htmlToPaper('printMe');
            },
            buildStatistik(){

                //console.log("dateAnalitics",this.startFilter,this.endFilter)




                // var dateNow = new Date().getTime();
                // var date = [
                //     'x'
                // ]
                // var diagnostic = [
                //     'Диагностика'
                // ]
                // var consalt = [
                //     'Консультация'
                // ]
                // var individual = [
                //     "Индивидуальное занятие"
                // ]
                // var group = [
                //     "Групповое занятие"
                // ]
                // var parent_kons = [
                //     "Консультация родителей"
                // ]
                // var KDC = [
                //     "Прием КДЦ"
                // ]
                // var monitor = [
                //     "Мониторинг"
                // ]
                // var CRM = [
                //     "Задачи ЦРМ"
                // ]
                // for (var i = 1; i <= 30; i++) {
                //     date.push(dateNow + i * 24 * 60 * 60 * 1000)
                //     diagnostic.push(i)
                //     consalt.push(i+2)
                //     individual.push(i+4)
                //     group.push(i+6)
                //     parent_kons.push(i+8)
                //     KDC.push(i+10)
                //     monitor.push(i+12)
                //     //CRM.push(i+18)
                //     //console.log(i);
                //     // ещё какие-то выражения
                // }


                // this.durationLIST.forEach((LIST ,i )=> {
                //     date.push(LIST.title)
                //     diagnostic.push(i)
                //     consalt.push(i+2)
                //     individual.push(i+4)
                //     group.push(i+6)
                //     parent_kons.push(i+8)
                //     KDC.push(i+10)
                //     monitor.push(i+12)
                //
                // })

                //date.push(LIST.title)
                // var i = 2;
                //
                // diagnostic.push(i)
                // consalt.push(i+2)
                // individual.push(i+4)
                // group.push(i+6)
                // parent_kons.push(i+8)
                // KDC.push(i+10)
                // monitor.push(i+12)




            },
            getStatistic(){


                this.$store.dispatch("GET_AXIOS_YEAR_STATISTIC",{
                    times:dayjs(this.startDate).format('YYYY')
                })

                this.$store.dispatch("GET_AXIOS_MONTH_STATISTIC",{
                    Month:dayjs(this.startDate).format('MM'),
                    times:dayjs(this.startDate).format('YYYY')
                })

                this.$store.dispatch("GET_AXIOS_DAY_STATISTIC",{
                    DayOfMonth:dayjs(this.startDate).format('DD'),
                    Month:dayjs(this.startDate).format('MM'),
                    times:dayjs(this.startDate).format('YYYY')
                })
                //console.log("121",this.startDate)
            },
            drawStacked() {
                var data = google.visualization.arrayToDataTable([
                    ['City', 'user1', 'user2','user3', 'user4','user5', 'user6','user7', 'user8','user9', 'user10','user11', 'user12'
                    ,'user13', 'user14','user15', 'user16'],

                    ['2004/05', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    ['2', 0, 1,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    ['3', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    ['4', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    ['5', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],

                    // ['6', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['7', 0, 1,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['8', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['9', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['10', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    //
                    // ['11', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['12', 0, 1,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['13', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['14', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['15', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    //
                    // ['16', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['17', 0, 1,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['18', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['19', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['20', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    //
                    // ['21', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['22', 0, 1,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['23', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['24', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['25', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    //
                    // ['26', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['27', 0, 1,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['28', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['29', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],
                    // ['30', 5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3,5, 3],

                ]);

                var options = {
                    title: 'Population of Largest U.S. Cities',
                    chartArea: { width: '60%' },
                    isStacked: true,
                    maintainAspectRatio: false,
                    hAxis: {
                        title: 'Total Population',
                        minValue: 1,
                    },
                    vAxis: {
                        title: 'City'
                    },
                    colors: ['#93BE52', '#ff21d3', '#ff3138','#205cff', '#ff3138']
                };
                var chart = new google.visualization.BarChart(document.getElementById('chart_bar'));
                chart.draw(data, options);
            },
            // createElement(src){
            //     let recaptchaScript = document.createElement('script')
            //     recaptchaScript.setAttribute('src', src)
            //     document.head.appendChild(recaptchaScript)
            // }
        }

    }
</script>

<style>
    .small {
        max-width: 600px;
        margin:  150px auto;
    }
    #chart3{
        width: 300px;
    }
    .primary {
        background-color: #1867c0 !important;
        border-color: #1867c0 !important;
    }
    .accent {
        background-color: #005caf !important;
        border-color: #005caf !important;
    }
</style>