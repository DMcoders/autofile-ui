<template>
  <div>
      <label for='input-one'>
        Drawing showing clearly the position of the tanks in the vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_109_3_2_3_1_3: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_109.3.2.3.1.3"
  }
</script>
