<template>
    <div class="container-fluid p-0">
        <header>
            <Navigation/>
        </header>
        <main>
            <slot name="content"></slot>
        </main>
    </div>
</template>

<script>
    import Navigation from "./Navigation"

    export default {
        name: "Page",
        components: {
            Navigation,
        }
    }
</script>