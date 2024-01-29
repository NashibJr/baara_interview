import { createStore } from "vuex";

const postStore = createStore({
  state: {
    posts: [
      {
        id: Math.round(Math.random() * 1000000),
        title: "JavaScript",
        body: "JavaScript is the most used Programming language itw. It is used on web mostly",
        author: "Nashib JR",
      },
      {
        id: Math.round(Math.random() * 1000000),
        title: "HTML",
        body: "HTML is Hyper Text Markup Language. It is the only markup language itw. It is used on web mostly",
        author: "Marcus Thuram",
      },
      {
        id: Math.round(Math.random() * 1000000),
        title: "Python",
        body: "Python is the second most used Programming language itw. It is used mostly in Data Science and Machine Learning",
        author: "Henry Gava K",
      },
    ],
  },

  getters: {
    getOnePost: (state) => (id) =>
      state.posts.find((post) => String(post.id) === id),
  },

  mutations: {
    addPost: (state, payload) => {
      state.posts.push({
        id: Math.round(Math.random() * 1000000),
        title: payload.title.value,
        body: payload.content.value,
        author: "Author 10",
      });
    },
  },

  actions: {
    addPost: (context, payload) => context.commit("addPost", payload),
  },
});

export default postStore;
