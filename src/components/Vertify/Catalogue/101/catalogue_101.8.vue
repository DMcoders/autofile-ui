<template>
  <div>
    <div>
      <label for='input-one'>
        Manufacturer：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {manufacturer101_8: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.8",
    props: ['value']
  }
</script>
