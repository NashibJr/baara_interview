<template lang="html">
  <Wrapper>
    <div class="p-5">
      <h2 class="font-semibold text-lg">Posts</h2>
      <button
        type="button"
        name="button"
        class="w-[100px] h-[40px] hover:opacity-90 mb-3 pb-1 mt-3 sm:w-[100px] text-white font-semibold bg-[#4875B4] rounded-lg"
        @click="() => navigateTo('/')"
      >
        Create Post
      </button>
      <Post />
    </div>
  </Wrapper>
</template>
