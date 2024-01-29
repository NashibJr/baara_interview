<template lang="html">
  <header>
    <nav class="pb-3 nav-bar w-full flex justify-between">
      <span class="flex"
        ><img
          src="~/assets/images/vlog.png"
          alt=""
          class="w-[40px] h-[40px] mt-1 rounded-full sm:w-[50px] cursor-pointer h-[50px]"
          @click="() => navigateTo('/')"
        />
        <p class="font-semibold text-xl mt-3 ml-2">Blog App</p>
      </span>
      <button
        type="button"
        name="button"
        class="w-[100px] h-[40px] hover:opacity-90 mb-3 pb-1 mt-3 sm:w-[100px] text-white font-semibold bg-[#4875B4] rounded-lg"
        @click="() => navigateTo('/create')"
      >
        Create Post
      </button>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</template>
