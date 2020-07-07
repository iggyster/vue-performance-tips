<template>
    <div>
        <div class="grid">
            <div class="circle" v-for="(n,index) of list" :key="index">
                <div v-if="n" class="on"></div>
                <div v-else class="off"></div>
                <Heavy :factor="1000" v-if="defer(2)"/>
            </div>
        </div>
        <div class="grid">
            <div class="circle" v-for="(n,index) of list" :key="index">
                <div v-if="n" class="on"></div>
                <div v-else class="off"></div>
                <Heavy :factor="5000" v-if="defer(3)"/>
            </div>
        </div>
        <div class="grid">
            <div class="circle" v-for="(n,index) of list" :key="index">
                <div v-if="n" class="on"></div>
                <div v-else class="off"></div>
                <Heavy :factor="10000" v-if="defer(4)"/>
            </div>
        </div>
    </div>
</template>

<script>
    import generate from "../../../mixins/generate";
    import Defer from '../../../mixins/defer';

    export default {
        name: "DeferredOn",
        mixins: [
            generate,
            Defer(),
        ],
        mounted() {
            this.count = 162;
            this.play = true;
        }
    }
</script>

<style scoped>
    .grid {
        width: 400px;
        height: 200px;
        margin: 10px auto;
    }
    .circle {
         float: left;
         width: 18px;
         height: 18px;
         margin: 2px;
     }
    .on, .off {
        width: 100%;
        height: 100%;
        color: transparent;
        border-radius: 50%;
    }
    .on {
        background-color: tomato;
    }
    .off {
        background-color: #2c3e50;
    }
</style>