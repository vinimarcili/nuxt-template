<script setup>
const runtimeConfig = useRuntimeConfig()
</script>
<template>
  <div>
    <p>Private config: {{ runtimeConfig.public.name }}</p>
  </div>
</template>
<style lang="scss"></style>
