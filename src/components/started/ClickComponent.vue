<template>
    <div>
        <a-typography>
            <a-typography-title :level="2">button click event</a-typography-title>
            <a-typography-paragraph>
                <a-space wrap>
                    <a-button danger block @click="clickBtn">클릭 이벤트</a-button>
                </a-space>
            </a-typography-paragraph>
        </a-typography>
    </div>
</template>

<script setup>
     const clickBtn = () => {
        alert("클릭이벤트!");
     }
</script>