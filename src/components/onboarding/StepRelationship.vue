<template>
  <div>
    <div class="mb-8">
      <h2 class="text-lg font-normal text-[#23262A] mb-3">Who are you optimizing this website for?</h2>
      <p class="text-base text-[#8F97A4] font-normal">Please choose the option which best describes your relationship with {{ websiteName || 'the website' }}.</p>
    </div>

    <div class="space-y-4">
      <button
        v-for="option in options"
        :key="option.value"
        @click="handleSelect(option.value)"
        class="w-full bg-white border-2 border-[#E3E5E8] rounded-lg p-4 hover:border-[#ED5A29] hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#ED5A29] focus:ring-offset-2 text-left flex items-center gap-4"
      >
        <!-- Icon -->
        <div class="text-[#ED5A29] flex-shrink-0">
          <div v-html="option.icon"></div>
        </div>

        <!-- Content -->
        <div>
          <h3 class="text-base font-normal text-[#23262A] mb-1">{{ option.title }}</h3>
          <p class="text-sm text-[#8F97A4]">{{ option.description }}</p>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

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

const websiteName = computed(() => {
  return props.data?.welcome?.websiteName || ''
})

const options = [
  {
    value: 'my-business',
    title: 'My business',
    description: 'This is a website of mine or my business',
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
    </svg>`
  },
  {
    value: 'company-employee',
    title: 'A company I work for',
    description: "I'm an employee of this company",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
    </svg>`
  },
  {
    value: 'client',
    title: 'A client',
    description: "I'm an agency/freelancer working for this client",
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>`
  }
]

const handleSelect = (value) => {
  emit('update:modelValue', { relationship: value })
  // Emit auto-next event to trigger automatic progression
  emit('auto-next')
}
</script>
