<template>
  <ul class="p-8 space-y-2 list-disc list-outside">
    <li v-for="i in history" :key="i.valueOf()">
      <div>
        <div class="font-medium">{{ dayjs(i).fromNow() }}</div>
        <div class="text-slate-700">{{ dayjs(i).format(format) }}</div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { dayjs } from '@/utils/dayjs';
import { history } from '@/stores';

const format = 'LLL';
</script>
