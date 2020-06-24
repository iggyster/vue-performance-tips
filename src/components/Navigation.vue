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
                <li class="nav-item">
                    <router-link to="/functional" class="nav-link">Functional</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/show" class="nav-link">Show</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/static" class="nav-link">Static</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/keep-alive" class="nav-link">Keep-alive</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/child" class="nav-link">Child</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/local-var" class="nav-link">Local var</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>