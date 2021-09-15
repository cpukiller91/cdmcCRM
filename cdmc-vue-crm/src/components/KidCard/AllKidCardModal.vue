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
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Карточки ребенка</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn
                                dark
                                text
                                @click.stop="resetFilter"
                        >
                            Сбросить Фильтр
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
                                            label="Дата Рождения"
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
                        <v-expansion-panels>
                            <v-expansion-panel
                                    v-for="(item,i) in babycardsList"
                                    :key="i"
                            >
                                <v-expansion-panel-header>
                                    {{item.kidf}} {{item.kidi}} {{item.kido}}

                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <button class="btn btn-info btn-outline-success" @click="editCart(item)">
                                        <i class="icofont icofont-info-square"></i>Сохранить</button>
                                    <button class="btn btn-info btn-outline-danger" @click="dropCart(item.id)">
                                        <i class="icofont icofont-info-square"></i>Удалить</button>
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
                                                    label="Дата Рождения"
                                                    prepend-icon="mdi-calendar"


                                            ></v-text-field>

                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="item.momtel"

                                                    label="Телефон Мамы"

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
                                                    label="Телефон Папы"

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
                                                    label="дл-ть бол-ни"

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
                                                    label="Заб.н.с. (ЦНС)"
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
                                                    label="Врожд пороки развития"
                                                    v-model="item.porkdn"

                                            ></v-select>
                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="4"
                                        >
                                            <v-select
                                                    :items="dnList"
                                                    label="Генет и наслед б-ни "
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
                                                    label="Тяжесть б-ни"
                                                    v-model="item.tiajest"

                                            ></v-select>
                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="3"
                                        >
                                            <v-select
                                                    :items="stadijaList"
                                                    label="Стадия б-ни"
                                                    v-model="item.stadija"

                                            ></v-select>
                                        </v-col>
                                        <v-col
                                                cols="12"
                                                md="3"
                                        >
                                            <v-select
                                                    :items="dnList"
                                                    label="Заб-я ОДА"
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

            babycardsList(){
                return this.$store.getters.BABYCARDS_LIST_FILTER;
            }
        },
        watch:{
            babycardsList(vn,vo){
                console.log("babycardsList",vn)
            }
        },
        methods:{
            dropCart(id){
                this.$store.dispatch("DELETE_AXIOS_BABYCARDS",{id:id })
                console.log("dropCart",id)
            },
            editCart(item){
                this.$store.dispatch("PUT_AXIOS_BABYCARDS",item)
                console.log("editCart",item)
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

                this.$store.dispatch("GET_AXIOS_BABYCARDS_LIST_FILTER",data)

            },
        }
    }
</script>