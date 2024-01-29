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
      <h2 class="font-semibold text-lg">Posts</h2>
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
