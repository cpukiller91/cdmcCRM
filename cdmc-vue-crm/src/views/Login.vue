<template>
  <div>
  <!-- Pre-loader start -->
  <div class="theme-loader">
    <div class="ball-scale">
      <div class='contain'>
        <div class="ring"><div class="frame"></div></div>
        <div class="ring"><div class="frame"></div></div>
        <div class="ring"><div class="frame"></div></div>
        <div class="ring"><div class="frame"></div></div>
        <div class="ring"><div class="frame"></div></div>
        <div class="ring"><div class="frame"></div></div>
        <div class="ring"><div class="frame"></div></div>
        <div class="ring"><div class="frame"></div></div>
        <div class="ring"><div class="frame"></div></div>
        <div class="ring"><div class="frame"></div></div>
      </div>
    </div>
  </div>
  <!-- Pre-loader end -->
    <section class="login-block">

      <!-- Container-fluid starts -->
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <!-- Authentication card start -->

            <form class="md-float-material form-material">

              <div class="text-center">
                <img src="files\assets\images\logo.png" alt="logo.png">
              </div>

              <div class="auth-box card">
                <div class="card-block">
                  <div class="row m-b-20">
                    <div class="col-md-12">
                      <h3 class="text-center">Вход</h3>
                      <div>{{message}}</div>
                    </div>
                  </div>
                  <div class="form-group form-primary">
                    <input type="text" v-model="login" name="email" class="form-control" required="" placeholder="Логин">
                    <span class="form-bar"></span>
                  </div>
                  <div class="form-group form-primary">
                    <input type="password" v-model="password" name="password" class="form-control" required="" placeholder="Пароль">
                    <span class="form-bar"></span>
                  </div>
                  <div class="row m-t-25 text-left">
                    <div class="col-12">
                      <div class="checkbox-fade fade-in-primary d-">
                        <label>
                          <input type="checkbox" value="">
                          <span class="cr"><i class="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                          <span class="text-inverse">Запомнить меня</span>
                        </label>
                      </div>
                      <div class="forgot-phone text-right f-right">
                        <a href="auth-reset-password.htm" class="text-right f-w-600">Забыл Пароль?</a>
                      </div>
                    </div>
                  </div>
                  <div class="row m-t-30">
                    <div class="col-md-12">
                      <button @click="logIn" type="button" class="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20">Вход</button>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-md-10">
                      <p class="text-inverse text-left m-b-0">Спасибо!.</p>
                      <p class="text-inverse text-left"><a href="/"><b class="f-w-600">На Главную</b></a></p>
                    </div>
                    <div class="col-md-2">
                      <img src="files\assets\images\auth\Logo-small-bottom.png" alt="small-logo.png">
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <!-- end of form -->
          </div>
          <!-- end of col-sm-12 -->
        </div>
        <!-- end of row -->
      </div>
      <!-- end of container-fluid -->
    </section>
  </div>
</template>
<script>

  export default {

    data: () => ({
      password:"pnn2812",
      login:"pnn2812@mail.ru",
      message:"",
      overlay: true
    }),
    mounted() {

    },
    methods: {
      logIn(){
        // Make a request for a user with a given ID
        this.$http.post('/auth/local', {

          identifier: this.login,
          password: this.password,
        })
        .then( (response) => {
          // handle success
          //this.message = response.message[0].message;
          if(response.data.jwt){
            let json = JSON.stringify(response.data)
            this.logIn = true;
            localStorage.setItem("login", json)
            this.$router.push({ name: 'Home' })
          }
          console.log("Login",response.jwt);
        })
        .catch( (error) => {
          console.log("Login error",error);
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
      },
      logout(){

      }
    }
  };
</script>
<style>

</style>
