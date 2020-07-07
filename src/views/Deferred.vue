<template>
    <Page>
        <template #content>
            <div class="row m-0 justify-content-md-center align-items-center">
                <h1>Deferred components</h1>
            </div>
        </template>
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
    }
</script>