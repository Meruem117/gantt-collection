<template>
    <n-config-provider :theme="darkTheme">
        <n-layout embedded position="absolute" content-style="padding: 24px;">
            <n-tabs type="line" animated>
                <!-- <n-tab-pane name="frappe-gantt" tab="frappe-gantt" display-directive="if">
                    <n-card class="gantt-card">
                        <frappe-gantt />
                    </n-card>
                </n-tab-pane> -->
                <n-tab-pane name="dhtmlx-gantt" tab="dhtmlx-gantt" display-directive="if">
                    <n-card class="gantt-card">
                        <dhtmlx-gantt />
                    </n-card>
                </n-tab-pane>
                <n-tab-pane name="gantt-schedule" tab="gantt-schedule" display-directive="if">
                    <n-card class="gantt-card">
                        <gantt-schedule />
                    </n-card>
                </n-tab-pane>
            </n-tabs>
        </n-layout>
    </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
// import FrappeGantt from './components/FrappeGantt.vue'
import DhtmlxGantt from './components/DhtmlxGantt.vue'
import GanttSchedule from './components/GanttSchedule.vue'
</script>

<style scoped>
.gantt-card {
    position: relative;
    width: 100%;
    height: calc(100vh - 150px);
    margin-top: 30px;
    box-sizing: border-box;
    overflow: hidden;
}
</style>
