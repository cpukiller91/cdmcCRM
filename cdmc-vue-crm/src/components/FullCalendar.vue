
<template>
    <div class="card">
        <div class="card-header">
            <h5>Full Calender</h5>
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
                <div class="col col-md-9">

                    <div id='external-events'>
                        <p>
                            <strong>Draggable Events</strong>
                        </p>

                        <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                            <div class='fc-event-main'>My Event 1</div>
                        </div>
                        <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                            <div class='fc-event-main'>My Event 2</div>
                        </div>
                        <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                            <div class='fc-event-main'>My Event 3</div>
                        </div>
                        <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                            <div class='fc-event-main'>My Event 4</div>
                        </div>
                        <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                            <div class='fc-event-main'>My Event 5</div>
                        </div>

                        <p>
                            <input type='checkbox' id='drop-remove' />
                            <label for='drop-remove'>remove after drop</label>
                        </p>
                    </div>

                    <div id='calendar-container'>
                        <div id='calendar'>
                            <FullCalendar :options="calendarOptions"/>
                        </div>
                    </div>

                </div>
                <div class="col-6 col-md-3">
                    <div class="panel panel-warning">
                        <div class="panel-heading bg-warning">
                            Список пользователей
                        </div>
                        <div class="panel-body">
                            <ul class="list-view">
                                <li>
                                    <div class="card list-view-media">
                                        <div class="card-block">
                                            <div class="media">
                                                <!--a class="media-left" href="#">
                                                    <img class="media-object card-list-img" src="/files/assets/images/avatar-1.jpg" alt="Generic placeholder image">
                                                </a-->
                                                <div class="media-body">
                                                    <ul>
                                                        <li><div id='draggable-el' data-event='{ "title": "my event", "duration": "02:00" }'>drag me</div></li>
                                                    </ul>
                                                    <!--div class="col-xs-12">
                                                        <h6 class="d-inline-block">Heading</h6>
                                                        <label class="label label-info">Agent</label>
                                                    </div>
                                                    <div class="f-13 text-muted m-b-15">
                                                        Software Engineer
                                                    </div-->


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div class="panel-footer text-warning">
                            Panel Footer
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

    require("@fullcalendar/common/main.min.css")
    require("@fullcalendar/daygrid/main.min.css")
    require("@fullcalendar/timegrid/main.min.css")


    import '@fullcalendar/core/vdom' // solves problem with Vite
    import FullCalendar from '@fullcalendar/vue'

    import dayGridPlugin from '@fullcalendar/daygrid'
    import TimeGrid from '@fullcalendar/timegrid'
    import PluginList from '@fullcalendar/list'
    import rrulePlugin from '@fullcalendar/rrule'
    import interactionPlugin,{ Draggable } from '@fullcalendar/interaction'

    export default {
        components: {
            FullCalendar // make the <FullCalendar> tag available
        },
        data() {
            return {

                calendarOptions: {
                    locale:"ru",
                    navLinks:true,
                    itemSelector:".item-class",
                    eventClick: function(info) {
                        alert('Event: ' + info.event.title);
                        alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
                        alert('View: ' + info.view.type);

                        // change the border color just for fun
                        info.el.style.borderColor = 'red';
                    },
                    weekends:false,
                    selectable:true,
                    nowIndicator:true,
                    scrollTime:"09:00:00",
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
                        //center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listDay'
                    },

                    events: [
                        { title: 'event 1',
                            end: '2021-08-16 17:00:00',
                            start: '2021-08-16 16:30:00',
                            //date: '2021-08-16 16:00',
                            color: 'black',     // an option!
                            textColor: 'yellow' ,
                            editable:true,
                            durationEditable:true,
                            //duration:30
                        },

                        { title: 'event 2', date: '2021-08-16T10:30:00' }
                    ]
                }
            }
        },
        methods:{
            handleDateClick: function(arg) {
                alert('date click! ' + arg.dateStr)
            }
        },
        mounted() {
            let draggableEl = document.getElementById('mydraggable');
            new Draggable(draggableEl);


        }
    }
</script>
