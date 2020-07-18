<template>
    <Benchmark>
        <template #title>
            <h1>Child component</h1>
        </template>
        <template #switches>
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="play" v-model="play">
                <label class="custom-control-label" for="play">Play</label>
            </div>
        </template>
        <template #off>
            <div class="grid">
                <ChildOff v-for="(n,index) of list" :key="index" :value="n"/>
            </div>
        </template>
        <template #on>
            <div class="grid">
                <ChildOn v-for="(n,index) of list" :key="index" :value="n"/>
            </div>
        </template>
    </Benchmark>
</template>

<script>
    import generate from "../mixins/generate";
    import ChildOff from "../components/Benchmarks/Child/ChildOff";
    import ChildOn from "../components/Benchmarks/Child/ChildOn";

    export default {
        name: "Child",
        mixins: [generate],
        components: {
            ChildOff,
            ChildOn,
        },
    }
</script>

<style>
    .on {
        background-color: rebeccapurple;
    }
</style>