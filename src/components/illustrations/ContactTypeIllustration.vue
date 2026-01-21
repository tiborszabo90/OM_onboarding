<template>
  <div class="w-full h-full flex items-center justify-center">
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full max-w-md"
    >
      <!-- Background shapes -->
      <circle cx="200" cy="150" r="100" fill="white" fill-opacity="0.1" />
      <circle cx="200" cy="150" r="70" fill="white" fill-opacity="0.1" />

      <!-- Contact card 1 -->
      <rect x="100" y="80" width="90" height="110" rx="8" fill="white" fill-opacity="0.95" />
      <circle cx="145" cy="115" r="20" fill="#ED5A29" fill-opacity="0.2" />
      <circle cx="145" cy="115" r="12" fill="#ED5A29" />
      <rect x="120" y="145" width="50" height="6" rx="3" fill="#23262A" fill-opacity="0.7" />
      <rect x="125" y="158" width="40" height="4" rx="2" fill="#23262A" fill-opacity="0.3" />
      <rect x="130" y="170" width="30" height="4" rx="2" fill="#23262A" fill-opacity="0.3" />

      <!-- Contact card 2 -->
      <rect x="210" y="80" width="90" height="110" rx="8" fill="white" fill-opacity="0.95" />
      <circle cx="255" cy="115" r="20" fill="#ED5A29" fill-opacity="0.2" />
      <circle cx="255" cy="115" r="12" fill="#ED5A29" />
      <rect x="230" y="145" width="50" height="6" rx="3" fill="#23262A" fill-opacity="0.7" />
      <rect x="235" y="158" width="40" height="4" rx="2" fill="#23262A" fill-opacity="0.3" />
      <rect x="240" y="170" width="30" height="4" rx="2" fill="#23262A" fill-opacity="0.3" />

      <!-- Arrow between cards -->
      <path d="M195 135 L205 135" stroke="white" stroke-width="2" stroke-linecap="round" />
      <path d="M200 130 L200 140" stroke="white" stroke-width="2" stroke-linecap="round" />

      <!-- Question mark -->
      <circle cx="200" cy="220" r="25" fill="white" fill-opacity="0.2" />
      <text x="200" y="228" text-anchor="middle" fill="white" font-size="24" font-weight="bold">?</text>
    </svg>
  </div>
</template>

<script setup>
</script>
