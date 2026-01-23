<template>
  <div class="w-full">
    <!-- Animation after submit -->
    <div v-if="submitted" class="h-[500px]">
      <WebsiteScanAnimation />
    </div>

    <!-- Form before submit -->
    <div v-else class="max-w-3xl mx-auto">
      <div class="mb-8 text-center">
        <h2 class="text-2xl font-semibold text-[#23262A]">Hi Attila, what do you want to do?</h2>
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
      <div class="mt-4 flex flex-wrap items-center justify-center gap-2">
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
import { reactive, ref, nextTick } from 'vue'
import WebsiteScanAnimation from '../illustrations/WebsiteScanAnimation.vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue', 'auto-next', 'skip-to-dashboard'])

const textareaRef = ref(null)
const submitted = ref(false)

const localData = reactive({
  message: props.modelValue.message || ''
})

const examples = [
  {
    label: 'Create a popup',
    prompt: 'Create a popup',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>'
  },
  {
    label: 'Install OptiMonk',
    prompt: 'Install OptiMonk',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>'
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
    submitted.value = true
  }
}
</script>
