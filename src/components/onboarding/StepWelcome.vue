<template>
  <div>
    <div class="mb-12">
      <h2 class="text-5xl font-normal text-[#23262A] mb-4 font-headline heading-responsive">Welcome to OptiMonk 🙌</h2>
      <p class="text-base text-[#8F97A4] max-w-[400px] font-light">
        Let's begin with a few questions to help you get started with OptiMonk.
      </p>
    </div>

    <div class="space-y-5">
      <!-- Question 1: Website URL -->
      <div>
        <label class="block text-xl font-semibold text-[#23262A] mb-2">
          Which website would you like to optimize?
        </label>
        <input
          type="url"
          v-model="localData.websiteUrl"
          @input="updateData"
          class="w-full px-3 py-2.5 border border-[#D5D8DD] rounded-xl focus:ring-2 focus:ring-[#ED5A29] focus:border-transparent transition-colors text-sm text-[#23262A] placeholder:text-sm"
          placeholder="https://example.com"
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
  websiteUrl: props.modelValue.websiteUrl || ''
})

const updateData = () => {
  emit('update:modelValue', { ...localData })
}

watch(() => props.modelValue, (newVal) => {
  Object.assign(localData, newVal)
}, { deep: true })
</script>
