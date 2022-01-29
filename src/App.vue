<template>
    <div id="app"></div>
</template>

<script>
export default {
    name: "App",
    props: [],
    data: function () {
        return {};
    },
    computed: {},
    methods: {},
    components: {},
    mounted:function (){
        console.log(this.$store.state.test)
    }
};
</script>

<style lang="less">
@import "~@/assets/css/app.less";
</style>
