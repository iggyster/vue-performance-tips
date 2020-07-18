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
        name: "LocalVarOn",
        props: ['value'],
        computed: {
            factor() {
                return 1000
            },
            result ({factor, value}) {
                let result = value
                for (let i = 0; i < 1000; i++) {
                    result += heavy(factor);
                }
                return result
            },
        },
    }
</script>