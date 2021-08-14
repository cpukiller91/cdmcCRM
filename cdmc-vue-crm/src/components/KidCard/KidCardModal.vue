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
                <v-toolbar
                        dark
                        color="primary"
                >
                    <v-btn
                            icon
                            dark
                            @click="dialog = false"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Карточка ребенка</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn
                                dark
                                text
                                @click.stop="saveCard"
                        >
                            Сохранить
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>

                <v-divider></v-divider>
                <v-container>


                    <v-row>
                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="kidf"

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

                                            label="Фамилия Мамы"
                                            required
                                        ></v-text-field>
                                      </v-col>

                                      <v-col
                                          cols="12"
                                          md="4"
                                      >

                                        <v-text-field
                                            v-model="mami"

                                            label="Имя Мамы"
                                            required
                                        ></v-text-field>
                                      </v-col>

                                      <v-col
                                          cols="12"
                                          md="4"
                                      >
                                        <v-text-field
                                            v-model="mamo"
                                            label="Отчество Мамы"
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

                                            label="Фамилия Папы"
                                            required
                                        ></v-text-field>
                                      </v-col>

                                      <v-col
                                          cols="12"
                                          md="4"
                                      >

                                        <v-text-field
                                            v-model="dadi"

                                            label="Имя Папы"
                                            required
                                        ></v-text-field>
                                      </v-col>

                                      <v-col
                                          cols="12"
                                          md="4"
                                      >
                                        <v-text-field
                                            v-model="dado"
                                            label="Отчество Папы"
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
                                            label="Дата Рождения"
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

                                    label="Телефон Мамы"
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
                                    label="Источн финансирования"
                                    v-model="finsrc"
                                    required
                            ></v-select>

                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-select
                                    :items="ServiceList"
                                    label="Вид услуги"
                                    v-model="servicetype"
                                    required
                            ></v-select>

                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="consaltfio"
                                    label="ФИО консультанта"
                                    required
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col
                                cols="12"
                                md="12"
                        >
                            <v-textarea
                                    label="Примечание (неявка или др.)"
                                    v-model="desc"
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
                                    v-model="dadtel"
                                    label="Телефон Папы"
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

                    <v-row>
                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="sikrange"

                                    :counter="10"
                                    label="дл-ть бол-ни"
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
                                    label="Заб.н.с. (ЦНС)"
                                    v-model="zapnsdn"
                                    required
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
                                    label="Врожд пороки развития"
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
                                    label="Генет и наслед б-ни "
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

                    <v-row>
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
                                    label="Тяжесть б-ни"
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
                                    label="Стадия б-ни"
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
                                    label="Заб-я ОДА"
                                    v-model="zabjadn"
                                    required
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
                "Конс.",
                "Занятие",
                "Группа"

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
                this.$store.dispatch("POST_AXIOS_BABYCARDS",data)
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

                this.age = Math.floor(getMonth  / 12)+"л"+getMonth  % 12+"м" ;
                return Math.floor(getMonth  / 12)+"л"+getMonth  % 12+"м" ;
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