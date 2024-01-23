<template>
    <div>
        <a-typography>
            <a-typography-title :level="2">count data bind</a-typography-title>
            <a-typography-paragraph>
                <a-space wrap>
                    <a-button type="text">count : {{ count }}</a-button>
                    <a-button block @click="increase">증가</a-button>
                    <a-button danger block @click="decrease">감소</a-button>
                </a-space>
            </a-typography-paragraph>
        </a-typography>
        
        <a-typography>
            <a-typography-title :level="2">name value data bind</a-typography-title>
            <a-typography-paragraph>
                <a-space wrap>
                    <a-button type="text" @click="printName">{{ name }}</a-button>
                </a-space>
            </a-typography-paragraph>
        </a-typography>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    //버튼 증가, 감소 버튼 클릭시 count 출력
    const count = ref(0);
    const increase = () => {
        count.value++;
    };

    const decrease = () => {
        count.value--;
    };

    //버튼 클릭시 지정한 값 출력
    const name = ref("composition api");
    const printName = () => {
        alert(name.value);
    }
</script>