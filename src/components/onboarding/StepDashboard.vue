<template>
  <div class="w-full">
    <!-- Two-column layout after submit -->
    <div v-if="submitted" class="flex h-[500px] mr-80">
      <!-- Animation in the center -->
      <div class="flex-1 flex items-center justify-center">
        <WebsiteScanAnimation />
      </div>

      <!-- Chat on the right - fixed to viewport edge -->
      <div class="w-80 flex flex-col fixed right-0 top-0 h-screen bg-white border-l border-[#E3E5E8] p-4 pt-20 pb-16">
        <!-- Messages area -->
        <div class="flex-1 overflow-y-auto space-y-4 mb-4">
          <!-- User message -->
          <div class="flex justify-end">
            <div class="bg-[#FFEFE5] text-[#23262A] px-3 py-2 rounded-2xl rounded-br-md max-w-[90%] text-sm">
              {{ submittedMessage }}
            </div>
          </div>
          <!-- AI response placeholder -->
          <div class="flex justify-start">
            <div class="bg-[#F1F2F4] text-[#23262A] px-3 py-2 rounded-2xl rounded-bl-md max-w-[90%]">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-[#ED5A29] rounded-full animate-pulse"></div>
                <span class="text-sm text-[#8F97A4]">OptiMonk is thinking...</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Chat input -->
        <div class="relative mt-auto">
          <textarea
            ref="chatTextareaRef"
            v-model="chatMessage"
            rows="4"
            @keydown.enter.exact.prevent="handleChatSubmit"
            class="w-full px-4 py-3 border border-[#D5D8DD] rounded-xl focus:ring-2 focus:ring-[#ED5A29] focus:border-transparent transition-colors text-[#23262A] h-28 resize-none pr-12"
            placeholder="Ask OptiMonk..."
          ></textarea>
          <button
            @click="handleChatSubmit"
            :disabled="!chatMessage?.trim()"
            :class="[
              'absolute bottom-3 right-1.5 w-8 h-8 rounded-lg flex items-center justify-center transition-colors',
              chatMessage?.trim() ? 'bg-[#ED5A29] text-white hover:bg-[#E54D1F]' : 'bg-[#E3E5E8] text-[#8F97A4] cursor-default'
            ]"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Form before submit -->
    <div v-else class="max-w-3xl mx-auto">
      <div class="mb-8 text-center">
        <h2 class="text-3xl font-semibold text-[#23262A]">Hi Csaba, what do you want to do?</h2>
      </div>

      <!-- Input area -->
      <div class="relative">
        <textarea
          ref="textareaRef"
          v-model="localData.message"
          rows="4"
          @keydown.enter.exact.prevent="handleSubmit"
          class="w-full px-4 py-3 border border-[#D5D8DD] rounded-xl focus:ring-2 focus:ring-[#ED5A29] focus:border-transparent transition-colors text-[#23262A] h-28 resize-none pr-12"
          :placeholder="currentPlaceholder"
        ></textarea>
        <button
          @click="handleSubmit"
          :disabled="!localData.message?.trim()"
          :class="[
            'absolute bottom-3 right-1.5 w-8 h-8 rounded-lg flex items-center justify-center transition-colors',
            localData.message?.trim() ? 'bg-[#ED5A29] text-white hover:bg-[#E54D1F]' : 'bg-[#E3E5E8] text-[#8F97A4] cursor-default'
          ]"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>

      <!-- Example prompts -->
      <div class="mt-2 flex flex-wrap items-center justify-center gap-2">
        <span class="text-sm text-[#8F97A4]">Start with this:</span>
        <button
          v-for="example in examples"
          :key="example.label"
          @click="selectExample(example.prompt)"
          class="flex items-center gap-2 px-2 py-2 rounded-lg border border-[#E3E5E8] text-sm text-[#505763] hover:border-[#ED5A29] hover:bg-[#FFF9F6] transition-all"
        >
          <span class="text-[#ED5A29]" v-html="example.icon"></span>
          <span>{{ example.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, nextTick, onMounted, onUnmounted, computed } from 'vue'
import WebsiteScanAnimation from '../illustrations/WebsiteScanAnimation.vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue', 'auto-next', 'skip-to-dashboard'])

const textareaRef = ref(null)
const chatTextareaRef = ref(null)
const submitted = ref(false)
const submittedMessage = ref('')
const chatMessage = ref('')
const currentPlaceholderIndex = ref(0)
const displayedText = ref('')
const isTyping = ref(true)
let typingTimeout = null

const placeholderSuggestions = [
  'how to collect more emails',
  'to create a welcome popup',
  'for cart abandonment tips',
  'to boost conversions',
  'about exit-intent popups'
]

const currentPlaceholder = computed(() => {
  return `Ask OptiMonk ${displayedText.value}`
})

const typeText = (text, index = 0) => {
  if (index <= text.length) {
    displayedText.value = text.slice(0, index)
    typingTimeout = setTimeout(() => typeText(text, index + 1), 50)
  } else {
    // Wait before erasing
    typingTimeout = setTimeout(() => eraseText(text, text.length), 2000)
  }
}

const eraseText = (text, index) => {
  if (index >= 0) {
    displayedText.value = text.slice(0, index)
    typingTimeout = setTimeout(() => eraseText(text, index - 1), 30)
  } else {
    // Move to next suggestion
    currentPlaceholderIndex.value = (currentPlaceholderIndex.value + 1) % placeholderSuggestions.length
    typingTimeout = setTimeout(() => {
      typeText(placeholderSuggestions[currentPlaceholderIndex.value] + '...')
    }, 300)
  }
}

onMounted(() => {
  typeText(placeholderSuggestions[0] + '...')
})

onUnmounted(() => {
  if (typingTimeout) {
    clearTimeout(typingTimeout)
  }
})

const localData = reactive({
  message: props.modelValue.message || ''
})

const examples = [
  {
    label: 'Create a popup',
    prompt: 'I want to create a popup',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>'
  },
  {
    label: 'Connect OptiMonk',
    prompt: 'Help me connect OptiMonk to my website',
    icon: '<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19,6H16V3a1,1,0,0,0-2,0V6H10V3A1,1,0,0,0,8,3V6H5A1,1,0,0,0,5,8H6v5a1,1,0,0,0,.29.71L9,16.41V21a1,1,0,0,0,2,0V17h2v4a1,1,0,0,0,2,0V16.41l2.71-2.7A1,1,0,0,0,18,13V8h1a1,1,0,0,0,0-2Zm-3,6.59L13.59,15H10.41L8,12.59V8h8ZM11,13h2a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Z"/></svg>'
  }
]

const selectExample = (prompt) => {
  localData.message = prompt
  nextTick(() => {
    if (textareaRef.value) {
      textareaRef.value.focus()
    }
  })
}

const handleSubmit = () => {
  if (localData.message?.trim()) {
    submittedMessage.value = localData.message.trim()
    emit('update:modelValue', { message: submittedMessage.value })
    submitted.value = true
  }
}

const handleChatSubmit = () => {
  if (chatMessage.value?.trim()) {
    // For now, just log the message - can be extended later
    console.log('Chat message:', chatMessage.value.trim())
    chatMessage.value = ''
  }
}
</script>
