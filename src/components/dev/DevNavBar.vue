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
      <button
        v-for="step in totalSteps"
        :key="step"
        @click="$emit('go-to-step', step)"
        :class="[
          'w-8 h-8 text-sm rounded transition-colors flex items-center justify-center',
          currentView === 'onboarding' && currentStep === step
            ? 'bg-[#ED5A29] text-white'
            : 'bg-[#505763] hover:bg-[#8F97A4]'
        ]"
      >
        {{ step }}
      </button>
    </div>

    <button
      v-if="totalSteps === 5"
      @click="$emit('go-to-step', 5)"
      :class="[
        'px-3 py-1 text-sm rounded transition-colors ml-1',
        currentView === 'onboarding' && currentStep === 5
          ? 'bg-[#ED5A29] text-white'
          : 'bg-[#505763] hover:bg-[#8F97A4]'
      ]"
    >
      5 (Client)
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
