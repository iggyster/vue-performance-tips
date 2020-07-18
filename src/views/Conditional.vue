<template>
    <Benchmark>
        <template #title>
            <h1>Conditional rendering</h1>
        </template>
        <template #switches>
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="play" v-model="play">
                <label class="custom-control-label" for="play">Play</label>
            </div>
        </template>
        <template #off>
            <div class="grid">
                <ConditionalOff v-for="(n,index) of list" :key="index" :value="n"/>
            </div>
        </template>
        <template #on>
            <div class="grid">
                <ConditionalOn v-for="(n,index) of list" :key="index" :value="n"/>
            </div>
        </template>
    </Benchmark>
</template>

<script>
    import ConditionalOff from "../components/Benchmarks/Conditional/ConditionalOff";
    import ConditionalOn from "../components/Benchmarks/Conditional/ConditionalOn";
    import generate from "../mixins/generate";

    export default {
        name: "Conditional",
        mixins: [generate],
        components: {
            ConditionalOff,
            ConditionalOn,
        },
    }
</script>

<style>
    .on {
        background-color: dodgerblue;
    }
</style>