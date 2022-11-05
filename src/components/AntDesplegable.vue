<template>
    <div class="demo-dropdown-wrap">
      <a-dropdown>
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="1">
                <star-two-tone two-tone-color="#ebb92f"/>
              yellow
            </a-menu-item>
            <a-menu-item key="2">
                <star-two-tone two-tone-color="#0a0a4a" />
              black
            </a-menu-item>
            <a-menu-item key="3">
                <star-two-tone two-tone-color="#eb2f96" />
              random
            </a-menu-item>
          </a-menu>
        </template>

        <a-button>
          Color!!
          <DownOutlined />
        </a-button>
      </a-dropdown>
    </div>
  </template>
  <script setup>
  import { StarTwoTone, DownOutlined } from '@ant-design/icons-vue';
      const handleButtonClick = e => {
        console.log('click left button', e);
      };

      const handleMenuClick = e => {
        console.log('click', e);
      };

  </script>
  <style lang="less" scoped>
  .demo-dropdown-wrap :deep(.ant-dropdown-button) {
    margin-right: 8px;
    margin-bottom: 8px;
  }
  </style>
