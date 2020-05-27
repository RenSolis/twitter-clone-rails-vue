<template>
  <div class="py-2 px-6">
    <label
      ref="container"
      class="block input-border bg-blue-19 rounded-sm"
    >
      <div class="py-1 px-2">
        <div class="pt-1 font-normal text-gray-88 text-sm leading-tight text-left">
          <span ref="label">{{ label }}</span>
        </div>
        <div class="overflow-hidden">
          <div class="text-lg">
            <input
              v-model="inputValue"
              class="appearance-none w-full bg-transparent text-white"
              :type="type"
              @focus="focusInput"
              @blur="blurInput"
              @input="$emit('sendInput', inputValue)"
            />
          </div>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    focusInput() {
      this.$refs.label.style.color = '#1da0f2';
      this.$refs.container.style.borderColor = '#1da0f2';
    },
    blurInput() {
      this.$refs.label.removeAttribute('style');
      this.$refs.container.removeAttribute('style');
    },
  },
};
</script>
