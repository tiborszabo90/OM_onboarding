<template>
  <div>
    <div class="mb-8">
      <h2 class="text-lg font-semibold text-[#23262A]">How did you hear about us?</h2>
    </div>

    <div class="flex flex-wrap gap-3">
      <button
        v-for="option in mainOptions"
        :key="option.value"
        @click="handleSelect(option.value)"
        :class="[
          'px-4 py-2.5 rounded-xl transition-all text-sm focus:outline-none w-fit',
          selectedValue === option.value
            ? 'bg-[#FFF4E9] border-2 border-[#ED5A29] text-[#23262A]'
            : 'bg-transparent border border-[#E3E5E8] text-[#23262A] hover:bg-[#F1F2F4]'
        ]"
      >
        {{ option.label }}
      </button>
      <button
        @click="handleOtherClick"
        :class="[
          'px-4 py-2.5 rounded-xl transition-all text-sm focus:outline-none w-fit',
          showOtherInput || selectedValue === 'other'
            ? 'bg-[#FFF4E9] border-2 border-[#ED5A29] text-[#23262A]'
            : 'bg-transparent border border-[#E3E5E8] text-[#23262A] hover:bg-[#F1F2F4]'
        ]"
      >
        Other
      </button>
    </div>

    <!-- Other input field -->
    <transition
      enter-active-class="transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden"
      enter-from-class="opacity-0 max-h-0 -translate-y-4"
      enter-to-class="opacity-100 max-h-40 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in-out overflow-hidden"
      leave-from-class="opacity-100 max-h-40 translate-y-0"
      leave-to-class="opacity-0 max-h-0 -translate-y-4"
    >
      <div v-if="showOtherInput" class="mt-6">
        <input
          v-model="otherValue"
          type="text"
          placeholder="Please specify..."
          class="w-full px-3 py-2.5 border border-[#D5D8DD] rounded-xl text-sm text-[#23262A] placeholder-[#8F97A4] focus:outline-none focus:ring-2 focus:ring-[#ED5A29] focus:border-transparent"
          @keyup.enter="submitOther"
        />
        <button
          @click="submitOther"
          :disabled="!otherValue.trim()"
          :class="[
            'mt-4 px-6 py-2.5 rounded-xl transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[#ED5A29] focus:ring-offset-2',
            otherValue.trim()
              ? 'bg-[#ED5A29] text-white hover:bg-[#E54D1F] cursor-pointer'
              : 'bg-[#E3E5E8] text-[#505763] cursor-not-allowed'
          ]"
        >
          Next
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue', 'auto-next'])

// Initialize from modelValue to persist selection when navigating back
const selectedValue = computed(() => props.modelValue?.referralSource || null)
const showOtherInput = ref(props.modelValue?.referralSource === 'other')
const otherValue = ref(props.modelValue?.otherText || '')

const handleOtherClick = () => {
  showOtherInput.value = true
  // Clear previous selection when clicking Other
  emit('update:modelValue', { referralSource: null })
}

const mainOptions = [
  { value: 'partner-agency', label: 'Partner/agency' },
  { value: 'shopify-wordpress', label: 'Shopify/WordPress' },
  { value: 'google-search', label: 'Google search' },
  { value: 'instagram-facebook', label: 'Instagram/Facebook' },
  { value: 'friend-colleague', label: 'Friend/colleague' },
  { value: 'chatgpt', label: 'ChatGPT' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'already-used', label: 'Already used before' },
  { value: 'sales-inquiry', label: 'Sales inquiry' }
]

const handleSelect = (value) => {
  showOtherInput.value = false
  emit('update:modelValue', { referralSource: value })
  emit('auto-next')
}

const submitOther = () => {
  if (otherValue.value.trim()) {
    emit('update:modelValue', { referralSource: 'other', otherText: otherValue.value.trim() })
    emit('auto-next')
  }
}
</script>
