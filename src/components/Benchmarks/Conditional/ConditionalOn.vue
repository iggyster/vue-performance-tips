<template functional>
    <div class="circle">
        <div v-if="props.value" class="on">
            <Heavy :factor="1000"/>
        </div>
        <div v-else class="off">
            <Heavy :factor="1000"/>
        </div>
    </div>
</template>