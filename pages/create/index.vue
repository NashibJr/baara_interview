<script>
import postStore from "../stores/postStore";

const title = ref("");
const content = ref("");

export default {
  data() {
    return {
      title,
      content,
    };
  },
  methods: {
    createPost: () => {
      postStore.dispatch("addPost", {
        title,
        content,
      });
      navigateTo("/");
    },
  },
};
</script>

<template lang="html">
  <Wrapper>
    <div class="sm:flex flex-col justify-center items-center">
      <form class="sm:w-3/4 lg:w-1/2 w-full" @submit="createPost">
        <h2 class="font-semibold text-2xl mt-8">
          {{ $t("create-btn-label") }}
        </h2>
        <input
          type="text"
          v-model="title"
          :placeholder="$t('title-post')"
          class="border border-[#f3f3f3] rounded-md mt-3 outline-none p-2 w-full"
        />
        <textarea
          v-model="content"
          :placeholder="$t('textarea-content')"
          rows="8"
          cols="80"
          class="border border-[#f3f3f3] rounded-md mt-3 outline-none p-2 w-full"
        ></textarea>
        <button
          type="button"
          name="button"
          class="w-[100px] h-[40px] pb-1 hover:opacity-90 mt-3 sm:w-[100px] text-white font-semibold bg-[#4875B4] rounded-lg"
          @click="createPost"
          :disabled="!title || !content"
        >
          {{ $t("btn-submit") }}
        </button>
        <button
          type="button"
          name="button"
          class="ml-2 w-[100px] h-[40px] pb-1 hover:opacity-90 mt-3 sm:w-[100px] text-white font-semibold bg-[#3d3d3d] rounded-lg"
          @click="() => navigateTo('/')"
        >
          {{ $t("btn-cancel") }}
        </button>
      </form>
    </div>
  </Wrapper>
</template>
