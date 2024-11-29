<script lang='ts' setup>
const props = defineProps<{
  text?: string
}>()
</script>

<template>
  <bottone>
    <slot>
      {{ props.text }}
    </slot>
  </bottone>
</template>

<style>

</style>
