<template>
   <div>
    <q-markup-table dark class="bg-8 table rounded ">
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
          <td><q-btn color="primary" label="Edit" icon="edit" @click="passUpdatePage(item?.id)" /></td>
          <td><q-btn color="negative" label="Delete" icon="delete" @click="confirmDelete(item?.id)" /></td>
        </tr>
      </tbody>
   
    </q-markup-table>
   </div>
  
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
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

function passUpdatePage(id: number) {
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

thead{
  background: rgb(16, 69, 226);
}
td {
  font-size: 20px;
  text-align: start;
  padding: 10px;
  text-align: center;
}

tr th {
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  
}

.table {
  border-collapse: collapse;
}

tr th {
  padding: 10px 0;
}

tbody tr td .btn {
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

tbody tr td .btn:hover {
  color: white;
  background: rgb(40, 37, 37);
}
</style>