import { createStore } from "vuex";

const userStore = createStore({
  state: {
    users: [{ id: Math.round(Math.random() * 1000000), username: "User 1" }],
  },
  getters: {
    getAll: (state) => state.users,
  },
  mutations: {
    addUser: (state, payload) => {
      const newUser = {
        id: Math.round(Math.random() * 1000000),
        username: payload.username.value,
      };

      state.users.push(newUser);
    },
  },
  actions: {
    addUser: (context, payload) => context.commit("addUser", payload),
  },
});

export default userStore;
