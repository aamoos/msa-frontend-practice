<template>
    <div>
        <a-typography>
            <a-typography-title :level="2">button show/hide</a-typography-title>
            <a-typography-paragraph>
                <a-space wrap>
                    <a-button type="text" v-if="showMessage">버튼</a-button>
                    <a-button block @click="hideMessageBtn">버튼 숨기기</a-button>
                    <a-button danger block @click="showMessageBtn">버튼 보이기</a-button>
                </a-space>
            </a-typography-paragraph>
        </a-typography>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    //버튼 v-if example
    const showMessage = ref(true);

     const hideMessageBtn = () => {
        showMessage.value = false;
     }

      const showMessageBtn = () => {
        showMessage.value = true;
     }

</script>