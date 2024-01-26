<template>
  <a-list item-layout="horizontal" :data-source="data">
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
const data = [
  {
    title: 'Ant Design Title 1',
    body: 'Ant Design Body 1',
  },
  {
    title: 'Ant Design Title 2',
    body: 'Ant Design Body 2',
  },
  {
    title: 'Ant Design Title 3',
    body: 'Ant Design Body 3',
  },
  {
    title: 'Ant Design Title 4',
    body: 'Ant Design Body 4',
  },
];
</script>