<script>
export default {
  methods: {
    handleChange: (event) => localStorage.setItem("lang", event.target.value),
  },
};
</script>

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
        <p class="font-semibold text-xl mt-3 ml-2">{{ $t("title") }}</p>
      </span>
      <div class="header-btn">
        <button
          type="button"
          name="button"
          class="w-[100px] h-[40px] hover:opacity-90 text-sm mb-3 pb-1 mt-3 sm:w-[100px] text-white font-semibold bg-[#4875B4] rounded-lg"
          @click="() => navigateTo('/create')"
        >
          {{ $t("create-btn-label") }}
        </button>
        <select
          class="border border-[#d3d3d3] rounded-md p-2 outline-none ml-2 translate-y-1 w-[100px]"
          @change="handleChange($event)"
        >
          <option value="Eng">Eng</option>
          <option value="Fr">Fr</option>
        </select>
      </div>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</template>
