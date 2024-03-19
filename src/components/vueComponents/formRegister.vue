<script setup lang="ts">



import { ref } from "vue";
const form = ref({
  name: 'hola',
  email: 'test@test.cl',
  password: '123'
});

const responseMessage = ref<string>();

async function submit() {
  try {


    const response = await fetch('api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    });


    if (response.status === 200) {  
      responseMessage.value = 'Usuario creado correctamente';
      window.location.assign(response.url);

    } else {

      responseMessage.value = 'Error al crear el usuario';

    }


  } catch (error) {

  }

}
</script>

<template>
  <form @submit.prevent="submit">
    <label>
      Nombre
      <input type="text" id="name" name="name" v-model="form.name" required />
    </label>
    <label>
      Correo electrónico
      <input type="email" id="email" name="email" v-model="form.email" required />
    </label>
    <label for="password">Contraseña
      <input type="password" name="password" id="password" v-model="form.password" required />
    </label>
    <button>Enviar</button>
    <p v-if="responseMessage">{{ responseMessage }}</p>
  </form>
</template>