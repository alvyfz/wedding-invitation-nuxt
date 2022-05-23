<template>
  <div class="">
    <v-chip class="pa-3" small label color="#8950e6" outlined>
      <b>{{ $moment(countDown).format("D") }}</b
      >d:<b>{{ $moment(countDown).format("H") }}</b
      >h:<b>{{ $moment(countDown).format("m") }}</b
      >m:<b>{{ $moment(countDown).format("s") }}</b
      >s
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    expiry: {
      type: String,
      required: true,
      default: () => {
        return 0;
      },
    },
  },
  data() {
    return {
      countDown: 0,
    };
  },
  mounted() {
    const now = this.$moment(new Date());
    const end = this.$moment(this.expiry);
    const duration = this.$moment.duration(end.diff(now));
    this.countDown = duration.asMilliseconds();
    this.countDownTimer();
  },
  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1000;
          this.countDownTimer();
        }, 1000);
      }
    },
  },
};
</script>

<style></style>
