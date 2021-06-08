<template>
  <div>
    <label for='input-one'>
      Level adjustment：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {ladjustment: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.2.1"
  }
</script>
