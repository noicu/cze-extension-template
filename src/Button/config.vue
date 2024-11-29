<script lang='ts' setup>
import {
  NForm,
  NFormItem,
  NInput,
} from 'naive-ui'

const props = defineProps<{
  config: {
    text: string
  }
}>()

defineExpose({
  config: props.config,
})
</script>

<template>
  <NForm
    label-placement="left"
    label-width="auto"
    require-mark-placement="right-hanging"
    size="small"
  >
    <NFormItem label="文本">
      <NInput v-model:value="config.text" clearable />
    </NFormItem>
  </NForm>
</template>

<style>

</style>
