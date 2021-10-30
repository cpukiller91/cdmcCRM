<template>
    <v-row justify="center">
        <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        v-if="AddCard"
                        v-bind="attrs"
                        v-on="on"


                >
                    Добавить карточку ребенка
                </v-btn>
            </template>
            <v-card>

                <br/><br/><br/>
                <v-toolbar
                        dark
                        color="primary"
                >
                    <v-btn
                            icon

                            @click="dialog = false"
                    >
                        <v-icon style="color: white !important;">mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Карточка ребенка</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn

                                text
                                @click="saveCard"
                        >
                            <span style="color: white !important;">Сохранить</span>
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <v-divider></v-divider>
                <v-container>
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
                        <div class="col-md-8"><v-textarea
                                label="Примечание (неявка или др.)"
                                v-model="desc"
                                hint="Hint text"
                        ></v-textarea></div>

                    </div>
                    <v-divider v-if="eventNew"></v-divider>

                    <v-row>
                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="kidf"
                                    :rules="requiredF"
                                    label="Фамилия ребенка"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >

                            <v-text-field
                                    v-model="kidi"
                                    :rules="requiredF"
                                    label="Имя ребенка"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="kido"
                                    label="Отчество ребенка"
                                    required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <!--
                                    <v-row>
                                      <v-col
                                          cols="12"
                                          md="4"
                                      >
                                        <v-text-field
                                            v-model="mamf"

                                            label="Фамилия мамы"
                                            required
                                        ></v-text-field>
                                      </v-col>

                                      <v-col
                                          cols="12"
                                          md="4"
                                      >

                                        <v-text-field
                                            v-model="mami"

                                            label="Имя мамы"
                                            required
                                        ></v-text-field>
                                      </v-col>

                                      <v-col
                                          cols="12"
                                          md="4"
                                      >
                                        <v-text-field
                                            v-model="mamo"
                                            label="Отчество мамы"
                                            required
                                        ></v-text-field>
                                      </v-col>
                                    </v-row>

                                    <v-row>
                                      <v-col
                                          cols="12"
                                          md="4"
                                      >
                                        <v-text-field
                                            v-model="dadf"

                                            label="Фамилия папы"
                                            required
                                        ></v-text-field>
                                      </v-col>

                                      <v-col
                                          cols="12"
                                          md="4"
                                      >

                                        <v-text-field
                                            v-model="dadi"

                                            label="Имя папы"
                                            required
                                        ></v-text-field>
                                      </v-col>

                                      <v-col
                                          cols="12"
                                          md="4"
                                      >
                                        <v-text-field
                                            v-model="dado"
                                            label="Отчество папы"
                                            required
                                        ></v-text-field>
                                      </v-col>
                                    </v-row>
                    -->
                    <v-row>
                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-menu
                                    ref="menu"
                                    v-model="menu"
                                    :close-on-content-click="false"
                                    :return-value.sync="date"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                            v-model="date"
                                            :rules="requiredF"
                                            label="Дата рождения"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                        v-model="date"
                                        no-title
                                        scrollable
                                        locale="ru-RU"
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                            text
                                            color="primary"
                                            @click="menu = false"
                                    >
                                        Закрыть
                                    </v-btn>
                                    <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu.save(date);monthDiff(new Date('2000,01,01'), new Date('2013,08,02'))"
                                    >
                                        Выбрать
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>

                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="momtel"
                                    :rules="requiredF"
                                    label="Телефон мамы"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="age"
                                    label="Возраст"
                                    required
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
                                    v-model="city"
                                    required
                            ></v-select>

                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-select
                                    :items="OtdelenijeList"
                                    label="Отделение"
                                    v-model="Otdelenije"
                                    required
                            ></v-select>

                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="ibn"

                                    label="№ и/б"
                                    required
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
                                    label="Источник финансирования"
                                    v-model="finsrc"
                                    required
                            ></v-select>

                        </v-col>

                        <!--v-col
                                cols="12"
                                md="4"
                        >
                            <v-select
                                    :items="ServiceList"
                                    label="Вид услуги"
                                    v-model="servicetype"
                                    required
                            ></v-select>

                        </v-col-->

                    </v-row>

                    <v-row>
                        <v-col
                                cols="12"
                                md="12"
                        >


                        </v-col>

                    </v-row>

                    <v-row>



                    </v-row>

                    <v-row v-if="viewController">
                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="dadtel"
                                    label="Телефон папы"
                                    required
                            ></v-text-field>

                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="firstdiagnoz"
                                    label="Клинический диагноз"
                                    required
                            ></v-text-field>

                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="lastdiagnoz"

                                    label="Сопутствующий диагноз (данные анамнеза, заключение спец-та, результ. инструмен. обслед. оперативные вмеш.)"
                                    required
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row v-if="viewController">
                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="sikrange"

                                    :counter="10"
                                    label="Длительность болезни"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-select
                                    :items="drList"
                                    label="Д или Р"
                                    v-model="dr"
                                    required
                            ></v-select>
                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-select
                                    :items="dnList"
                                    label="Заболевание (ЦНС)"
                                    v-model="zapnsdn"
                                    required
                            ></v-select>
                        </v-col>
                    </v-row>

                    <v-row v-if="viewController">
                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-select
                                    :items="dnList"
                                    label="Врожденные пороки развития"
                                    v-model="porkdn"
                                    required
                            ></v-select>
                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-select
                                    :items="dnList"
                                    label="Генетические и наследственные болезни "
                                    v-model="genetnasdn"
                                    required
                            ></v-select>
                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-select
                                    :items="dnList"
                                    label="Нарушение слуха"
                                    v-model="narsluhdn"
                                    required
                            ></v-select>
                        </v-col>
                    </v-row>

                    <v-row v-if="viewController">
                        <v-col
                                cols="12"
                                md="3"
                        >
                            <v-select
                                    :items="dnList"
                                    label="Нарушение зрения"
                                    v-model="narzrendn"
                                    required
                            ></v-select>
                        </v-col>

                        <v-col
                                cols="12"
                                md="3"
                        >
                            <v-select
                                    :items="tiajestList"
                                    label="Тяжесть болезни"
                                    v-model="tiajest"
                                    required
                            ></v-select>
                        </v-col>

                        <v-col
                                cols="12"
                                md="3"
                        >
                            <v-select
                                    :items="stadijaList"
                                    label="Стадия болезни"
                                    v-model="stadija"
                                    required
                            ></v-select>
                        </v-col>
                        <v-col
                                cols="12"
                                md="3"
                        >
                            <v-select
                                    :items="dnList"
                                    label="Заболевания ОДА"
                                    v-model="zabjadn"
                                    required
                            ></v-select>
                        </v-col>

                    </v-row>
                    <v-row v-if="viewController">
                        <v-col
                                cols="12"
                                md="12"
                        >
                            <v-textarea
                                    label="Психолого-педагогическое заключение"
                                    v-model="psihozak"
                                    hint="Hint text"
                            ></v-textarea>

                        </v-col>

                    </v-row>

                </v-container>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
    export default {
        data: () => ({
          viewController:false,

            eventNew:false,
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
            babycardsList:[],
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
            Otdelenije:"",
            age:"",

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
            DROP_EVENT(){
                return this.$store.getters.DROP_EVENT;
            },
            USERS_LIST_BY_KEY_ID(){
                return this.$store.getters.USERS_LIST_BY_KEY_ID;
            },
            cartList(){
                return this.$store.getters.BABYCARDS_LIST_SELECT_OPTION;
            },
            userList(){
                return this.$store.getters.USERS_LIST;
            },
            EVENT() {
                return this.$store.getters.EVENT;
            },
            POST_STEP() {
                return this.$store.getters.POST_STEP;
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
            // POST_STEP(nv){
            //
            //     if(nv != null && this.doctorID.id!=null && this.room!=null
            //         && this.typeCurent!=null && this.EventTime!=null && this.durationSelectRange!=null){
            //         var data = {
            //             //id:this.idRecord,
            //             duration:this.durationSelectRange,
            //
            //             // times:this.times,
            //             strtime: this.timeS,
            //             typeEvent:this.typeCurent,
            //             title:this.room,
            //             //title:this.userList[dodID].username + " ("+this.cartList[kidID].title+")",
            //             doctor:this.doctorID.id,
            //             month:dayjs(this.timeS).format('MM'),
            //             dayOfMonth:dayjs(this.timeS).format('DD'),
            //             times:dayjs(this.timeS).format('YYYY'),
            //             color:this.USERS_LIST_BY_KEY_ID[this.doctorID.id].usergroup.color,
            //             babycard: nv.id,
            //
            //         }
            //         this.$store.dispatch("POST_AXIOS_EVENTS",data)
            //         // console.log("dss",
            //         //     nv,
            //         //     data
            //         // )
            //     }
            //
            // }
        },
        methods:{
            saveCard () {

                var data = {

                    otdelenije: this.Otdelenije,
                    date:this.date,
                    age:this.age,
                    kidf:this.kidf,
                    kidi:this.kidi,
                    kido:this.kido,

                    mamf:this.mamf,
                    mami:this.mami,
                    mamo:this.mamo,

                    dadf:this.dadf,
                    dadi:this.dadi,
                    dado:this.dadi,

                    city:this.city,
                    ibn:this.ibn,
                    finsrc:this.finsrc,
                    servicetype:this.servicetype,
                    consaltfio:this.consaltfio,
                    desc:this.desc,
                    momfio:this.momfio,
                    momtel:this.momtel,
                    dadfio:this.dadfio,
                    dadtel:this.dadtel,
                    lastdiagnoz:this.lastdiagnoz,
                    firstdiagnoz:this.firstdiagnoz,
                    sikrange:this.sikrange,
                    dr:this.dr,
                    zapnsdn:this.zapnsdn,
                    porkdn: this.porkdn,
                    genetnasdn:this.genetnasdn,
                    narsluhdn:this.narsluhdn,
                    narzrendn:this.narzrendn,
                    zabjadn:this.zabjadn,
                    tiajest:this.tiajest,
                    stadija:this.stadija,
                    psihozak:this.psihozak,



                }
                if(this.kidf != "" && this.kidi != ""){
                    this.$store.dispatch("POST_AXIOS_BABYCARDS",data)
                    this.dialog = false
                }else{
                    this.kidf = null
                    this.kidi = null
                    this.kido = null
                    this.date = ""
                    //this.dialog = false
                }

                // axios.post('/babycards/', data)
                //     .then(response => {
                //         this.dialog=false;
                //         console.log(response);
                //     })
                //     .catch(function (error) {
                //         console.log(error);
                //     })

                //     .then(function () {
                //         // always executed
                //     });


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
            },
            findCard () {
                var data = {
                    kidf_contains:this.kidf,
                    kidi_contains:this.kidi,
                    kido_contains:this.kido,
                    date_contains:this.datebf

                }
                console.log(this.datebf);

                this.$http.get('/babycards/',{params: data})
                .then(response => {
                    //this.dialog=false;
                    this.babycardsList = response.data;

                })
                .catch(function (error) {
                    console.log(error);
                });
            },
        }
    }
</script>
