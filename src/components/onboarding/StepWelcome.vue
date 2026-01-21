<template>
  <div>
    <div class="mb-12">
      <h2 class="text-4xl font-normal text-[#23262A] mb-4">Welcome to OptiMonk 🙌</h2>
      <p class="text-xl text-[#8F97A4] max-w-[400px] font-normal">
        Let's begin with a few questions to help you get started with OptiMonk.
      </p>
    </div>

    <div class="space-y-5">
      <!-- Question 1: Website URL -->
      <div>
        <label class="block text-lg font-normal text-[#23262A] mb-2">
          Which website would you like to optimize?
        </label>
        <input
          type="url"
          v-model="localData.websiteUrl"
          @input="updateData"
          class="w-full px-3 py-2 border border-[#D5D8DD] rounded-lg focus:ring-2 focus:ring-[#ED5A29] focus:border-transparent transition-colors text-[#23262A]"
          placeholder="https://example.com"
        />
      </div>

      <!-- Question 2: Website Name -->
      <div>
        <label class="block text-lg font-normal text-[#23262A] mb-2">
          What's the name of this website?
        </label>
        <input
          type="text"
          v-model="localData.websiteName"
          @input="updateData"
          class="w-full px-3 py-2 border border-[#D5D8DD] rounded-lg focus:ring-2 focus:ring-[#ED5A29] focus:border-transparent transition-colors text-[#23262A]"
          placeholder="My Store"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue'])

const localData = reactive({
  websiteUrl: props.modelValue.websiteUrl || '',
  websiteName: props.modelValue.websiteName || ''
})

const updateData = () => {
  emit('update:modelValue', { ...localData })
}

watch(() => props.modelValue, (newVal) => {
  Object.assign(localData, newVal)
}, { deep: true })
</script>
