<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <div class="countdown">
          <!-- Hours section -->
          <div class="bloc-time hours">
            <span class="count-title">Hours</span>
            <div class="format">
              <div class="figure hours hours-1">{{ formattedHours[0] }}</div>
              <div class="figure hours hours-2">{{ formattedHours[1] }}</div>
            </div>
          </div>
          <div class="font-weight-medium text-h4 mt-4">:</div>
          <!-- Minutes section -->
          <div class="bloc-time min">
            <span class="count-title">Minutes</span>
            <div class="format">
              <div class="figure min min-1">{{ formattedMinutes[0] }}</div>
              <div class="figure min min-2">{{ formattedMinutes[1] }}</div>
            </div>
          </div>
          <div class="font-weight-medium text-h4 mt-4">:</div>
          <!-- Seconds section -->
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

<script>
export default {
  name: 'CountdownTimer',
  data() {
    return {
      // Target date for the countdown timer
      targetDate: new Date('2023-11-26T10:00:00').getTime(), // 26th November 2023, 10:00:00 AM Date of Event
      timer: null, // Timer for updating the countdown
      timeRemaining: null, // Remaining time in seconds
      flipped: false, // Used to apply a flipping effect
    };
  },
  created() {
    // Start the countdown when the component is created
    this.startCountdown();
  },
  beforeDestroy() {
    // Clear the timer when the component is destroyed to prevent memory leaks
    clearInterval(this.timer);
  },
  computed: {
    // Computed properties for formatted hours, minutes, and seconds
    formattedHours() {
      return this.formatValue(Math.floor((this.timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    },
    formattedMinutes() {
      return this.formatValue(Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
    },
    formattedSeconds() {
      return this.formatValue(Math.floor((this.timeRemaining % (1000 * 60)) / 1000));
    },
  },
  methods: {
    // Helper method to format a value as a two-digit string
    formatValue(value) {
      return value.toString().padStart(2, '0');
    },
    // Start the countdown timer
    startCountdown() {
      this.timer = setInterval(() => {
        const now = new Date().getTime();
        this.timeRemaining = this.targetDate - now;

        if (this.timeRemaining < 0) {
          clearInterval(this.timer);
          this.timeRemaining = 0;
        } else {
          this.flipped = !this.flipped; // Toggle the flipped state for the flipping effect
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
.countdown {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2rem;
}

.format {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  perspective: 1000px;
}

.bloc-time {
  text-align: center;
  margin: 0 15px;
}

.count-title {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.figure {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 5px;
  font-size: 1.2em;
  line-height: 60px;
  font-weight: 700;
  color: #34a853;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2), inset 2px 4px 0 0 rgba(255, 255, 255, 0.08);
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.top, .top-back {
  height: 50%;
  overflow: hidden;
  backface-visibility: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: absolute;
  width: 100%;
}

.top {
  z-index: 3;
  background-color: #f7f7f7;
  transform-origin: 50% 100%;
  transform: rotateX(0deg);
}

.bottom {
  z-index: 1;
  transform-origin: 50% 0;
  transform: rotateX(180deg);
}

span {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  color: #fff !important;
  transform: rotateX(0deg);
}

/* Add a flipped class to apply the flipping effect */
.flipped .figure {
  transform: rotateX(180deg);
}
</style>