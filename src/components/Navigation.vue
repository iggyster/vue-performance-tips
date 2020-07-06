<template functional>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">
            <img alt="Vue logo" src="../assets/logo.png" width="20px" height="20px">
        </router-link>
        <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav justify-content-end">
                <router-link to="/show" v-slot="{ href, navigate, isActive }">
                    <li :class="`nav-item${isActive ? ' active' : ''}`">
                        <a class="nav-link" :href="href" @click="navigate">v-show/v-if</a>
                    </li>
                </router-link>
                <router-link to="/functional" v-slot="{ href, navigate, isActive }">
                    <li :class="`nav-item${isActive ? ' active' : ''}`">
                        <a class="nav-link" :href="href" @click="navigate">Functional</a>
                    </li>
                </router-link>
                <router-link :to="{name: 'keep-alive-prev'}" v-slot="{ href, navigate, isActive }">
                    <li :class="`nav-item${isActive ? ' active' : ''}`">
                        <a class="nav-link" :href="href" @click="navigate">Keep-alive</a>
                    </li>
                </router-link>
                <router-link to="/child" v-slot="{ href, navigate, isActive }">
                    <li :class="`nav-item${isActive ? ' active' : ''}`">
                        <a class="nav-link" :href="href" @click="navigate">Child</a>
                    </li>
                </router-link>
                <router-link to="/local-var" v-slot="{ href, navigate, isActive }">
                    <li :class="`nav-item${isActive ? ' active' : ''}`">
                        <a class="nav-link" :href="href" @click="navigate">Local var</a>
                    </li>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>