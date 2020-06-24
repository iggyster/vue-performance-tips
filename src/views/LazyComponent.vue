<template>
    <Page>
        <template #off>
            <LazyComponentOff/>
        </template>
        <template #on>
            <LazyComponentOn/>
        </template>
    </Page>
</template>

<script>
    import Page from "../components/Page";
    import LazyComponentOff from "../components/Benchmarks/LazyComponents/LazyComponentOff";
    import LazyComponentOn from "../components/Benchmarks/LazyComponents/LazyComponentOn";

    export default {
        name: "LazyComponent",
        components: {
            Page,
            LazyComponentOff,
            LazyComponentOn,
        },
        props: {
            optimized: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>