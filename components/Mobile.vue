<template>
  <div class="h-full overflow-hidden flex flex-col">
    <div
      class="transition py-8 px-4 w-full flex justify-between items-center"
      :class="{
        'bg-blue-50': history.length,
      }"
    >
      <CounterButton />
      <ResetButton />
    </div>
    <History class="overflow-auto" />
  </div>
</template>

<script setup lang="ts">
import { history } from '@/stores';
</script>
