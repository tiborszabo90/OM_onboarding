<template>
  <div class="h-screen bg-white flex flex-col relative">
    <!-- Logo at top left corner -->
    <div class="fixed top-6 left-8 z-50">
      <img
        src="https://www.optimonk.com/wp-content/uploads/optimonk-logo-2024.svg"
        alt="OptiMonk"
        class="h-6"
      />
    </div>

    <!-- Main content area -->
    <div class="w-full max-w-300 mx-auto flex-1 flex flex-col md:flex-row md:gap-[100px] overflow-auto pb-16">
      <!-- Left Side - Content Area -->
      <div class="w-full md:w-[516px] flex items-center justify-center p-8 lg:pl-16 lg:pr-0 pt-0 pb-0 bg-white overflow-hidden">
        <div class="w-full">
          <slot name="content"></slot>
        </div>
      </div>

      <!-- Right Side - Illustration Area -->
      <div class="w-full md:w-[calc(45%-100px)] min-h-[50vh] flex items-center justify-end pt-5 pb-[60px]">
        <div class="w-full max-w-xl h-full rounded-[40px] flex items-center justify-center bg-[#FFEFE5] translate-x-[100px] overflow-hidden">
          <slot name="illustration">
            <!-- Default placeholder -->
            <div class="flex items-center justify-center">
              <div class="text-center">
                <div class="w-64 h-64 mx-auto bg-white/30 rounded-3xl backdrop-blur-sm flex items-center justify-center">
                  <svg class="w-32 h-32 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </div>

    <!-- Progress bar at bottom of viewport - fixed position, above DevNavBar -->
    <div class="fixed bottom-12 left-0 right-0 bg-white z-40">
      <div class="w-full max-w-300 mx-auto px-8 lg:pl-16 lg:pr-0 py-4">
        <div class="md:w-[516px]">
          <slot name="progress"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  illustrationBg: {
    type: String,
    default: 'orange',
    validator: (value) => ['indigo', 'blue', 'purple', 'pink', 'green', 'orange'].includes(value)
  }
})

const illustrationBgClass = computed(() => {
  const backgrounds = {
    indigo: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    blue: 'bg-gradient-to-br from-blue-500 to-blue-700',
    purple: 'bg-gradient-to-br from-purple-500 to-purple-700',
    pink: 'bg-gradient-to-br from-pink-500 to-pink-700',
    green: 'bg-gradient-to-br from-green-500 to-green-700',
    orange: 'bg-gradient-to-br from-[#ED5A29] to-[#E54D1F]'
  }
  return backgrounds[props.illustrationBg]
})
</script>
