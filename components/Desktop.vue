<template>
  <div class="grid grid-cols-2 h-full">
    <div
      class="transition"
      :class="{
        'bg-blue-50': history.length,
      }"
    >
      <div class="top-1/2 relative left-1/3">
        <CounterButton />
        <ResetButton class="mt-2" />
      </div>
    </div>
    <History class="overflow-auto" />
  </div>
</template>

<script setup lang="ts">
import { history } from '@/stores';
</script>
