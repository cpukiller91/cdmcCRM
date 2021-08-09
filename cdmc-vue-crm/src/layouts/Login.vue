<template>
    <div>
        <router-view/>
    </div>
</template>
<script>
    export default {
        data: () => ({
            src:[
//-------------- Required Jquery
                "/files/bower_components/jquery/js/jquery.min.js",
                "/files/bower_components/jquery-ui/js/jquery-ui.min.js",
                "/files/bower_components/popper.js/js/popper.min.js",
                "/files/bower_components/bootstrap/js/bootstrap.min.js",

                "/files/assets/js/vartical-layout.min.js",
                "/files/assets/pages/dashboard/custom-dashboard.js",
                "/files/assets/js/script.min.js",
//-------------i18next.min.js
                "/files/bower_components/i18next/js/i18next.min.js",
                "/files/bower_components/i18next-xhr-backend/js/i18nextXHRBackend.min.js",
                "/files/bower_components/i18next-browser-languagedetector/js/i18nextBrowserLanguageDetector.min.js",
                "/files/bower_components/jquery-i18next/js/jquery-i18next.min.js",
                "/files/assets/js/common-pages.js",

                "/files/bower_components/jquery-slimscroll/js/jquery.slimscroll.js",

                "/files/bower_components/modernizr/js/modernizr.js",
                "/files/bower_components/modernizr/js/css-scrollbars.js",




            ]
        }),
        mounted() {
            this.src.forEach(element => {
                console.log("Task list Layouts",element);
                this.createElement(element)
            })

        },
        methods:{
            createElement(src){
                let recaptchaScript = document.createElement('script')
                recaptchaScript.setAttribute('src', src)
                document.head.appendChild(recaptchaScript)
            }
        }
    }
</script>