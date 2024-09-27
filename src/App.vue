<template>
    <n-config-provider :theme="darkTheme">
        <n-layout embedded position="absolute" content-style="padding: 24px;">
            <n-tabs type="line" animated>
                <n-tab-pane name="frappe-gantt" tab="frappe-gantt">
                    frappe-gantt
                </n-tab-pane>
                <n-tab-pane name="dhtmlx-gantt" tab="dhtmlx-gantt">
                    dhtmlx-gantt
                </n-tab-pane>
                <n-tab-pane name="gantt-elastic" tab="gantt-elastic">
                    gantt-elastic
                </n-tab-pane>
            </n-tabs>
        </n-layout>
    </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
</script>

<style scoped></style>
