<template>
    <div>
        <a-typography>
            <a-typography-title :level="2">v-for (ant-desingn에서는 data-source를 사용함)</a-typography-title>
            <a-typography-paragraph>
                <a-list size="large" bordered :data-source="data">
                    <template #renderItem="{ item }">
                        <a-list-item>{{ item }}</a-list-item>
                    </template>
                </a-list>
            </a-typography-paragraph>
        </a-typography>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    //v-for example
    const data = ref(['Item 1', 'Item 2', 'Item 3']);
</script>