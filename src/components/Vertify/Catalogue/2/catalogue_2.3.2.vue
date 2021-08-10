<template>
  <div>
    <label for='input-one'>
      Track of all other axles：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {toaoa: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.3.2"
  }
</script>
