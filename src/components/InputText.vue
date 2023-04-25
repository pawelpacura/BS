<template>
  <input type="text" class="input-text" v-bind="$attrs" v-on="$listeners">
</template>

<script>
export default {
  name: 'InputText'
}
</script>

<style scoped>
  .input-text {
    border-radius: 8px;
    padding: 8px 16px 8px 16px;
  }
</style>
