<template>
    <Page>
        <template #content>
            <div class="row m-0 justify-content-center">
                <h1>Show VS If</h1>
            </div>
        </template>
        <template #switches>
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="play" v-model="play">
                <label class="custom-control-label" for="play">Play</label>
            </div>
        </template>
        <template #off>
            <div class="grid">
                <ShowOff v-for="(n,index) of list" :key="index" :value="n"/>
            </div>
        </template>
        <template #on>
            <div class="grid">
                <ShowOn v-for="(n,index) of list" :key="index" :value="n"/>
            </div>
        </template>
    </Page>
</template>

<script>
    import ShowOff from "../components/Benchmarks/Show/ShowOff";
    import ShowOn from "../components/Benchmarks/Show/ShowOn";

    export default {
        name: "Show",
        components: {
            ShowOff,
            ShowOn,
        },
        created() {
            this.count = 200;
            this.generate();
        },
        data() {
            return {
                play: false,
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
        methods: {
            generate() {
                const data = [];
                for (let i = 0; i < this.count; i++) {
                    data.push(Math.random() < 0.5)
                }

                this.list = data;
                this.play && requestAnimationFrame(this.generate);
            },
        },
    }
</script>

<style scoped>
    .grid {
        margin: 24px auto;
        max-width: 200px;
    }

    .heavy {
        border: none;
        box-shadow: 0 0 5px black;
        opacity: .5;
        margin: 0;
        width: 100% !important;
        height: 100% !important;
    }
</style>