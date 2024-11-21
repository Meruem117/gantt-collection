<template>
    <div class="gantt" ref="ganttRef"></div>
</template>

<script setup lang="ts">
import { onMounted, nextTick, ref } from 'vue'
import { gantt } from 'dhtmlx-gantt'
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'

onMounted(() => {
    nextTick(() => {
        initGantt()
    })
})

const ganttRef = ref(null)

function initGantt() {
    gantt.init(ganttRef.value!)
    gantt.setSkin('dark')
}
</script>

<style scoped>
.gantt {
    width: 100%;
    height: 100%;
}
</style>
