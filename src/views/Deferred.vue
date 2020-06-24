<template>
    <Page>
        <template #content>
            <DeferredOn v-if="optimized"/>
            <DeferredOff v-else/>
        </template>
    </Page>
</template>

<script>
    import Page from "../components/Page";
    import DeferredOff from "../components/Benchmarks/Deferred/DeferredOff";
    import DeferredOn from "../components/Benchmarks/Deferred/DeferredOn";

    export default {
        name: "Deferred",
        components: {
            Page,
            DeferredOff,
            DeferredOn,
        },
        props: {
            optimized: {
                type: Boolean,
                default: false,
            }
        },
    }
</script>