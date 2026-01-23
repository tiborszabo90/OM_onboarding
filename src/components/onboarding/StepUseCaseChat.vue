<template>
  <div class="flex flex-col h-full">
    <div class="mb-8">
      <h2 class="text-xl font-semibold text-[#23262A] mb-3">Create your first popup</h2>
      <p class="text-base text-[#8F97A4] font-light">
        Describe your goal and we'll help you create the perfect popup.
      </p>
    </div>

    <!-- Input area -->
    <div class="relative">
      <textarea
        ref="textareaRef"
        v-model="localData.message"
        rows="3"
        @input="autoResize"
        @keydown.enter.exact.prevent="handleSubmit"
        class="w-full px-3 py-2.5 border border-[#D5D8DD] rounded-xl focus:ring-2 focus:ring-[#ED5A29] focus:border-transparent transition-colors text-[#23262A] min-h-18 resize-none pr-12"
        placeholder="Describe your popup goal..."
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
    <div class="mt-4 flex flex-wrap items-center gap-2">
      <span class="text-sm text-[#8F97A4]">Try something like:</span>
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

    <!-- Skip link -->
    <div class="fixed top-8 right-8 lg:right-16 z-50">
      <button
        @click="handleSkip"
        class="btn-text text-sm text-[#8F97A4] hover:text-[#505763] transition-colors"
      >
        Skip to dashboard
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, nextTick } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue', 'auto-next', 'skip-to-dashboard'])

const textareaRef = ref(null)

const localData = reactive({
  message: props.modelValue.message || ''
})

const examples = [
  {
    label: 'Email list building',
    prompt: 'Collect emails from visitors before they leave',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>'
  },
  {
    label: 'Collect feedback',
    prompt: 'Get feedback from customers after purchase',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>'
  }
]

const selectExample = (prompt) => {
  localData.message = prompt
  nextTick(() => {
    if (textareaRef.value) {
      textareaRef.value.focus()
      autoResize()
    }
  })
}

const autoResize = () => {
  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
    textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px'
  }
}

const handleSubmit = () => {
  if (localData.message?.trim()) {
    emit('update:modelValue', { message: localData.message.trim() })
    emit('auto-next')
  }
}

const handleSkip = () => {
  emit('update:modelValue', { skipped: true })
  emit('skip-to-dashboard')
}
</script>
