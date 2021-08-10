<template>
  <div>
    <label for='input-one'>
      Maximum distance between the axis of the fifth wheel king pin and any point on the front of the semi- trailer:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_2_1_2: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.2.1.2"
  }
</script>
