<script>
import userStore from "../stores/userStore";

const username = ref("");
const password = ref("");
const users = userStore.state.users;

export default {
  data() {
    return {
      username,
      password,
    };
  },
  methods: {
    getUser: async () => {
      userStore.dispatch("addUser", { username });
      await navigateTo("/homepage");
    },
  },
  computed: {
    users() {
      return userStore.state.users;
    },
  },
};
</script>

<template>
  <div class="container flex flex-col justify-center items-center mt-10 pt-10">
    <h1 class="text-center text-3xl font-bold sm:text-4xl">Blog App</h1>
    <div class="login-content p-3 sm:p-5 mt-5 sm:mt-14">
      <h2 class="text-xl font-semibold opacity-90 sm:text-2xl">Sign in</h2>
      <p class="font-semibold opacity-70 text-sm sm:text-base">
        Make and view posts
      </p>
      <form class="mt-3">
        <input
          type="text"
          v-model="username"
          placeholder="User name"
          class="border border-[#f3f3f3] rounded-md mt-3 outline-none p-2 w-full"
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          class="border border-[#f3f3f3] rounded-md mt-3 outline-none p-2 w-full"
        />
        <button
          type="button"
          class="border border-[#f3f3f3] rounded-md mt-3 bg-[#4875B4] text-white hover:opacity-80 outline-none p-2 w-full"
          @click="getUser"
          :disabled="!username || !password"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>
