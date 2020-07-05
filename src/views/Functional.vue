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
    import FunctionalOff from "../components/Benchmarks/Functional/FunctionalOff";
    import FunctionalOn from "../components/Benchmarks/Functional/FunctionalOn";
    import generate from "../mixins/generate";

    export default {
        name: "Functional",
        mixins: [generate],
        components: {
            FunctionalOff,
            FunctionalOn,
        },
        created () {
            this.count = 800;
            this.uid = 0;
            this.generate();
        },
    }
</script>

<style scoped>
    .grid {
        margin: 24px auto;
        max-width: 800px;
    }
</style>