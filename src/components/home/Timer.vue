<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <div class="countdown">
          <div class="bloc-time hours">
            <span class="count-title">Hours</span>
            <div class="format">
              <div class="figure hours hours-1">{{ formattedHours[0] }}</div>
              <div class="figure hours hours-2">{{ formattedHours[1] }}</div>
            </div>
          </div>
          <div class="font-weight-medium text-h4 mt-4">:</div>
          <div class="bloc-time min">
            <span class="count-title">Minutes</span>
            <div class="format">
              <div class="figure min min-1">{{ formattedMinutes[0] }}</div>
              <div class="figure min min-2">{{ formattedMinutes[1] }}</div>
            </div>
          </div>
          <div class="font-weight-medium text-h4 mt-4">:</div>
          <div class="bloc-time sec">
            <span class="count-title">Seconds</span>
            <div class="format">
              <div class="figure sec sec-1">{{ formattedSeconds[0] }}</div>
              <div class="figure sec sec-2">{{ formattedSeconds[1] }}</div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
