<template>
    <Page>
        <template #off>
            <DeferredOff/>
        </template>
        <template #on>
            <DeferredOn/>
        </template>
    </Page>
</template>

<script>
    import DeferredOff from "../components/Benchmarks/Deferred/DeferredOff";
    import DeferredOn from "../components/Benchmarks/Deferred/DeferredOn";

    export default {
        name: "Deferred",
        components: {
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