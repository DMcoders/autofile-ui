<template>
  <div>
    <label for='input-one'>
      Maximum power (kW):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_4_5_4: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.5.4"
  }
</script>
