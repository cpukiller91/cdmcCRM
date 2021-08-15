<template>
    <div id="app">
        <component :is="layout" >
            <router-view/>
        </component>
    </div>
</template>

<script>

export default {
    name: 'App',

    data: () => ({
        drawer: false,
        login:false
    }),
    mounted(){
        this.$store.dispatch("LOGIN_USER_STORAGE")
    },
    watch:{
        LOGIN_USER(newVal){

            if(newVal == null){
                console.log("LOGIN_USER__AP---P",newVal)
                this.$router.push({ name: 'Login' }).catch(()=>{})

            }else{

                //this.$router.push({ name: 'Home' }).catch(()=>{})

            }

        }
    },

    computed: {
        LOGIN_USER(){
            return this.$store.getters.LOGIN_USER
        },
        layout() {
            //console.log("---->",this.$route.meta.layout)
            return this.$route.meta.layout

        }
    }
};
</script>
