<template>
  <div class="fixed bottom-0 left-0 right-0 bg-[#23262A] text-white py-2 px-4 z-50 flex items-center justify-center gap-2">
    <span class="text-xs text-[#8F97A4] mr-2">Dev Nav:</span>

    <button
      @click="$emit('navigate', 'registration')"
      :class="[
        'px-3 py-1 text-sm rounded transition-colors',
        currentView === 'registration'
          ? 'bg-[#ED5A29] text-white'
          : 'bg-[#505763] hover:bg-[#8F97A4]'
      ]"
    >
      Registration
    </button>

    <div class="flex items-center gap-1 ml-2">
      <span class="text-xs text-[#8F97A4] mr-1">Onboarding:</span>
      <button
        v-for="step in 4"
        :key="step"
        @click="$emit('go-to-step', step)"
        :class="[
          'w-8 h-8 text-sm rounded transition-colors flex items-center justify-center',
          currentView === 'onboarding' && currentStep === step && currentStep <= 4
            ? 'bg-[#ED5A29] text-white'
            : 'bg-[#505763] hover:bg-[#8F97A4]'
        ]"
      >
        {{ step }}
      </button>
    </div>

    <span class="text-[#505763] mx-1">|</span>

    <button
      @click="$emit('go-to-step', totalSteps)"
      :class="[
        'px-3 py-1 text-sm rounded transition-colors',
        currentView === 'onboarding' && currentStep === totalSteps
          ? 'bg-[#ED5A29] text-white'
          : 'bg-[#505763] hover:bg-[#8F97A4]'
      ]"
    >
      Dashboard
    </button>
  </div>
</template>

<script setup>
defineProps({
  currentView: {
    type: String,
    required: true
  },
  currentStep: {
    type: Number,
    default: 1
  },
  totalSteps: {
    type: Number,
    default: 4
  }
})

defineEmits(['navigate', 'go-to-step'])
</script>
