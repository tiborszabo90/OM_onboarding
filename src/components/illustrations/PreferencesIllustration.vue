<template>
  <div class="flex items-center justify-center">
    <svg viewBox="0 0 400 400" class="w-full h-auto max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Background Circle -->
      <circle cx="200" cy="200" r="180" fill="white" fill-opacity="0.1"/>

      <!-- Settings/Gear Icon -->
      <circle cx="200" cy="200" r="80" fill="white" fill-opacity="0.9"/>
      <circle cx="200" cy="200" r="40" fill="#ED5A29" fill-opacity="0.2"/>

      <!-- Gear Teeth -->
      <rect x="195" y="100" width="10" height="30" rx="3" fill="white" fill-opacity="0.9"/>
      <rect x="195" y="270" width="10" height="30" rx="3" fill="white" fill-opacity="0.9"/>
      <rect x="270" y="195" width="30" height="10" rx="3" fill="white" fill-opacity="0.9"/>
      <rect x="100" y="195" width="30" height="10" rx="3" fill="white" fill-opacity="0.9"/>

      <!-- Diagonal Teeth -->
      <rect x="250" y="135" width="10" height="25" rx="3" fill="white" fill-opacity="0.9" transform="rotate(45 255 147.5)"/>
      <rect x="140" y="135" width="10" height="25" rx="3" fill="white" fill-opacity="0.9" transform="rotate(-45 145 147.5)"/>
      <rect x="250" y="240" width="10" height="25" rx="3" fill="white" fill-opacity="0.9" transform="rotate(-45 255 252.5)"/>
      <rect x="140" y="240" width="10" height="25" rx="3" fill="white" fill-opacity="0.9" transform="rotate(45 145 252.5)"/>

      <!-- Checkmarks around -->
      <path d="M320 100 L330 110 L350 90" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0.8"/>
      <path d="M50 120 L60 130 L80 110" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0.8"/>
      <path d="M70 300 L80 310 L100 290" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill-opacity="0.8"/>
    </svg>
  </div>
</template>

<script setup>
</script>
