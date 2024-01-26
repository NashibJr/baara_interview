<template lang="html">
  <Wrapper>
    <div class="flex flex-col justify-center items-center">
      <form class="w-1/2">
        <h2 class="font-semibold text-2xl mt-8">Create Post</h2>
        <input
          type="text"
          placeholder="Title"
          class="border border-[#f3f3f3] rounded-md mt-3 outline-none p-2 w-full"
        />
        <textarea
          rows="8"
          cols="80"
          class="border border-[#f3f3f3] rounded-md mt-3 outline-none p-2 w-full"
        ></textarea>
        <button
          type="button"
          name="button"
          class="w-[100px] h-[40px] pb-1 hover:opacity-90 mt-3 sm:w-[100px] text-white font-semibold bg-[#4875B4] rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  </Wrapper>
</template>
