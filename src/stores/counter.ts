import { defineStore } from 'pinia'
import axios from 'axios'


export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    data: [] as any[], 
    name: '',
    cost: null as number | null,
    address: '',
  }),
  actions: {
    async fetchData() {
      try {
        const response = await axios.get('http://94.158.54.194:9092/api/product')
        this.data = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async deleteItem(id: number) {
      try {
        await axios.delete(`http://94.158.54.194:9092/api/product/${id}`)
        await this.fetchData()
      } catch (error) {
        console.error(error)
      }
    },
    setFormData(name: string, cost: number | null, address: string) {
      this.name = name
      this.cost = cost
      this.address = address
    },
    async createUser() {
      try {
        const obj = {
          product_type_id: 0,
          name_uz: this.name,
          cost: this.cost,
          address: this.address,
          created_date: new Date(),
        }
        await axios.post('http://94.158.54.194:9092/api/product', obj)
        this.resetForm()
      } catch (error) {
        console.error(error)
      }
    },
    resetForm() {
      this.name = ''
      this.cost = null
      this.address = ''
    },
  },
})