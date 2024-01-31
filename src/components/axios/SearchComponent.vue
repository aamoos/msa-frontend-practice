<template>
  <h2>목록</h2>
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
  <div class="center-search">
    <a-space direction="vertical">
      <a-input-search
        v-model:value="value"
        placeholder="input search text"
        style="width: 200px"
        @search="onSearch"
      />
    </a-space>
  </div>
</template>

<style>
.button-container {
  display: flex;
  justify-content: flex-end;
}

.center-search {
  display: flex;
  justify-content: center;
}
</style>

<script setup>
import { inject, ref, onMounted } from 'vue';
const axios = inject('$axios');
//const router = inject('router');
const dataSource = ref([]);

//select
const onSearch = async (searchValue) => {
    alert(searchValue);
    try {
        const response = await axios.get('/api/v1/axios/search', {
            params: {
                title: searchValue
            }
        });
        dataSource.value = response.data.data;
        console.log(response);
        // Handle the response here
    } catch (error) {
        console.error('Error occurred while select:', error);
    }
};

// Call fetchData when the component is mounted
onMounted(onSearch);

</script>