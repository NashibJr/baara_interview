<script>
import postStore from "../stores/postStore";

const posts = postStore.state.posts;

export default {
  computed: {
    posts() {
      return postStore.state.posts;
    },
  },
};
</script>

<template lang="html">
  <Wrapper>
    <div class="p-5">
      <div class="flex justify-between">
        <h2 class="font-semibold text-lg">{{ $t("posts-title") }}</h2>
        <ul class="flex ml-3">
          <li class="m-1 hover:text-[dodgerblue] font-bold">
            <a href="/fr">Fr</a>
          </li>
          <li class="m-1 hover:text-[dodgerblue] font-bold">
            <a href="/">Eng</a>
          </li>
        </ul>
      </div>
      <div class="w-full h-[67vh] overflow-y-scroll pl-5 pr-5 hide-scrollbar">
        <ul class="list-none">
          <li v-for="post in posts">
            <div @click="() => navigateTo(`/${post.id}`)">
              <Post
                :title="post.title"
                :author="post.author"
                :body="post.body"
                :key="post.id"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </Wrapper>
</template>
