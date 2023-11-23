<template>
  <div class="container">
    <table class="table rounded" width="100%" border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Cost</th>
          <th>Address</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products.data" :key="index" class="item">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name_uz }}</td>
          <td>{{ item.cost }}</td>
          <td>{{ item.address }}</td>
          <td><button class="btn btn-primary" @click="passUpdatePage(item?.id)">Edit</button></td>
          <td><button class="btn btn-danger" @click="confirmDelete(item?.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/counter'

const products = useProductsStore()
const router = useRouter()

function confirmDelete(id: number) {
  const isConfirmed = window.confirm(`Ishonchingiz komilmi o'chirgani`)
  if (isConfirmed) {
    products.deleteItem(id)
  }
}

function passUpdatePage(id:number) {
  const singleData = products.data.find((el) => el.id === id)
  router.push({
    path: `update/${id}`,
    query: {
      name: singleData?.name_uz,
      cost: singleData?.cost,
      address: singleData?.address,
    },
  })
}

onMounted(() => {
  products.fetchData()
})
</script>

<style>
td {
  font-size: 20px;
  text-align: start;
  padding: 10px;
  text-align: center;
}

th {
  text-transform: uppercase;
  text-align: center;

}
.table{
  border-collapse: collapse;
}
tr th{
  padding: 10px 0;
}
tbody tr td .btn{
  width: 50%;
  padding: 10px 5px;
  font-size: 15px;
  font-weight: 700;
  background: rgb(190, 183, 183);
  outline: none;
  border: none;
  transition: 500ms;
  border-radius: 10px;
}
tbody tr td .btn:hover{
  color: white;
  background: rgb(40, 37, 37);
}
</style>