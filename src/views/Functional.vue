<template>
    <Benchmark>
        <template #title>
            <h1>Functional component</h1>
        </template>
        <template #switches>
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="play" v-model="play">
                <label class="custom-control-label" for="play">Play</label>
            </div>
        </template>
        <template #off>
            <div class="grid">
                <FunctionalOff v-for="(n,index) of list" :key="index" :value="n"/>
            </div>
        </template>
        <template #on>
            <div class="grid">
                <FunctionalOn v-for="(n,index) of list" :key="index" :value="n"/>
            </div>
        </template>
    </Benchmark>
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
    }
</script>

<style>
    .on {
        background-color: #42b983;
    }
</style>