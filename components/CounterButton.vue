<template>
  <div
    class="w-max h-max shadow rounded-full bg-blue-500 text-white p-4 cursor-pointer"
    @click="() => history.unshift(new Date())"
  >
    <span class="select-none flex gap-2">
      <span>
        {{ count }}
      </span>
      <span class="text-slate-300">-</span>
      <span>
        {{ countWords }}
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ToWords } from 'to-words';
import { history } from '@/stores';

const toWords = new ToWords();
const count = computed(() => history.value.length);
const countWords = computed(() => toWords.convert(count.value));
</script>
