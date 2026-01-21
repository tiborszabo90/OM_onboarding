<template>
  <div class="flex items-center justify-center">
    <svg viewBox="0 0 400 400" class="w-full h-auto max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Background Circle -->
      <circle cx="200" cy="200" r="180" fill="white" fill-opacity="0.1"/>

      <!-- Three people illustration representing different relationships -->
      <!-- Center person (largest) -->
      <circle cx="200" cy="180" r="40" fill="white" fill-opacity="0.9"/>
      <circle cx="200" cy="170" r="18" fill="#ED5A29" fill-opacity="0.3"/>
      <path d="M 160 220 Q 160 200, 180 200 L 220 200 Q 240 200, 240 220 L 240 240 L 160 240 Z" fill="white" fill-opacity="0.9"/>

      <!-- Left person (smaller) -->
      <circle cx="120" cy="200" r="30" fill="white" fill-opacity="0.8"/>
      <circle cx="120" cy="192" r="14" fill="#ED5A29" fill-opacity="0.2"/>
      <path d="M 95 230 Q 95 215, 107 215 L 133 215 Q 145 215, 145 230 L 145 245 L 95 245 Z" fill="white" fill-opacity="0.8"/>

      <!-- Right person (smaller) -->
      <circle cx="280" cy="200" r="30" fill="white" fill-opacity="0.8"/>
      <circle cx="280" cy="192" r="14" fill="#ED5A29" fill-opacity="0.2"/>
      <path d="M 255 230 Q 255 215, 267 215 L 293 215 Q 305 215, 305 230 L 305 245 L 255 245 Z" fill="white" fill-opacity="0.8"/>

      <!-- Connection lines -->
      <line x1="160" y1="200" x2="150" y2="200" stroke="white" stroke-width="2" stroke-opacity="0.5"/>
      <line x1="240" y1="200" x2="250" y2="200" stroke="white" stroke-width="2" stroke-opacity="0.5"/>

      <!-- Decorative sparkles -->
      <circle cx="90" cy="150" r="4" fill="white" fill-opacity="0.7"/>
      <circle cx="310" cy="160" r="5" fill="white" fill-opacity="0.7"/>
      <circle cx="100" cy="260" r="4" fill="white" fill-opacity="0.7"/>
      <circle cx="300" cy="250" r="4" fill="white" fill-opacity="0.7"/>
    </svg>
  </div>
</template>

<script setup>
</script>
