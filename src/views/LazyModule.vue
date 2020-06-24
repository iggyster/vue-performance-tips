<template>
    <Page>
        <template #content>
            <LazyModuleOn v-if="optimized"/>
            <LazyModuleOff v-else/>
        </template>
    </Page>
</template>

<script>
    import Page from "../components/Page";
    import LazyModuleOff from "../components/Benchmarks/LazyModules/LazyModuleOff";
    import LazyModuleOn from "../components/Benchmarks/LazyModules/LazyModuleOn";

    export default {
        name: "LazyModule",
        components: {
            Page,
            LazyModuleOff,
            LazyModuleOn,
        },
        props: {
            optimized: {
                type: Boolean,
                default: true,
            },
        },
    }
</script>