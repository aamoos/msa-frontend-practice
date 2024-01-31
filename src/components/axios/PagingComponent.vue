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
  <a-pagination class="paging-container" v-model:current="current" :total="total" show-less-items @change="onPageChange" />
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

.paging-container {
  display: flex;
  justify-content: center;
}
</style>

<script setup>
import { inject, ref, onMounted } from 'vue';
const axios = inject('$axios');
//const router = inject('router');
const dataSource = ref([]);
const searchValue = ref('');
const current = ref(1);
const pageSize = 10; // 페이지당 항목 수
const total = ref(0);

//select
const onSearch = async (searchValue) => {
    try {
        const response = await axios.get('/api/v1/axios/paging', {
            params: {
                title: searchValue,
                page: current.value,
                size: pageSize
            }
        });
        console.log("=================")
        console.log(response);
        console.log("=================")
        dataSource.value = response.data.data.content;
        total.value = response.data.data.totalElements;
        // Handle the response here
    } catch (error) {
        console.error('Error occurred while select:', error);
    }
};

// 페이지 변경 시 호출되는 함수
const onPageChange = (page) => {
  current.value = page;
  onSearch(searchValue.value);
};

// 현재 페이지에 따라 표시할 데이터 계산
const currentData = ref([]);
const calculateCurrentData = () => {
  const startIndex = (current.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  currentData.value = dataSource.value.slice(startIndex, endIndex);
};

// Call fetchData when the component is mounted
onMounted(() => {
    calculateCurrentData();
    onSearch(searchValue.value); // Call onSearch with initial value
});

</script>