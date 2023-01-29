<script lang="ts" setup>
import { useI18n } from '#imports'
const { t, locale, setLocale } = useI18n()
const runtimeConfig = useRuntimeConfig()
onBeforeMount(() => {
  if (navigator?.language?.includes('pt')) {
    document.documentElement.setAttribute('lang', 'pt-BR')
    setLocale('pt')
  } else if (navigator?.language?.includes('es')) {
    document.documentElement.setAttribute('lang', 'es-ES')
    setLocale('es')
  } else {
    document.documentElement.setAttribute('lang', 'en-US')
    setLocale('en')
  }
})
</script>
<template>
  <div>
    <p>Private config: {{ runtimeConfig.public.name }}</p>
    <p>{{ t('language') }}</p>
    <p>{{ locale }}</p>
  </div>
</template>
<style lang="scss"></style>
