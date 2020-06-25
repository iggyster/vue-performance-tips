<template>
    <div class="container-fluid p-0">
        <header>
            <Navigation/>
        </header>
        <main>
            <div class="row justify-content-end mr-0 ml-0 mt-2">
                <div class="col-1">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="optimized" v-model="optimized">
                        <label class="custom-control-label" for="optimized">Optimized</label>
                    </div>
                    <slot name="switches"></slot>
                </div>
            </div>
            <slot name="content"></slot>
            <slot v-if="optimized" name="on"></slot>
            <slot v-else name="off"></slot>
        </main>
    </div>
</template>

<script>
    import Navigation from "./Navigation"

    export default {
        name: "Page",
        components: {
            Navigation,
        },
        data() {
            return {
                optimized: false,
                play: false,
            };
        },
    }
</script>