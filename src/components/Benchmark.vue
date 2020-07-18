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
            <div class="row m-0 justify-content-center">
                <slot name="title"/>
            </div>
            <slot v-if="optimized" name="on"/>
            <slot v-else name="off"/>
            <slot/>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Benchmark",
        data() {
            return {
                optimized: false,
            };
        },
    }
</script>

<style>
    .grid {
        margin: 0 auto;
        width: 800px;
    }

    .circle {
        float: left;
        width: 21px;
        height: 21px;
        margin: 2px;
    }
    .on, .off {
        width: 100%;
        height: 100%;
        color: transparent;
        border-radius: 50%;
    }
    .off {
        background-color: #2c3e50;
    }
</style>