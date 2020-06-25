<template>
    <Page>
        <template #off>
            <ChildOff/>
        </template>
        <template #on>
            <ChildOn/>
        </template>
    </Page>
</template>

<script>
    import ChildOff from "../components/Benchmarks/Child/ChildOff";
    import ChildOn from "../components/Benchmarks/Child/ChildOn";

    export default {
        name: "Child",
        components: {
            ChildOff,
            ChildOn,
        },
        props: {
            optimized: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>