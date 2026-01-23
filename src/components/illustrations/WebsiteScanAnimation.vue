<template>
  <div class="w-full h-full flex items-center justify-center p-8">
    <div class="relative w-full h-full max-w-2xl">
      <!-- Dummy website background -->
      <div class="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E3E5E8]">
        <div class="p-6 space-y-4">
          <!-- Header skeleton -->
          <div class="flex items-center justify-between mb-6">
            <div class="w-24 h-8 bg-[#E3E5E8] rounded"></div>
            <div class="flex gap-3">
              <div class="w-16 h-4 bg-[#E3E5E8] rounded"></div>
              <div class="w-16 h-4 bg-[#E3E5E8] rounded"></div>
              <div class="w-16 h-4 bg-[#E3E5E8] rounded"></div>
            </div>
          </div>

          <!-- Hero skeleton -->
          <div class="space-y-3 mb-6">
            <div class="w-3/4 h-8 bg-[#E3E5E8] rounded"></div>
            <div class="w-1/2 h-8 bg-[#E3E5E8] rounded"></div>
            <div class="w-full h-4 bg-[#F1F2F4] rounded mt-4"></div>
            <div class="w-2/3 h-4 bg-[#F1F2F4] rounded"></div>
          </div>

          <!-- CTA button skeleton -->
          <div class="w-32 h-10 bg-[#E3E5E8] rounded-lg mb-8"></div>

          <!-- Content grid skeleton -->
          <div class="grid grid-cols-3 gap-4">
            <div class="space-y-3">
              <div class="w-full h-24 bg-[#F1F2F4] rounded-lg"></div>
              <div class="w-full h-4 bg-[#E3E5E8] rounded"></div>
              <div class="w-2/3 h-4 bg-[#E3E5E8] rounded"></div>
            </div>
            <div class="space-y-3">
              <div class="w-full h-24 bg-[#F1F2F4] rounded-lg"></div>
              <div class="w-full h-4 bg-[#E3E5E8] rounded"></div>
              <div class="w-2/3 h-4 bg-[#E3E5E8] rounded"></div>
            </div>
            <div class="space-y-3">
              <div class="w-full h-24 bg-[#F1F2F4] rounded-lg"></div>
              <div class="w-full h-4 bg-[#E3E5E8] rounded"></div>
              <div class="w-2/3 h-4 bg-[#E3E5E8] rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lottie animation overlay -->
      <DotLottieVue
        src="https://lottie.host/3ac1aa01-5f66-42cb-a30f-cd070359a648/UwHQ4qaeYo.lottie"
        autoplay
        loop
        class="absolute inset-0 w-full h-full z-10"
      />
    </div>
  </div>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
</script>
