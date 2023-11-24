<!-- <q-table
      class="table rounded "
      rows-per-page-label="Rows per page"
      :rows="products.data"
      row-key="id"
    >
      <q-tr>
        <q-th key="id" label="Id" align="left" />
        <q-th key="name_uz" label="Name" />
        <q-th key="cost" label="Cost" />
        <q-th key="address" label="Address" />
        <q-th key="edit" label="Edit" />
        <q-th key="delete" label="Delete" />
      </q-tr>
      <template v-slot:body-cell-edit="props">
        <q-td :props="props">
          <q-btn
            color="primary"
            label="Edit"
            icon="edit"
            @click="passUpdatePage(props.row.id)"
          />
        </q-td>
      </template>
      <template v-slot:body-cell-delete="props">
        <q-td :props="props">
          <q-btn
            color="negative"
            label="Delete"
            icon="delete"
            @click="confirmDelete(props.row.id)"
          />
        </q-td>
      </template>
    </q-table> -->