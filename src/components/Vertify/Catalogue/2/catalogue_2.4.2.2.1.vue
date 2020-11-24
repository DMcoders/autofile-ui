<template>
  <div>
    <label for='input-one'>
      Thickness of the walls (in the case of vehicles designed for controlled-temperature carriage of goods):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {totwalls: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.2.2.1"
  }
</script>
