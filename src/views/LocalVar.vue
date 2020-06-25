<template>
    <Page>
        <template #off>
            <LocalVarOff/>
        </template>
        <template #on>
            <LocalVarOn/>
        </template>
    </Page>
</template>

<script>
    import LocalVarOff from "../components/Benchmarks/LocalVar/LocalVarOff";
    import LocalVarOn from "../components/Benchmarks/LocalVar/LocalVarOn";

    export default {
        name: "LocalVar",
        components: {
            LocalVarOff,
            LocalVarOn,
        },
        props: {
            optimized: {
                type: Boolean,
                default: false,
            }
        },
    }
</script>