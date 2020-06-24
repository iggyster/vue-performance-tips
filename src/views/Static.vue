<template>
    <Page>
        <template #off>
            <StaticOff/>
        </template>
        <template #on>
            <StaticOn/>
        </template>
    </Page>
</template>

<script>
    import Page from "../components/Page";
    import StaticOff from "../components/Benchmarks/Static/StaticOff";
    import StaticOn from "../components/Benchmarks/Static/StaticOn";

    export default {
        name: "Static",
        components: {
            Page,
            StaticOff,
            StaticOn,
        },
        props: {
            optimized: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>