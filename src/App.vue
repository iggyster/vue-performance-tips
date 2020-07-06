<template>
    <div id="app">
        <header>
            <Navigation/>
        </header>
        <router-view/>
    </div>
</template>

<script>
    import Navigation from "./components/Navigation";

    export default {
        name: "App",
        components: {
            Navigation,
        },
    };
</script>