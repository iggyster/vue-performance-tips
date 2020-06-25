<template>
    <Page>
        <template #off>
            <KeepAliveOff/>
        </template>
        <template #on>
            <KeepAliveOn/>
        </template>
    </Page>
</template>

<script>
    import KeepAliveOff from "../components/Benchmarks/KeepAlive/KeepAliveOff";
    import KeepAliveOn from "../components/Benchmarks/KeepAlive/KeepAliveOn";

    export default {
        name: "KeepAlive",
        components: {
            KeepAliveOff,
            KeepAliveOn,
        },
        props: {
            optimized: {
                type: Boolean,
                default: false,
            }
        },
    }
</script>