<template>
    <div class="circle">
        <div v-if="value" class="on"></div>
        <div v-else class="off"></div>
    </div>
</template>

<script>
    export default {
        name: "FunctionalOff",
        props: {
            value: {
                type: Boolean,
                required: true,
            }
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
        background-color: #42b983;
    }
    .off {
        background-color: #2c3e50;
    }
</style>