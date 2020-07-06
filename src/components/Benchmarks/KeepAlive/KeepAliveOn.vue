<template>
    <div>
        <div class="grid" v-for="(n,index) of list" :key="index">
            <div class="circle">
                <div v-if="n" class="on"></div>
                <div v-else class="off"></div>
                <Heavy :factor="8000"/>
            </div>
        </div>
    </div>
</template>

<script>
    import generate from "../../../mixins/generate";

    export default {
        name: "KeepAliveOn",
        mixins: [generate],
        mounted() {
            this.play = true;
        }
    }
</script>

<style scoped>
    .grid {
        margin: 24px auto;
        max-width: 800px;
    }
    .circle {
        float: left;
        width: 21px;
        height: 21px;
        margin: 2px;
    }
    .on, .off {
        width: 100%;
        height: 100%;
        color: transparent;
        border-radius: 50%;
    }
    .on {
        background-color: black;
    }
    .off {
        background-color: #2c3e50;
    }
</style>