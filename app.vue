<template>
  <div class="card flex justify-content-center">
    <PrimeDropdown
      v-model="colorMode.preference"
      :options="modes"
      optionLabel="name"
      placeholder="Select a mode"
      class="w-full md:w-14rem"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const colorMode = useColorMode();

const modes = ref([
  { name: 'System', code: 'system' },
  { name: 'Dark', code: 'dark' },
  { name: 'Light', code: 'light' },
]);
</script>
