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
            this.count = 256;
            this.play = true;
        }
    }
</script>