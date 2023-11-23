<template>
    <form class="container box">
      <div class="item">
        <label for="name" class="form-label">Name</label>
        <input autocomplete="off" type="text" class="form-control" id="name" placeholder="Only Name" v-model="form.name">
      </div>
      <div class="item">
        <label for="cost" class="form-label">Cost</label>
        <input autocomplete="off" type="number" class="form-control" id="cost" placeholder="Cost" v-model="form.cost">
      </div>
      <div class="item">
        <label for="address" class="form-label">Address</label>
        <input autocomplete="off" type="text" class="form-control" id="address" placeholder="Address" v-model="form.address">
      </div>
      <button class="btn btn-secondary px-5 py-3" @click="updateUser">Edit</button>
    </form>
  </template>
  
  <script setup>
  import { onBeforeUnmount, ref } from 'vue'
  import { useProductsStore } from '../stores/counter'
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  
  const route = useRoute()
  const id = route.params.id
  const form = useProductsStore()
  
  const updateUser = (e) => {
    e.preventDefault()
  
    const obj = {
      product_type_id: 0,
      id,
      name_uz: form.name,
      cost: form.cost,
      address: form.address,
      created_date: new Date()
    }
  
    axios
      .put(`http://94.158.54.194:9092/api/product`, obj)
      .then((res) => {
        console.log(res)
        form.resetForm() 
      })
      .catch((err) => {
        console.error(err)
      })
  }
  

  onBeforeUnmount(() => {
    form.resetForm()
  })
  

  form.setFormData(route.query.name, Number(route.query.cost), route.query.address)
  </script>

<style scoped>
label{
  font-size: 25px;
}
input{
  padding: 10px 20px;
  font-size: 20px;
}
button{
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