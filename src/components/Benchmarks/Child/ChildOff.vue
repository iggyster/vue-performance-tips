<template>
    <div class="circle">
        <div v-if="value" class="on">
            {{ heavy() }}
        </div>
        <div v-else class="off">
            {{ heavy() }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChildOff",
        props: ['value'],
        methods: {
            heavy () {
                const n = 100000
                let result = 0
                for (let i = 0; i < n; i++) {
                    result += Math.sqrt(Math.cos(Math.sin(42)))
                }
                return result
            },
        },
    };
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
        background-color: rebeccapurple;
    }
    .off {
        background-color: #2c3e50;
    }
</style>