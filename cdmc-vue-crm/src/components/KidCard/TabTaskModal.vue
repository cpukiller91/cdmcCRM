<template>
    <div>
        <!-- Nav tabs -->
        <ul class="nav nav-tabs  tabs" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#babycart" role="tab">Карточка</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#defectolog" role="tab">Дефектолог</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#logoped" role="tab">Логопед</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#psiholog" role="tab">Психолог</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#fam-psiholog" role="tab">Семейный Психолог</a>
            </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content tabs card-block">
            <div class="tab-pane active" id="babycart" role="tabpanel">
                <v-container>


                    <v-row>
                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="babycard.kidf"

                                    label="Фамилия ребенка"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >

                            <v-text-field
                                    v-model="babycard.kidi"

                                    label="Имя ребенка"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="babycard.kido"
                                    label="Отчество ребенка"
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
                                    v-model="babycard.date"
                                    label="Дата Рождения"
                                    prepend-icon="mdi-calendar"

                            ></v-text-field>

                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="babycard.momtel"

                                    label="Телефон Мамы"
                                    required
                            ></v-text-field>
                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="babycard.age"
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
                                    v-model="babycard.city"
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
                                    v-model="babycard.otdelenije"
                                    required
                            ></v-select>

                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="babycard.ibn"

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
                                    v-model="babycard.finsrc"
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
                                    v-model="babycard.servicetype"
                                    required
                            ></v-select>
                        </v-col-->

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="babycard.consaltfio"
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
                                    v-model="babycard.desc"
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
                                    v-model="babycard.dadtel"
                                    label="Телефон Папы"
                                    required
                            ></v-text-field>

                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="babycard.firstdiagnoz"
                                    label="Клинический диагноз"
                                    required
                            ></v-text-field>

                        </v-col>

                        <v-col
                                cols="12"
                                md="4"
                        >
                            <v-text-field
                                    v-model="babycard.lastdiagnoz"

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
                                    v-model="babycard.sikrange"

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
                                    v-model="babycard.dr"
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
                                    v-model="babycard.porkdn"
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
                                    v-model="babycard.genetnasdn"
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
                                    v-model="babycard.narsluhdn"
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
                                    v-model="babycard.psihozak"
                                    hint="Hint text"
                            ></v-textarea>

                        </v-col>

                    </v-row>


                </v-container>
            </div>
            <div class="tab-pane" id="defectolog" role="tabpanel">

                    <v-text-field
                            v-model="defIntel"
                            :counter="200"
                            :rules="requiredF"
                            label="Степень нарушения интеллекта"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="gefMind"
                            :counter="200"
                            :rules="requiredF"
                            label="Форма мышления"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="defAge"
                            :counter="200"
                            :rules="requiredF"
                            label="Актуал. психол. возраст"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="defSipr"
                            :counter="200"
                            :rules="requiredF"
                            label="Рекомендуемая АООП, СИПР"
                            required
                    ></v-text-field>
                    <button class="btn btn-info btn-outline-success" @click.stop="defectologSave()">
                        <i class="icofont icofont-info-square"></i>Создать пометку дефектолога</button>


                <template>
                    <v-expansion-panels focusable>
                        <v-expansion-panel
                                v-for="(item,i) in defectologs"
                                :key="i"
                        >
                            <v-expansion-panel-header>{{item.id}} - Комментарий специалиста ({{item.created_at}})</v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <button class="btn btn-info btn-outline-danger" @click="defectologDelete(item)">
                                    <i class="icofont icofont-info-square"></i>Удалить</button>
                                <v-text-field
                                        v-model="item.defIntel"
                                        :counter="200"
                                        :readonly="true"
                                        label="Степень нарушения интеллекта"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        v-model="item.gefMind"
                                        :counter="200"
                                        :readonly="true"
                                        label="Форма мышления"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        v-model="item.defAge"
                                        :counter="200"
                                        :readonly="true"
                                        label="Актуал. психол. возраст"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        v-model="item.defSipr"
                                        :counter="200"
                                        :readonly="true"
                                        label="Рекомендуемая АООП, СИПР"
                                        required
                                ></v-text-field>
                            </v-expansion-panel-content>

                        </v-expansion-panel>
                    </v-expansion-panels>
                </template>
            </div>
            <div class="tab-pane" id="logoped" role="tabpanel">

                    <v-select
                            :items="CharacteristicsSpeech"
                            v-model="characteristics"
                            label="Характеристика речи"
                            required
                    ></v-select>

                    <v-select
                            :items="AssociatedViolations"
                            v-model="associated"
                            label="Сопутствующие наруш."
                            required
                    ></v-select>


                    <v-text-field
                            v-model="logoActual"
                            :counter="200"

                            label="Актуальное речевое развитие+Нормативное речевое развитие"
                            required
                    ></v-text-field>
                    <button class="btn btn-info btn-outline-success" @click.stop="logopedSave()">
                        <i class="icofont icofont-info-square"></i>Создать пометку дефектолога</button>
                <template>
                    <v-expansion-panels focusable>
                        <v-expansion-panel
                                v-for="(item,i) in logopeds"
                                :key="i"
                        >
                            <v-expansion-panel-header>{{item.id}} - Комментарий специалиста ({{item.created_at}})</v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <button class="btn btn-info btn-outline-danger" @click="logopedDelete(item)">
                                    <i class="icofont icofont-info-square"></i>Удалить</button>
                                <v-select
                                        :items="CharacteristicsSpeech"
                                        v-model="item.characteristics"
                                        label="Характеристика речи"
                                        :readonly="true"
                                        required
                                ></v-select>

                                <v-select
                                        :items="AssociatedViolations"
                                        v-model="item.associated"
                                        label="Сопутствующие наруш."
                                        :readonly="true"
                                        required
                                ></v-select>


                                <v-text-field
                                        v-model="item.logoactual"
                                        :counter="200"
                                        :readonly="true"
                                        label="Актуальное речевое развитие+Нормативное речевое развитие"
                                        required
                                ></v-text-field>
                            </v-expansion-panel-content>

                        </v-expansion-panel>
                    </v-expansion-panels>
                </template>
            </div>
            <div class="tab-pane" id="psiholog" role="tabpanel">

                    <v-select
                            :items="emotionalCondition"
                            v-model="emotionalcondition"
                            label="эмоциональное состояние "
                            required
                    ></v-select>

                    <v-select
                            :items="MotivationalSphere"
                            v-model="motivationalsphere"
                            label="Мотивационно-потребностная сфера "
                            required
                    ></v-select>

                    <v-select
                            :items="SocialContacts"
                            v-model="socialcontacts"
                            label="Социальные контакты "
                            required
                    ></v-select>

                    <v-text-field
                            v-model="dopolstesor"
                            :counter="200"
                            label="Дополнительные стрессоры"
                            required
                    ></v-text-field>

                    <v-select
                            :items="nspecificDifficulties"
                            v-model="nspecificdifficulties"
                            label="неспецифические трудности"
                            required
                    ></v-select>

                    <v-select
                            :items="specificDifficulties"
                            v-model="specificdifficulties"
                            label="специфические трудности"
                            required
                    ></v-select>

                    <v-text-field
                            v-model="actualtrabl"
                            :counter="200"

                            label="актуальная психологическая проблема"
                            required
                    ></v-text-field>
                    <v-select
                            :items="directionsRehabilitation"
                            label="направления реабилитация "
                            v-model="directionsrehabilitation"
                            required
                    ></v-select>
                    <v-select
                            :items="formOfWork"
                            label="основная форма работы "
                            v-model="formofwork"
                            required
                    ></v-select>
                    <v-select
                            :items="parentingAttitude"
                            v-model="parentingattitude"
                            label="спитательная установка родителей"
                            required
                    ></v-select>

                    <button class="btn btn-info btn-outline-success" @click.stop="psihologSave()">
                        <i class="icofont icofont-info-square"></i>Создать пометку психолога</button>

                <template>
                    <v-expansion-panels focusable>
                        <v-expansion-panel
                                v-for="(item,i) in psiholog"
                                :key="i"
                        >
                            <v-expansion-panel-header>{{item.id}} - Комментарий специалиста ({{item.created_at}})</v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <button class="btn btn-info btn-outline-danger" @click="psihologDelete(item)">
                                    <i class="icofont icofont-info-square"></i>Удалить</button>
                                <v-select
                                        :items="emotionalCondition"
                                        v-model="item.emotionalcondition"
                                        label="эмоциональное состояние "
                                        :readonly="true"
                                        required
                                ></v-select>

                                <v-select
                                        :items="MotivationalSphere"
                                        v-model="item.motivationalsphere"
                                        label="Мотивационно-потребностная сфера "
                                        :readonly="true"
                                        required
                                ></v-select>

                                <v-select
                                        :items="SocialContacts"
                                        v-model="item.socialcontacts"
                                        label="Социальные контакты "
                                        :readonly="true"
                                        required
                                ></v-select>

                                <v-text-field
                                        v-model="item.dopolstesor"
                                        :counter="200"
                                        label="Дополнительные стрессоры"
                                        :readonly="true"
                                        required
                                ></v-text-field>

                                <v-select
                                        :items="nspecificDifficulties"
                                        v-model="item.nspecificdifficulties"
                                        label="неспецифические трудности"
                                        :readonly="true"
                                        required
                                ></v-select>

                                <v-select
                                        :items="specificDifficulties"
                                        v-model="item.specificdifficulties"
                                        label="специфические трудности"
                                        :readonly="true"
                                        required
                                ></v-select>

                                <v-text-field
                                        v-model="item.actualtrabl"
                                        :counter="200"
                                        :readonly="true"
                                        label="актуальная психологическая проблема"
                                        required
                                ></v-text-field>
                                <v-select
                                        :items="directionsRehabilitation"
                                        label="направления реабилитация "
                                        v-model="item.directionsrehabilitation"
                                        :readonly="true"
                                        required
                                ></v-select>
                                <v-select
                                        :items="formOfWork"
                                        label="основная форма работы "
                                        v-model="item.formofwork"
                                        :readonly="true"
                                        required
                                ></v-select>
                                <v-select
                                        :items="parentingAttitude"
                                        v-model="item.parentingattitude"
                                        label="спитательная установка родителей"
                                        :readonly="true"
                                        required
                                ></v-select>
                            </v-expansion-panel-content>

                        </v-expansion-panel>
                    </v-expansion-panels>
                </template>
            </div>
            <div class="tab-pane" id="fam-psiholog" role="tabpanel">

                    <v-select
                            :items="ageCategory"
                            label="возрастная категория "
                            v-model="agecategory"
                            required
                    ></v-select>
                    <v-select
                            :items="emotionalCondition"
                            v-model="emotional"
                            label="эмоциональное состояние "
                            required
                    ></v-select>
                    <v-select
                            :items="personalCharacteristics"
                            v-model="personalcharacteristics"
                            label="личностные характеристики "
                            required
                    ></v-select>
                    <v-select
                            :items="behaviorSituation"
                            v-model="behaviorsituation"
                            label="поведение в ситуации стресса "
                            required
                    ></v-select>

                    <v-text-field
                            v-model="behaviorDesc"
                            :counter="200"

                            label="поведение в ситуации стресса описание"
                            required
                    ></v-text-field>
                    <v-select
                            :items="experienceSickChild"
                            v-model="experiencesickshild"
                            label="наличие опыта воспитания больного ребенка "
                            required
                    ></v-select>

                    <v-select
                            :items="availabilitySupport"
                            v-model="availabilitysupport"
                            label="наличие поддержки и помощи "
                            required
                    ></v-select>

                    <v-select
                            :items="childIllness"
                            v-model="childillness"
                            label="восприятие матерью болезни ребенка "
                            required
                    ></v-select>

                    <v-select
                            :items="additionalStressors"
                            v-model="additionalstressors"
                            label="дополнительные стрессоры "
                            required
                    ></v-select>

                    <v-text-field
                            v-model="stressor"
                            :counter="200"

                            label="Примечание (укажите какие стрессоры)"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="actualtr"
                            :counter="200"

                            label="актуальная проблема"
                            required
                    ></v-text-field>
                    <v-select
                            :items="directionsRehabilitation"
                            label="направления реабилитация "
                            v-model="directionsrehabilit"
                            required
                    ></v-select>
                    <button class="btn btn-info btn-outline-success" @click.stop="simpsihologSave()">
                        <i class="icofont icofont-info-square"></i>Создать пометку симейного психолога</button>

                <template>
                    <v-expansion-panels focusable>
                        <v-expansion-panel
                                v-for="(item,i) in simpsiholog"
                                :key="i"
                        >
                            <v-expansion-panel-header>{{item.id}} - Комментарий специалиста ({{item.created_at}})</v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <button class="btn btn-info btn-outline-danger" @click="simpsihologDelete(item)">
                                    <i class="icofont icofont-info-square"></i>Удалить</button>

                                <v-select
                                        :items="ageCategory"
                                        label="возрастная категория "
                                        v-model="item.agecategory"
                                        :readonly="true"
                                        required
                                ></v-select>
                                <v-select
                                        :items="emotionalCondition"
                                        label="эмоциональное состояние "
                                        v-model="item.emotional"
                                        :readonly="true"
                                        required
                                ></v-select>
                                <v-select
                                        :items="personalCharacteristics"
                                        label="личностные характеристики "
                                        v-model="item.personalcharacteristics"
                                        :readonly="true"
                                        required
                                ></v-select>
                                <v-select
                                        :items="behaviorSituation"
                                        label="поведение в ситуации стресса "
                                        v-model="item.behaviorsituation"
                                        :readonly="true"
                                        required
                                ></v-select>

                                <v-text-field
                                        v-model="item.behaviorDesc"
                                        :counter="200"
                                        :readonly="true"
                                        label="поведение в ситуации стресса описание"
                                        required
                                ></v-text-field>
                                <v-select
                                        :items="experienceSickChild"
                                        v-model="item.experiencesickshild"
                                        label="наличие опыта воспитания больного ребенка "
                                        required
                                        :readonly="true"
                                ></v-select>

                                <v-select
                                        :items="availabilitySupport"
                                        v-model="item.availabilitysupport"
                                        label="наличие поддержки и помощи "
                                        required
                                        :readonly="true"
                                ></v-select>

                                <v-select
                                        :items="childIllness"
                                        v-model="item.childillness"
                                        label="восприятие матерью болезни ребенка "
                                        required
                                        :readonly="true"
                                ></v-select>

                                <v-select
                                        :items="additionalStressors"
                                        v-model="item.additionalstressors"
                                        label="дополнительные стрессоры "
                                        required
                                        :readonly="true"
                                ></v-select>

                                <v-text-field
                                        v-model="item.stressor"
                                        :counter="200"
                                        :readonly="true"
                                        label="Примечание (укажите какие стрессоры)"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        v-model="item.actualtr"
                                        :counter="200"
                                        :readonly="true"
                                        label="актуальная проблема"
                                        required
                                ></v-text-field>
                                <v-select
                                        :items="directionsRehabilitation"
                                        label="направления реабилитация "
                                        v-model="item.directionsrehabilit"
                                        :readonly="true"
                                        required
                                ></v-select>
                            </v-expansion-panel-content>

                        </v-expansion-panel>
                    </v-expansion-panels>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        // props: {
        //     // title: String,
        //     // likes: Number,
        //     // isPublished: Boolean,
        //     editEvent: Array
        //     // author: Object,
        //     // callback: Function,
        //     // contactsPromise: Promise // или любой другой конструктор
        // },
        data: () => ({

            canSave:null,


            AddCard: false,
            tab: 'details',

            babycard:[],
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
            date: "",
            card:false,
            defect:false,
            famili:false,
            logos:false,
            psiho:false,

            defSipr:null,
            defAge:null,
            gefMind:null,
            defIntel:null,
            requiredF:[
                value => !!value || 'Обязательное поле.'
            ],

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
            finsrcList:[
                "ВМП",
                "ВМП-ОМС",
                "ОМС",
                "ПМУ"
            ],
            ServiceList:[
                "Конс.",
                "Занятие",
                "Группа"

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
            cityList:[
                "Москва",
                "МО",
                "РФ",
                "СНГ",
                "ИГ"

            ],
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
        computed:{

            babyCartCurent() {
                return this.$store.getters.BABYCARD;
            },
        },
        watch:{

            babyCartCurent(newV,oldV) {
                console.log("babyCartCurent",newV);
                this.babycard = newV,
                this.defectologs = newV.defectologs,
                this.logopeds = newV.logopeds,
                this.psiholog = newV.psihologs,
                this.simpsiholog = newV.simpsihologs

            }
        },
        mounted(){
            //console.log("GET_BABYCARD",this.$store.dispatch("GET_BABYCARD"))



        },
        methods:{

            hasSave(){

            },
            save(){

            },
            readOnly(){

            },
            labels(){

            },
            isReadOnly(){},

            simpsihologDelete(data){
                this.$store.dispatch("DELETE_AXIOS_SIMPSIHOLOG",data)
            },

            simpsihologSave(){
                var data ={
                    agecategory:this.agecategory,

                    emotional:this.emotional,
                    personalcharacteristics:this.personalcharacteristics,
                    behaviorsituation:this.behaviorsituation,
                    behaviorDesc:this.behaviorDesc,
                    experiencesickshild:this.experiencesickshild,
                    availabilitysupport:this.availabilitysupport,
                    childillness:this.childillness,
                    additionalstressors:this.additionalstressors,
                    stressor:this.stressor,
                    actualtr:this.actualtr,
                    directionsrehabilit:this.directionsrehabilit,
                    babycard: this.babycard.id
                }
                this.$store.dispatch("POST_AXIOS_SIMPSIHOLOG",data)
            },

            psihologDelete(data){
                this.$store.dispatch("DELETE_AXIOS_SIMPSIHOLOG",data)
            },

            psihologSave(){
                var data ={
                    emotionalcondition:this.emotionalcondition,
                    motivationalsphere:this.motivationalsphere,
                    socialcontacts:this.socialcontacts,
                    dopolstesor: this.dopolstesor,
                    nspecificdifficulties:this.nspecificdifficulties,
                    specificdifficulties:this.specificdifficulties,
                    actualtrabl:this.actualtrabl,
                    directionsrehabilitation:this.directionsrehabilitation,
                    formofwork:this.formofwork,
                    parentingattitude:this.parentingattitude,
                    babycard: this.babycard.id
                }
                this.$store.dispatch("POST_AXIOS_PSIHOLOG",data)
            },

            logopedDelete(item){
                if(item.id){
                    console.log(item)
                    this.$store.dispatch("DELETE_AXIOS_LOGOPEDS",item)

                }
            },

            logopedSave(){
                var data = {
                    characteristics:this.characteristics,
                    associated:this.associated,
                    logoactual:this.logoActual,
                    babycard: this.babycard.id
                }
                this.$store.dispatch("POST_AXIOS_LOGOPEDS",data)
            },

            defectologDelete(item){
                if(item.id){
                    console.log(item)
                    this.$store.dispatch("DELETE_AXIOS_DEFECTOLOG",item)
                    //this.$store.dispatch("GET_EVENT_EDIT")
                }

            },

            defectologSave(item){

                if(this.defIntel){
                    var data = {
                        defIntel:this.defIntel,
                        gefMind:this.gefMind,
                        defAge:this.defAge,
                        defSipr:this.defSipr,
                        babycard: this.babycard.id
                    }
                    this.$store.dispatch("POST_AXIOS_DEFECTOLOG",data)
                    //this.$store.dispatch("GET_AXIOS_BABYCARD",{id:this.babycard.id})
                    //this.$store.dispatch("GET_EVENT_EDIT")

                    //console.log("defectologSave->",this.babycard.id)
                }

            }
        }
    }
    </script>