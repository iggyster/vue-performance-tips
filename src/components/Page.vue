<template>
    <div class="container-fluid p-0">
        <main>
            <div class="row justify-content-end mr-0 ml-0 mt-2 duplicated-switches">
                <div class="col-2">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="optimized" v-model="optimized">
                        <label class="custom-control-label" for="optimized">Optimized</label>
                    </div>
                    <slot name="switches"/>
                </div>
            </div>
            <slot name="content"/>
            <slot v-if="optimized" name="on"/>
            <slot v-else name="off"/>
            <slot/>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Page",
        data() {
            return {
                optimized: false,
            };
        },
    }
</script>