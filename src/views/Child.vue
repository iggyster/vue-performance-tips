<template>
    <Page>
        <template #content>
            <ChildOn v-if="optimized"/>
            <ChildOff v-else/>
        </template>
    </Page>
</template>

<script>
    import Page from "../components/Page";
    import ChildOff from "../components/Benchmarks/Child/ChildOff";
    import ChildOn from "../components/Benchmarks/Child/ChildOn";

    export default {
        name: "Child",
        components: {
            Page,
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

<style scoped>

</style>