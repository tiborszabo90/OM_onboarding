<template>
  <div>
    <div class="mb-8">
      <h2 class="text-lg font-medium text-[#23262A]">How did you hear about us?</h2>
    </div>

    <div class="flex flex-wrap gap-3">
      <button
        v-for="option in options"
        :key="option.value"
        @click="handleSelect(option.value)"
        class="px-6 py-3 bg-gray-100 text-[#23262A] rounded-xl hover:bg-gray-200 transition-colors text-base focus:outline-none focus:ring-2 focus:ring-[#ED5A29] focus:ring-offset-2 w-fit"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue', 'auto-next'])

const options = [
  { value: 'partner-agency', label: 'Partner/agency' },
  { value: 'shopify-wordpress', label: 'Shopify/WordPress' },
  { value: 'google-search', label: 'Google search' },
  { value: 'instagram-facebook', label: 'Instagram/Facebook' },
  { value: 'friend-colleague', label: 'Friend/colleague' },
  { value: 'chatgpt', label: 'ChatGPT' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'already-used', label: 'Already used before' },
  { value: 'sales-inquiry', label: 'Sales inquiry' },
  { value: 'other', label: 'Other' }
]

const handleSelect = (value) => {
  emit('update:modelValue', { referralSource: value })
  // Emit auto-next event to trigger automatic progression
  emit('auto-next')
}
</script>
