<template>
  <div>
    <div class="mb-8">
      <h2 class="text-lg font-normal text-[#23262A]">What best describes {{ websiteName || 'your business' }}?</h2>
    </div>

    <div class="flex flex-wrap gap-3">
      <button
        v-for="option in mainOptions"
        :key="option.value"
        @click="handleSelect(option.value)"
        :class="[
          'flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all text-sm focus:outline-none w-fit',
          selectedValue === option.value
            ? 'bg-[#F1F2F4] border-2 border-[#ED5A29] text-[#23262A]'
            : 'bg-transparent border border-[#E3E5E8] text-[#23262A] hover:bg-[#F1F2F4]'
        ]"
      >
        <div class="text-[#ED5A29]" v-html="option.icon"></div>
        <span>{{ option.label }}</span>
      </button>
      <button
        @click="handleOtherClick"
        :class="[
          'flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all text-sm focus:outline-none w-fit',
          showOtherInput || selectedValue === 'other'
            ? 'bg-[#F1F2F4] border-2 border-[#ED5A29] text-[#23262A]'
            : 'bg-transparent border border-[#E3E5E8] text-[#23262A] hover:bg-[#F1F2F4]'
        ]"
      >
        <div class="text-[#ED5A29]">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
        <span>Other</span>
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
  },
  data: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue', 'auto-next'])

// Initialize from modelValue to persist selection when navigating back
const selectedValue = computed(() => props.modelValue?.businessType || null)
const showOtherInput = ref(props.modelValue?.businessType === 'other')
const otherValue = ref(props.modelValue?.otherText || '')

const handleOtherClick = () => {
  showOtherInput.value = true
  // Clear previous selection when clicking Other
  emit('update:modelValue', { businessType: null })
}

const websiteName = computed(() => {
  return props.data?.welcome?.websiteName || ''
})

const mainOptions = [
  {
    value: 'ecommerce',
    label: 'eCommerce',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>`
  },
  {
    value: 'saas',
    label: 'SaaS/Software',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>`
  },
  {
    value: 'service',
    label: 'Service',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </svg>`
  },
  {
    value: 'media',
    label: 'Media',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
    </svg>`
  }
]

const handleSelect = (value) => {
  showOtherInput.value = false
  emit('update:modelValue', { businessType: value })
  emit('auto-next')
}

const submitOther = () => {
  if (otherValue.value.trim()) {
    emit('update:modelValue', { businessType: 'other', otherText: otherValue.value.trim() })
    emit('auto-next')
  }
}
</script>
