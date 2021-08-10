<template>
  <div>
    <label for='input-one'>
      Distance between the axis of the fifth wheel kingpin and the rearmost end of the semi-trailer:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_2_1_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.2.1.1"
  }
</script>
