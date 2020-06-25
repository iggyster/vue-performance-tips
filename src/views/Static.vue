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
    import StaticOff from "../components/Benchmarks/Static/StaticOff";
    import StaticOn from "../components/Benchmarks/Static/StaticOn";

    export default {
        name: "Static",
        components: {
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