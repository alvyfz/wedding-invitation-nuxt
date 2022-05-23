export const state = () => ({
  title: "Wedding Invitation",
  description: "",
  keywords: "",
  showModal: true,
});

export const mutations = {
  setShowModal(state, showModal) {
    state.showModal = showModal;
  },
};
export const actions = {
  setShowModal({ commit }, showModal) {
    commit("setShowModal", showModal);
  },
};

export const getters = {};
