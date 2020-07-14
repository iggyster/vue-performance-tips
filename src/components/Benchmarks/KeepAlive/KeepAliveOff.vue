<template>
    <div>
        <div class="grid" v-for="(n,index) of list" :key="index">
            <div class="circle">
                <div v-if="n" class="on"></div>
                <div v-else class="off"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import generate from "../../../mixins/generate";

    export default {
        name: "KeepAliveOff",
        mixins: [generate],
        mounted() {
            this.play = true;
        }
    }
</script>

<style scoped>
    .on {
        background-color: aliceblue;
    }
</style>