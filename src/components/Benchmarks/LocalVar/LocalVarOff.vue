<template>
    <div class="circle">
        <div v-if="value" class="on">
            {{ result }}
        </div>
        <div v-else class="off">
            {{ result }}
        </div>
    </div>
</template>

<script>
    function heavy(factor) {
        return Math.sqrt(Math.cos(Math.sin(factor))) + factor + factor * factor + factor * 2 + factor * 3;
    }

    export default {
        name: "LocalVarOff",
        props: ['value'],
        computed: {
            factor() {
                return 1000
            },
            result () {
                let result = this.value
                for (let i = 0; i < 1000; i++) {
                    result += heavy(this.factor);
                }
                return result
            },
        },
    }
</script>

<style scoped>
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
        background-color: burlywood;
    }
    .off {
        background-color: #2c3e50;
    }
</style>