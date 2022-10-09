<template>
  <div>axios</div>
</template>

<script setup lang="ts">
import axios from '../utils/axios';

axios
  .get('/users/XPoet')
  .then((res) => {
    console.log('res: ', res);
  })
  .catch((err) => {
    console.log('err: ', err);
  });
</script>

<style lang="scss"></style>
