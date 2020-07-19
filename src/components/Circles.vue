<template>
    <div class="grid">
        <div v-for="(value, index) of list" :key="index" class="circle">
            <div v-show="value" class="on" :style="onStyles"></div>
            <div v-show="!value" class="off"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Circles",
        props: {
            count: {
                type: Number,
                default: 800,
            },
            color: {
                type: String,
                required: true,
            },
            play: {
                type: Boolean,
                default: false,
            },
        },
        model: {
            prop: 'play',
            event: 'change'
        },
        created() {
            this.generate();
        },
        data() {
            return {
                list: [],
            };
        },
        watch: {
            play(value) {
                if (value) {
                    this.generate();
                }
            }
        },
        computed: {
            onStyles() {
                return {
                    backgroundColor: this.color,
                }
            }
        },
        methods: {
            generate() {
                this.list = [];
                for (let i = 0; i < this.count; i++) {
                    this.list.push(Math.random() < 0.5)
                }

                this.play && requestAnimationFrame(this.generate);
            },
        },
    }
</script>