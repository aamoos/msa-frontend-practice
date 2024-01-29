<template>
  <a-list item-layout="horizontal" :data-source="dataSource">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta :description="item.body">
          <template #title>
            <a href="https://www.antdv.com/">{{ item.title }}</a>
          </template>
          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>
<script setup>
import { inject, ref, onMounted } from 'vue';
const axios = inject('axios');
const dataSource = ref([]);

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

</script>