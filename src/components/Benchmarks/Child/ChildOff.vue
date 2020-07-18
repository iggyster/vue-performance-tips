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
                const n = 100000;
                let result = 0;
                for (let i = 0; i < n; i++) {
                    result += Math.sqrt(Math.cos(Math.sin(42)))
                }
                return result
            },
        },
    };
</script>