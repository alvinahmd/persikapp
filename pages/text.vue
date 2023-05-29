<template>
  <vue-countdown v-slot="{ days, hours, minutes, seconds }" :time="2 * 24 * 60 * 60 * 1000">
    Time Remaining：{{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
  </vue-countdown>
</template>
