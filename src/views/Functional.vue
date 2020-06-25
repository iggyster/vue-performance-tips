<template>
    <Page>
        <template #content>
            <div class="row m-0 justify-content-md-center align-items-center">
                <h1>Functional component</h1>
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
                <!-- eslint-disable -->
                <FunctionalOff v-for="n of list" :key="uid++" :value="n"/>
            </div>
        </template>
        <template #on>
            <div class="grid">
                <FunctionalOn v-for="n of list" :key="uid++" :value="n"/>
                <!-- eslint-enable -->
            </div>
        </template>
    </Page>
</template>

<script>
    import Page from "../components/Page";
    import FunctionalOff from "../components/Benchmarks/Functional/FunctionalOff";
    import FunctionalOn from "../components/Benchmarks/Functional/FunctionalOn";

    export default {
        name: "Functional",
        components: {
            Page,
            FunctionalOff,
            FunctionalOn,
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
            },
        },
        created () {
            this.count = 800;
            this.uid = 0;
            this.generate();
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

<style>
    .grid {
        margin: 24px auto;
        max-width: 800px;
    }
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