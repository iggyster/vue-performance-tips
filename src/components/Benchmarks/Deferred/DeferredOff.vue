<template>
    <div>
        <div class="grid">
            <div class="circle" v-for="(n,index) of list" :key="index">
                <div v-if="n" class="on"></div>
                <div v-else class="off"></div>
                <Heavy :factor="1000"/>
            </div>
        </div>
        <div class="grid">
            <div class="circle" v-for="(n,index) of list" :key="index">
                <div v-if="n" class="on"></div>
                <div v-else class="off"></div>
                <Heavy :factor="5000"/>
            </div>
        </div>
        <div class="grid">
            <div class="circle" v-for="(n,index) of list" :key="index">
                <div v-if="n" class="on"></div>
                <div v-else class="off"></div>
                <Heavy :factor="10000"/>
            </div>
        </div>
    </div>
</template>

<script>
    import generate from "../../../mixins/generate";

    export default {
        name: "DeferredOff",
        mixins: [generate],
        mounted() {
            this.count = 256;
            this.play = true;
        }
    }
</script>