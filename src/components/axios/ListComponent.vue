<template>
  <a-list item-layout="horizontal" :data-source="dataSource">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta :description="item.body">
          <template #title>
            <a href="https://www.antdv.com/">{{ item.title }}</a>
            <a-space wrap class="button-container">
              <a-button type="dashed" block @click="updateItem(item)">Update</a-button>
              <a-button danger block @click="deleteItem(item)">Delete</a-button>
            </a-space>
          </template>
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<style>
.button-container {
  display: flex;
  justify-content: flex-end;
}
</style>

<script setup>
import { inject, ref, onMounted } from 'vue';
const axios = inject('axios');
const dataSource = ref([]);

//select
const fetchData = async () => {
    console.log(axios);
    try {
        const response = await axios.get('/api/v1/axios/list');
        dataSource.value = response.data.data;
        // Handle the response here
    } catch (error) {
        console.error('Error occurred while select:', error);
    }
};

// Call fetchData when the component is mounted
onMounted(fetchData);

//update


//delete
const deleteItem = async (item) => {
  try {
    await axios.delete(`/api/v1/axios/delete/${item.id}`);
    dataSource.value = dataSource.value.filter(i => i.id !== item.id);
  } catch (error) {
  console.error('Error occurred while deleting item:', error);
  }
};

</script>