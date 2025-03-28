export default {
  namespaced: true,
  state: () => ({
    notifications: []
  }),
  mutations: {
    ADD_NOTIFICATION(state, notification) {
      state.notifications.push(notification);
    }
  },
  actions: {
    addNotification({ commit }, notification) {
      commit('ADD_NOTIFICATION', notification);
    }
  },
  getters: {
    allNotifications: (state) => state.notifications,
  },
}; 