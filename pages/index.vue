<template>
  <!-- <Tutorial /> -->

  <div>
    <!-- <embed
      name="backSong"
      src="../static/audio/backSong.mp3"
      loop="true"
      hidden="true"
      autostart="true"
    /> -->
    <ModalInvitation v-if="stateModal" />

    <div v-else>
      <BottomNavigation />
      <div data-aos="fade-up" data-aos-duration="1000" class="mb-20">
        <section
          id="intro"
          class="grid grid-cols-1 lg:grid-cols-3 h-screen"
        >
          <div class="col-span-2">
            <img
              class="h-full object-cover"
              src="https://images.unsplash.com/flagged/photo-1566755395267-86735b23d097?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
              alt=""
            />
          </div>
          <div
            class="flex flex-col justify-center text-center bg-gray-900 text-white min-h-[40rem] py-20"
          >
            <h4>Pernikahan</h4>
            <h2 class="text-5xl font-handwriting pt-4 pb-4">
              Alvy & Lin
            </h2>
            <h3>Minggu, 29 Maret 2027</h3>
          </div>
        </section>
        <section id="wedding " class="text-center">
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            class="text-4xl font-handwriting pt-6 text-gray-900"
          >
            Kedua Mempelai
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="flex justify-center">
              <div
                class="mt-10"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <div>
                  <img
                    class="rounded-full border-2 border-gray-800 object-cover w-56 h-56 text-center"
                    src="https://images.unsplash.com/photo-1426523038054-a260f3ef5bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=500"
                    alt=""
                  />
                </div>
                <h1
                  class="text-4xl text-gray-900 font-bold pt-10 w-56"
                >
                  Alvy Fauzi
                </h1>
                <h3 class="font-medium text-gray-400 w-56">
                  Putra dari bapak Ronaldo & Ibu Lauren
                </h3>
              </div>
            </div>
            <div class="flex justify-center">
              <div
                class="mt-10"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
              >
                <div>
                  <img
                    class="rounded-full border-2 border-gray-800 object-cover w-56 h-56 text-center"
                    src="https://images.unsplash.com/photo-1426523038054-a260f3ef5bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=500"
                    alt=""
                  />
                </div>
                <h1
                  class="text-4xl text-gray-900 font-bold pt-10 w-56"
                >
                  Jennifer Lin
                </h1>
                <h3 class="font-medium text-gray-400 w-56">
                  Putra dari bapak Lin & Ibu Maria
                </h3>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            class="pt-14"
          >
            <p
              class="text-center px-2 lg:px-10 text-xs text-gray-500"
            >
              “Jika memang kami berjodoh, maka pertemukan dan
              satukanlah kami dengan bimbingan-MU. Limpahkanlah kami
              rasa kasih yang engkau jadikan sebuah pengikat rindu
              Rasulullah dan Siti Khadijah Al-Kubra , air mata yang
              menjadi penanda kasih sayang Ali dan Fatimah Az Zahra”.
            </p>
            <p
              class="text-center px-2 lg:px-10 mt-8 text-xs text-gray-500"
            >
              “Ya Allah, mudahkanlah urusan kami dan berikan kami
              petunjuk dalam setiap langkah yang akan kami ambil.
              Mudahkanlah urusan kami dan berilah kami rizki serta
              anugerah-Mu yang nantinya bisa mengantarkan kami pada
              cita-cita dunia dan akhirat Mu ya Allah”.
            </p>
          </div>
        </section>
        <section id="countdown" class="mt-20">
          <div class="flex justify-center">
            <h2
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              class="font-handwriting text-5xl"
            >
              Menghitung hari
            </h2>
            <TimeoutCard :expiry="countdown" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import aosMixin from "~/mixins/aos";

export default {
  name: "IndexPage",
  mixins: [aosMixin],
  layout: "default",
  data() {
    return {
      countdown: null,
    };
  },
  computed: {
    stateModal() {
      return this.$store.state.showModal;
    },
  },
  created() {
    this.countdown = this.$moment(
      "2022-06-29" + " " + "07:00",
    ).format();
  },
};
</script>
