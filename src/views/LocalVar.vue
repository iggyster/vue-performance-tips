<template>
    <Benchmark>
        <template #title>
            <h1>Local variable</h1>
        </template>
        <template #switches>
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="play" v-model="play">
                <label class="custom-control-label" for="play">Play</label>
            </div>
        </template>
        <template #off>
            <div class="grid">
                <LocalVarOff v-for="(n,index) of list" :key="index" :value="n"/>
            </div>
        </template>
        <template #on>
            <div class="grid">
                <LocalVarOn v-for="(n,index) of list" :key="index" :value="n"/>
            </div>
        </template>
    </Benchmark>
</template>

<script>
    import generate from "../mixins/generate";
    import LocalVarOff from "../components/Benchmarks/LocalVar/LocalVarOff";
    import LocalVarOn from "../components/Benchmarks/LocalVar/LocalVarOn";

    export default {
        name: "LocalVar",
        mixins: [generate],
        components: {
            LocalVarOff,
            LocalVarOn,
        },
    }
</script>

<style>
    .on {
        background-color: burlywood;
    }
</style>