<template>
    <div class="circle">
        <div v-if="value" class="on">
            <Inner/>
        </div>
        <div v-else class="off">
            <Inner/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChildOn",
        props: ['value'],
        components: {
            Inner: {
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
                render (h) {
                    return h('div', this.heavy())
                },
            },
        },
    };
</script>