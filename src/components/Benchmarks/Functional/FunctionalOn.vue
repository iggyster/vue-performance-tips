<template functional>
    <div class="circle">
        <div v-if="props.value" class="on"></div>
        <div v-else class="off"></div>
        <Heavy :factor="10000"/>
    </div>
</template>