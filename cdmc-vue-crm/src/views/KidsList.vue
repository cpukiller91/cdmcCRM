
<template>
    <div>

    <!-- Basic table card start -->
    <div class="card">
        <div class="card-header">

            <div data-app style="z-index: 100">
                <div class="row">
                    <div class="col-md-6">
                        <kid-task-modal></kid-task-modal>
                    </div>

                    <div class="col-md-3">
                        <all-kid-card-modal style="float: right"></all-kid-card-modal>
                    </div>
                    <div class="col-md-3">
                        <kid-card-modal style="float: right"></kid-card-modal>
                    </div>
                </div>


            </div>
        </div>
        <div class="card-block table-border-style">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs md-tabs " role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#home7" role="tab"><i class="fa fa-list"></i>Список</a>
                    <div class="slide"></div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#profile7" role="tab">
                        <i class="fa fa-tasks"></i>Гарн</a>
                    <div class="slide"></div>
                </li>

            </ul>
            <!-- Tab panes -->
            <div class="tab-content card-block">
                <div class="tab-pane active" id="home7" role="tabpanel">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Пациент</th>
                                <th>Специалист</th>
                                <th>Тип приема</th>
                                <th>Начало</th>
                                <th>Окончание</th>
                                <th><i class="fa fa-gears"></i></th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Тест Тест Тест</td>
                                <td>Павлова Н. Н.</td>
                                <td>Консультация</td>
                                <td>19:00</td>
                                <td>19:30</td>
                                <td><div class="dropdown-primary dropdown open">
                                    <button class="btn btn-outline-primary dropdown-toggle waves-effect waves-light " type="button" id="dropdown-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        <i class="fa fa-bars"></i>
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdown-2" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                        <!--a class="dropdown-item waves-light waves-effect" >Action</a>
                                        <a class="dropdown-item waves-light waves-effect" >Another action</a>
                                        <a class="dropdown-item waves-light waves-effect" >Something else here</a-->
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item waves-light waves-effect" >Редактировать</a>
                                        <a class="dropdown-item waves-light waves-effect" >Удалить</a>
                                    </div>
                                </div></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane" id="profile7" role="tabpanel">
                    <gunt></gunt>
                </div>
            </div>

        </div>
    </div>
    </div>
</template>
<script>
    export default {
        data: () => ({
            titleWindow: "Записать пациента",

        }),
        mounted(){

        },

    };
</script>
