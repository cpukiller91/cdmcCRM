<template>
    <v-row justify="center">
        <v-dialog
                v-model="dialogAll"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn

                        color="success"
                        v-bind="attrs"
                        v-on="on"
                        @click.stop="findCard"
                >
                    Смотреть все карточки
                </v-btn>
            </template>
            <v-card>
                <br/><br/><br/>
                <v-toolbar
                        dark
                        color="success"
                >
                    <v-btn
                            icon
                            dark
                            @click="dialogAll = false"
                    >
                        <v-icon style="color: white !important;">mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Карточки детей</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn
                                dark
                                text
                                @click.stop="resetFilter"
                        >
                            <span style="color: white !important;">Сбросить Фильтр</span>
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <v-divider></v-divider>
                <v-container>
                    <v-row>
                        <v-col
                                cols="12"
                                md="3"
                        >
                            <v-text-field
                                    v-model="kidf"
                                    @input="findCard"
                                    label="Фамилия ребенка"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="3"
                        >

                            <v-text-field
                                    v-model="kidi"
                                    @input="findCard"
                                    label="Имя ребенка"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="3"
                        >
                            <v-text-field
                                    v-model="kido"
                                    @input="findCard"
                                    label="Отчество ребенка"
                                    required
                            ></v-text-field>
                        </v-col>
                        <v-col
                                cols="12"
                                md="3"
                        >
                            <v-menu
                                    ref="menu"
                                    v-model="menubf"
                                    :close-on-content-click="false"
                                    :return-value.sync="datebf"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field

                                            v-model="datebf"
                                            label="Дата рождения"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                        v-model="datebf"
                                        no-title
                                        scrollable
                                        locale="ru-RU"
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                            text
                                            color="primary"
                                            @click="menubf = false"
                                    >
                                        Закрыть
                                    </v-btn>
                                    <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu.save(datebf);findCard();"
                                    >
                                        Выбрать
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>

                        </v-col>
                    </v-row>


                    <template>
                        <v-expansion-panels
                                v-model="panelBabycardsList"
                                multiple
                        >
                            <v-expansion-panel

                                    v-for="(item,i) in babycardsList"
                                    :key="i"
                            >
                                <v-expansion-panel-header>
                                    {{item.kidf}} {{item.kidi}} {{item.kido}} - количество записей ( {{item.count>1?item.count:"!"}} )

                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <button class="btn btn-info btn-outline-success" @click="editCart(item)">
                                        <i class="icofont icofont-info-square"></i>Сохранить</button>
                                    <button class="btn btn-info btn-outline-danger" @click="dropCart(item.id)">
                                        <i class="icofont icofont-info-square"></i>Удалить</button>

                                    <div class="row m-b-20" v-if="eventNew">
                                        <div class="col-md-4">
                                            <v-select
                                                    v-model="doctorID"
                                                    :rules="requiredF"
                                                    :items="userList"
                                                    item-text="username"
                                                    item-value="id"
                                                    label="Специалист"
                                                    persistent-hint
                                                    return-object
                                                    single-line
                                            ></v-select>
                                        </div>
                                        <div class="col-md-2">
                                            <v-text-field
                                                    v-model="room"
                                                    :rules="requiredF"
                                                    counter
                                                    maxlength="5"

                                                    label="Кабинет"
                                            ></v-text-field>
                                            <!--v-select
                                                    v-model="kid"
                                                    :rules="requiredF"
                                                    :items="cartList"
                                                    item-text="title"
                                                    item-value="id"
                                                    label="Ребенок"
                                                    persistent-hint
                                                    return-object
                                                    single-line
                                            ></v-select-->
                                        </div>
                                        <div class="col-md-2">
                                            <v-select
                                                    v-model="typeCurent"
                                                    :rules="requiredF"
                                                    :items="typeList"

                                                    label="Тип приема"
                                                    persistent-hint
                                                    return-object
                                                    single-line
                                            ></v-select>
                                        </div>
                                        <div class="col-md-2">
                                            <v-select
                                                    v-model="EventTime"

                                                    :items="timeStart"
                                                    item-text="title"
                                                    item-value="id"
                                                    label="Начало"
                                                    persistent-hint
                                                    return-object
                                                    single-line
                                            ></v-select>
                                        </div>
                                        <div class="col-md-2">
                                            <v-select
                                                    v-model="durationSelectRange"

                                                    :items="timerDurationRange"
                                                    :rules="requiredF"
                                                    label="Длительность"
                                                    persistent-hint
                                                    return-object
                                                    single-line
                                            ></v-select>
                                        </div>
                                    </div>

                                    <div class="row m-b-20" v-if="eventNew">
                                        <div class="col-md-4">
                                            <v-date-picker v-model="EventDate" locale="ru-ru"></v-date-picker>
                                        </div>
                                        <!--div class="col-md-8"><v-textarea
                                                label="Примечание (неявка или др.)"
                                                v-model="desc"
                                                hint="Hint text"
                                        ></v-textarea></div-->

                                    </div>
                                    <v-divider></v-divider>

                                    <v-row>
                                        <v-col
                                                cols="12"
                                                md="4"
                                        >

                                            <v-text-field
                                                    v-model="item.kidf"

                                                    label="Фамилия ребенка"

                                            ></v-text-field>
                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="4"
                                        >

                                            <v-text-field
                                                    v-model="item.kidi"

                                                    label="Имя ребенка"

                                            ></v-text-field>
                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-text-field

                                                    v-model="item.kido"
                                                    label="Отчество ребенка"

                                            ></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="item.date"
                                                    label="Дата рождения"
                                                    prepend-icon="mdi-calendar"


                                            ></v-text-field>

                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="item.momtel"

                                                    label="Телефон мамы"

                                            ></v-text-field>
                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="item.age"
                                                    label="Возраст"

                                            ></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-select
                                                    :items="cityList"
                                                    label="Город"
                                                    v-model="item.city"

                                            ></v-select>

                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-select
                                                    :items="OtdelenijeList"
                                                    label="Отделение"
                                                    v-model="item.otdelenije"

                                            ></v-select>

                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="item.ibn"

                                                    label="№ и/б"

                                            ></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-select
                                                    :items="finsrcList"
                                                    label="Источн финансирования"
                                                    v-model="item.finsrc"

                                            ></v-select>

                                        </v-col>

                                        <!--v-col--
                                                cols="12"
                                                md="4"
                                        >
                                            <v-select
                                                    :items="ServiceList"
                                                    label="Вид услуги"
                                                    v-model="item.servicetype"

                                            ></v-select>

                                        </v-col-->


                                    </v-row>

                                    <v-row>
                                        <v-col
                                                cols="12"
                                                md="12"
                                        >
                                            <v-textarea
                                                    label="Примечание (неявка или др.)"
                                                    v-model="item.desc"
                                                    hint="Hint text"

                                            ></v-textarea>

                                        </v-col>

                                    </v-row>

                                    <v-row>


                                    </v-row>

                                    <v-row>
                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="item.dadtel"
                                                    label="Телефон папы"

                                            ></v-text-field>

                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="item.firstdiagnoz"
                                                    label="Клинический диагноз"

                                            ></v-text-field>

                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="item.lastdiagnoz"

                                                    label="Сопутствующий диагноз (данные анамнеза, заключение спец-та, результ. инструмен. обслед. оперативные вмеш.)"

                                            ></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="item.sikrange"

                                                    :counter="10"
                                                    label="Длительность болезни"

                                            ></v-text-field>
                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-select
                                                    :items="drList"
                                                    label="Д или Р"
                                                    v-model="item.dr"

                                            ></v-select>
                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-select
                                                    :items="dnList"
                                                    label="Заболевание (ЦНС)"
                                                    v-model="item.zapnsdn"

                                            ></v-select>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-select
                                                    :items="dnList"
                                                    label="Врожденные пороки развития"
                                                    v-model="item.porkdn"

                                            ></v-select>
                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-select
                                                    :items="dnList"
                                                    label="Генетические и наследственные болезни "
                                                    v-model="item.genetnasdn"

                                            ></v-select>
                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-select
                                                    :items="dnList"
                                                    label="Нарушение слуха"
                                                    v-model="item.narsluhdn"

                                            ></v-select>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col
                                                cols="12"
                                                md="3"
                                        >
                                            <v-select
                                                    :items="dnList"
                                                    label="Нарушение зрения"
                                                    v-model="item.narzrendn"

                                            ></v-select>
                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="3"
                                        >
                                            <v-select
                                                    :items="tiajestList"
                                                    label="Тяжесть болезни"
                                                    v-model="item.tiajest"

                                            ></v-select>
                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="3"
                                        >
                                            <v-select
                                                    :items="stadijaList"
                                                    label="Стадия болезни"
                                                    v-model="item.stadija"

                                            ></v-select>
                                        </v-col>
                                        <v-col
                                                cols="12"
                                                md="3"
                                        >
                                            <v-select
                                                    :items="dnList"
                                                    label="Заболевания ОДА"
                                                    v-model="item.zabjadn"

                                            ></v-select>
                                        </v-col>

                                    </v-row>
                                    <v-row>
                                        <v-col
                                                cols="12"
                                                md="12"
                                        >
                                            <v-textarea
                                                    label="Психолого-педагогическое заключение"
                                                    v-model="item.psihozak"
                                                    hint="Hint text"

                                            ></v-textarea>
                                            <button class="btn btn-info btn-outline-success" @click="editCart(item)">
                                                <i class="icofont icofont-info-square"></i>Сохранить</button>
                                            <button class="btn btn-info btn-outline-danger" @click="dropCart(item.id)">
                                                <i class="icofont icofont-info-square"></i>Удалить</button>
                                        </v-col>

                                    </v-row>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </template>


                </v-container>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
    export default {
        data: () => ({
            panelBabycardsList:[],
            eventNew:true,
            room: null,
            requiredF:[
                value => !!value || 'Обязательное поле.'
            ],
            EventDate: "",
            EventTime: "9:00",
            accessTab: false,
            titleWindow: "Записать пациента",
            idRecord:null,
            startDATE:"",
            typeList:[
                "Диагностика",
                "Консультация",
                "Индивидуальное занятие",
                "Групповое занятие",
                "Консультация родителей",
                "Прием КДЦ",
                "Мониторинг"
            ],
            timerDurationRange:[30,60],
            durationSelectRange:30,
            timeStart:[
                "09:00",
                "09:30",
                "10:00",
                "10:30",
                "11:00",
                "11:30",
                "12:00",
                "12:30",
                "13:00",
                "13:30",
                "14:00",
                "14:30",
                "15:00",
                "15:30",
                "16:00",
                "16:30",
                "17:00",
                "17:30",
                "18:00",
                "18:30",
                "19:00",
            ],
            typeCurent:"Диагностика",
            doctorID:null,
            kid:null,
            timeS:null,

            //------------------------------------------
            age:"0л0м",
            datebf:null,
            menubf:null,
            dialogAllTask:false,
            dialogAll:false,
            AddCard: true,
            AllCard: false,
            menu:null,
            //babycardsList:[],
            dialog: false,
            username:"",
            drawer: false,
            optionsVisible: false,
            options: [],
            promptVisible: false,
            promptQuestion: "",
            promptCallback: null,


            babycardid:null,
            defectologs:[],
            logopeds:[],
            psiholog:[],
            simpsiholog:[],

            emotional:null,
            personalcharacteristics:null,
            behaviorsituation:null,
            experiencesickshild:null,
            availabilitysupport:null,
            childillness:null,
            additionalstressors:null,
            stressor:null,
            actualtr:null,
            directionsrehabilit:null,

            emotionalcondition:null,
            motivationalsphere:null,
            socialcontacts:null,
            dopolstesor:null,
            nspecificdifficulties:null,
            specificdifficulties:null,
            actualtrabl:null,
            directionsrehabilitation:null,
            formofwork:null,
            parentingattitude:null,

            agecategory:null,

            date: null,
            card:false,
            defect:false,
            famili:false,
            logos:false,
            psiho:false,

            defSipr:null,
            defAge:null,
            gefMind:null,
            defIntel:null,
            email:null,
            firstname:null,
            lastname:null,
            valid:null,
            behaviorDesc:null,
            logoRechi:null,
            logoSopnar:null,
            logoActual:null,

            psihozak:"",
            stadijaList:["З","Р","О","П"],
            stadija:"",
            tiajestList:["З","Л","С","Т"],
            tiajest:"",
            dnList:["Д","Н"],
            zabjadn:"",
            narzrendn:"",
            narsluhdn:"",
            genetnasdn:"",
            porkdn:"",
            zapnsdn:"",

            drList:["Д","Р"],
            dr:"",
            sikrange:"",
            firstdiagnoz:"",
            lastdiagnoz:"",
            dadtel:"",
            dadfio:"",
            momtel:"",
            momfio:"",
            desc:"",
            consaltfio:"",
            servicetype:"",
            cityList:[
                "Москва",
                "МО",
                "РФ",
                "СНГ",
                "ИГ"

            ],
            ServiceList:[
                "Консультация",
                "Занятие",
                "Групповое Занятие"

            ],
            finsrcList:[
                "ВМП",
                "ВМП-ОМС",
                "ОМС",
                "ПМУ"
            ],
            finsrc:"",
            ibn:"",
            city:"",
            otdelenije:"",


            mamf:"",
            mami:"",
            mamo:"",

            dadf:"",
            dadi:"",
            dado:"",

            kidf:"",
            kidi:"",
            kido:"",

            OtdelenijeList:[
                "гастроэнтерология",
                "дерматология",
                "кардиология",
                "КДЦ","ЛОР","нефрология",
                "ОПНД","ОПРДВ","ОЗПТ","ОСЗТ",
                "психоневрология",
                "пульмонология",
                "реанимация",
                "ревматология",
                "торакальная хирургия",
                "урология","хирургия",
                "хирургия новорожденных"
            ],
            parentingAttitude:["личностно-ориентированная","на обучение", "на лечение", "отстраненная"],
            formOfWork:["мониторинг", "информирование", "психообразование", "игровая терапия", "арт-терапия", "включение в продуктивную деятельность", "групповая терапия", "помощь в формировании ближайших жизненных перспектив"],
            specificDifficulties:["трудности адаптации к ситуации госпитализации", "фиксация на психофизическом дискомфорте", "конфликтное самоотношение", "негативный образ телесного Я", "трудности адаптации к новым социальным условиям в ситуации манифестации болезни", "сужение деятельности и общения в ситуации длительного хронического заболевания", "низкая комлаентность", "страхи медицинских процедур"],
            nspecificDifficulties:["несформированность норм и правил поведения", "недостаточная произвольность ЭВС", "повышенная внутриличностная конфликтность", "снижение учебной мотивации", "проблемы самоопредения", "возрастные кризисы", "трудности адаптация к школе"],
            SocialContacts:["широкий круг общения", "суженный", "ограничен общением с близким"],
            MotivationalSphere:["норма", "инф", "суж", "девиант", "искаж"],

            AssociatedViolations:["дизартрия", "диз.симпт.", "заикание", "алалия", "афазия", "наруш.письма", "чтения"],
            associated:"",
            CharacteristicsSpeech:["норма", "задер.", "особ.ф.р.", "наруш.фор.р./ ОНР/системн.н.р. + уровни"],
            characteristics:"",

            directionsRehabilitation:["структирирование режима дня", "эмоциональная поддержка", "информирование", "оптимизация взаимодействия с медицинским персоналом", "повышение комлаентности", "неотложная психологическая помощь", "семейное консультирование"],
            additionalStressors:["есть", "нет"],
            childIllness:["соответствует ситуации", "недооценка", "переоценка" ],
            availabilitySupport:["есть", "периодически", "нет"],
            experienceSickChild:["отсутствие опыта", "среднее", "продолжительный"],
            behaviorSituation:["констрруктивное", "неконструктивные"],
            personalCharacteristics:["Активный Гибкий", "Активный Ригидный", "Пассивный Гибкий", "Пассивный Ригидный"],
            ageCategory: ["юношеский до 20 лет", "молодой 21-25", "средний 26-35", "зрелый > 36"],
            emotionalCondition: ["норма", "относительно стабильное", "нестабильное", "нарушенное подавленное ", "нарушенное возбужденное"],

        }),
        computed: {
            USERS_LIST_BY_KEY_ID(){
                return this.$store.getters.USERS_LIST_BY_KEY_ID;
            },
            cartList(){
                return this.$store.getters.BABYCARDS_LIST_SELECT_OPTION;
            },
            userList(){
                return this.$store.getters.USERS_LIST;
            },
            POST_STEP() {
                return this.$store.getters.POST_STEP;
            },
            babycardsList(){
                return this.$store.getters.BABYCARDS_LIST_FILTER;
            }
        },
        watch:{
            EventTime(nv){
                this.timeS = this.EventDate + " "+nv
                //console.log("EventDate-T->",nv,this.timeS)
            },
            EventDate(nv){
                this.timeS = nv + " "+this.EventTime
                //console.log("EventDate-->",nv,this.timeS)
            },
            POST_STEP(nv){
                console.log("POST_STEP",nv)
                if(nv != null && this.doctorID.id!=null && this.room!=null
                    && this.typeCurent!=null && this.EventTime!=null && this.durationSelectRange!=null){

                    var data = {
                        //id:this.idRecord,
                        duration:this.durationSelectRange,

                        // times:this.times,
                        strtime: this.timeS,
                        typeEvent:this.typeCurent,
                        title:this.room,
                        //title:this.userList[dodID].username + " ("+this.cartList[kidID].title+")",
                        doctor:this.doctorID.id,
                        month:dayjs(this.timeS).format('MM'),
                        dayOfMonth:dayjs(this.timeS).format('DD'),
                        times:dayjs(this.timeS).format('YYYY'),
                        color:this.USERS_LIST_BY_KEY_ID[this.doctorID.id].usergroup.color,
                        babycard: nv.id,

                    }
                    this.$store.dispatch("POST_AXIOS_EVENTS",data)
                    console.log("dss",
                        nv,
                        data
                    )
                }

            }
        },
        methods:{
            dropCart(id){
                this.$store.dispatch("DELETE_AXIOS_BABYCARDS",{id:id })
                console.log("dropCart",id)
                this.panelBabycardsList = []
            },
            editCart(item){
                this.$store.dispatch("PUT_AXIOS_BABYCARDS",item)
                this.panelBabycardsList = []
                console.log("editCart",item)
            },
            monthDiff(dateFrom, dateTo) {
                //console.log(new Date(this.date));
                dateFrom = new Date(this.date);
                dateTo = new Date();

                var getMonth = dateTo.getMonth() - dateFrom.getMonth() + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));

                var l
                if(Math.floor(getMonth  / 12) < 4){
                    l = "г. "
                }else{
                    l = "л. "
                }
                this.age = Math.floor(getMonth  / 12)+l+getMonth  % 12+"м." ;
                return Math.floor(getMonth  / 12)+l+getMonth  % 12+"м." ;
            },
            resetFilter (){
                this.kidf = null,
                    this.kidi = null,
                    this.kido = null,
                    this.datebf = null
                this.findCard();
                this.panelBabycardsList = []
            },
            findCard () {
                var data = {
                    kidf_contains:this.kidf,
                    kidi_contains:this.kidi,
                    kido_contains:this.kido,
                    date_contains:this.datebf

                }

                this.$store.dispatch("GET_AXIOS_BABYCARDS_LIST_FILTER",data)
                this.panelBabycardsList = []


            },
        }
    }
</script>