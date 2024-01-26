<template lang="html">
  <header>
    <nav class="pb-3 nav-bar w-full flex justify-between">
      <span class="flex"
        ><img
          src="~/assets/images/vlog.png"
          alt=""
          class="w-[40px] h-[40px] mt-1 rounded-full sm:w-[50px] h-[50px]"
        />
        <p class="font-semibold text-xl mt-3 ml-2">Blog App</p>
      </span>
      <button
        type="button"
        name="button"
        class="w-[100px] h-[40px] pb-1 hover:opacity-90 mt-3 sm:w-[100px] text-white font-semibold bg-[#4875B4] rounded-lg"
        @click="() => navigateTo('/')"
      >
        Sign out
      </button>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</template>
