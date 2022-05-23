<template>
  <div class="grid grid-cols-2 md:grid-cols-4 w-full gap-4">
    <div>
      <div class="flex justify-center">
        <div class="text-4xl font-bold">
          {{ $moment(countDown).format("D") }}
        </div>
      </div>
      <div class="flex justify-center">
        <div class="text-xl">Hari</div>
      </div>
    </div>

    <div>
      <div class="flex justify-center">
        <div class="text-4xl font-bold">
          {{ $moment(countDown).format("H") }}
        </div>
      </div>
      <div class="flex justify-center">
        <div class="text-xl">Jam</div>
      </div>
    </div>

    <div>
      <div class="flex justify-center">
        <div class="text-4xl font-bold">
          {{ $moment(countDown).format("m") }}
        </div>
      </div>
      <div class="flex justify-center">
        <div class="text-xl">Menit</div>
      </div>
    </div>

    <div>
      <div class="flex justify-center">
        <div class="text-4xl font-bold">
          {{ $moment(countDown).format("s") }}
        </div>
      </div>
      <div class="flex justify-center">
        <div class="text-xl">Detik</div>
      </div>
    </div>
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
