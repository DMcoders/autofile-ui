<template>
  <div>
    <label for='input-one'>
      Track of each steered axle：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {toesa: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.3.1"
  }
</script>
