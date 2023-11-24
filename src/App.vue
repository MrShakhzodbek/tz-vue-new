

<template>
  <header class="container">
    <div class="wrapper ">
      <nav class="navbar">
        <q-btn color="positive" label="home" icon="home" @click="goToHome"/>
        <q-btn color="positive" label="create user" icon="create" @click="goToCreateUser"/>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push({ path: '/' })
}

const goToCreateUser = () => {
  router.push({ path: '/create' })
}

</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800;900&display=swap);

body {
  font-family: 'Poppins', sans-serif;

}

.navbar {
  display: flex;
  gap: 50px;
  margin-bottom: 50px;
  
}

.navbar a {
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  font-size: 20px;
  cursor: pointer;
  /* background: rgb(92, 92, 174); */
  color: white;
  padding: 10px 15px;
  width: 100%;
  height: 100%;
  transition: 500ms;
  font-weight: 700;
}
.navbar a:hover {
  color: black;
  /* background: yellowgreen; */
}</style>