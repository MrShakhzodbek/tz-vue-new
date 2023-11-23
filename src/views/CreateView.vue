<template>
  <div class="container about">
    <form class="box">
      <div class="item">
        <label for="name" class="form-label">Name</label> <br>
        <input autocomplete="off" type="text" class="form-control" id="name" placeholder="Only Name" v-model="name">
      </div>
      <div class="item">
        <label for="name" class="form-label">Cost</label> <br>
        <input autocomplete="off" type="number" class="form-control" id="name" placeholder="Only Name" v-model="cost">
      </div>
      <div class="item">
        <label for="name" class="form-label">Name</label> <br>
        <input autocomplete="off" type="text" class="form-control" id="name" placeholder="Only Name" v-model="adress">
      </div>
      <button class="btn btn-secondary" @click="createUser">CREATE</button>

    </form>
  </div>
</template>
  
<script setup>
import axios from 'axios'
import { ref } from 'vue'

const name = ref('')
const cost = ref(null)
const adress = ref('')

function createUser(e) {
  e.preventDefault()

  const obj = {
    product_type_id: 0,
    name_uz: name.value,
    cost: cost.value,
    address: adress.value,
    created_date: new Date()
  }
  axios
    .post('http://94.158.54.194:9092/api/product', obj)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>
  
<style scoped>
label {
  font-size: 25px;
}

input {
  padding: 10px 20px;
  font-size: 20px;
}

button {
  font-size: 18px;
  text-transform: uppercase;
  color: white;
  font-weight: 700;
}

.box {
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 10px;
}
.box .item{
  width: 100%;
}
.box .item input{
  width: 100%;
  margin-top: 10px;
}
.box button{
  width: 50%;
  padding: 10px 20px;
  color: black;
}
</style>