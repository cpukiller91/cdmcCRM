<template>
    <div>
        <gantt-elastic :tasks="tasksInput" :options="options" >
            <gantt-elastic-header slot="header" :options="options"></gantt-elastic-header>
        </gantt-elastic>

    </div>

</template>
<script>
    import GanttElastic from "gantt-elastic";
    import Header from "../components/HeaderCunt";

    export default {

        name:"Gunt",
        components: {
            ganttElastic: GanttElastic,
            'gantt-elastic-header': Header,
        },
        props: {
            tasksInput:Array
                // title: String,
                // likes: Number,
                // isPublished: Boolean,
                //editEvent: Array
                // author: Object,
                // callback: Function,
                // contactsPromise: Promise // или любой другой конструктор
        },
        //props: ['tasksInput'],
        //inject: ["GanttElastic"],
        data() {
            return {
                tasks: [],
                options: {
                    // times:{
                    //     timeZoom:10
                    // },
                    maxRows: 300,
                    maxHeight: 600,
                    title: {
                        label: 'CDMC ',
                        html: false
                    },
                    row: {
                        height: 20
                    },
                    calendar: {

                        hour: {
                            display: true
                        }
                    },
                    chart: {

                        progress: {
                            bar: false
                        },
                        expander: {
                            display: true
                        }
                    },
                    taskList: {

                        expander: {
                            straight: false
                        },
                        columns: [
                            {
                                id: 1,
                                label: 'ID',
                                value: 'id',
                                width: 40
                            },
                            {
                                id: 2,
                                label: 'Название',
                                value: 'label',
                                width: 200,
                                expander: true,
                                html: true,
                                // events: {
                                //     click({ data, column }) {
                                //         alert('description clicked!\n' + data.label);
                                //     }
                                // }
                            },
                            {
                                id: 3,
                                label: 'Исполнитель',
                                value: 'user',
                                width: 130,
                                html: true,
                                events: {
                                    click: ({data,column}) => {
                                        // this.$store.dispatch("GET_AXIOS_USERS")
                                        // this.$store.dispatch("GET_AXIOS_BABYCARDS")
                                        // this.$store.dispatch("GET_AXIOS_EVENT",{id:data.id})
                                        // //this.openModal(data)
                                        console.log('description clicked!\n',data,column);
                                    }
                                }
                            },
                            {
                                id: 3,
                                label: 'Начало',
                                value: task => dayjs(task.start).format('YYYY-MM-DD'),
                                width: 78
                            },
                            // {
                            //     id: 4,
                            //     label: 'Тип',
                            //     value: 'type',
                            //     width: 68
                            // },
                            {
                                id: 5,
                                label: '%',
                                value: 'progress',
                                width: 35,
                                style: {
                                    'task-list-header-label': {
                                        'text-align': 'center',
                                        width: '100%'
                                    },
                                    'task-list-item-value-container': {
                                        'text-align': 'center',
                                        width: '100%'
                                    }
                                }
                            }
                        ]
                    },
                    locale: {
                        name: "ru",
                        Now: 'Сейчас',
                        'X-Scale': 'Зумировать по ширине ',
                        'Y-Scale': 'по высоте  ',
                        'Task list width': 'Список задач',
                        'Before/After': 'Expand',
                        'Display task list': 'Список задач',
                        weekdays: 'Понедельник_Вторник_Среда_Четверг_Пятница_Суббота_Воскресенье'.split('_'), // weekdays Array
                        weekdaysShort: 'Пон_Вто_Сре_Чет_Пят_Суб_Вос'.split('_'), // OPTIONAL, short weekdays Array, use first three letters if not provided
                        weekdaysMin: 'ПН_ВТ_СР_ЧТ_ПТ_СБ_ВС'.split('_'), // OPTIONAL, min weekdays Array, use first two letters if not provided
                        months: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_'), // months Array
                        monthsShort: 'Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек'.split('_'), // OPTIONAL, short months Array, use first three letters if not provided
                        ordinal: n => `${n}`, // ordinal Function (number) => return number + output
                        relativeTime: { // relative time format strings, keep %s %d as the same
                            future: 'через %s', // e.g. in 2 hours, %s been replaced with 2hours
                            past: '%s temu',
                            s: 'kilka sekund',
                            m: 'минута',
                            mm: '%d минут',
                            h: 'час',
                            hh: '%d часов', // e.g. 2 hours, %d been replaced with 2
                            d: 'день',
                            dd: '%d дни',
                            M: 'месяц',
                            MM: '%d месяцев',
                            y: 'год',
                            yy: '%d лет'
                        }
                    }
                },
                src:["https://unpkg.com/gantt-elastic/dist/GanttElastic.umd.js"]



            }
        },
        computed: {
            Task() {
                //return this.$store.getters.GUNT_EVENT_LIST;
            },
        },
        watch:{
            Task(newVal,oldVal){
                this.tasks = newVal
                console.log("watch-gunt",newVal)
            }
        },
        mounted(){

            //this.tasks = this.tasksInput
            //this.GanttElastic.$emit("recenterPosition");
            // this.$children[0].$emit("recenterPosition");
            console.log("root",this.tasksInput)
            //this.loadTask();
            //this.$store.dispatch("GET_GUNT_EVENT_LIST")
            //this.tasks = this.kidTask;
            //console.log("tasksInput-->",this.$store.getters.GUNT_KID_EVENT_LIST)
        },
        methods:{
            getDate(hours) {
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const currentMonth = currentDate.getMonth();
                const currentDay = currentDate.getDate();
                const timeStamp = new Date(currentYear, currentMonth, currentDay, 0, 0, 0).getTime();
                return new Date(timeStamp + hours * 60 * 60 * 1000).getTime();
            },
            openModal(data){
                //this.$store.dispatch("GET_AXIOS_EVENT",{id:data.id})
            }

        }
    }
</script>

