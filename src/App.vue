<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">vue3 practice</a-menu-item>
        <!-- <a-menu-item key="2">nav 2</a-menu-item> -->
        <!-- <a-menu-item key="3">nav 3</a-menu-item> -->
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            style="height: 100%"
          >
            <a-sub-menu key="sub1">
              <template #title>
                <span>
                  <user-outlined />
                  started
                </span>
              </template>
              <router-link to="/">
                <a-menu-item key="1">bind</a-menu-item>
              </router-link>
              <router-link to="/started/IfComponent">
                <a-menu-item key="2">v-if</a-menu-item>
              </router-link>
              <router-link to="/started/ForComponent">
                <a-menu-item key="3">v-for</a-menu-item>
              </router-link>
              <router-link to="/started/ClickComponent">
                <a-menu-item key="4">click</a-menu-item>
              </router-link>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <template #title>
                <span>
                  <laptop-outlined />
                  axios
                </span>
              </template>
              <router-link to="/axios/ListComponent">
                <a-menu-item key="5">list/update/delete</a-menu-item>
              </router-link>
              <router-link to="/axios/InsertComponent">
                <a-menu-item key="6">insert</a-menu-item>
              </router-link>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <template #title>
                <span>
                  <notification-outlined />
                  subnav 3
                </span>
              </template>
              <a-menu-item key="9">option9</a-menu-item>
              <a-menu-item key="10">option10</a-menu-item>
              <a-menu-item key="11">option11</a-menu-item>
              <a-menu-item key="12">option12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script setup>
import { ref } from 'vue';
const selectedKeys1 = ref(['1']);
const selectedKeys2 = ref(['1']);
const openKeys = ref(['sub1']);

</script>
<style scoped>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>

