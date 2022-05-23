<template>
  <div>
    <!-- Modal  -->

    <div
      class="modal w-screen h-screen top-0 right-0 left-0 bottom-0 overflow-hidden"
    >
      <div
        class="flex flex-col justify-center md:justify-end top-10 w-full h-full"
      >
        <div class="flex justify-center h-1/2">
          <div class="text-center md:pb-[60px]">
            <h2 class="text-white text-xl font-medium">
              THE WEDDING OF
            </h2>
            <h1
              class="font-handwriting text-5xl text-white font-bold mb-2"
            >
              Alvy Fauzi
            </h1>
            <h1
              class="font-handwriting text-5xl text-white font-bold mb-2"
            >
              &
            </h1>
            <h1
              class="font-handwriting text-5xl text-white font-bold mb-2"
            >
              Jennifer Lin
            </h1>
            <p class="font-medium text-white text-sm">
              Kepada Bapak/Ibu/Saudara/i
            </p>
            <p class="italic font-medium text-white text-sm">
              Mohon maaf bila ada kesalahan pada penulisan nama/gelar
            </p>
            <button
              class="btn-modal px-6 py-2 border mt-2 border-white text-white font-semibold rounded-md hover:opacity-30"
              @click="handleModal(false)"
            >
              BUKA UNDANGAN
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalInvitation",
  computed: {
    stateModal() {
      return this.$store.state.showModal;
    },
  },
  methods: {
    handleModal(state) {
      this.$store.dispatch("setShowModal", state);
    },
  },
};
</script>

<style>
.modal {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  filter: brightness(80%);
}
</style>
