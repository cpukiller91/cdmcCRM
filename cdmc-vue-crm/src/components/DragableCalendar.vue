<template>
    <div style="padding: 10px" class="row m-b-20">
        <div class="col col-md-11">
            <FullCalendar :options="calendarOptions"/>

        </div>
        <div class="col-6 col-md-1">
            <div class="panel panel-warning">
                <div class="panel-heading bg-warning">
                    <div style="background-color: #2c3e50;padding: 5px">Список</div>

                </div>
                <div class="panel-body">
                    <div id='external-events-listing'>
                        <ul>
                            <li :style="'background-color: '+ doctor.usergroup.color +'!important;color:black'" v-for="doctor in USERS_LIST" :key="doctor.id" class='fc-event  doctor'
                                :doctorID='doctor.id'
                                :color='doctor.usergroup.color'>{{doctor.username}}</li>

                        </ul>

                    </div>

                </div>
                <!--div class="panel-footer text-warning">
                    <p>
                        <input type='checkbox' id='drop-remove' checked='checked' />
                        <label for='drop-remove'>remove after drop</label>
                    </p>
                </div-->
            </div>
        </div>
    </div>

</template>

<script>


    import '@fullcalendar/core/vdom' // solves problem with Vite
    //import FullCalendar from '@fullcalendar/vue'

    //import { Calendar } from '@fullcalendar/core';
    //import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import TimeGrid from '@fullcalendar/timegrid'
    import PluginList from '@fullcalendar/list'
    import rrulePlugin from '@fullcalendar/rrule'
    import interactionPlugin,{ Draggable } from '@fullcalendar/interaction'

    export default {
        components: {
            FullCalendar
        },
        computed:{
            USERS_LIST_BY_KEY_ID(){
                return this.$store.getters.USERS_LIST_BY_KEY_ID
            },
            FULLCALENDAR(){
                return this.$store.getters.FULLCALENDAR
            },
            USERS_LIST(){
                return this.$store.getters.USERS_LIST
            }
        },
        watch:{
            USERS_LIST_BY_KEY_ID(){

            },
            USERS_LIST(valNew){
                console.log("USERS_LIST",valNew)
            },
            FULLCALENDAR(valNew){
                this.calendarOptions.events = valNew;
                console.log("FULLCALENDAR",valNew)
            }
        },
        data() {
            return {
                calendarOptions: {
                    locale:"ru",
                    navLinks:true,

                    drop: (date,event) => {

                        $("#add-edit").click()
                        this.strtime = date.date
                        $(date.draggedEl).remove();

                        //console.log("this.USERS_LIST_BY_KEY_ID",this.USERS_LIST_BY_KEY_ID,parseInt(date.draggedEl.attributes.doctorid.value))
                        var dataNew = {
                            //id:this.idRecord,
                            //duration:this.durationSelectRange,

                            // times:this.times,
                            strtime: date.date,
                            //typeEvent:this.typeCurent,
                            //title:this.userList[dodID].username + " ("+this.cartList[kidID].title+")",
                            doctor:this.USERS_LIST_BY_KEY_ID[parseInt(date.draggedEl.attributes.doctorid.value)],
                            // month:this.month,
                            // dayOfMonth:this.dayOfMonth,
                            //color:this.USERS_LIST_BY_KEY_ID[date.draggedEl.attributes.doctorid.value].usergroup.color,
                            babycard:1,

                        }

                        this.$store.dispatch("GET_DROP_EVENT",dataNew)

                        console.log("drop!!!",dataNew )
                        event.remove()



                        // is the "remove after drop" checkbox checked?
                        // if ($("#drop-remove").is(":checked")) {
                        //     // if so, remove the element from the "Draggable Events" list
                        //     $(this).remove();
                        // }
                    },
                    eventDropStop: (date, event, jsEvent) => {

                    },
                    eventDrop: (date, event, jsEvent) => {
                        let move = {
                            id:date.event._def.publicId,
                            strtime:date.event.start,
                            month:dayjs(date.event.start).format('MM'),
                            dayOfMonth:dayjs(date.event.start).format('DD'),
                            times:dayjs(date.event.start).format('YYYY'),
                        }
                        this.$store.dispatch("PUT_AXIOS_EVENTS",move)
                        console.log("eventDragStop",move);

                        // if (isEventOverDiv(jsEvent.clientX, jsEvent.clientY)) {
                        //     $("#calendar").fullCalendar("removeEvents", event._id);
                        //     var el = $("<div class='fc-event'>")
                        //         .appendTo("#external-events-listing")
                        //         .text(event.title);
                        //     el.draggable({
                        //         zIndex: 999,
                        //         revert: true,
                        //         revertDuration: 0
                        //     });
                        //     el.data("event", { title: event.title, id: event.id, stick: true });
                        // }
                    },

                    eventClick: (info) => {
                        //const elem = this.$refs.openModal
                        $("#add-edit").click()
                        this.$store.dispatch("GET_AXIOS_EVENT",{id:info.event._def.publicId})
                        // alert('Event: ' + info.event.title);
                        // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
                        // alert('View: ' + info.view.type);
                        console.log("eventClick",info.event._def.publicId)
                        // change the border color just for fun
                        info.el.style.borderColor = 'red';
                    },
                    eventReceive: (info) =>{
                        //info.eventColor = '#378006';
                        console.log("eventReceive!!!",info )
                        //console.log("eventReceive",info)
                    },
                    eventLeave: (info) =>{
                        console.log("eventLeave",info.event)
                        //info.event.remove()
                    },
                    eventRemove: (info) =>{
                        console.log("eventRemove",info)
                    },
                    weekends:true,

                    nowIndicator:true,
                    scrollTime:"09:00:00",
                    unselectAuto: false,

                    selectable: true,
                    selectHelper: false,
                    editable: true,
                    droppable: true, // this allows things to be dropped onto the calendar
                    dragRevertDuration: 0,

                    plugins: [ dayGridPlugin, interactionPlugin,TimeGrid,PluginList,rrulePlugin ],

                    //slotDuration: '0:30',
                    // businessHours: {
                    //     // days of week. an array of zero-based day of week integers (0=Sunday)
                    //     daysOfWeek: [ 1, 2, 3, 4, 5 ], // Monday - Thursday
                    //
                    //     startTime: '9:00', // a start time (10am in this example)
                    //     endTime: '19:00', // an end time (6pm in this example)
                    // },
                    //initialView: 'dayGridMonth',
                    initialView: "timeGridDay",
                    allDaySlot:false,
                    slotEventOverlap:false,
                    dateClick: this.handleDateClick,

                    buttonText:{
                        today:'Сегодня',

                        month:    'За месяц',
                        week:     'За неделю',
                        day:      'За день',
                        list:     'Список'
                    },

                    headerToolbar:{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listDay'
                    },

                    events: [
                        // { title: 'event 1',
                        //     //end: '2021-08-17 17:00:00',
                        //     start: '2021-08-17 16:30:00',
                        //     //date: '2021-08-16 16:00',
                        //     color: 'black',     // an option!
                        //     textColor: '#2DCEE3' ,
                        //     editable:true,
                        //     itemSelector:".item-class",
                        //     durationEditable:true,
                        //     duration:"00:30"
                        // },
                        //
                        // { title: 'event 2', start: '2021-08-17T10:30:00',itemSelector:".item-class", duration:"00:30"}
                    ]
                },


            };
        },
        mounted() {
            // var Calendar = FullCalendar.Calendar;
            // var Draggable = FullCalendar.Draggable;
            this.$store.dispatch("GET_FULLCALENDAR")
            this.$store.dispatch("GET_AXIOS_USERS",{
                params:{"visState_ne":false}
            })

            var containerEl = document.getElementById('external-events-listing');
            var calendarEl = document.getElementById('calendar');
            var checkbox = document.getElementById('drop-remove');

            // initialize the external events
            // -----------------------------------------------------------------

            new Draggable(containerEl, {
                itemSelector: '.fc-event',
                eventData: function(eventEl) {
                    return {
                        title: eventEl.innerText,
                        duration:"00:30"
                    };
                }
            });



        },
        methods:{
            logout(){

                this.$store.dispatch("LOGOUT_USER")
                this.$router.push({ name: 'Login' }).catch(()=>{})
            }
        }
    };
</script>

<style>
    .doctor{
        padding: 5px;
        margin: 1% 8%;
        color: white;
        width: 84%;
        border-radius: 11px;;
    }
    .fc .fc-toolbar.fc-header-toolbar {
        padding: 10px !important;
        margin: 0 !important;
        background-color: #bdbdbd;
    }
    .bg-warning {
        background-color: #bdbdbd !important;
        padding: 12px;
    }

    .fc-button {
        margin: 0px 11px 0 0px !important;
    }

</style>