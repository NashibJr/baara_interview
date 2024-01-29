<script setup>
import { defineProps } from "vue";

defineProps(["title", "author", "body"]);
</script>

<template>
  <div class="hover:shadow hover:shadow-red-[#d3d3d3] mb-5">
    <Card>
      <div class="p-4 m-2 w-full cursor-pointer">
        <h2 class="font-bold mb-3">{{ title }}</h2>
        <p class="opacity-90 mb-2 w-[200px] post-body">
          {{ body }}
        </p>
        <p class="font-semibold text-sm opacity-70">
          By <i>{{ author }}</i>
        </p>
      </div>
    </Card>
  </div>
</template>
