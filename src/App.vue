<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { darkTheme, NConfigProvider, NTabPane, NTabs } from 'naive-ui'
import { reactive, ref } from 'vue'
import InButton from './Button'

import InButtonConfig from './button/config.vue'

const components: {
  name: string
  label?: string
  Component: any
  defaultConfig?: {
    editor_options?: any
    attributes?: Record<string, any>
    props?: Record<string, any>
  }
  style?: any
  ConfigComponent: any
  props: any
}[] = [
  {
    ...InButton,
    ConfigComponent: InButtonConfig,
    props: ref(InButton.defaultConfig?.props || {}),
  },
]

const activeTab = useLocalStorage('activeTab', 'InButton')
</script>

<template>
  <NConfigProvider h-full w-full :theme="darkTheme">
    <NTabs
      v-model:value="activeTab"
      type="line"
      addable animated h-full
      placement="left"
    >
      <NTabPane v-for="item in components" :key="item.name" :name="item.name" :tab="item.label || item.name" flex>
        <div flex flex-1 items-center justify-center>
          <div>
            <component
              :is="item.Component" v-bind="item.props.value" :style="item?.defaultConfig?.attributes?.style || {
                width: '200px',
                height: '200px',
              }"
            />
          </div>
        </div>
        <div p-3>
          <component :is="item.ConfigComponent" :config="item.props.value" />
        </div>
      </NTabPane>
    </NTabs>
  </NConfigProvider>
</template>

<style>
#app {
  height: 100vh;
  width: 100vw;
  background-color: #1b1b1b;
}
</style>
