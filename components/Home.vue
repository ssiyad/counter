<template>
  <div class="h-screen w-screen">
    <Mobile v-if="isMobile" />
    <Desktop v-else />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 768);
</script>
