<template>
    <Page>
        <template #content>
            <div class="row m-0 justify-content-md-center align-items-center">
                <img src="../assets/logo.png" alt="Vue logo">
            </div>
        </template>
    </Page>
</template>

<script>
    import Page from "../components/Page"

    export default {
        name: "Main",
        components: {
            Page,
        }
    }
</script>