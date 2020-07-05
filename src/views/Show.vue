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
    import generate from "../mixins/generate";

    export default {
        name: "Show",
        mixins: [generate],
        components: {
            ShowOff,
            ShowOn,
        },
    }
</script>

<style scoped>
    .grid {
        margin: 24px auto;
        max-width: 800px;
    }
</style>