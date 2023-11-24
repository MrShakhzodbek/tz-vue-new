<!-- <div class="container">
    <q-table class="table rounded" width="100%" border="1">
      <q-head>
        <q-tr>
          <q-th>Id</q-th>
          <q-th>Name</q-th>
          <q-th>Cost</q-th>
          <q-th>Address</q-th>
          <q-th>Edit</q-th>
          <q-th>Delete</q-th>
        </q-tr>
      </q-head>
      <q-body>
        <q-re v-for="(item, index) in products.data" :key="index" class="item">
          <q-th scope="row">{{ item.id }}</q-th>
          <q-td>{{ item.name_uz }}</q-td>
          <q-td>{{ item.cost }}</q-td>
          <q-td>{{ item.address }}</q-td>
          <q-td><q-btn label="Edit" icon="edit"/></q-td>
          <q-td><q-btn>Delete</q-btn></q-td>
        </q-re>
      </q-body>
    </q-table>

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
  </div> -->