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
    .on {
        background-color: black;
    }
</style>