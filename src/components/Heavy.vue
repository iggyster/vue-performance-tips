<template>
    <div class="heavy" :style="`width: ${size}; height: ${size}`">
        <pre>{{ heavy() }}</pre>
    </div>
</template>

<script>
    export default {
        name: "Heavy",
        props: {
            factor: {
                type: Number,
                default: 100000,
            },
        },
        computed: {
            size() {
                return 20 + this.factor / 9999999 * 40;
            }
        },
        methods: {
            heavy() {
                const n = this.factor;
                let result = 0;
                for (let i = 0; i < n; i++) {
                    result += Math.tan(Math.sqrt(Math.cos(Math.sin(Math.random() * 100))))
                }

                return result;
            }
        },
    }
</script>

<style scoped>
    .heavy {
        border: black 5px solid;
        border-radius: 50%;
        opacity: 0;
    }

    pre {
        margin: 0;
        opacity: 0;
    }
</style>