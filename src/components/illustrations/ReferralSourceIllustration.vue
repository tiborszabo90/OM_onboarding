<template>
  <div class="flex items-center justify-center">
    <svg viewBox="0 0 400 400" class="w-full h-auto max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Background Circle -->
      <circle cx="200" cy="200" r="180" fill="white" fill-opacity="0.1"/>

      <!-- Network/Connection Icon -->
      <!-- Central Node -->
      <circle cx="200" cy="200" r="30" fill="white" fill-opacity="0.9"/>
      <circle cx="200" cy="200" r="15" fill="#ED5A29" fill-opacity="0.3"/>

      <!-- Surrounding Nodes -->
      <circle cx="120" cy="120" r="20" fill="white" fill-opacity="0.9"/>
      <circle cx="280" cy="120" r="20" fill="white" fill-opacity="0.9"/>
      <circle cx="120" cy="280" r="20" fill="white" fill-opacity="0.9"/>
      <circle cx="280" cy="280" r="20" fill="white" fill-opacity="0.9"/>
      <circle cx="200" cy="100" r="20" fill="white" fill-opacity="0.9"/>
      <circle cx="200" cy="300" r="20" fill="white" fill-opacity="0.9"/>

      <!-- Connection Lines -->
      <line x1="200" y1="200" x2="120" y2="120" stroke="white" stroke-width="3" stroke-opacity="0.6"/>
      <line x1="200" y1="200" x2="280" y2="120" stroke="white" stroke-width="3" stroke-opacity="0.6"/>
      <line x1="200" y1="200" x2="120" y2="280" stroke="white" stroke-width="3" stroke-opacity="0.6"/>
      <line x1="200" y1="200" x2="280" y2="280" stroke="white" stroke-width="3" stroke-opacity="0.6"/>
      <line x1="200" y1="200" x2="200" y2="100" stroke="white" stroke-width="3" stroke-opacity="0.6"/>
      <line x1="200" y1="200" x2="200" y2="300" stroke="white" stroke-width="3" stroke-opacity="0.6"/>

      <!-- Decorative sparkles -->
      <circle cx="80" cy="150" r="4" fill="white" fill-opacity="0.7"/>
      <circle cx="320" cy="180" r="5" fill="white" fill-opacity="0.7"/>
      <circle cx="90" cy="250" r="4" fill="white" fill-opacity="0.7"/>
      <circle cx="310" cy="240" r="4" fill="white" fill-opacity="0.7"/>
    </svg>
  </div>
</template>

<script setup>
</script>
