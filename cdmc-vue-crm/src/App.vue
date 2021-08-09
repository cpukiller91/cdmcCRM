<template>
    <div id="app">
        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>

export default {
    name: 'App',

    data: () => ({
        drawer: false
    }),
    computed: {
        layout() {
            console.log("---->",this.$route.meta.layout)
            return this.$route.meta.layout

        }
    }
};
</script>
