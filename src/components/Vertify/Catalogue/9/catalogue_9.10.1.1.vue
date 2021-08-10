<template>
  <div>
    <label for='input-one'>
      Layout drawing or photographs showing the position of the attached sections or views:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_10_1_1: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.1.1"
  }
</script>
