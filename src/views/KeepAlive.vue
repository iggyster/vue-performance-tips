<template>
    <Page>
        <template #content>
            <KeepAliveOn v-if="optimized"/>
            <KeepAliveOff v-else/>
        </template>
    </Page>
</template>

<script>
    import Page from "../components/Page";
    import KeepAliveOff from "../components/Benchmarks/KeepAlive/KeepAliveOff";
    import KeepAliveOn from "../components/Benchmarks/KeepAlive/KeepAliveOn";

    export default {
        name: "KeepAlive",
        components: {
            Page,
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