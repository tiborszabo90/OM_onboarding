<template>
  <div class="flex items-center justify-center">
    <svg viewBox="0 0 400 400" class="w-full h-auto max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Background Circle -->
      <circle cx="200" cy="200" r="180" fill="white" fill-opacity="0.1"/>

      <!-- Large Success Circle -->
      <circle cx="200" cy="200" r="100" fill="white" fill-opacity="0.9"/>

      <!-- Checkmark -->
      <path d="M160 200 L185 225 L240 170" stroke="#10B981" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>

      <!-- Confetti -->
      <rect x="100" y="80" width="8" height="8" rx="2" fill="#F59E0B" fill-opacity="0.8" transform="rotate(45 104 84)"/>
      <rect x="300" y="100" width="8" height="8" rx="2" fill="#EF4444" fill-opacity="0.8" transform="rotate(-30 304 104)"/>
      <rect x="120" y="300" width="8" height="8" rx="2" fill="#3B82F6" fill-opacity="0.8" transform="rotate(20 124 304)"/>
      <rect x="280" y="290" width="8" height="8" rx="2" fill="#8B5CF6" fill-opacity="0.8" transform="rotate(-45 284 294)"/>
      <circle cx="90" cy="150" r="4" fill="#EC4899" fill-opacity="0.8"/>
      <circle cx="310" cy="180" r="5" fill="#10B981" fill-opacity="0.8"/>
      <circle cx="110" cy="250" r="4" fill="#F59E0B" fill-opacity="0.8"/>
      <circle cx="300" cy="240" r="5" fill="#3B82F6" fill-opacity="0.8"/>

      <!-- More Confetti Lines -->
      <line x1="130" y1="120" x2="140" y2="100" stroke="#EF4444" stroke-width="3" stroke-linecap="round" fill-opacity="0.7"/>
      <line x1="270" y1="130" x2="290" y2="120" stroke="#8B5CF6" stroke-width="3" stroke-linecap="round" fill-opacity="0.7"/>
      <line x1="100" y1="220" x2="90" y2="240" stroke="#10B981" stroke-width="3" stroke-linecap="round" fill-opacity="0.7"/>
      <line x1="310" y1="230" x2="320" y2="250" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" fill-opacity="0.7"/>
    </svg>
  </div>
</template>

<script setup>
</script>
