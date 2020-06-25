<template functional>
    <div class="circle">
        <div v-if="props.value" class="on"></div>
        <div v-else class="off"></div>
    </div>
</template>

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
        background-color: white;
    }
</style>