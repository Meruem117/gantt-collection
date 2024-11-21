<template>
    <div class="gantt" id="ganttSchedule"></div>
</template>

<script setup lang="ts">
import GSTC, { Config } from 'gantt-schedule-timeline-calendar'
import { GSTC_LICENSE_KEY } from '../constant'

const config: Config = {
    licenseKey: GSTC_LICENSE_KEY
}

const state = GSTC.api.stateFromConfig(config)

const element = document.getElementById('ganttSchedule')!

const gstc = GSTC({
    element,
    state
})
</script>

<style scoped>
.gantt {
    width: 100%;
    height: 100%;
}
</style>
