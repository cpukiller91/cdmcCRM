<template>

    <div class="card">
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
            <div class="row m-b-20">
                <div class="col-6 col-md-4">

                </div>
                <div class="col-6 col-md-4">
                    Выбрать период: <input type="date" v-model="startDate" @change="getStatistic">
                    <button class="btn btn-success btn-outline-success" @click="getStatistic">
                        <i class="icofont icofont-check-circled"></i>Обновить</button>
                </div>
                <div class="col-6 col-md-4">

                </div>
            </div>
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

</template>

<script>
    export default {
        computed:{
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
                        onmouseover: function(d, i) {
                            console.log("onmouseover", d, i);
                        },
                        onmouseout: function(d, i) {
                            console.log("onmouseout", d, i);
                        }
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
                    day.load()


                }, 1500);
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

                        onclick: function(d, i) {
                            console.log("onclick", d, i);
                        },
                        onmouseover: function(d, i) {
                            console.log("onmouseover", d, i);
                        },
                        onmouseout: function(d, i) {
                            console.log("onmouseout", d, i);
                        }
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
                    month.load()


                }, 1500);
                //this.year_columns = nv
                console.log("watch GET_AXIOS_MONTH_STATISTIC",nv)

            },
            GET_AXIOS_YEAR_STATISTIC(nv){

                var year = c3.generate({
                    bindto: '#year',
                    data: {
                        // iris data from R
                        columns: nv,
                        type: 'pie',

                        onclick: function(d, i) {
                            console.log("onclick", d, i);
                        },
                        onmouseover: function(d, i) {
                            console.log("onmouseover", d, i);
                        },
                        onmouseout: function(d, i) {
                            console.log("onmouseout", d, i);
                        }
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
            startDate: null,
                //dayjs(nv.strtime).format('YYYY-MM-DDTHH:mm'),
            rules: [
                value => !!value || 'Required.'],
            src:[
                'files/assets/pages/chart/google/js/custom-google-chart.js'
            ],

        }),
        mounted(){
            var curent_date = new Date();
            this.startDate = dayjs(curent_date).format('YYYY-MM-DD')

            this.getStatistic()





            // google.charts.load('current', { packages: ['corechart', 'bar'] });
            // google.charts.setOnLoadCallback(this.drawStacked);


            // this.src.forEach(element => {
            //     //console.log("Home list Layouts",element);
            //     //this.createElement(element)
            // })
        },
        methods:{
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
</style>