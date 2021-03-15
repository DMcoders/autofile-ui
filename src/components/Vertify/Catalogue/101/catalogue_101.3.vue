<template>
  <div>
    <div>
      <label for='input-one'>
        Category of vehicle：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {cov101_3: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.3",
    props: ['value']
  }
</script>
