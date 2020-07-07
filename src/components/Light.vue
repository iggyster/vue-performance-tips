<template>
    <div>
        <div class="grid">
            <div class="circle" v-for="(n,index) of list" :key="index">
                <div v-if="n" class="on" :style="{backgroundColor: color}"></div>
                <div v-else class="off"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import generate from "../mixins/generate";

    export default {
        name: "Light",
        mixins: [generate],
        props: ['color'],
        mounted() {
            this.count = 800;
            this.play = true;
        }
    }
</script>

<style scoped>
    .grid {
        width: 800px;
        margin: auto;
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
    .off {
        background-color: #2c3e50;
    }
</style>