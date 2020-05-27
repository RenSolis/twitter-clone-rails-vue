<template>
  <div class="max-w-xl text-center mt-10 mx-auto">
    <svg
      class="w-10 mx-auto text-white fill-current"
      viewBox="0 0 24 24"
    >
      <g>
        <!-- eslint-disable max-len -->
        <path
          d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
        </path>
      </g>
    </svg>

    <h1 class="text-white text-2xl font-bold mt-8 mb-3">Iniciar sesión en Twitter</h1>

    <form class="w-full" @submit.prevent="submitLogin">
      <div class="flex flex-col">
        <custom-input
          type="email"
          label="Teléfono, correo o usuario"
          @sendInput="data => email = data"
        />

        <custom-input
          type="password"
          label="Contraseña"
          @sendInput="data => password = data"
        />

        <div class="py-2 px-6">
          <div
            class="h-12 bg-light-blue rounded-full"
            :class="{ 'opacity-50': disabled }"
          >
            <button
              class="font-bold text-white text-sm h-full w-full leading-10"
              role="button"
              :disabled="disabled"
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </form>

    <div class="mt-6 text-sm flex justify-center items-center">
      <router-link
        class="text-link hover:underline"
        to="/account/begin_password_reset"
      >
        ¿Olvidaste tu contraseña?
      </router-link>

      <span class="text-gray-88 block w-3 h-5 leading-3">.</span>

      <router-link
        class="text-link hover:underline"
        to="/i/flow/signup"
      >
        Regístrate en Twitter
      </router-link>
    </div>
  </div>
</template>

<script>
import CustomInput from '../atoms/CustomInput/input.vue';

export default {
  name: 'Login',
  components: { CustomInput },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async submitLogin() {
      try {
        const response = await this.$http.plain.post('/signin', {
          email: this.email,
          password: this.password,
        });
        console.log('response', response);
      } catch (error) {
        console.log('error', error);
      }
    },
  },
  computed: {
    disabled() {
      return !(this.email && this.password);
    },
  },
};
</script>
