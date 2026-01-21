<template>
  <div class="flex items-center justify-center">
    <div class="relative">
      <!-- Background decorative circle -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-80 h-80 bg-white/10 rounded-full"></div>
      </div>

      <!-- Main icon - Browser/Website optimization -->
      <svg viewBox="0 0 400 400" class="w-full h-auto max-w-md relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Browser Window -->
        <rect x="80" y="100" width="240" height="200" rx="12" fill="white" fill-opacity="0.95"/>

        <!-- Browser Header -->
        <rect x="80" y="100" width="240" height="40" rx="12" fill="white" fill-opacity="1"/>
        <rect x="80" y="128" width="240" height="12" fill="#E5E7EB"/>

        <!-- Browser Dots -->
        <circle cx="100" cy="120" r="5" fill="#EF4444"/>
        <circle cx="120" cy="120" r="5" fill="#F59E0B"/>
        <circle cx="140" cy="120" r="5" fill="#10B981"/>

        <!-- URL Bar -->
        <rect x="160" y="112" width="140" height="16" rx="8" fill="#F3F4F6"/>

        <!-- Browser Content - Chart/Graph -->
        <path d="M100 240 L140 200 L180 220 L220 180 L260 200 L300 160" stroke="#ED5A29" stroke-width="4" stroke-linecap="round" fill="none"/>

        <!-- Data Points -->
        <circle cx="100" cy="240" r="6" fill="#ED5A29"/>
        <circle cx="140" cy="200" r="6" fill="#ED5A29"/>
        <circle cx="180" cy="220" r="6" fill="#ED5A29"/>
        <circle cx="220" cy="180" r="6" fill="#ED5A29"/>
        <circle cx="260" cy="200" r="6" fill="#ED5A29"/>
        <circle cx="300" cy="160" r="6" fill="#ED5A29"/>

        <!-- Optimization sparkles -->
        <path d="M320 140 L325 150 L335 145 L330 155 L340 160 L330 165 L335 175 L325 170 L320 180 L315 170 L305 175 L310 165 L300 160 L310 155 L305 145 L315 150 Z" fill="#FCD34D" fill-opacity="0.9"/>
        <path d="M70 120 L73 126 L79 124 L76 130 L82 133 L76 136 L79 142 L73 140 L70 146 L67 140 L61 142 L64 136 L58 133 L64 130 L61 124 L67 126 Z" fill="#FCD34D" fill-opacity="0.8"/>
        <path d="M340 260 L342 264 L346 263 L344 267 L348 269 L344 271 L346 275 L342 274 L340 278 L338 274 L334 275 L336 271 L332 269 L336 267 L334 263 L338 264 Z" fill="#FCD34D" fill-opacity="0.7"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
</script>
