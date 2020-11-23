<template>
  <div>
    <label for='input-one'>
      Vehicles with three or more axles：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {vwtoma: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.1.2"
  }
</script>
