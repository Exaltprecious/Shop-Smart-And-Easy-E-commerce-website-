<template>
  <div>
    <h1>Product Categories</h1>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ['Electronics', 'Clothing', 'Books'],
    };
  },
};
</script>
