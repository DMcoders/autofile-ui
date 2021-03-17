<template>
  <div>
    <label for='input-one'>
      Body style:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {v101_75_3: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.75.3"
  }
</script>
