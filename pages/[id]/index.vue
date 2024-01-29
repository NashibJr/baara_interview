<script setup>
import postStore from "../stores/postStore";

const route = useRoute();
const { id } = route.params;
const post = postStore.getters.getOnePost(id);
</script>

<template>
  <Wrapper>
    <h2 class="font-semibold text-2xl mt-8">{{ $t("post-details") }}</h2>
    <div class="mt-5">
      <h2 class="font-semibold text-lg">{{ post.title }}</h2>
      <p class="mt-2 opacity-70">{{ post.body }}</p>
      <p class="mt-10 opacity-80 font-semibold">
        Author: -<i>{{ post.author }}</i>
      </p>
      <button
        type="button"
        name="button"
        class="w-[100px] h-[40px] hover:opacity-90 mb-3 pb-1 mt-3 sm:w-[100px] text-white font-semibold bg-[#4875B4] rounded-lg"
        @click="() => navigateTo('/')"
      >
        Back
      </button>
    </div>
  </Wrapper>
</template>
