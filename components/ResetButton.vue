<template>
  <div
    v-if="history.length"
    class="w-max h-max rounded-full hover:bg-blue-200 py-2 px-4 cursor-pointer"
    @click="() => (history.length = 0)"
  >
    <span class="select-none text-slate-700 hover:text-slate-900">
      Reset ↺
    </span>
  </div>
</template>

<script setup lang="ts">
import { history } from '@/stores';
</script>
