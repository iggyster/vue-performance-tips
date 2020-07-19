<template>
    <div id="app" class="container">
        <ul class="nav">
            <router-link :to="{name: 'main'}" v-slot="{ href, navigate, isActive }">
                <li class="nav-item">
                    <a class="nav-link" :class="isActive ? 'active' : ''" :href="href" @click="navigate">Main</a>
                </li>
            </router-link>
            <router-link :to="{name: 'rgb'}" v-slot="{ href, navigate, isActive }">
                <li class="nav-item">
                    <a class="nav-link" :class="isActive ? 'active' : ''" :href="href" @click="navigate">RGB</a>
                </li>
            </router-link>
        </ul>
        <router-view/>
    </div>
</template>