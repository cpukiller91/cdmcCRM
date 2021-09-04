<template>
    <div class="navbar-container container-fluid">
        <ul class="nav-left">
            <li class="header-search">
                <div class="main-search morphsearch-search">
                    <div class="input-group">
                        <span class="input-group-addon search-close"><i class="feather icon-x"></i></span>
                        <input type="text" class="form-control">
                        <span class="input-group-addon search-btn"><i class="feather icon-search"></i></span>
                    </div>
                </div>
            </li>
            <li>
                <a href="#!" onclick="javascript:toggleFullScreen()">
                    <i class="feather icon-maximize full-screen"></i>
                </a>
            </li>
        </ul>

        <ul class="nav-right">
            <li class="header-notification">
                <div class="dropdown-primary dropdown">
                    <div class="dropdown-toggle" data-toggle="dropdown">
                        <i class="feather icon-bell"></i>
                        <span class="badge bg-c-pink">5</span>
                    </div>
                    <ul class="show-notification notification-view dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                        <li>
                            <h6>Notifications</h6>
                            <label class="label label-danger">New</label>
                        </li>
                        <li>
                            <div class="media">
                                <img class="d-flex align-self-center img-radius" src="/files/assets/images/avatar-4.jpg" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5 class="notification-user">John Doe</h5>
                                    <p class="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                    <span class="notification-time">30 minutes ago</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="media">
                                <img class="d-flex align-self-center img-radius" src="/files/assets/images/avatar-3.jpg" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5 class="notification-user">Joseph William</h5>
                                    <p class="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                    <span class="notification-time">30 minutes ago</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="media">
                                <img class="d-flex align-self-center img-radius" src="/files/assets/images/avatar-4.jpg" alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5 class="notification-user">Sara Soudein</h5>
                                    <p class="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                    <span class="notification-time">30 minutes ago</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
            <li v-if="menu" class="header-notification">
                <div class="dropdown-primary dropdown">
                    <div class="displayChatbox dropdown-toggle" data-toggle="dropdown">
                        <i class="feather icon-message-square"></i>
                        <span class="badge bg-c-green">3</span>
                    </div>
                </div>
            </li>
            <li class="user-profile header-notification">
                <div class="dropdown-primary dropdown">
                    <div class="dropdown-toggle" data-toggle="dropdown">
                        <img src="/files/assets/images/avatar-4.jpg" class="img-radius" alt="User-Profile-Image">
                        <span>{{LOGIN_USER.user.username}}</span>
                        <i class="feather icon-chevron-down"></i>
                    </div>
                    <ul class="show-notification profile-notification dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                        <li>
                            <a href="/analitics">
                                <i class="feather icon-settings"></i> Аналитика
                            </a>
                        </li>
                        <li>
                            <a href="/kids-list">
                                <i class="feather icon-settings"></i> CRM
                            </a>
                        </li>
                        <li>
                            <a href="user-profile.htm">
                                <i class="feather icon-user"></i> Профиль
                            </a>
                        </li>
                        <li>
                            <a href="email-inbox.htm">
                                <i class="feather icon-mail"></i> Мои сообщения
                            </a>
                        </li>
                        <li>
                            <a @click="logout">
                                <i class="feather icon-log-out"></i> Выход
                            </a>
                        </li>
                    </ul>

                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: {
            // title: String,
            // likes: Number,
            menu: Boolean,
            // commentIds: Array,
            // author: Object,
            // callback: Function,
            // contactsPromise: Promise // или любой другой конструктор
        },
        computed:{
            USERS_LIST(){
                return this.$store.getters.USERS_LIST
            },
            LOGIN_USER(){
                return this.$store.getters.LOGIN_USER
            }
        },
        watch:{
            LOGIN_USER(nv){
                console.log("LOGIN_USER_MENU-------",nv)
            }
        },
        methods:{
            logout(){
                this.$store.dispatch("LOGOUT_USER")
                this.$router.push({ name: 'Login' }).catch(()=>{})
                console.log("LOGOUT_USER")
            }
        },
        mounted() {
            this.$store.dispatch("LOGIN_USER_STORAGE")
        }
    }
</script>