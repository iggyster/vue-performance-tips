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