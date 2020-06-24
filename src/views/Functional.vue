<template>
    <Page>
        <template #off>
            <FunctionalOff/>
        </template>
        <template #on>
            <FunctionalOn/>
        </template>
    </Page>
</template>

<script>
    import Page from "../components/Page";
    import FunctionalOff from "../components/Benchmarks/Functional/FunctionalOff";
    import FunctionalOn from "../components/Benchmarks/Functional/FunctionalOn";

    export default {
        name: "Functional",
        components: {
            Page,
            FunctionalOff,
            FunctionalOn,
        },
        props: {
            optimized: {
                type: Boolean,
                default: true,
            }
        }
    }
</script>