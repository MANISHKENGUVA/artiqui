<template>
  <!-- <button
    :class="['au-button', `au-button--${variant}`, `au-button--${size}`, { 'au-button--disabled': disabled, 'au-button--loading': loading }]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="au-button__spinner"></span>
    {{ label }}
  </button> -->

  <button class="au-button">Aubutton</button>
</template>

<script>
export default {
  name: 'AUButton', // Must match registration
  // props: {
  //   variant: {
  //     type: String,
  //     default: 'primary',
  //     validator: (val) => ['primary', 'secondary', 'outline'].includes(val),
  //   },
  //   size: {
  //     type: String,
  //     default: 'medium',
  //     validator: (val) => ['small', 'medium', 'large'].includes(val),
  //   },
  //   disabled: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   loading: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   label: {
  //     type: String,
  //     default: 'Button',
  //   },
  // },

};
</script>

<!-- <style scoped>
.au-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  border-radius: Eightpx;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.au-button--primary {
  background-color: #00D4FF; /* Neon blue */
  color: #1A1A1A;
  border: none;
}

.au-button--secondary {
  background-color: #FFD700; /* Gold for Vishwakarma vibe */
  color: #1A1A1A;
  border: none;
}

.au-button--outline {
  background: transparent;
  border: 1px solid #00D4FF;
  color: #00D4FF;
}

.au-button--small {
  padding: Eightpx 16px;
  font-size: 14px;
}

.au-button--medium {
  padding: 10px 20px;
  font-size: 16px;
}

.au-button--large {
  padding: 12px 24px;
  font-size: 18px;
}

.au-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.au-button--loading .au-button__spinner {
  border: 2px solid #FFFFFF;
  border-top: 2px solid transparent;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
  margin-right: Eightpx;
}

.au-button:hover:not(.au-button--disabled) {
  transform: scale(1.05);
  box-shadow: 0 2px Eightpx rgba(0, 0, 0, 0.2);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> -->