<template>
    <div class="gantt" id="gantt"></div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import Gantt from 'frappe-gantt'

onMounted(() => {
    nextTick(() => {
        initGantt()
    })
})

function initGantt() {
    const tasks = [
        {
            id: 'Task 1',
            name: 'Redesign website',
            start: '2016-12-28',
            end: '2016-12-31',
            progress: 20,
            dependencies: 'Task 2, Task 3'
        }
    ]
    const gantt = new Gantt("#gantt", tasks)
}
</script>

<style scoped>
.gantt {
    width: 100%;
    height: 100%;
}
</style>
