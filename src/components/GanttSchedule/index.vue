<template>
    <div class="gantt gstc--dark" id="gstc"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import GSTC from 'gantt-schedule-timeline-calendar'
import type { Config } from 'gantt-schedule-timeline-calendar'
import 'gantt-schedule-timeline-calendar/dist/style.css'
import { GSTC_LICENSE_KEY } from '../../constant'
import { rowsFromDB, columnsFromDB, itemsFromDB } from './index'

const config: Config = {
    licenseKey: GSTC_LICENSE_KEY,
    list: {
        columns: {
            data: GSTC.api.fromArray(columnsFromDB),
        },
        rows: GSTC.api.fromArray(rowsFromDB),
    },
    chart: {
        items: GSTC.api.fromArray(itemsFromDB),
    },
}

const state = GSTC.api.stateFromConfig(config)

onMounted(() => {
    const element = document.getElementById('gstc')!
    const gstc = GSTC({
        element,
        state
    })
})
</script>

<style scoped>
.gantt {
    width: 100%;
    height: 100%;
}
</style>
