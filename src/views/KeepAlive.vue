<template>
    <Page>
        <template #switches>
            <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button"
                            class="btn btn-secondary"
                            :class="!page ? 'active' : ''"
                            @click="page = false">Prev</button>
                    <button type="button"
                            class="btn btn-secondary"
                            :class="page ? 'active' : ''"
                            @click="page = true">Next</button>
            </div>
        </template>
        <template #content>
            <div class="row m-0 justify-content-md-center align-items-center duplicated-content">
                <h1>Keep-alive</h1>
            </div>
        </template>
        <template #on>
            <keep-alive>
                <router-view/>
            </keep-alive>
        </template>
        <template #off>
            <router-view/>
        </template>
    </Page>
</template>

<script>
    export default {
        name: "KeepAlive",
        mounted() {
            let duplicates = document.getElementsByClassName('duplicated-content');
            if (duplicates.length > 1) {
                duplicates[1].remove();
            }

            duplicates = document.getElementsByClassName('duplicated-switches');
            if (duplicates.length > 1) {
                duplicates[1].remove();
            }
        },
        data() {
            return {
                play: false,
            };
        },
        computed: {
            page: {
                get () {
                    return this.$route.name === 'keep-alive-prev'
                },
                set (value) {
                    if (value) {
                        this.$router.push({ name: 'keep-alive-next' })
                    } else {
                        this.$router.push({ name: 'keep-alive-prev' })
                    }
                },
            },
        },
    }
</script>