<template>
    <Benchmark>
        <template #title>
            <h1>Deferred components</h1>
        </template>
        <template #switches>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button"
                        class="btn btn-secondary"
                        :class="!page ? 'active' : ''"
                        @click="page = false">Prev</button>
                <button type="button"
                        class="btn btn-secondary"
                        :class="page ? 'active' : ''"
                        @click="page = true">Next</button>
            </div>
        </template>
        <template #off>
            <DeferredOff  v-if="page"/>
            <Light v-else color="yellow"/>
        </template>
        <template #on>
            <DeferredOn v-if="page"/>
            <Light v-else color="yellow"/>
        </template>
    </Benchmark>
</template>

<script>
    import DeferredOff from "../components/Benchmarks/Deferred/DeferredOff";
    import DeferredOn from "../components/Benchmarks/Deferred/DeferredOn";
    import Light from "../components/Light";

    export default {
        name: "Deferred",
        components: {
            DeferredOff,
            DeferredOn,
            Light,
        },
        data () {
            return {
                page: false
            }
        },
    }
</script>

<style>
    .grid {
        height: 200px;
    }
    .on {
        background-color: tomato;
    }
</style>