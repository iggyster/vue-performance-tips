<template>
    <Page>
        <template #off>
            <ShowOff/>
        </template>
        <template #on>
            <ShowOn/>
        </template>
    </Page>
</template>

<script>
    import Page from "../components/Page";
    import ShowOff from "../components/Benchmarks/Show/ShowOff";
    import ShowOn from "../components/Benchmarks/Show/ShowOn";

    export default {
        name: "Show",
        components: {
            Page,
            ShowOff,
            ShowOn,
        },
        props: {
            optimized: {
                type: Boolean,
                default: false,
            }
        },
    }
</script>