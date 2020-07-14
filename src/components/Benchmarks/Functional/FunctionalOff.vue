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