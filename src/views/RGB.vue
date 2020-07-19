<template>
    <div>
        <div class="row">
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="switch" v-model="enabled">
                <label class="custom-control-label" for="switch">Enable RGB</label>
            </div>
        </div>
        <div class="row">
            <template v-if="enabled">
                <Circles :count="256" color="red" :play="true"/>
                <Circles :count="256" color="green" :play="true"/>
                <Circles :count="256" color="blue" :play="true"/>
            </template>
            <template v-else>
                <Circles color="white" :play="true"/>
            </template>
        </div>
    </div>
</template>

<script>
    import Circles from '@/components/Circles';

    export default {
        components: {
            Circles,
        },
        data() {
            return {
                enabled: false
            }
        },
    }
</script>