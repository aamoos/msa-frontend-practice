<template>
 <h2>수정</h2>
  <a-form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-item ref="name" label="title" name="name">
      <a-input v-model:value="formState.name" />
    </a-form-item>
   
    <a-form-item label="body" name="desc">
      <a-textarea v-model:value="formState.desc" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { reactive, ref, toRaw, inject } from 'vue';
const axios = inject('$axios');
const router = inject('router');
const formRef = ref();
const labelCol = {
  span: 5,
};
const wrapperCol = {
  span: 13,
};
const formState = reactive({
  name: '',
  desc: '',
});
const rules = {
  name: [
    {
      required: true,
      message: '제목을 입력해주세요.',
      trigger: 'change',
    },
    {
      min: 1,
      max: 20,
      message: '제목은 20자 이내로 사용할수 있습니다.',
      trigger: 'blur',
    },
  ],
  desc: [
    {
      required: true,
      message: '내용을 입력해주세요.',
      trigger: 'blur',
    },
  ],
};
const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
        console.log('values', formState, toRaw(formState));
        save();
    })
    .catch(error => {
      console.log('error', error);
    });
};
const resetForm = () => {
  formRef.value.resetFields();
};

// Save function
const save = async () => {
    console.log(axios);
    try {
        const response = await axios.put('/api/v1/axios/update', {
            title: formState.name,
            body: formState.desc,
            id: router.currentRoute.value.params.id
        });
        console.log(response);
        alert("수정되었습니다.");
         router.push("/axios/ListComponent");
        // Handle the response here
    } catch (error) {
        console.error('Error occurred while saving:', error);
    }
};

</script>