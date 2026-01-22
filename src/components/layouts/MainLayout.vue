<template>
  <div class="h-screen bg-white flex flex-col relative overflow-hidden">
    <!-- Logo at top left corner -->
    <div class="fixed top-8 left-8 lg:left-16 z-50">
      <img
        src="https://www.optimonk.com/wp-content/uploads/optimonk-logo-2024.svg"
        alt="OptiMonk"
        class="h-8"
      />
    </div>

    <!-- Main content area -->
    <div class="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row md:gap-16 lg:gap-32 xl:gap-48">
      <!-- Left Side - Content Area -->
      <div class="w-full h-full md:h-auto md:w-[516px] flex items-center justify-center md:justify-start px-8 lg:pl-16 lg:pr-0 py-8 overflow-y-auto">
        <div class="w-full max-w-[516px] md:max-w-none">
          <slot name="content"></slot>
        </div>
      </div>

      <!-- Right Side - Illustration Area -->
      <div :class="['hidden md:flex flex-1 pt-8 pr-8 lg:pr-16', hasProgress ? 'pb-28' : 'pb-8']">
        <div class="w-full max-w-xl rounded-[40px] flex items-center justify-center bg-[#FFEFE5] overflow-hidden mb-8">
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

    <!-- Progress bar at bottom of viewport -->
    <div v-if="hasProgress" class="fixed bottom-12 left-0 right-0 bg-white z-40">
      <div class="w-full max-w-7xl mx-auto px-8 lg:pl-16 py-4">
        <div class="md:w-[516px]">
          <slot name="progress"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  hasProgress: {
    type: Boolean,
    default: false
  }
})
</script>
