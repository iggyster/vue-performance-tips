<template functional>
    <div class="circle">
        <div v-show="props.value" class="on">
            <Heavy :factor="1000"/>
        </div>
        <div v-show="!props.value" class="off">
            <Heavy :factor="1000"/>
        </div>
    </div>
</template>