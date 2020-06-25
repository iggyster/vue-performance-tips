<template>
    <Page>
        <template #off>
            <LazyModuleOff/>
        </template>
        <template #on>
            <LazyModuleOn/>
        </template>
    </Page>
</template>

<script>
    import LazyModuleOff from "../components/Benchmarks/LazyModules/LazyModuleOff";
    import LazyModuleOn from "../components/Benchmarks/LazyModules/LazyModuleOn";

    export default {
        name: "LazyModule",
        components: {
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